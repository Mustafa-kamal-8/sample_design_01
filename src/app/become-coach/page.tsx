"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";

export default function BecomeCoachPage() {
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <main className="flex-1 container mx-auto px-4 py-12 space-y-16">
        {/* Intro Section */}
        <section className="max-w-5xl mx-auto space-y-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">
              Join Our Growing Network of Experts
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Are you a certified therapist, human resource expert, or
              organizational development consultant? We're looking for
              passionate professionals like you to join our coaching platform
              and empower individuals and teams to grow, heal, and thrive.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {/* Feature List */}
              {[
                {
                  title: "Expand Your Reach",
                  desc: "Connect with clients globally through our platform, breaking geographical barriers.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  ),
                },
                {
                  title: "Flexible Income",
                  desc: "Set your own rates and schedule. Earn through live sessions, recorded courses, and 1-on-1 consultations.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  ),
                },
                {
                  title: "Community Support",
                  desc: "Join a network of like-minded professionals for collaboration, referrals, and shared resources.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                },
                {
                  title: "Professional Growth",
                  desc: "Access exclusive training, marketing support, and tools to enhance your coaching practice.",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-primary"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  ),
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-primary/10 p-2 rounded-full h-min">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground rounded-lg p-8 mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">
              Ready to Join Our Platform?
            </h2>
            <p>
              Apply now to become a coach and start sharing your expertise with
              learners worldwide.
            </p>
          </div>
          <div className="flex justify-center">
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button size="lg" variant="secondary">
                  Become a Coach
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] bg-card text-card-foreground">
                <DialogHeader>
                  <DialogTitle>Coach Application</DialogTitle>
                  <DialogDescription>
                    Fill out the form below to apply as a coach.
                  </DialogDescription>
                </DialogHeader>
                <form className="grid gap-4 py-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input
                        id="first-name"
                        className="bg-background text-foreground border-border"
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input
                        id="last-name"
                        className="bg-background text-foreground border-border"
                      />
                    </div>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      className="bg-background text-foreground border-border"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      className="bg-background text-foreground border-border"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="expertise">Expertise</Label>
                    <Select>
                      <SelectTrigger className="bg-background text-foreground border-border">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card text-card-foreground">
                        <SelectItem value="therapy">Therapy</SelectItem>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="org">Org Dev</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="experience">Experience</Label>
                    <Select>
                      <SelectTrigger className="bg-background text-foreground border-border">
                        <SelectValue placeholder="Select..." />
                      </SelectTrigger>
                      <SelectContent className="bg-card text-card-foreground">
                        <SelectItem value="1-3">1-3 yrs</SelectItem>
                        <SelectItem value="4-6">4-6 yrs</SelectItem>
                        <SelectItem value="7+">7+ yrs</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="bio">Professional Bio</Label>
                    <Textarea
                      id="bio"
                      placeholder="Your background..."
                      className="bg-background text-foreground border-border"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="website">Website / LinkedIn</Label>
                    <Input
                      id="website"
                      type="url"
                      className="bg-background text-foreground border-border"
                    />
                  </div>
                </form>
                <DialogFooter>
                  <Button type="submit">Submit Application</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
        </section>
        <section className="grid gap-8 md:grid-cols-2">
          {[
            {
              q: "What qualifications?",
              a: "Certifications + 3yrs exp + comm skills.",
            },
            {
              q: "How payments?",
              a: "70% share, paid monthly via your method.",
            },
            {
              q: "Tech setup?",
              a: "Good PC, webcam/mic, stable internet & quiet space.",
            },
            { q: "Review time?", a: "1-2 weeks review, then onboarding." },
          ].map((faq, i) => (
            <div key={i} className="bg-card p-6 rounded-lg shadow-sm">
              <h3 className="font-bold text-lg text-foreground mb-2">
                {faq.q}
              </h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
