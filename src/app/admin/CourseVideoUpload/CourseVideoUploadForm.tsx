// components/admin/CourseVideoUploadForm.tsx

"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/src/components/ui/card";
import { PlusCircle, MinusCircle, Upload, Film, Trash2 } from "lucide-react";
import { Label } from "@/src/components/ui/label";
import { useToast } from "@/src/components/ui/use-toast"; // Assuming you have a toast notification system

interface Video {
  id: string; // Unique ID for each video (can be generated client-side or by backend)
  title: string;
  description: string;
  file: File | null; // Stores the actual file object for upload
  previewUrl: string | null; // For displaying a preview of the video
}

interface Section {
  id: string; // Unique ID for each section
  title: string;
  videos: Video[];
}

interface CourseFormData {
  courseTitle: string;
  courseDescription: string;
  sections: Section[];
}

export default function CourseVideoUploadForm() {
  const [formData, setFormData] = useState<CourseFormData>({
    courseTitle: "",
    courseDescription: "",
    sections: [], // Initialize with an empty array of sections
  });
  const { toast } = useToast();

  const handleCourseTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, courseTitle: e.target.value }));
  };

  const handleCourseDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, courseDescription: e.target.value }));
  };

  const addSection = () => {
    setFormData((prev) => ({
      ...prev,
      sections: [
        ...prev.sections,
        { id: crypto.randomUUID(), title: "", videos: [] }, // Generate a unique ID for the new section
      ],
    }));
  };

  const removeSection = (sectionId: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.filter((section) => section.id !== sectionId),
    }));
  };

  const handleSectionTitleChange = (sectionId: string, e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId ? { ...section, title: e.target.value } : section
      ),
    }));
  };

  const addVideo = (sectionId: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              videos: [
                ...section.videos,
                { id: crypto.randomUUID(), title: "", description: "", file: null, previewUrl: null },
              ],
            }
          : section
      ),
    }));
  };

  const removeVideo = (sectionId: string, videoId: string) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              videos: section.videos.filter((video) => video.id !== videoId),
            }
          : section
      ),
    }));
  };

  const handleVideoTitleChange = (
    sectionId: string,
    videoId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              videos: section.videos.map((video) =>
                video.id === videoId ? { ...video, title: e.target.value } : video
              ),
            }
          : section
      ),
    }));
  };

  const handleVideoDescriptionChange = (
    sectionId: string,
    videoId: string,
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              videos: section.videos.map((video) =>
                video.id === videoId ? { ...video, description: e.target.value } : video
              ),
            }
          : section
      ),
    }));
  };

  const handleVideoFileChange = (
    sectionId: string,
    videoId: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = e.target.files ? e.target.files[0] : null;
    let previewUrl: string | null = null;
    if (file) {
      previewUrl = URL.createObjectURL(file); // Create a URL for video preview
    }

    setFormData((prev) => ({
      ...prev,
      sections: prev.sections.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              videos: section.videos.map((video) =>
                video.id === videoId ? { ...video, file, previewUrl } : video
              ),
            }
          : section
      ),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting form data:", formData);

    // Basic validation
    if (!formData.courseTitle.trim() || !formData.courseDescription.trim()) {
      toast({
        title: "Validation Error",
        description: "Course title and description are required.",
        variant: "destructive",
      });
      return;
    }

    if (formData.sections.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one section to the course.",
        variant: "destructive",
      });
      return;
    }

    for (const section of formData.sections) {
      if (!section.title.trim()) {
        toast({
          title: "Validation Error",
          description: `Section title is required for section ${section.id}.`,
          variant: "destructive",
        });
        return;
      }
      if (section.videos.length === 0) {
        toast({
          title: "Validation Error",
          description: `Please add at least one video to section "${section.title}".`,
          variant: "destructive",
        });
        return;
      }
      for (const video of section.videos) {
        if (!video.title.trim() || !video.file) {
          toast({
            title: "Validation Error",
            description: `Video title and file are required for a video in section "${section.title}".`,
            variant: "destructive",
          });
          return;
        }
      }
    }

    // --- API Integration (Conceptual) ---
    // Here you would typically:
    // 1. Create the course record in your backend, getting a course ID.
    // 2. Iterate through sections, creating each section and associating it with the course ID.
    // 3. For each video, upload the video file (e.g., to a cloud storage like AWS S3, Google Cloud Storage)
    //    and then create the video record in your backend with the file URL and other metadata.
    //
    // Example (pseudo-code for API calls):
    try {
      // 1. Create Course
      // const courseResponse = await createCourse({
      //   title: formData.courseTitle,
      //   description: formData.courseDescription,
      // });
      // const courseId = courseResponse.id;

      // 2. Iterate and Create Sections and Videos
      for (const section of formData.sections) {
        // const sectionResponse = await createSection({
        //   courseId: courseId,
        //   title: section.title,
        // });
        // const sectionId = sectionResponse.id;

        for (const video of section.videos) {
          // Upload video file
          // const videoUploadUrl = await uploadVideoFile(video.file); // Function to upload file to storage
          // await createVideo({
          //   sectionId: sectionId,
          //   title: video.title,
          //   description: video.description,
          //   videoUrl: videoUploadUrl,
          // });
        }
      }

      toast({
        title: "Success",
        description: "Course and videos uploaded successfully!",
        variant: "default",
      });
      // Optionally reset form
      setFormData({
        courseTitle: "",
        courseDescription: "",
        sections: [],
      });
    } catch (error) {
      console.error("Failed to upload course:", error);
      toast({
        title: "Error",
        description: "Failed to upload course. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Add New Course with Videos</h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Course Details */}
        <Card>
          <CardHeader>
            <CardTitle>Course Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="courseTitle">Course Title</Label>
              <Input
                id="courseTitle"
                value={formData.courseTitle}
                onChange={handleCourseTitleChange}
                placeholder="Enter course title"
                required
              />
            </div>
            <div>
              <Label htmlFor="courseDescription">Course Description</Label>
              <Textarea
                id="courseDescription"
                value={formData.courseDescription}
                onChange={handleCourseDescriptionChange}
                placeholder="Provide a detailed description of the course"
                rows={5}
                required
              />
            </div>
          </CardContent>
        </Card>

        {/* Sections */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle>Course Sections</CardTitle>
            <Button type="button" onClick={addSection} size="sm">
              <PlusCircle className="mr-2 h-4 w-4" /> Add Section
            </Button>
          </CardHeader>
          <CardContent className="space-y-6">
            {formData.sections.length === 0 && (
              <p className="text-muted-foreground text-center">
                Click "Add Section" to start organizing your course content.
              </p>
            )}
            {formData.sections.map((section, sectionIndex) => (
              <Card key={section.id} className="bg-muted/30">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg">Section {sectionIndex + 1}</CardTitle>
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={() => removeSection(section.id)}
                  >
                    <MinusCircle className="mr-2 h-4 w-4" /> Remove Section
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor={`section-title-${section.id}`}>Section Title</Label>
                    <Input
                      id={`section-title-${section.id}`}
                      value={section.title}
                      onChange={(e) => handleSectionTitleChange(section.id, e)}
                      placeholder="e.g., Introduction to React"
                      required
                    />
                  </div>

                  {/* Videos within Section */}
                  <div className="space-y-4 pt-4 border-t border-dashed border-gray-300">
                    <div className="flex justify-between items-center">
                      <h4 className="text-md font-semibold">Videos in this Section</h4>
                      <Button type="button" onClick={() => addVideo(section.id)} size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" /> Add Video
                      </Button>
                    </div>

                    {section.videos.length === 0 && (
                      <p className="text-muted-foreground text-center text-sm">
                        No videos added yet. Click "Add Video" to include content.
                      </p>
                    )}

                    {section.videos.map((video, videoIndex) => (
                      <Card key={video.id} className="bg-background">
                        <CardContent className="p-4 space-y-3">
                          <div className="flex justify-between items-center">
                            <h5 className="font-medium">Video {videoIndex + 1}</h5>
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              onClick={() => removeVideo(section.id, video.id)}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                          <div>
                            <Label htmlFor={`video-title-${video.id}`}>Video Title</Label>
                            <Input
                              id={`video-title-${video.id}`}
                              value={video.title}
                              onChange={(e) =>
                                handleVideoTitleChange(section.id, video.id, e)
                              }
                              placeholder="e.g., Setting up Development Environment"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor={`video-description-${video.id}`}>Video Description</Label>
                            <Textarea
                              id={`video-description-${video.id}`}
                              value={video.description}
                              onChange={(e) =>
                                handleVideoDescriptionChange(section.id, video.id, e)
                              }
                              placeholder="Brief description of the video content"
                              rows={3}
                            />
                          </div>
                          <div>
                            <Label htmlFor={`video-file-${video.id}`}>Upload Video File</Label>
                            <Input
                              id={`video-file-${video.id}`}
                              type="file"
                              accept="video/*"
                              onChange={(e) =>
                                handleVideoFileChange(section.id, video.id, e)
                              }
                              className="file:text-primary file:font-semibold"
                            />
                            {video.previewUrl && (
                              <div className="mt-2">
                                <video controls src={video.previewUrl} className="w-full h-48 object-contain bg-black rounded-md" />
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </Card>

        <Button type="submit" className="w-full">
          Create Course
        </Button>
      </form>
    </div>
  );
}