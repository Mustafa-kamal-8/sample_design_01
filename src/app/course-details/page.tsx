import Image from "next/image";
import { ChevronDown, Play, Star } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import Footer from "@/src/components/footer";

export default function CourseDetailPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container px-4 py-8">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold mb-4">
              Building Agentic AI Applications with a Problem-First Approach
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
              </div>
              <span>5.0 (23 reviews)</span>
              <span>•</span>
              <span>Starts May 5</span>
              <span>•</span>
              <span className="text-red-500 font-medium">4 Seats Left</span>
            </div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/20 overflow-hidden">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="Instructor"
                  width={48}
                  height={48}
                />
              </div>
              <div>
                <div className="font-medium">Jack Nickolson</div>
                <div className="text-sm text-muted-foreground">
                  AI Researcher & Developer
                </div>
              </div>
            </div>

            <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Course thumbnail"
                width={800}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>

            <Tabs defaultValue="overview">
              <TabsList className="grid grid-cols-4 mb-8">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              <TabsContent value="overview" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Overview</h2>
                  <p className="text-muted-foreground mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris ut dictum quam. Curabitur pharetra rhoncus varius.
                    Curabitur egestas in orci ut finibus. Proin facilisis risus
                    id nisl mollis, a gravida turpis pretium. Sed ac dapibus
                    diam, et fringilla felis. Donec nec ex turpis. Integer eget
                    sagittis quam, et aliquam massa. Morbi eu rhoncus odio. Ut
                    id velit ut elit rhoncus vehicula at quis enim.
                  </p>
                  <h3 className="text-xl font-bold mb-2">What You'll Learn</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>
                        Build AI applications that solve real-world problems
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>
                        Implement agentic AI systems with modern frameworks
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Design effective prompts for LLMs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-green-500 mt-1"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                        <path d="m9 11 3 3L22 4" />
                      </svg>
                      <span>Evaluate and improve AI system performance</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 mb-6 space-y-1">
                    <li>Basic programming knowledge (Python preferred)</li>
                    <li>Understanding of machine learning concepts</li>
                    <li>A computer with internet connection</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="curriculum" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Course Curriculum</h2>
                  <div className="space-y-4">
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex justify-between items-center p-4 bg-muted/50 cursor-pointer">
                        <div>
                          <h3 className="font-bold">Introduction</h3>
                          <div className="text-sm text-muted-foreground">
                            Duration: 30:00 min
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                      <div className="p-4 border-t space-y-4">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">
                                  Video: Course Intro
                                </h4>
                                <div className="text-sm text-muted-foreground">
                                  15 min
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                Preview
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">
                                  Video: Course Step 1
                                </h4>
                                <div className="text-sm text-muted-foreground">
                                  05 min
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                Preview
                              </Button>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 rounded-full p-2 mt-1">
                            <Play className="h-4 w-4 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <div>
                                <h4 className="font-medium">
                                  Video: Course Step 2
                                </h4>
                                <div className="text-sm text-muted-foreground">
                                  10 min
                                </div>
                              </div>
                              <Button variant="ghost" size="sm">
                                Preview
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex justify-between items-center p-4 bg-muted/50 cursor-pointer">
                        <div>
                          <h3 className="font-bold">Goals & More</h3>
                          <div className="text-sm text-muted-foreground">
                            Duration: 30:00 min
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex justify-between items-center p-4 bg-muted/50 cursor-pointer">
                        <div>
                          <h3 className="font-bold">
                            Analyzing Useability Test
                          </h3>
                          <div className="text-sm text-muted-foreground">
                            Duration: 120:00 min
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                    <div className="border rounded-lg overflow-hidden">
                      <div className="flex justify-between items-center p-4 bg-muted/50 cursor-pointer">
                        <div>
                          <h3 className="font-bold">Introducing Ux Low</h3>
                          <div className="text-sm text-muted-foreground">
                            Duration: 80:00 min
                          </div>
                        </div>
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="instructor">
                <div>
                  <h2 className="text-2xl font-bold mb-4">
                    About the Instructor
                  </h2>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-24 h-24 rounded-full bg-primary/20 overflow-hidden flex-shrink-0">
                      <Image
                        src="/placeholder.svg?height=96&width=96"
                        alt="Instructor"
                        width={96}
                        height={96}
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Jack Nickolson</h3>
                      <div className="text-muted-foreground mb-2">
                        AI Researcher & Developer
                      </div>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M12 20h9" />
                            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                          </svg>
                          <span className="text-sm">15 Courses</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                            <circle cx="9" cy="7" r="4" />
                            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                          </svg>
                          <span className="text-sm">2,500+ Students</span>
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        Jack is an AI researcher and developer with over 10
                        years of experience in the field. He has worked on
                        numerous AI projects for Fortune 500 companies and has
                        published several papers on machine learning and
                        artificial intelligence. Jack is passionate about making
                        AI accessible to everyone and believes in a
                        problem-first approach to building AI applications.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="reviews">
                <div>
                  <h2 className="text-2xl font-bold mb-4">Client Reviews</h2>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="text-5xl font-bold">4.9</div>
                    <div>
                      <div className="flex text-yellow-400 mb-1">
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                        <Star className="w-5 h-5 fill-current" />
                      </div>
                      <div className="text-muted-foreground">
                        Based on 23 reviews
                      </div>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Reviewer"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Robert Sonny</div>
                          <div className="text-xs text-muted-foreground">
                            2 weeks ago
                          </div>
                        </div>
                        <div className="ml-auto flex text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        This course exceeded my expectations. Jack is an
                        excellent instructor who breaks down complex concepts
                        into easy-to-understand chunks. The problem-first
                        approach really helped me understand how to apply AI in
                        real-world scenarios.
                      </p>
                    </div>
                    <div className="border-b pb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-primary/20 overflow-hidden">
                          <Image
                            src="/placeholder.svg?height=40&width=40"
                            alt="Reviewer"
                            width={40}
                            height={40}
                          />
                        </div>
                        <div>
                          <div className="font-medium">Sarah Johnson</div>
                          <div className="text-xs text-muted-foreground">
                            1 month ago
                          </div>
                        </div>
                        <div className="ml-auto flex text-yellow-400">
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                          <Star className="w-4 h-4 fill-current" />
                        </div>
                      </div>
                      <p className="text-muted-foreground">
                        I've taken several AI courses before, but this one
                        stands out because of its practical approach. The
                        hands-on projects were challenging but incredibly
                        rewarding. Highly recommend!
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-6">
                    View All Reviews
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          <div>
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="text-3xl font-bold mb-4">$199.99</div>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 10H3" />
                      <path d="M21 6H3" />
                      <path d="M21 14H3" />
                      <path d="M21 18H3" />
                    </svg>
                    <span>12 lessons (4hrs 30mins)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" />
                      <path d="m12 6 4 4-4 4" />
                      <path d="M8 10h8" />
                    </svg>
                    <span>Lifetime access</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" x2="12" y1="15" y2="3" />
                    </svg>
                    <span>Downloadable resources</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z" />
                      <path d="M6 18h12" />
                      <path d="M6 14h12" />
                      <rect width="12" height="12" x="6" y="10" />
                    </svg>
                    <span>Certificate of completion</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <Button className="w-full" size="lg">
                    Enroll Course
                  </Button>
                  <Button className="w-full" variant="outline">
                    Add to Wishlist
                  </Button>
                </div>
                <div className="mt-6">
                  <div className="text-sm font-medium mb-2">
                    Select Schedule
                  </div>
                  <div className="space-y-2">
                    <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">May 5 - June 2</div>
                          <div className="text-sm text-muted-foreground">
                            Tuesdays & Thursdays, 7-9 PM EST
                          </div>
                        </div>
                        <div className="text-sm text-red-500 font-medium">
                          4 Seats Left
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-md p-3 cursor-pointer hover:bg-muted/50">
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-medium">June 10 - July 8</div>
                          <div className="text-sm text-muted-foreground">
                            Mondays & Wednesdays, 6-8 PM EST
                          </div>
                        </div>
                        <div className="text-sm text-green-500 font-medium">
                          12 Seats Left
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
