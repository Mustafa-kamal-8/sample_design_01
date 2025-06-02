"use client";

import React from "react";
import Footer from "@/src/components/footer";

export default function QuizAttempts() {
  const quizAttempts = [
    {
      title: "Advanced Mathematics",
      correctAnswer: "15/22",
      attemptDate: "17/4/2025",
      score: "95%",
      scoreColor: "green-500",
      strokeDash: 95,
    },
    {
      title: "Basic MLOps",
      correctAnswer: "22/22",
      attemptDate: "4/4/2025",
      score: "100%",
      scoreColor: "green-500",
      strokeDash: 100,
    },
    {
      title: "App Developer Advanced",
      correctAnswer: "4/20",
      attemptDate: "1/3/2025",
      score: "20%",
      scoreColor: "red-500",
      strokeDash: 20,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg md:max-w-xl lg:max-w-2xl">
          <h1 className="text-2xl font-bold mb-4 text-center">
            My Quiz Attempts
          </h1>

          {quizAttempts.map((attempt, idx) => (
            <div
              key={idx}
              className="border-b pb-4 mb-4 flex flex-col md:flex-row md:space-x-10"
            >
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{attempt.title}</h2>
                <p className="text-gray-700">
                  Correct Answers:{" "}
                  <span className="font-medium">{attempt.correctAnswer}</span>
                </p>
                <p className="text-gray-700">
                  Attempt Date:{" "}
                  <span className="font-medium">{attempt.attemptDate}</span>
                </p>
              </div>

              <div className="relative w-20 h-20 md:w-16 md:h-16 flex-shrink-0">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 36 36"
                >
                  <path
                    className="text-gray-300"
                    d="M18 2.0845a15.9155 15.9155 0 1 0 0 31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                  />
                  <path
                    className={`text-${attempt.scoreColor}`}
                    d="M18 2.0845a15.9155 15.9155 0 0 1 0 31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.8"
                    strokeDasharray={`${attempt.strokeDash}, 100`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-xl font-semibold">{attempt.score}</span>
                </div>
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center mt-4">
            <button className="bg-blue-500 text-white py-2 px-4 w-full max-w-xs md:max-w-sm lg:max-w-md rounded hover:bg-blue-700 transition">
              Attempt Again
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
