"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { X, Upload, Plus, Video, Trash2 } from "lucide-react";
import { useToast } from "@/src/hooks/use-toast";
import { uploadCourses } from "@/src/api/course";
import { compressImage, uploadImage } from "@/src/lib/image";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group";

// Define schema for a video
const videoSchema = z.object({
  title: z.string().min(1, "Video title is required"),
  description: z.string().optional(),
  videoFile: z.any().optional(), // This will hold the File object
  videoUrl: z.string().optional(), // This will hold the URL after upload
});

// Define schema for a section
const sectionSchema = z.object({
  title: z.string().min(1, "Section title is required"),
  videos: z.array(videoSchema).optional(),
});

// Validation schema for the entire course form
const courseSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters").max(100, "Title must be at most 100 characters"),
  description: z.string().min(10, "Description must be at least 10 characters").max(1000, "Description must be at most 1000 characters"),
  price: z.number().min(0, "Price cannot be negative"),
  category: z.string().min(1, "Category is required"),
  level: z.string().min(1, "Level is required"),
  thumbnail: z.any().optional(), // File object
  tags: z.array(z.string()).min(1, "At least one tag is required"),
  sections: z.array(sectionSchema).optional(), // Array of sections
});

type CourseFormData = z.infer<typeof courseSchema>;

const courseCategories = [
  "Web Development",
  "Mobile Development",
  "Data Science",
  "Machine Learning",
  "DevOps",
  "Cybersecurity",
  "UI/UX Design",
  "Digital Marketing",
  "Business",
  "Photography",
];

const courseLevels = ["Beginner", "Intermediate", "Advanced", "Expert"];

// Placeholder for video upload function
// You'll need to implement the actual video upload logic, similar to uploadImage
// This might involve services like AWS S3, Cloudinary, or a custom backend endpoint.
const uploadVideo = async (file: File, folder: string): Promise<string> => {
  console.log(`Uploading video ${file.name} to ${folder}...`);
  // Simulate API call
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`https://example.com/videos/${folder}/${file.name}`);
    }, 1500);
  });
};

const AdminCoursesPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const [courseMode, setCourseMode] = useState<"new" | "existing">("new");
  const [sections, setSections] = useState<
    { title: string; videos: { title: string; description: string; videoFile: File | null; videoUrl?: string }[] }[]
  >([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
    control, // Added for potential future use with nested forms (react-hook-form v7+)
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: { tags: [], sections: [] },
  });

  // Keep tags in sync with form state
  const watchedTags = watch("tags");
  React.useEffect(() => {
    setTags(watchedTags || []);
  }, [watchedTags]);

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue("thumbnail", file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setThumbnailPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const addTag = () => {
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      const newTags = [...tags, tagInput.trim()];
      setTags(newTags);
      setValue("tags", newTags);
      setTagInput("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    setValue("tags", updatedTags);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addTag();
    }
  };

  const addSection = () => {
    setSections([...sections, { title: "", videos: [] }]);
  };

  const updateSectionTitle = (index: number, title: string) => {
    const updatedSections = sections.map((section, i) =>
      i === index ? { ...section, title } : section
    );
    setSections(updatedSections);
    setValue("sections", updatedSections);
  };

  const removeSection = (index: number) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
    setValue("sections", updatedSections);
  };

  const addVideo = (sectionIndex: number) => {
    const updatedSections = sections.map((section, i) =>
      i === sectionIndex
        ? { ...section, videos: [...section.videos, { title: "", description: "", videoFile: null }] }
        : section
    );
    setSections(updatedSections);
    setValue("sections", updatedSections);
  };

  const updateVideoField = (
    sectionIndex: number,
    videoIndex: number,
    field: "title" | "description",
    value: string
  ) => {
    const updatedSections = sections.map((section, sIdx) =>
      sIdx === sectionIndex
        ? {
            ...section,
            videos: section.videos.map((video, vIdx) =>
              vIdx === videoIndex ? { ...video, [field]: value } : video
            ),
          }
        : section
    );
    setSections(updatedSections);
    setValue("sections", updatedSections);
  };

  const handleVideoFileChange = (
    sectionIndex: number,
    videoIndex: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files?.[0];
    if (file) {
      const updatedSections = sections.map((section, sIdx) =>
        sIdx === sectionIndex
          ? {
              ...section,
              videos: section.videos.map((video, vIdx) =>
                vIdx === videoIndex ? { ...video, videoFile: file } : video
              ),
            }
          : section
      );
      setSections(updatedSections);
      setValue("sections", updatedSections);
    }
  };

  const removeVideo = (sectionIndex: number, videoIndex: number) => {
    const updatedSections = sections.map((section, sIdx) =>
      sIdx === sectionIndex
        ? {
            ...section,
            videos: section.videos.filter((_, vIdx) => vIdx !== videoIndex),
          }
        : section
    );
    setSections(updatedSections);
    setValue("sections", updatedSections);
  };

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);

    try {
      let imageUrl = "";
      if (data.thumbnail) {
        const compressedImage = await compressImage(data.thumbnail);
        imageUrl = await uploadImage(compressedImage, "courses");
      }

      // Process sections and videos
      const processedSections = await Promise.all(
        sections.map(async (section) => {
          const processedVideos = await Promise.all(
            section.videos.map(async (video) => {
              let videoUrl = video.videoUrl;
              if (video.videoFile) {
                videoUrl = await uploadVideo(video.videoFile, "course-videos");
              }
              return {
                title: video.title.trim(),
                description: video.description?.trim(),
                videoUrl: videoUrl,
              };
            })
          );
          return {
            title: section.title.trim(),
            videos: processedVideos,
          };
        })
      );

      const payload = {
        title: data.title.trim(),
        description: data.description.trim(),
        price: data.price.toString(),
        category: data.category,
        level: data.level,
        tags: data.tags,
        thumbnail: imageUrl,
        sections: processedSections,
      };

      console.log("Submitting payload:", payload); // For debugging
      await uploadCourses(payload);

      toast({
        title: "Success!",
        description: "Course created successfully",
      });

      reset();
      setTags([]);
      setThumbnailPreview(null);
      setTagInput("");
      setSections([]); // Clear sections state
    } catch (error) {
      console.error("Upload failed:", error);
      toast({
        title: "Error",
        description: "Failed to create course. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {/* Radio Buttons for New/Existing Course */}
      <div className="mb-6">
        <Label className="text-lg font-semibold mb-2 block">Course Management Mode</Label>
        <RadioGroup
          defaultValue="new"
          onValueChange={(value: "new" | "existing") => setCourseMode(value)}
          className="flex space-x-6"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="new" id="new-course" />
            <Label htmlFor="new-course">New Course</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="existing" id="existing-course" />
            <Label htmlFor="existing-course">Existing Course</Label>
          </div>
        </RadioGroup>
      </div>

      {/* Conditional Rendering based on courseMode */}
      {courseMode === "new" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Add New Course</CardTitle>
            <CardDescription>
              Create a new course by filling out the form below
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Title and Price */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="title">Course Title *</Label>
                  <Input id="title" {...register("title")} />
                  {errors.title && (
                    <p className="text-red-500 text-sm">{errors.title.message}</p>
                  )}
                </div>
                <div>
                  <Label htmlFor="price">Price ($) *</Label>
                  <Input
                    id="price"
                    type="number"
                    step="0.01"
                    {...register("price", { valueAsNumber: true })}
                  />
                  {errors.price && (
                    <p className="text-red-500 text-sm">{errors.price.message}</p>
                  )}
                </div>
              </div>

              {/* Category and Level */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label>Course Category *</Label>
                  <Select onValueChange={(value) => setValue("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent>
                      {courseCategories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.category && (
                    <p className="text-red-500 text-sm">
                      {errors.category.message}
                    </p>
                  )}
                </div>
                <div>
                  <Label>Course Level *</Label>
                  <Select onValueChange={(value) => setValue("level", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select level" />
                    <SelectContent>
                      {courseLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </SelectTrigger>
                  </Select>
                  {errors.level && (
                    <p className="text-red-500 text-sm">{errors.level.message}</p>
                  )}
                </div>
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="description">Course Description *</Label>
                <Textarea id="description" rows={4} {...register("description")} />
                {errors.description && (
                  <p className="text-red-500 text-sm">
                    {errors.description.message}
                  </p>
                )}
              </div>

              {/* Thumbnail */}
              <div>
                <Label htmlFor="thumbnail">Course Thumbnail</Label>
                <div className="flex items-center space-x-4">
                  <Input
                    id="thumbnail"
                    type="file"
                    accept="image/*"
                    onChange={handleThumbnailChange}
                    className="hidden"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => document.getElementById("thumbnail")?.click()}
                  >
                    <Upload className="h-4 w-4 mr-2" />
                    Upload Thumbnail
                  </Button>
                  {thumbnailPreview && (
                    <div className="relative w-24 h-24">
                      <img
                        src={thumbnailPreview}
                        alt="Thumbnail Preview"
                        className="w-full h-full object-cover rounded border"
                      />
                      <Button
                        type="button"
                        variant="destructive"
                        size="sm"
                        className="absolute -top-2 -right-2 h-6 w-6 p-0"
                        onClick={() => {
                          setThumbnailPreview(null);
                          setValue("thumbnail", undefined);
                        }}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div>
                <Label htmlFor="tags">Course Tags *</Label>
                <div className="flex gap-2 mb-2">
                  <Input
                    id="tags"
                    placeholder="Enter a tag"
                    value={tagInput}
                    onChange={(e) => setTagInput(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                  <Button type="button" variant="outline" onClick={addTag}>
                    <Plus className="h-4 w-4 mr-1" />
                    Add
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="flex items-center gap-1 pr-1"
                      variant="secondary"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:text-red-600"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </Badge>
                  ))}
                </div>
                {errors.tags && (
                  <p className="text-red-500 text-sm mt-1">{errors.tags.message}</p>
                )}
              </div>

              {/* --- Course Sections --- */}
              <hr className="my-6" />
              <h3 className="text-xl font-bold mb-4">Course Sections</h3>
              {sections.map((section, sectionIndex) => (
                <Card key={sectionIndex} className="mb-4 bg-gray-50 dark:bg-gray-800">
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-lg font-semibold">
                      Section {sectionIndex + 1}
                    </CardTitle>
                    <Button
                      type="button"
                      variant="destructive"
                      size="sm"
                      onClick={() => removeSection(sectionIndex)}
                    >
                      <Trash2 className="h-4 w-4 mr-2" />
                      Remove Section
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor={`section-title-${sectionIndex}`}>Section Title *</Label>
                        <Input
                          id={`section-title-${sectionIndex}`}
                          value={section.title}
                          onChange={(e) => updateSectionTitle(sectionIndex, e.target.value)}
                          placeholder="e.g., Introduction to Web Development"
                        />
                         {errors.sections?.[sectionIndex]?.title && (
                            <p className="text-red-500 text-sm mt-1">
                              {errors.sections[sectionIndex].title?.message}
                            </p>
                          )}
                      </div>

                      <h4 className="text-md font-semibold mt-4 mb-2">Videos in this Section</h4>
                      {section.videos.map((video, videoIndex) => (
                        <div key={videoIndex} className="border p-4 rounded-md space-y-3 bg-white dark:bg-gray-700">
                          <div className="flex items-center justify-between">
                            <h5 className="text-md font-medium">Video {videoIndex + 1}</h5>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVideo(sectionIndex, videoIndex)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                          <div>
                            <Label htmlFor={`video-title-${sectionIndex}-${videoIndex}`}>Video Title *</Label>
                            <Input
                              id={`video-title-${sectionIndex}-${videoIndex}`}
                              value={video.title}
                              onChange={(e) =>
                                updateVideoField(sectionIndex, videoIndex, "title", e.target.value)
                              }
                              placeholder="e.g., Setting up your environment"
                            />
                            {errors.sections?.[sectionIndex]?.videos?.[videoIndex]?.title && (
                              <p className="text-red-500 text-sm mt-1">
                                {errors.sections[sectionIndex].videos[videoIndex].title?.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <Label htmlFor={`video-description-${sectionIndex}-${videoIndex}`}>Video Description</Label>
                            <Textarea
                              id={`video-description-${sectionIndex}-${videoIndex}`}
                              rows={2}
                              value={video.description}
                              onChange={(e) =>
                                updateVideoField(sectionIndex, videoIndex, "description", e.target.value)
                              }
                              placeholder="Optional description for the video"
                            />
                          </div>
                          <div>
                            <Label htmlFor={`video-file-${sectionIndex}-${videoIndex}`}>Video File</Label>
                            <div className="flex items-center space-x-2">
                              <Input
                                id={`video-file-${sectionIndex}-${videoIndex}`}
                                type="file"
                                accept="video/*"
                                onChange={(e) =>
                                  handleVideoFileChange(sectionIndex, videoIndex, e)
                                }
                                className="hidden"
                              />
                              <Button
                                type="button"
                                variant="outline"
                                onClick={() =>
                                  document
                                    .getElementById(`video-file-${sectionIndex}-${videoIndex}`)
                                    ?.click()
                                }
                              >
                                <Video className="h-4 w-4 mr-2" />
                                {video.videoFile ? video.videoFile.name : "Upload Video"}
                              </Button>
                              {video.videoFile && (
                                <span className="text-sm text-gray-500">
                                  {video.videoFile.name}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => addVideo(sectionIndex)}
                      >
                        <Plus className="h-4 w-4 mr-2" />
                        Add Video
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button type="button" onClick={addSection} variant="outline">
                <Plus className="h-4 w-4 mr-2" />
                Add New Section
              </Button>
              {errors.sections && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.sections.message}
                </p>
              )}


              {/* --- Submit Button --- */}
              <Button type="submit" disabled={isSubmitting} className="mt-6">
                {isSubmitting ? "Submitting..." : "Create Course"}
              </Button>
            </form>
          </CardContent>
        </Card>
      )}

      {courseMode === "existing" && (
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Manage Existing Courses</CardTitle>
            <CardDescription>
              This section is for managing existing courses.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Functionality to list, edit, or delete existing courses would go here.
              Please select "New Course" above to add a new one.
            </p>
            {/* You would typically add a table, search bar, or other components here
                  to display and manage existing courses. */}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AdminCoursesPage;