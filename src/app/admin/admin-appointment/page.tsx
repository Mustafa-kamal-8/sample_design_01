"use client";

import Footer from "@/src/components/footer";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AppointmentsPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-6">
      <div className="max-w-6xl w-full bg-card rounded-xl shadow-lg p-6">
        {/* Page Header */}
        <h2 className="text-lg sm:text-xl font-semibold text-foreground text-center">My Appointments</h2>

        {/* Appointment Details */}
        <div className="bg-muted p-3 rounded-lg mt-4 text-center">
          <p className="text-sm sm:text-base font-semibold">Gary Verechuk</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Appointment ID: #LC0001</p>

          {/* Buttons - Responsive Layout */}
          <div className="mt-3 flex flex-col sm:flex-row sm:justify-center gap-2 items-center">
            <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-md w-32 sm:w-auto">
              Join Now
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md w-32 sm:w-auto">
              Reschedule
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md w-32 sm:w-auto">
              Cancel
            </button>
          </div>
        </div>

        {/* Upcoming Appointments */}
        <h2 className="text-lg sm:text-xl font-semibold text-foreground mt-5 text-center">Upcoming Appointments</h2>

        <div className="space-y-3 mt-3">
          {[
            { name: "Adrian Marshall", id: "#LC0001", time: "11 Nov 10:45 AM" },
            { name: "Kelly Stevens", id: "#LC0002", time: "11 Nov 11:00 AM" },
            { name: "Neymar Brown", id: "#LC0003", time: "11 Nov 02:00 PM" },
          ].map((appointment, index) => (
            <div key={index} className="bg-muted p-3 rounded-lg flex flex-col sm:flex-row sm:justify-between sm:items-center w-full text-center">
              <div className="w-full">
                <p className="text-sm sm:text-base font-semibold">{appointment.name}</p>
                <p className="text-xs sm:text-sm text-muted-foreground">Appointment ID: {appointment.id}</p>
                <p className="text-xs text-muted-foreground">{appointment.time}</p>
              </div>

              {/* Centered Buttons for Appointments */}
              <div className="flex flex-col sm:flex-row sm:justify-center gap-2 mt-3 sm:mt-0 items-center">
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md w-32 sm:w-auto">
                  Reschedule
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md w-32 sm:w-auto">
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Centered Button Styled Like Image */}
        <div className="flex justify-center mt-6">
          <button
            onClick={() => router.push("/timing")}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg shadow-md"
          >
            See All Appointments
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
