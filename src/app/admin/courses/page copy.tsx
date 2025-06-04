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
import { X, Upload, Plus } from "lucide-react";
import { useToast } from "@/src/hooks/use-toast";
import { uploadCourses } from "@/src/api/course";
import { compressImage, uploadImage } from "@/src/lib/image";
import { RadioGroup, RadioGroupItem } from "@/src/components/ui/radio-group"; // Import RadioGroup components

// Validation schema
const courseSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().min(10).max(1000),
  price: z.number().min(0),
  category: z.string().min(1),
  level: z.string().min(1),
  thumbnail: z.any().optional(),
  tags: z.array(z.string()).min(1, "At least one tag is required"),
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

const AdminCoursesPage = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");
  const [thumbnailPreview, setThumbnailPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  // State to manage the selected mode: "new" or "existing"
  const [courseMode, setCourseMode] = useState<"new" | "existing">("new");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: { tags: [] },
  });

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

  const onSubmit = async (data: CourseFormData) => {
    setIsSubmitting(true);

    try {
      let imageUrl = "";

      if (data.thumbnail) {
        const compressedImage = await compressImage(data.thumbnail);
        imageUrl = await uploadImage(compressedImage, "courses");
      }

      const payload = {
        title: data.title.trim(),
        description: data.description.trim(),
        price: data.price.toString(),
        category: data.category,
        level: data.level,
        tags: data.tags,
        thumbnail: imageUrl,
      };

      await uploadCourses(payload);

      toast({
        title: "Success!",
        description: "Course created successfully",
      });

      reset();
      setTags([]);
      setThumbnailPreview(null);
      setTagInput("");
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
                    </SelectTrigger>
                    <SelectContent>
                      {courseLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
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

              <Button type="submit" disabled={isSubmitting}>
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