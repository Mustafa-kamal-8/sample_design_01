"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import Footer from "@/src/components/footer";

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Essential Tips for Online Learning Success",
      excerpt:
        "Discover the key strategies that will help you excel in your online courses and maximize your learning potential.",
      date: "May 2, 2023",
      author: "Sarah Johnson",
      category: "Learning Tips",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "The Future of AI in Education: Trends to Watch",
      excerpt:
        "Explore how artificial intelligence is transforming the educational landscape and what it means for learners and educators.",
      date: "April 15, 2023",
      author: "Michael Chen",
      category: "Technology",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "How to Balance Work, Life, and Online Learning",
      excerpt:
        "Practical advice for managing your time effectively while pursuing online education alongside other responsibilities.",
      date: "March 28, 2023",
      author: "Jessica Williams",
      category: "Productivity",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 4,
      title: "The Psychology of Effective Learning: Memory Techniques",
      excerpt:
        "Learn science-backed methods to improve retention and recall for better learning outcomes.",
      date: "March 10, 2023",
      author: "Dr. Robert Thompson",
      category: "Learning Science",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 5,
      title: "From Beginner to Expert: Mastering Programming Skills",
      excerpt:
        "A roadmap for developing your coding abilities from the ground up, with practical exercises and resources.",
      date: "February 22, 2023",
      author: "Alex Rivera",
      category: "Programming",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 6,
      title: "The Rise of Microlearning: Small Lessons, Big Impact",
      excerpt:
        "Why bite-sized learning modules are becoming increasingly popular and how they can benefit your educational journey.",
      date: "February 5, 2023",
      author: "Emma Davis",
      category: "Learning Trends",
      image: "/placeholder.svg?height=200&width=400",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Blog & Resources</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our latest articles, tutorials, and insights to enhance your
            learning journey and stay updated with educational trends.
          </p>
        </div>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20" />
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/blog-details">Read More →</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Subscribe to Our Newsletter
          </h2>
          <div className="max-w-md mx-auto">
            <p className="text-muted-foreground mb-4">
              Stay updated with our latest articles, courses, and educational
              resources delivered straight to your inbox. Never miss an update!
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
