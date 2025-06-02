"use client";

import Footer from "@/src/components/footer";
import React, { useState } from "react";

const AvailableTimings = () => {
  const [selectedDays, setSelectedDays] = useState(["Monday", "Friday", "Sunday"]);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [timeSlots, setTimeSlots] = useState(["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM"]);

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const toggleDay = (day: string) => {
    setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  const addTimeSlot = () => {
    if (selectedTimeSlot && !timeSlots.includes(selectedTimeSlot)) {
      setTimeSlots((prev) => [...prev, selectedTimeSlot]);
    }
  };

  const removeTimeSlot = (slot: string) => {
    setTimeSlots((prev) => prev.filter((s) => s !== slot));
  };

  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-background text-foreground">
      <div className="bg-card p-6 rounded-lg shadow-lg max-w-6xl w-full">
        <h1 className="text-xl font-bold mb-4">Available Timings</h1>

        {/* Select Available Days */}
        <div className="mb-4">
          <p className="font-semibold mb-2">Select Available Days</p>
          <div className="grid grid-cols-3 gap-2">
            {days.map((day) => (
              <button
                key={day}
                className={`py-2 rounded ${selectedDays.includes(day) ? "bg-primary text-primary-foreground" : "bg-muted"}`}
                onClick={() => toggleDay(day)}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Available Time Slots */}
        <div className="mb-4">
          <p className="font-semibold mb-2">My Available Time Slots</p>
          <select
            className="w-full p-2 border border-border rounded mb-2 bg-card text-card-foreground"
            onChange={(e) => setSelectedTimeSlot(e.target.value)}
          >
            <option value="">Select Time Slot</option>
            {["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM"].map((slot) => (
              <option key={slot} value={slot}>
                {slot}
              </option>
            ))}
          </select>
          <button className="bg-primary text-primary-foreground w-full py-2 rounded mb-2" onClick={addTimeSlot}>
            Add Slot
          </button>
          <div className="grid grid-cols-2 gap-2">
            {timeSlots.map((slot) => (
              <div key={slot} className="flex items-center justify-between bg-muted p-2 rounded">
                <span>{slot}</span>
                <button className="text-primary" onClick={() => removeTimeSlot(slot)}>✖</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      <Footer/>

    </>
  );
};

export default AvailableTimings;
