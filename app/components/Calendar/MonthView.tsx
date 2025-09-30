"use client";

import React from "react";
import { Outfit, Raleway } from "next/font/google";
import { motion } from "framer-motion";

// Load Google fonts with specific weights
const outfit = Outfit({ subsets: ["latin"], weight: ["700"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "600"] });

// Days of the week labels
const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Event and CalendarDay interfaces for type safety
interface Event {
  time: string;
  name: string;
}

interface CalendarDay {
  day: number;
  events: Event[];
}

// Mock data for a month (5 weeks, each with days and events)
const mockMonth: CalendarDay[][] = [
  // Week 1
  [
    {
      day: 1,
      events: [
        { time: "11:30 AM", name: "Event Name" },
        { time: "01:30 AM", name: "Event Name" },
        { time: "12:30 AM", name: "Event Name" },
      ],
    },
    { day: 2, events: [{ time: "11:30 AM", name: "Event Name" }] },
    { day: 3, events: [] },
    { day: 4, events: [] },
    { day: 5, events: [] },
    { day: 6, events: [] },
    { day: 7, events: [] },
  ],
  // Week 2
  [
    { day: 8, events: [] },
    { day: 9, events: [] },
    { day: 10, events: [] },
    { day: 11, events: [] },
    { day: 12, events: [] },
    { day: 13, events: [] },
    { day: 14, events: [] },
  ],
  // Week 3 – Add more weeks as needed
  [
    { day: 15, events: [] },
    { day: 16, events: [] },
    { day: 17, events: [] },
    { day: 18, events: [] },
    { day: 19, events: [] },
    { day: 20, events: [] },
    { day: 21, events: [] },
  ],

  [
    { day: 22, events: [] },
    { day: 23, events: [] },
    { day: 24, events: [] },
    { day: 25, events: [] },
    { day: 26, events: [] },
    { day: 27, events: [] },
    { day: 28, events: [] },
  ],
  [
    { day: 29, events: [] },
    { day: 30, events: [] },
    { day: 31, events: [] },
  ],
];

// MonthView component renders the animated calendar month view
const MonthView = () => {
  return (
    // Main container with entrance/exit animation
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        type: "spring",
        stiffness: 100,
        damping: 15,
      }}
      className="pt-8 space-y-4 text-white"
    >
      {/* Month Label */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center"
      >
        <h2 className={`${outfit.className} text-[20px] font-bold`}>
          September 2024
        </h2>
      </motion.div>

      {/* Days of the Week Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="grid grid-cols-7 text-center text-white border-b border-[#570901] pb-2"
      >
        {daysOfWeek.map((day, idx) => (
          <div
            key={idx}
            className={`${raleway.className} text-[18px] font-semibold`}
          >
            {day}
          </div>
        ))}
      </motion.div>

      {/* Calendar Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="grid grid-cols-7 gap-2"
      >
        {/* Flatten the weeks into a single array for rendering */}
        {mockMonth.flat().map((calendarDay, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + index * 0.03,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            className="h-[205px] px-2 py-2 border border-[#570901] rounded-[8px] flex flex-col gap-2 relative overflow-hidden
                       backdrop-blur-sm bg-gradient-to-br from-white/10 via-white/5 to-transparent
                       shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30
                       before:absolute before:inset-0 before:bg-gradient-to-br before:from-white/20 before:via-transparent before:to-black/10 before:opacity-50
                       after:absolute after:inset-0 after:bg-gradient-to-t after:from-[#570901]/20 after:to-transparent"
            style={{
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.2), inset 0 -1px 1px rgba(0,0,0,0.1)",
            }}
          >
            {/* Day Number */}
            <div
              className={`${raleway.className} text-[18px] font-semibold text-white relative z-10 drop-shadow-sm`}
            >
              {calendarDay.day}
            </div>

            {/* Events for the day */}
            <div className="flex flex-col gap-2 relative z-10">
              {calendarDay.events.map((event, eIndex) => (
                <motion.div
                  key={eIndex}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.7 + index * 0.03 + eIndex * 0.1,
                  }}
                  className="bg-[#570901]/80 backdrop-blur-sm text-[#F2E7E6] text-[12px] font-normal rounded-md px-3 py-1
                             border border-white/10 shadow-sm hover:bg-[#570901]/90 transition-all duration-200
                             hover:scale-105 hover:shadow-md"
                  style={{
                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                  }}
                >
                  {/* Event time and name */}
                  {event.time} {event.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default MonthView;
