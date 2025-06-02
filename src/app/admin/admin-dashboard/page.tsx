"use client";

import Image from "next/image";
import bannerPic from "@/src/images/banner.png";
import ProfilePic from "@/src/images/profile.png";
import Footer from "@/src/components/footer";

export default function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      {/* Profile Card */}
      <div className="max-w-6xl w-full bg-card rounded-xl shadow-lg overflow-hidden">
        {/* Banner Image */}
        <div className="relative">
          <Image
            src={bannerPic} 
            alt="City Skyline"
            width={400}
            height={600}
            className="w-full h-80 object-cover"
          />

          {/* Profile Picture */}
          <div className="absolute top-[45%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card p-3 rounded-full border-4 border-border shadow-md">
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
        </div>

        {/* User Information */}
        <div className="text-center mt-14 p-4">
          <h1 className="text-xl font-semibold">Joe Rogan</h1>
          <p className="text-muted-foreground">Life & Career Consultant</p>
        </div>

        {/* Appointment Stats */}
        <div className="p-4">
          <div className="flex flex-col sm:flex-row sm:justify-between items-center bg-card p-4 rounded-lg">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold">Total Appointments</p>
              <p className="text-xl sm:text-2xl font-bold text-primary">978</p>
              <p className="text-green-500 text-xs">↑ 15% from Last Week</p>
            </div>

            <div className="text-center sm:text-right mt-3 sm:mt-0">
              <p className="text-xs sm:text-sm font-semibold">Appointments Today</p>
              <p className="text-xl sm:text-2xl font-bold text-primary">4</p>
              <p className="text-green-500 text-xs">↑ 20% from Yesterday</p>
            </div>
          </div>
        </div>
      </div>

      {/* Appointment Interface */}
   <div className="w-full max-w-lg sm:max-w-xl lg:max-w-6xl bg-card rounded-xl shadow-lg p-2 mt-6">
  <h2 className="text-lg sm:text-xl font-semibold">Appointment within 1 minute</h2>
  <div className="bg-muted p-3 rounded-lg mt-3">
    <p className="text-sm font-semibold">Gary Verechuk</p>
    <p className="text-xs text-muted-foreground">Appointment ID: #LC0001</p>

    <div className="mt-3 flex flex-col sm:flex-row gap-2">
      <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">Join Now</button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-md">Reschedule</button>
      <button className="bg-red-500 text-white px-4 py-2 rounded-md">Cancel</button>
    </div>
  </div>
</div>


      {/* Upcoming Appointments */}
 <div className="w-full max-w-6xl bg-card rounded-xl shadow-lg p-4 mt-6">
  <h2 className="text-lg sm:text-xl font-semibold">Upcoming Appointments</h2>
  <div className="space-y-3">
    {[
      { name: "Adrian Marshall", id: "#LC0001", time: "11 Nov 10:45 AM" },
      { name: "Kelly Stevens", id: "#LC0002", time: "11 Nov 11:00 AM" },
      { name: "Neymar Brown", id: "#LC0003", time: "11 Nov 02:00 PM" },
    ].map((appointment, index) => (
      <div
        key={index}
        className="bg-muted p-3 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center w-full"
      >
        <div className="text-center sm:text-left w-full">
          <p className="text-sm sm:text-base font-semibold">{appointment.name}</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Appointment ID: {appointment.id}</p>
          <p className="text-xs text-muted-foreground">{appointment.time}</p>
        </div>

        {/* Appointment Actions */}
        <div className="flex flex-col sm:flex-row sm:justify-end gap-2 mt-3 sm:mt-0">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">Reschedule</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded-md w-full sm:w-auto">Cancel</button>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* See All Appointments Button */}
      <div className="w-full max-w-lg sm:max-w-2xl lg:max-w-full bg-card rounded-xl shadow-lg p-4 mt-6">
        <div className="flex justify-center">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg shadow-md">
            See All Appointments
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
