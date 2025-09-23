"use client";
// Imports
import React from "react";
import { motion } from "framer-motion";
import { Urbanist, Outfit, Raleway } from "next/font/google";

// Font setup
const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// ConnectWithFathersForm: Contact form section with animated fields and button
export default function ConnectWithFathersForm() {
  return (
    // Outer background and border container
    <div className="w-full bg-[#B7B9C0] py-[100px] px-6 md:px-12 flex border border-[#646877] justify-center">
      {/* Outer Container for Text & Form */}
      <div className="w-full max-w-[1280px] flex flex-col lg:flex-row justify-between items-start gap-12">
        {/* Left Side - Text Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.3 }}
          viewport={{ once: true }}
          className="flex-1 flex flex-col justify-center gap-6 h-full"
        >
          {/* Heading and description */}
          <motion.h3
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className={`${urbanist.className} text-[52px] font-extrabold leading-[120%] tracking-[-0.02em] text-[#171E34]`}
            style={{
              width: "667px",
              height: "62px",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 800,
              letterSpacing: "-2%",
            }}
          >
            Connect With Our Fathers
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
            }}
            viewport={{ once: true }}
            className={`${urbanist.className} text-[18px] font-bold leading-[150%] tracking-[0.02em] text-[#454B5D]`}
            style={{
              width: "448px",
              height: "54px",
              fontFamily: "Urbanist, sans-serif",
              fontWeight: 700,
              letterSpacing: "2%",
            }}
          >
            Please use this form to schedule a confession, request a prayer, or
            submit inquiries.
          </motion.p>
        </motion.div>

        {/* Right Side - Form Container */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          whileInView={{ height: "auto", opacity: 1 }}
          transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
          viewport={{ once: true }}
          className="flex-1 bg-[#0A0D16] text-white p-8 gap-12 rounded-[24px] border border-[#151B2F] shadow-2xl backdrop-blur-xl"
          style={{
            width: "627px",
            height: "742px",
            borderWidth: "1px",
            borderColor: "#151B2F",
            backgroundColor: "#0A0D16",
            padding: "32px",
            gap: "48px",
            perspective: "900px",
            boxShadow:
              "0 8px 32px 0 rgba(30, 30, 40, 0.25), 0 1.5px 8px 0 rgba(224, 174, 84, 0.08)",
            transform: "translateZ(0) rotateX(2deg) rotateY(-2deg)",
          }}
        >
          {/* Form Placeholder */}
          <form className="w-full flex flex-col gap-[48px]">
            {/* Input Fields */}
            <motion.div
              // Name field
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.5,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-[8px]"
            >
              <label
                className={`${outfit.className} text-[14px] font-semibold leading-[150%] tracking-[0.02em] text-white uppercase`}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2%",
                }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="First & Last Name"
                className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D] focus:border focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                style={{
                  width: "563px",
                  height: "56px",
                  fontFamily: "Raleway, sans-serif",
                }}
              />
            </motion.div>

            <motion.div
              // Email field
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.7,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-[8px]"
            >
              <label
                className={`${outfit.className} text-[14px] font-semibold leading-[150%] tracking-[0.02em] text-white uppercase`}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2%",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                placeholder="email@gmail.com"
                className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D] focus:border focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                style={{
                  width: "563px",
                  height: "56px",
                  fontFamily: "Raleway, sans-serif",
                }}
              />
            </motion.div>

            <motion.div
              // Subject field
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 1.9,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-[8px]"
            >
              <label
                className={`${outfit.className} text-[14px] font-semibold leading-[150%] tracking-[0.02em] text-white uppercase`}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2%",
                }}
              >
                Subject
              </label>
              <input
                type="text"
                placeholder="ex: confession"
                className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D] focus:border focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                style={{
                  width: "563px",
                  height: "56px",
                  fontFamily: "Raleway, sans-serif",
                }}
              />
            </motion.div>

            {/* Message Section */}
            <motion.div
              // Message textarea
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.1,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex flex-col gap-[8px]"
            >
              <label
                className={`${outfit.className} text-[14px] font-semibold leading-[150%] tracking-[0.02em] text-white uppercase`}
                style={{
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 600,
                  letterSpacing: "2%",
                }}
              >
                Message
              </label>
              <textarea
                placeholder="What is your inquiry..."
                className={`${raleway.className} h-[120px] rounded-[16px] p-[14px] bg-[#151B2F] text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-2 focus:ring-[#E5A93D] focus:border focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                style={{
                  width: "563px",
                  height: "120px",
                  fontFamily: "Raleway, sans-serif",
                }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                duration: 1.2,
                delay: 2.3,
                type: "spring",
                bounce: 0.6,
              }}
              viewport={{ once: true }}
              className="relative z-[100]"
              style={{ pointerEvents: "auto" }}
            >
              <motion.button
                // Animated submit button with shine effect
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#1f2640",
                  boxShadow:
                    "0 12px 35px rgba(23, 30, 52, 0.5), 0 6px 20px rgba(23, 30, 52, 0.4)",
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                whileTap={{ scale: 0.95 }}
                className={`${outfit.className} w-full h-[45px] rounded-[8px] px-[16px] py-[16px] text-[14px] font-semibold bg-[#E0AE54] text-white flex items-center justify-center relative cursor-pointer border border-white/10 shadow-2xl hover:shadow-2xl hover:border-white/20 transition-all duration-200 ease-out overflow-hidden backdrop-blur-md`}
                style={{
                  width: "563px",
                  height: "45px",
                  fontFamily: "Outfit, sans-serif",
                  fontWeight: 700,
                  backgroundColor: "#E0AE54",
                  borderRadius: "8px",
                  boxShadow:
                    "0 4px 16px 0 rgba(30,30,40,0.22), 0 2px 8px 0 rgba(224,174,84,0.10)",
                  pointerEvents: "auto",
                }}
                type="submit"
              >
                <span className="relative z-10">SUBMIT</span>

                {/* Button Shine Effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileInView={{ x: "100%", opacity: [0, 1, 0] }}
                  transition={{ duration: 2, delay: 1.5 }}
                  viewport={{ once: true }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 skew-x-12"
                />

                {/* Hover shine effect */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  whileHover={{
                    x: "100%",
                    opacity: [0, 0.3, 0],
                    transition: { duration: 0.6, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 skew-x-12"
                />
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
