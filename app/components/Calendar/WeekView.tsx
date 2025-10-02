"use client";

// Import dependencies
import React from "react";
import { Outfit, Raleway } from "next/font/google";
import { motion } from "framer-motion";

// Load Google fonts with specified weights
const outfit = Outfit({ subsets: ["latin"], weight: ["600"] });
const raleway = Raleway({ subsets: ["latin"], weight: ["400", "500", "600"] });

// Event and week data interfaces
interface Event {
  time: string;
  name: string;
  description: string;
}

interface WeekData {
  date: string;
  label: string;
  events: Event[];
}

// Mock data for a week's calendar events
const mockWeekData: WeekData[] = [
  {
    date: "Sun 17.09",
    label: "Sun",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Sunday Liturgy",
        description: "Weekly Holy Mass celebration.",
      },
      {
        time: "10.30AM–12PM",
        name: "Service Debrief",
        description: "Volunteer team wrap-up.",
      },
    ],
  },
  {
    date: "Mon 11.09",
    label: "Mon",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Divine Liturgy",
        description: "Join us for the Divine Liturgy.",
      },
      {
        time: "12.00AM–12PM",
        name: "Youth Meeting",
        description: "Discussion and Q&A.",
      },
    ],
  },
  {
    date: "Tue 12.09",
    label: "Tue",
    events: [
      {
        time: "12.00AM–12PM",
        name: "Choir Practice",
        description: "Weekly hymn rehearsal.",
      },
    ],
  },
  {
    date: "Wed 13.09",
    label: "Wed",
    events: [
      {
        time: "12.00AM–12PM",
        name: "Bible Study",
        description: "Scripture reading and reflection.",
      },
    ],
  },
  {
    date: "Thu 14.09",
    label: "Thu",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Seniors Fellowship",
        description: "Lunch & talk for elders.",
      },
      {
        time: "10.30AM–12PM",
        name: "Teen Workshop",
        description: "Building healthy habits.",
      },
    ],
  },
  {
    date: "Fri 15.09",
    label: "Fri",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Akathist Hymns",
        description: "Evening praises in English.",
      },
    ],
  },
  {
    date: "Sat 16.09",
    label: "Sat",
    events: [
      {
        time: "10.30AM–12PM",
        name: "Kids Camp",
        description: "Outdoor activities and prayer.",
      },
      {
        time: "10.30AM–12PM",
        name: "Young Adults",
        description: "Talk: Faith in Uni Life.",
      },
    ],
  },
];

// Component for rendering a single day's column in the week view
const DayColumn = ({ day, index }: { day: WeekData; index: number }) => {
  return (
    <motion.div
      // Animate the column entrance
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: 0.2 + index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 12,
      }}
      className="flex flex-col gap-4"
    >
      {/* Day Header */}
      <motion.div
        // Animate the header entrance
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
        className="text-center text-white relative overflow-hidden rounded-[8px]
                   backdrop-blur-sm bg-gradient-to-br from-white/10 via-white/5 to-transparent
                   border border-white/10 p-3 shadow-lg shadow-black/20"
        style={{
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, rgba(0,0,0,0.1) 100%)",
          boxShadow:
            "0 4px 16px rgba(0,0,0,0.2), inset 0 1px 1px rgba(255,255,255,0.1)",
        }}
      >
        {/* Display the date */}
        <h4
          className={`${raleway.className} font-semibold text-[18px] leading-[120%] relative z-10 drop-shadow-sm`}
        >
          {day.date}
        </h4>
      </motion.div>

      {/* Events Column */}
      <div className="flex flex-col gap-4">
        {/* Render each event for the day */}
        {day.events.map((event, idx) => (
          <motion.div
            key={idx}
            // Animate event card entrance and hover
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + index * 0.1 + idx * 0.1,
            }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            className="bg-[#570901]/80 backdrop-blur-sm rounded-[10px] px-4 py-3 w-full relative overflow-hidden
                       border border-white/10 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30
                       hover:bg-[#570901]/90 transition-all duration-200"
            style={{
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              background:
                "linear-gradient(135deg, rgba(87,9,1,0.8) 0%, rgba(87,9,1,0.6) 50%, rgba(0,0,0,0.2) 100%)",
              boxShadow:
                "0 6px 24px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1), inset 0 -1px 1px rgba(0,0,0,0.2)",
            }}
          >
            {/* Event time */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.7 + index * 0.1 + idx * 0.1,
              }}
              className={`${outfit.className} text-[14px] font-[600] uppercase text-[#F2E7E6] relative z-10 drop-shadow-sm`}
            >
              {event.time}
            </motion.p>
            {/* Event name */}
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.8 + index * 0.1 + idx * 0.1,
              }}
              className={`${raleway.className} text-[16px] font-[500] text-white mt-1 relative z-10 drop-shadow-sm`}
            >
              {event.name}
            </motion.h3>
            {/* Event description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.9 + index * 0.1 + idx * 0.1,
              }}
              className={`${raleway.className} text-[14px] font-[400] text-[#F2E7E6] mt-1 relative z-10 drop-shadow-sm`}
            >
              {event.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Main WeekView component to render the week grid
const WeekView = () => {
  return (
    <motion.div
      // Animate the overall week view entrance/exit
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
      className="pt-8 w-full"
    >
      <motion.div
        // Animate the grid appearance
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="grid grid-cols-7 gap-6 w-full"
      >
        {/* Render each day column */}
        {mockWeekData.map((day, index) => (
          <DayColumn key={index} day={day} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default WeekView;
