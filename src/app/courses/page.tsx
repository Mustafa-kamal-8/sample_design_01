"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Star, Search } from "lucide-react";
import { Input } from "@/src/components/ui/input";
import { Badge } from "@/src/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import Footer from "@/src/components/footer";
import { useEffect, useState } from "react";
import { getCourses } from "@/src/api/course";

export default function CoursesPage() {
  const [courses, setCourses] = useState<any[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((cat) => cat !== value)
        : [...prev, value]
    );
  };

  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSelectedLevels((prev) =>
      prev.includes(value)
        ? prev.filter((lvl: string) => lvl !== value)
        : [...prev, value]
    );
  };
  console.log("Selected categories:", selectedLevels);

  const rating = 4; // Rating from backend (e.g., 4)
  const maxStars = 5;

  // const courses = [
  //   {
  //     id: 1,
  //     title: "Building Agentic AI Applications with a Problem-First Approach",
  //     instructor: "Jack Nickolson",
  //     rating: 5.0,
  //     reviews: 23,
  //     price: 199.99,
  //     image: "/placeholder.svg?height=48&width=48",
  //     category: "Technology",
  //     level: "Intermediate",
  //     duration: "4 weeks",
  //   },
  //   {
  //     id: 2,
  //     title: "Leadership Development for Modern Managers",
  //     instructor: "Sarah Johnson",
  //     rating: 4.8,
  //     reviews: 45,
  //     price: 149.99,
  //     image: "/placeholder.svg?height=225&width=400",
  //     category: "Business",
  //     level: "Advanced",
  //     duration: "6 weeks",
  //   },
  //   {
  //     id: 3,
  //     title: "Introduction to Data Science and Machine Learning",
  //     instructor: "Michael Chen",
  //     rating: 4.9,
  //     reviews: 37,
  //     price: 179.99,
  //     image: "/placeholder.svg?height=225&width=400",
  //     category: "Technology",
  //     level: "Beginner",
  //     duration: "8 weeks",
  //   },
  //   {
  //     id: 4,
  //     title: "Effective Communication in the Workplace",
  //     instructor: "Jessica Williams",
  //     rating: 4.7,
  //     reviews: 29,
  //     price: 129.99,
  //     image: "/placeholder.svg?height=225&width=400",
  //     category: "Business",
  //     level: "All Levels",
  //     duration: "3 weeks",
  //   },
  //   {
  //     id: 5,
  //     title: "UX/UI Design Fundamentals",
  //     instructor: "David Wilson",
  //     rating: 4.9,
  //     reviews: 52,
  //     price: 159.99,
  //     image: "/placeholder.svg?height=225&width=400",
  //     category: "Design",
  //     level: "Beginner",
  //     duration: "5 weeks",
  //   },
  //   {
  //     id: 6,
  //     title: "Advanced React Development",
  //     instructor: "Robert Thompson",
  //     rating: 4.8,
  //     reviews: 41,
  //     price: 189.99,
  //     image: "/placeholder.svg?height=225&width=400",
  //     category: "Technology",
  //     level: "Advanced",
  //     duration: "6 weeks",
  //   },
  // ];

  const img = process.env.NEXT_PUBLIC_IMAGE_URL;

  const categories = [
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

  const levels = ["Beginner", "Intermediate", "Advanced", "Expert"];

  const getCourseData = async () => {
    try {
      const searchConditions: string[] = [];

      if (selectedCategories.length > 0) {
        searchConditions.push(`category~*${selectedCategories.join(",")}*`);
      }

      if (selectedLevels.length > 0) {
        searchConditions.push(`level~*${selectedLevels.join(",")}*`);
      }

      const searchString = searchConditions.join(",");
      console.log("Calling getCourses...");
      const response = await getCourses({ search: searchString });
      console.log("Fetched courses:", response);
      const cats = response.result || [];
      setCourses(cats);
    } catch (error) {
      console.error("Failed to fetch course data:", error);
    }
  };

  useEffect(() => {
    getCourseData();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 container mx-auto py-12 px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover a wide range of courses taught by industry experts. Advance
            your career, learn new skills, or pursue your passions with our
            comprehensive curriculum.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="md:w-1/4">
            <div className="sticky top-24 space-y-8">
              {/* Search */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-bold">Filters</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-8 px-2 text-primary"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="relative mb-6">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search courses..." className="pl-8" />
                </div>
              </div>

              {/* Categories */}
              <div>
                <h3 className="font-bold mb-3">Categories</h3>
                <div className="space-y-2">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          value={cat}
                          checked={selectedCategories.includes(cat)}
                          onChange={handleCategoryChange}
                        />
                        <span>{cat}</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Levels */}
              <div>
                <h3 className="font-bold mb-3">Level</h3>
                <div className="space-y-2">
                  {levels.map((lvl) => (
                    <div
                      key={lvl}
                      className="flex items-center justify-between"
                    >
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          className="rounded border-gray-300"
                          value={lvl}
                          checked={selectedLevels.includes(lvl)}
                          onChange={handleLevelChange}
                        />
                        <span>{lvl}</span>
                      </label>
                      <span className="text-xs text-muted-foreground">
                        {lvl}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h3 className="font-bold mb-3">Price Range</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Min</label>
                    <Input type="number" placeholder="0" />
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Max</label>
                    <Input type="number" placeholder="500" />
                  </div>
                </div>
                <Button className="w-full mt-4" onClick={getCourseData}>
                  Apply
                </Button>
              </div>
            </div>
          </aside>

          {/* Course Grid */}
          <section className="md:w-3/4">
            {/* Header & Sort */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-xl font-bold">
                {courses.length} courses available
              </h2>
              <div className="flex items-center mt-4 sm:mt-0">
                <span className="text-sm text-muted-foreground mr-2">
                  Sort by:
                </span>
                <select className="border rounded-md p-1 text-sm">
                  <option>Most Popular</option>
                  <option>Newest</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="all">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Courses</TabsTrigger>
                <TabsTrigger value="popular">Most Popular</TabsTrigger>
                <TabsTrigger value="new">New Releases</TabsTrigger>
                <TabsTrigger value="trending">Trending</TabsTrigger>
              </TabsList>

              <TabsContent value="all" className="space-y-0">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {courses.map((course) => (
                    <Card key={course.id} className="overflow-hidden">
                      <div className="relative h-48">
                        <Image
                          src={`${img}${course.thumbnail}`}
                          alt={course.title || "Course image"}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {course.category
                              ? course.category
                              : "Not Available"}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="bg-muted text-muted-foreground"
                          >
                            {course.level ? course.level : "Not Available"}
                          </Badge>
                        </div>
                        <h3 className="text-xl font-bold mb-2 line-clamp-2">
                          {course.title
                            ? course.title
                            : "Course Title Not Available"}
                        </h3>
                        <div className="flex items-center mb-2">
                          <div className="flex text-yellow-400 mr-2">
                            {Array.from({ length: maxStars }).map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < rating
                                    ? "fill-current"
                                    : "stroke-current text-yellow-400"
                                }`}
                                fill={i < rating ? "currentColor" : "none"}
                              />
                            ))}
                          </div>
                          <span className="text-sm">
                            {course.rating} {course.reviews}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                            <Image
                              src="/placeholder.svg?height=32&width=32"
                              alt={course.instructor || "Instructor image"}
                              width={32}
                              height={32}
                            />
                          </div>
                          <div className="font-medium text-sm">
                            {course.instructor}
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-xl font-bold">
                            {course?.price
                              ? `$${course.price}`
                              : "Price not available"}
                          </span>
                          <Button asChild>
                            <Link href="/course-details">View Course</Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              {/* Additional tab contents... */}
            </Tabs>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <Button variant="outline" size="icon" disabled>
                  <Search />
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="bg-primary text-primary-foreground"
                >
                  1
                </Button>
                <Button variant="outline" size="sm">
                  2
                </Button>
                <Button variant="outline" size="sm">
                  3
                </Button>
                <Button variant="outline" size="icon">
                  <Search />
                </Button>
              </nav>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
