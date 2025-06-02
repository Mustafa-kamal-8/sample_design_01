"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";

export default function QuizContestPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      {/* Main Content */}
      <main className="flex-1 container mx-auto p-6">
        <div className="bg-card p-6 rounded-lg shadow-md space-y-8">
          {/* Current Week's Quiz */}
          <section className="bg-primary text-primary-foreground p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-2">
              Join This Week&apos;s Quiz Contest
            </h2>
            <p className="text-lg">Topic: Advanced Arithmetic</p>
            <p>Questions: 20</p>
            <p>Time: 30 mins</p>
            <button
              onClick={() => router.push("/quiz/this-week")}
              className="mt-4 bg-card text-foreground px-4 py-2 rounded-md hover:bg-card/90 transition"
            >
              Participate Now
            </button>
          </section>

          {/* Previous Quizzes */}
          <section className="flex flex-col md:flex-row gap-6">
            {/* Topics Dropdown */}
            <div className="w-full md:w-1/4 bg-card p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-2">Choose Topic</h2>
              <select className="w-full p-2 border border-border bg-background text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Advanced Arithmetic</option>
                <option>Mughal History</option>
                <option>Competitive Exams</option>
              </select>
            </div>

            {/* Quiz List */}
            <div className="w-full md:w-3/4 space-y-4 bg-card p-4 rounded-lg shadow-sm">
              {[
                {
                  id: 4,
                  title: "Quiz 04: World Geography for Competitive Exams",
                  route: "/quiz-04",
                },
                {
                  id: 3,
                  title: "Quiz 03: Advanced Arithmetic for Competitive Exams",
                  route: "/quiz-03",
                },
                {
                  id: 2,
                  title: "Quiz 02: Mughal History for Competitive Exams",
                  route: "/quiz-02",
                },
                {
                  id: 1,
                  title: "Quiz 01: World Geography for Competitive Exams",
                  route: "/quiz-01",
                },
              ].map((quiz) => (
                <div
                  key={quiz.id}
                  className="border-t border-border pt-4 cursor-pointer hover:bg-muted transition"
                  onClick={() => quiz.route && router.push(quiz.route)}
                >
                  <h3 className="text-lg font-bold text-foreground">{quiz.title}</h3>
                  <p className="text-muted-foreground">Questions: 20 | Time: 30 mins</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}