"use client";

// Imports
import React from "react";
import Image from "next/image";
import { Outfit, Urbanist } from "next/font/google";
import { motion } from "framer-motion";

// Font setup
const outfit = Outfit({ subsets: ["latin"], weight: ["700", "400"] });
const urbanist = Urbanist({ subsets: ["latin"], weight: ["400"] });

// SacredSpacesSection: Section displaying two sacred spaces as cards
export default function SacredSpacesSection() {
  return (
    // Main section with fade/scale animation on enter
    <motion.section
      className="w-full bg-[#171E34] py-20 px-4 gap-20 md:px-12 flex flex-col items-center"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "anticipate" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Container for section content */}
      <motion.div
        className="max-w-[1440px] w-full mx-auto flex flex-col gap-8"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: "backOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Header row: title and button */}
        <motion.div
          className="flex flex-row justify-between px-16 items-center w-full mb-8"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2
            className={`${outfit.className} text-white text-2xl md:text-3xl font-bold tracking-wide`}
          >
            OUR SACRED SPACES
          </h2>
          {/* Call-to-action button */}
          <button
            className="
              border-[1.5px] border-[#E0AE54]
              text-[#E0AE54]
              rounded-[8px]
              px-4 py-2
              w-[242px] h-[45px]
              flex items-center justify-center
              font-[600] uppercase tracking-[0.02em]
              text-[13px] leading-[150%]
              font-[Outfit,sans-serif]
              bg-transparent
              hover:bg-[#E0AE54] hover:text-[#171E34] transition-colors
            "
            style={{ letterSpacing: "2%" }}
          >
            DISCOVER UPCOMING EVENTS
          </button>
        </motion.div>
        {/* Cards row */}
        <div className="w-full flex flex-col md:flex-row gap-20 justify-center items-stretch">
          {/* Card 1: St. Mary and St. Maurice's Church */}
          <motion.div
            className="bg-[#10162A] border border-[#454B5D] rounded-[24px] overflow-hidden flex-1 min-w-[320px] max-w-[616px] flex flex-col"
            initial={{ opacity: 0, y: 120, scale: 0.85, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image for church land */}
            <div className="relative w-full aspect-[16/9] bg-[#232B44] h-[845px] flex items-center justify-center">
              {/* Church Land Photo */}
              <Image
                src="/Images/ContactUs/ChurchLand.png"
                alt="St. Mary and St. Maurice's Church Land"
                fill
                className="object-cover rounded-lg"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 616px) 100vw, 616px"
                unoptimized
              />
            </div>
            {/* Card content */}
            <div className="p-6 flex flex-col gap-2">
              <h6
                className={`${outfit.className} text-white text-[20px] font-bold leading-[120%] tracking-[0.02em] mb-2`}
              >
                ST. MARY AND ST. MAURICE&apos;S CHURCH
              </h6>
              {/* Address */}
              <div className="flex items-center gap-2 text-[#E8E9EB] text-[16px] mb-1">
                <Image
                  src="/Images/Icons/Location.png"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <span className={`${urbanist.className} ml-2`}>
                  388 Ottawa St S, Kitchener, Ontario, Canada N2M 3P4
                </span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-2 text-[#E8E9EB] text-[16px]">
                <Image
                  src="/Images/Icons/Phone.png"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <span className={`${urbanist.className} ml-2`}>
                  +1 519 570 2199
                </span>
              </div>
            </div>
          </motion.div>
          {/* Card 2: St. Mary's Retreat Center and St. Cyril VI's Chapel */}
          <motion.div
            className="bg-[#10162A] border border-[#454B5D] rounded-[24px] overflow-hidden flex-1 min-w-[320px] max-w-[616px] flex flex-col"
            initial={{ opacity: 0, y: 120, scale: 0.85, rotate: 6 }}
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 1,
              delay: 0.4,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Image for retreat center */}
            <div className="relative w-full aspect-[16/9] bg-[#232B44] flex h-[845px] items-center justify-center">
              {/* Cambridge Land Photo */}
              <Image
                src="/Images/ContactUs/CambridgeLand.png"
                alt="St. Mary's Retreat Center and St. Cyril VI's Chapel Land"
                fill
                className="object-cover rounded-lg"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 616px) 100vw, 616px"
                unoptimized
              />
            </div>
            {/* Card content */}
            <div className="p-6 flex flex-col gap-2">
              <h6
                className={`${outfit.className} text-white text-[20px] font-bold leading-[120%] tracking-[0.02em] mb-2`}
              >
                ST. MARY&apos;S RETREAT CENTER AND ST. CYRIL VI&apos;S CHAPEL
              </h6>
              {/* Address */}
              <div className="flex items-center gap-2 text-[#E8E9EB] text-[16px] mb-1">
                <Image
                  src="/Images/Icons/Location.png"
                  alt="Location"
                  width={20}
                  height={20}
                />
                <span className={`${urbanist.className} ml-2`}>
                  1708 Cheese Factory Rd, Branchton, ON N0B 1L0
                </span>
              </div>
              {/* Phone */}
              <div className="flex items-center gap-2 text-[#E8E9EB] text-[16px]">
                <Image
                  src="/Images/Icons/Phone.png"
                  alt="Phone"
                  width={20}
                  height={20}
                />
                <span className={`${urbanist.className} ml-2`}>
                  +44 16 8765 1098
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}
