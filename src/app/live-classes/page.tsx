"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Star, Calendar, Clock, Users } from "lucide-react";
import { Badge } from "@/src/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/src/components/ui/tabs";
import Footer from "@/src/components/footer";

export default function LiveClassesPage() {
  const liveClasses = [
    {
      id: 1,
      title: "Building Agentic AI Applications with a Problem-First Approach",
      instructor: "Jack Nickolson",
      rating: 5.0,
      reviews: 23,
      price: 199.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Technology",
      date: "May 5, 2023",
      time: "7:00 PM - 9:00 PM EST",
      seatsLeft: 4,
      duration: "2 hours",
    },
    {
      id: 2,
      title: "Leadership Development for Modern Managers",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 45,
      price: 149.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Business",
      date: "May 7, 2023",
      time: "6:00 PM - 8:00 PM EST",
      seatsLeft: 7,
      duration: "2 hours",
    },
    {
      id: 3,
      title: "Introduction to Data Science and Machine Learning",
      instructor: "Michael Chen",
      rating: 4.9,
      reviews: 37,
      price: 179.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Technology",
      date: "May 10, 2023",
      time: "7:30 PM - 9:30 PM EST",
      seatsLeft: 12,
      duration: "2 hours",
    },
    {
      id: 4,
      title: "Effective Communication in the Workplace",
      instructor: "Jessica Williams",
      rating: 4.7,
      reviews: 29,
      price: 129.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Business",
      date: "May 12, 2023",
      time: "6:30 PM - 8:30 PM EST",
      seatsLeft: 9,
      duration: "2 hours",
    },
    {
      id: 5,
      title: "UX/UI Design Fundamentals",
      instructor: "David Wilson",
      rating: 4.9,
      reviews: 52,
      price: 159.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Design",
      date: "May 15, 2023",
      time: "7:00 PM - 9:00 PM EST",
      seatsLeft: 5,
      duration: "2 hours",
    },
    {
      id: 6,
      title: "Advanced React Development",
      instructor: "Robert Thompson",
      rating: 4.8,
      reviews: 41,
      price: 189.99,
      image: "/placeholder.svg?height=225&width=400",
      category: "Technology",
      date: "May 18, 2023",
      time: "6:00 PM - 8:00 PM EST",
      seatsLeft: 8,
      duration: "2 hours",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Upcoming Live Classes</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join our expert-led live classes and interact directly with
            instructors and fellow learners. Reserve your spot now!
          </p>
        </div>

        <Tabs defaultValue="upcoming" className="mb-12">
          <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="upcoming">Upcoming Classes</TabsTrigger>
              <TabsTrigger value="calendar">Calendar View</TabsTrigger>
              <TabsTrigger value="my-classes">My Classes</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="upcoming">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {liveClasses.map((liveClass) => (
                <Card key={liveClass.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={liveClass.image}
                      alt={liveClass.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <Badge
                        variant="outline"
                        className="bg-primary/10 text-primary"
                      >
                        {liveClass.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="bg-muted text-muted-foreground"
                      >
                        Live Class
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">
                      {liveClass.title}
                    </h3>
                    <div className="flex items-center mb-2">
                      <div className="flex text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-current" />
                        ))}
                      </div>
                      <span className="text-sm">
                        {liveClass.rating} ({liveClass.reviews})
                      </span>
                    </div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 overflow-hidden">
                        <Image
                          src="/placeholder.svg?height=32&width=32"
                          alt={liveClass.instructor}
                          width={32}
                          height={32}
                        />
                      </div>
                      <div className="font-medium text-sm">
                        {liveClass.instructor}
                      </div>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm">
                        <Calendar className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{liveClass.date}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Clock className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span>{liveClass.time}</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <Users className="w-4 h-4 mr-2 text-muted-foreground" />
                        <span className="text-red-500 font-medium">
                          {liveClass.seatsLeft} Seats Left
                        </span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold">
                        ${liveClass.price}
                      </span>
                      <Button asChild>
                        <Link href="/course-details">Reserve Spot</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="calendar">
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                Calendar view coming soon...
              </p>
            </div>
          </TabsContent>
          <TabsContent value="my-classes">
            <div className="text-center py-12">
              <p className="text-muted-foreground">
                You haven't registered for any live classes yet.
              </p>
              <div className="mt-4">
                <Button>Browse Classes</Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mb-12 bg-muted p-8 rounded-lg">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">How Live Classes Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our live classes provide an interactive learning experience with
              real-time instruction and feedback.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[1, 2, 3].map((step) => (
              <div key={step} className="text-center">
                <div className="bg-primary text-primary-foreground rounded-full w-16 h-16 flex items-center justify-center text-3xl font-bold mb-4 mx-auto">
                  {step}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {step === 1
                    ? "Book a Live Class"
                    : step === 2
                    ? "Join the Session"
                    : "Access Recordings"}
                </h3>
                <p className="text-muted-foreground max-w-xs mx-auto">
                  {step === 1
                    ? "Choose your preferred time slot and reserve your spot with instant confirmation."
                    : step === 2
                    ? "Receive a Zoom link via email 30 minutes before the class starts."
                    : "Can't attend live? All sessions are recorded and available for 30 days after the class."}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-6">Looking for More Options?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/courses">Browse All Courses</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/recorded-classes">Explore Recorded Classes</Link>
            </Button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
