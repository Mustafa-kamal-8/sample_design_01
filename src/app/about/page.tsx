// app/contact/page.tsx (or wherever this file is located)
'use client'; // This component uses client-side features like forms and Image

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Textarea } from "@/src/components/ui/textarea";
import { Card, CardContent } from "@/src/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import Footer from "@/src/components/footer";
import Image from "next/image"; // For the Image component
import Link from "next/link"; // Added: For the Link component in the "Contact Us" button

export default function AboutUsPage() {
  return (
    <>
      <div className="container py-12">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">About Us</h1> {/* Keeping About Us as per your code */}
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Have questions or need assistance? We're here to help. Reach out
              to our team using any of the methods below.
            </p>
          </div>

          {/* Empowering Lifelong Learners Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Empowering Lifelong Learners</h2>
              <p>
                Learning should be flexible, personalized, and engaging. We blend live classes, on-demand courses, and expert sessions so you can learn at your pace.
              </p>
            </div>
            <Image src="/placeholder.svg" alt="Learning" width={600} height={400} className="w-full h-auto rounded-lg shadow-md object-cover" />
          </div>

          {/* 'Our Mission' TEXT BLOCK */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12">
            <Image src="/placeholder.svg" alt="Mission" width={600} height={400} className="w-full h-auto rounded-lg shadow-md object-cover" />
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p>
                To make high-quality, expert-guided learning accessible, inclusive, and interactive—so every learner can succeed, no matter their background.
              </p>
            </div>
          </div>

          {/* 'Benefits Section' */}
          <div className="rounded-lg shadow-md p-6 mt-12">
            <h2 className="text-3xl font-bold text-center mb-6">Our Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Learn From Experts", desc: "Learn from licensed professionals, certified coaches, and industry leaders." },
                { title: "Flexible Learning", desc: "Join live sessions, access recorded classes anytime, or schedule coaching." },
                { title: "Personalized Support", desc: "Choose group classes, 1-on-1 coaching, or self-paced modules." },
              ].map((item) => (
                // Applying dark: classes for explicit background/text colors
                <div key={item.title} className="p-6 border rounded-lg shadow-md bg-gray-800 text-white dark:bg-gray-700 dark:text-gray-100">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ADDED 'Meet the Team' SECTION STARTS HERE */}
          <div className="mt-12 space-y-8">
            <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Sarah Johnson", role: "Founder & CEO", bio: "Former education tech executive.", image: "/placeholder.svg?height=300&width=300" },
                { name: "Michael Chen", role: "CTO", bio: "Software engineer building educational platforms.", image: "/placeholder.svg?height=300&width=300" },
                { name: "Jessica Williams", role: "Head of Content", bio: "University professor passionate about engaging learning.", image: "/placeholder.svg?height=300&width=300" },
                { name: "Robert Thompson", role: "Director of Coaching", bio: "Certified executive coach with leadership expertise.", image: "/placeholder.svg?height=300&width=300" },
              ].map((member) => (
                // Applying dark: classes for explicit border/background/text colors
                <div key={member.name} className="border rounded-lg shadow-md p-4 text-center dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100">
                  <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-auto rounded-full mx-auto mb-4" />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
         
         
        </div>
      </div>
      <Footer />
    </>
  );
}