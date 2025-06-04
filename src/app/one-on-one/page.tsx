"use client";

import Image from "next/image";
import { HeartIcon } from "lucide-react";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";
import { Button } from "@/src/components/ui/button";

// 1. Define Coach type
interface Coach {
  name: string;
  title: string;
  pricePer10Min: string;
  pricePerQuestion: string;
  rating: number;
}

// 2. Coaches array
const coaches: Coach[] = [
  { name: "Amanda Rivera", title: "Relationship Coach", pricePer10Min: "$8.00", pricePerQuestion: "$0.50", rating: 4.8 },
  { name: "Robert Brook", title: "Relationship Coach", pricePer10Min: "$10.00", pricePerQuestion: "$0.75", rating: 4.8 },
  { name: "David Chen", title: "Relationship Coach", pricePer10Min: "$10.00", pricePerQuestion: "$0.75", rating: 4.8 },
  { name: "Marcus Lee", title: "Relationship Coach", pricePer10Min: "$10.00", pricePerQuestion: "$0.75", rating: 4.8 },
];

// 3. CoachCard component
const CoachCard: React.FC<{ coach: Coach }> = ({ coach }) => (
  <div className="flex flex-col md:flex-row bg-card shadow-lg rounded-lg overflow-hidden ">
    <div className="md:w-1/3">
      <Image
        src="/placeholder.svg"
        alt="Profile"
        width={300}
        height={300}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col justify-between md:w-2/3">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-foreground">{coach.name}</h2>
        <HeartIcon className="w-6 h-6 text-destructive" />
      </div>
      <div className="flex items-center mt-2 gap-2">
        <p className="text-muted-foreground">{coach.title}</p>
        <span className="text-muted-foreground">| Bilingual</span>
        <span className="text-yellow-500 text-lg">★ {coach.rating}</span>
      </div>
      <p className="text-foreground mt-3">
        {coach.pricePer10Min} per 10 min | {coach.pricePerQuestion} per question
      </p>
      <div className="mt-4 flex space-x-3">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Book Session
        </Button>
        <Button variant="outline" className="border-border text-foreground">
          Ask a Question
        </Button>
      </div>
    </div>
  </div>
);

export default function OneOnOnePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black dark:bg-background dark:text-foreground relative">
    

   <div className="container py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-foreground">1-on-1 Consultation</h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Book a private consultation with an expert. One-time fee. No hassle.
              Just results.
            </p>
          </div>
  
          <section className="max-w-7xl mx-auto space-y-12">
            {/* Intro sections */}
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground">Personalized Guidance, Tailored to You</h2>
                <p className="text-muted-foreground">
                  Whether you're looking for expert advice, career direction,
                  emotional support, or personal growth, our 1-on-1 consultations
                  are designed to give you the focused attention you deserve.
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>A session built around your unique goals</li>
                  <li>Guidance from verified experts</li>
                  <li>A safe, confidential, and judgment-free environment</li>
                  <li>Flexible scheduling that fits your lifestyle</li>
                </ul>
              </div>
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="Guidance Session"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
            </div>
  
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                  src="/placeholder.svg"
                  alt="What You Can Expect"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-md object-cover"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-foreground">What You Can Expect</h2>
                <p className="text-muted-foreground">
                  Whether you're looking for expert advice, career direction,
                  emotional support, or personal growth, our 1-on-1 consultations
                  are designed to give you the focused attention you deserve.
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">✅ A dedicated session built around your unique goals</li>
                  <li className="flex items-center gap-3">✅ Guidance from verified, experienced experts</li>
                  <li className="flex items-center gap-3">✅ A safe, confidential, and judgment-free environment</li>
                  <li className="flex items-center gap-3">✅ Flexible scheduling that fits your lifestyle</li>
                </ul>
              </div>
            </div>
  
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {coaches.map((coach, idx) => (
                <CoachCard key={idx} coach={coach} />
              ))}
            </div>
          </section>
        </div>
  

      <Footer />
    </div>
  );
}
