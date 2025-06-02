"use client";

import React, { useState } from "react";
import Footer from "@/src/components/footer";
import { ModeToggle } from "@/src/components/mode-toggle";
import { cn } from '@/src/lib/utils';

export default function BookSessionPage() {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const years = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() - 5 + i
  );
  const months = [
    "January","February","March","April","May","June",
    "July","August","September","October","November","December",
  ];
  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <ModeToggle />
      </div>

      <div className="w-full mx-auto bg-card rounded-lg shadow-lg p-6">
        <h2 className="text-lg font-semibold mb-4 text-foreground">Book a Session</h2>

        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="flex-1 space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Year</label>
              <select
                className="w-full p-2 border border-border bg-background text-foreground rounded-md"
                value={selectedYear}
                onChange={e => setSelectedYear(Number(e.target.value))}
              >
                {years.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-foreground">Month</label>
              <select
                className="w-full p-2 border border-border bg-background text-foreground rounded-md"
                value={selectedMonth}
                onChange={e => setSelectedMonth(Number(e.target.value))}
              >
                {months.map((m,i) => <option key={i} value={i}>{m}</option>)}
              </select>
            </div>
          </div>

          <div className="flex-1 mt-6 md:mt-0">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              {months[selectedMonth]} {selectedYear}
            </h3>
            <div className="grid grid-cols-7 gap-2">
              {['Mo','Tu','We','Th','Fr','Sa','Su'].map(d => (
                <div key={d} className="text-center font-medium text-muted-foreground">{d}</div>
              ))}
              {Array.from({ length: daysInMonth(selectedYear, selectedMonth) }).map((_, i) => (
                <div
                  key={i}
                  className={cn(
                    "text-center p-2 rounded-lg cursor-pointer",
                    selectedDate === i+1
                      ? 'bg-primary text-primary-foreground'
                      : 'hover:bg-muted'
                  )}
                  onClick={() => setSelectedDate(i+1)}
                >
                  {i+1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {selectedDate && (
          <p className="text-center text-lg font-semibold text-primary mt-4">
            Selected Date: {selectedDate} {months[selectedMonth]}, {selectedYear}
          </p>
        )}

        <div className="mt-6 space-y-4">
          {[
            { label: 'Timezone', options: ['Eastern Time (US & Canada)'] },
            { label: 'Duration', options: ['10 minutes'] },
            { label: 'Mode of Consultation', options: ['Chat'] },
            { label: 'Select Your Appointment Time', options: ['1:30 AM','2:00 AM','2:30 AM','3:00 AM'] }
          ].map(({ label, options }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-muted-foreground">{label}</label>
              <select className="w-full p-2 border border-border bg-background text-foreground rounded-md">
                {options.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-6">
          <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 w-full rounded-xl shadow-md transition">
            Book Session
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
