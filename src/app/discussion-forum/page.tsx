'use client';

import React from "react";
import Footer from '@/src/components/footer';
import { ModeToggle } from '@/src/components/mode-toggle';

export default function DiscussionForum() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <main className="flex-1 max-w-7xl mx-auto p-6 space-y-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Welcome to Our Discussion Forum</h1>
        </div>

        {/* Search and Topic Selection (Responsive) */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <input
            type="text"
            placeholder="Search topics..."
            className="w-full md:w-1/2 p-2 border border-border bg-card text-card-foreground rounded-md placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <select className="w-full md:w-1/2 p-2 border border-border bg-card text-card-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary">
            <option className="bg-card text-card-foreground">All Topics</option>
            <option className="bg-card text-card-foreground">Technology</option>
            <option className="bg-card text-card-foreground">Science</option>
            <option className="bg-card text-card-foreground">Art</option>
          </select>
        </div>

        {/* Posts List */}
        {[
          { title: 'Gen Arithmetics \u005C\u006Dm/ · 7m ago', hasImage: false },
          { title: 'Indian Scr Gr · 15m ago', hasImage: true },
          { title: 'Gen Arithmetics 7m ago', hasImage: false },
        ].map((post, idx) => (
          <div
            key={idx}
            className="bg-card p-6 rounded-lg shadow-md space-y-4"
          >
            <div className="flex justify-between items-center">
              <div className="text-lg font-semibold text-foreground">
                {post.title}
              </div>
              <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition">
                Join Group
              </button>
            </div>

            <p className="text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sapien massa...
            </p>

            {post.hasImage && (
              <div className="flex justify-center">
                <img
                  src="/placeholder.svg"
                  alt="Post image"
                  className="w-40 h-40 object-contain mx-auto"
                />
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button className="text-green-500">👍 21</button>
                <button className="text-red-500">👎 2</button>
                <button className="text-muted-foreground">💬 24</button>
              </div>
              <button className="text-primary">🔗 Share</button>
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
