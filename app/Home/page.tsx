"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Hero from "../components/Hero";
import CalendarViewSwitcherWrapper from "../components/Calendar/CalenarViewSwitcherWrapper";
import { Urbanist, Outfit, Raleway, Zilla_Slab } from "next/font/google";
import ImageTextBlock from "../components/ImageTextBlock";
import { motion } from "framer-motion";
import MahraganKids from "../../public/Images/Home/MahraganKids.jpg";
import Choir from "../../public/Images/Home/Choir.jpeg";
import Tasbeha from "../../public/Images/Home/St.MaryTasbeha.jpeg";
import Hall from "../../public/Images/Home/St.MauriceHall.jpeg";
import Priests from "../../public/Images/Home/Priests.jpeg";
import Gym from "../../public/Images/Home/Gym.jpeg";
import Tree from "../../public/Images/Home/St.MaryTree.jpeg";
import Box from "../../public/Images/Home/PrayerBox.png";
import Kids from "../../public/Images/Home/KidsPaintings.png";
import Abouna from "../../public/Images/Home/AbounasHand.png";

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
const zillaSlab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

// Main Home page component for St. Mary & St. Maurice Church
export default function Home() {
  // State to control animation sequencing for header
  const [titleDone] = useState(false);
  const [descriptionDone, setDescriptionDone] = useState(false);
  const [showHeroButton, setShowHeroButton] = useState(false);

  // Show button after description animation completes
  useEffect(() => {
    if (descriptionDone) {
      const timer = setTimeout(() => setShowHeroButton(true), 2000); // 2s after desc
      return () => clearTimeout(timer);
    } else {
      setShowHeroButton(false);
    }
  }, [descriptionDone]);

  // State for calendar view (day/week/month)
  const [calendarView, setCalendarView] = useState<"day" | "week" | "month">(
    "day"
  );

  // Handle calendar view changes
  const handleCalendarViewChange = (view: "day" | "week" | "month") => {
    setCalendarView(view);
  };

  // Dynamic triangle shape for calendar background
  const getTriangleClipPath = () => {
    switch (calendarView) {
      case "day":
        return "polygon(50% 31.25%, 100% 0, 100% 100%, 0 100%, 0 0)"; // Larger triangle
      case "week":
        return "polygon(50% 35.5%, 100% 0, 100% 100%, 0 100%, 0 0)"; // Medium triangle
      case "month":
        return "polygon(50% 21.35%, 100% 0, 100% 100%, 0 100%, 0 0)"; // Smaller triangle
      default:
        return "polygon(50% 20%, 100% 0, 100% 100%, 0 100%, 0 0)";
    }
  };

  {
    /* ------------------------------------HOME PAGE------------------------------------- */
  }

  return (
    <>
      {/* Background image and animated overlays */}
      <div className="relative w-full min-h-screen overflow-hidden">
        {/* BACKGROUND IMAGE SECTION - St Mary Church Background */}
        <div className="absolute inset-0 z-0 bg-[#171E34]">
          <div className="relative w-full h-full overflow-hidden">
            {/* Removed motion.div animation from the background image */}
            <div className="relative w-full h-full">
              <Image
                src="/Images/Home/StMaryChurchBackground.png"
                alt="St Mary Church Background"
                width={1512}
                height={379.7890625}
                className="object-cover object-center -translate-y-75 -translate-x-9.5 scale-110"
              />

              {/* Animated overlay for depth */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.15 }}
                transition={{ duration: 3, delay: 1 }}
                className="absolute inset-0 bg-gradient-to-b from-transparent via-[#171E34]/20 to-[#171E34]/40"
              />

              {/* Subtle floating particles */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 1.5 }}
                className="absolute inset-0"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 20,
                      x: Math.random() * 100,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 0.6, 0],
                      y: -80,
                      x: Math.random() * 200,
                      scale: [0, 1, 0.5],
                    }}
                    transition={{
                      duration: 4 + Math.random() * 2,
                      delay: Math.random() * 3,
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${80 + Math.random() * 20}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
            {/* Subtle overlay to ensure text readability */}{" "}
          </div>
        </div>

        {/* Header section: Living Orthodoxy, Faith, Family, Fellowship */}
        <div className="bg-gradient-to-b from-[rgba(23,30,52,0.3)] via-[rgba(23,30,52,0.2)] to-[rgba(23,30,52,0.4)] overflow-hidden">
          <div className="w-full h-[1000px] md:h-[800px] sm:h-[750px] pt-[100px] relative overflow-hidden">
            {/* 1st Header Section */}
            <div className="w-full max-w-[1512px] h-[548px] mx-auto relative px-[100px] flex justify-center items-center gap-[24px]">
              {/* Text Components Frame*/}
              <div className="w-full max-w-[1124px] h-[411px] gap-[26px] flex flex-col items-center justify-center">
                {/* Text Components */}
                <div className="flex flex-col items-center gap-[32px] pt-10">
                  {/* Living Orthodoxy */}
                  {/* Animation removed from this badge */}
                  <div className="w-[267px] h-[41px] rounded-[25px] py-[6px] px-[14px] gap-[8px] bg-[#FDEFD5] bg-opacity-95 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-sm cursor-pointer">
                    <p
                      className={`${zillaSlab.className} w-[239px] h-[29px] font-[600] text-[24px] leading-[120%] tracking-[0.02em] text-[#896F41] drop-shadow-md`}
                    >
                      LIVING ORTHODOXY
                    </p>
                  </div>

                  {/* Faith, Family, Fellowship */}
                  {/* Animation removed from this section */}
                  <div className="w-full h-[80px] relative">
                    <h3
                      className={`${outfit.className} font-[700] text-[64px] tracking-[0.02em] text-white drop-shadow-2xl`}
                      style={{
                        textShadow:
                          "3px 6px 12px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.5)",
                      }}
                    >
                      <span className="inline-block mr-2">FAITH, </span>
                      <span className="inline-block mr-2">FAMILY, </span>
                      <span className="inline-block">FELLOWSHIP</span>
                    </h3>
                  </div>
                  {/* End animation removed */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yellow Text Section with floating particles and join us text */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
              type: "spring",
              duration: 1.2,
              bounce: 0.4,
            },
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 -mt-[150px] overflow-hidden"
        >
          {/* Floating Particles */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute inset-0 z-5"
            style={{ pointerEvents: "none" }}
          >
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 50,
                  x: Math.random() * 100 - 50,
                  scale: 0,
                }}
                whileInView={{
                  opacity: [0, 1, 0],
                  y: -100,
                  x: Math.random() * 200 - 100,
                  scale: [0, 1, 0.5],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: Math.random() * 2,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                viewport={{ once: true }}
                className="absolute w-2 h-2 opacity-10"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
              >
                {/* Coptic Cross shape */}
                <div className="relative w-full h-full p-0.5">
                  {/* Vertical bar with flared ends */}
                  <div className="absolute left-1/2 top-0 w-0.5 h-full bg-white/30 transform -translate-x-1/2">
                    {/* Top flare */}
                    <div className="absolute -top-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-0.5 bg-white/30 rounded-t-full"></div>
                    {/* Bottom flare */}
                    <div className="absolute -bottom-0.5 left-1/2 transform -translate-x-1/2 w-1.5 h-0.5 bg-white/30 rounded-b-full"></div>
                  </div>
                  {/* Horizontal bar with flared ends */}
                  <div className="absolute top-1/2 left-0 w-full h-0.5 bg-white/30 transform -translate-y-1/2">
                    {/* Left flare */}
                    <div className="absolute -left-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-1.5 bg-white/30 rounded-l-full"></div>
                    {/* Right flare */}
                    <div className="absolute -right-0.5 top-1/2 transform -translate-y-1/2 w-0.5 h-1.5 bg-white/30 rounded-r-full"></div>
                  </div>
                  {/* Center circle (typical of Coptic crosses) */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1 h-1 bg-white/30 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 15 }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              transition: {
                delay: 0.2,
                duration: 1.2,
                type: "spring",
                bounce: 0.3,
              },
            }}
            viewport={{ once: true }}
            className="w-full h-[380px] mx-auto px-[100px] rounded-[64px] gap-[24px] flex items-center justify-between bg-[rgba(177,143,84,0.8)] border border-[rgba(177,143,84,0.4)] z-10 relative overflow-hidden"
            style={{
              background: "rgba(177,143,84,0.8)",
              border: "1px solid rgba(177,143,84,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
            }}
          >
            {/* Animated Background Pattern */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 0.1, scale: 1 }}
              transition={{ duration: 2, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute inset-0"
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-2 border-white rounded-full opacity-20"
              />
              <motion.div
                animate={{
                  rotate: [360, 0],
                  scale: [1, 0.9, 1],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-white rounded-full opacity-10"
              />
            </motion.div>

            {/* Text and Button Section */}
            <div className="w-full h-[144px] flex flex-col md:flex-row gap-[32px] md:gap-[120px] items-center justify-between relative z-10">
              {/* "Join us..." text */}
              <div className="flex-1 flex flex-col justify-center items-start">
                <p
                  className={`${outfit.className} max-w-[969px] font-[700] text-[40px] leading-[120%] tracking-[0.02em] text-white`}
                  style={{
                    textShadow:
                      "3px 3px 12px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6), 0 0 30px rgba(255, 255, 255, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)",
                  }}
                >
                  Join us at{" "}
                  <span className="font-[800]">
                    St. Mary and St. Maurice&apos;s Coptic Orthodox Church
                  </span>
                  , where ancient traditions meet modern hearts in Kitchener.
                </p>
              </div>
              {/* Button as shown in the Figma screenshot */}
              <div className="flex-shrink-0 mt-6 md:mt-0">
                <button
                  className={`${outfit.className} w-[185px] h-[45px] bg-[#171E34] text-white font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                    flex items-center justify-center relative cursor-pointer border-2 border-transparent
                    shadow-lg hover:shadow-xl hover:border-white/20 transition-all duration-200 ease-out overflow-hidden`}
                  style={{ pointerEvents: "auto" }}
                >
                  <span className="relative z-10">VISIT US THIS SUNDAY</span>
                </button>
              </div>
            </div>

            {/* Corner Decorations - REMOVED */}
          </motion.div>
        </motion.div>

        {/* CALENDAR SECTION - Upcoming Events & Announcements */}
        <section className="relative w-full text-white z-50 overflow-hidden">
          {/* Red background with triangle mask (creates hollow triangle) */}
          <motion.div
            className="absolute inset-0 bg-[#430600] z-0"
            style={{
              clipPath: getTriangleClipPath(),
            }}
          ></motion.div>

          {/* Fixed Background Decorative Elements */}

          {/* Dynamic Content Container */}
          <div className="relative z-10 w-full">
            <div className="max-w-[1512px] px-[100px] pt-[450px] pb-[20px] mx-auto"></div>

            <section className="w-full md:px-12 xl:px-24 py-8 bg-transparent flex flex-col">
              <div className="max-w-[1312px] mx-auto space-y-6 relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                    className={`${outfit.className} text-[64px] md:text-5xl font-[700] leading-[120%] tracking-[0.02em] text-white`}
                  >
                    UPCOMING EVENTS & COMMUNITY ANNOUNCEMENTS
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                    className={`${outfit.className} text-[32px] md:text-2xl mt-2 font-[700] leading-[120%] tracking-[0.02em] text-white`}
                  >
                    Stay Updated with Our Upcoming Church Events and Activities
                  </motion.p>
                </motion.div>

                {/* Calendar Component Container - Dynamic Height */}
                <div>
                  <CalendarViewSwitcherWrapper
                    onViewChange={handleCalendarViewChange}
                  />
                </div>

                {/* EXPLORE CHURCH EVENTS Button */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{
                    duration: 1.2,
                    delay: 0.5,
                    type: "spring",
                    bounce: 0.6,
                  }}
                  viewport={{ once: true }}
                  className="relative flex justify-center mt-4 pt-4 pb-8"
                >
                  <motion.button
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.1,
                      boxShadow:
                        "0 8px 30px rgba(224, 174, 84, 0.4), 0 4px 15px rgba(224, 174, 84, 0.3)",
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    whileTap={{ scale: 0.98 }}
                    className={`${outfit.className} w-[216px] h-[45px] bg-[#E0AE54] text-[#430600] font-[600] text-[12px] leading-[120%] tracking-[0.02em] rounded-[8px] 
                  flex items-center justify-center relative z-10 overflow-hidden cursor-pointer
                  shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out
                  hover:bg-[#d4a049] active:bg-[#c89840] flex-shrink-0 whitespace-nowrap`}
                  >
                    <motion.span
                      className="relative z-10"
                      whileHover={{
                        textShadow: "0 2px 8px rgba(67, 6, 0, 0.3)",
                        transition: { duration: 0.2 },
                      }}
                    >
                      EXPLORE CHURCH EVENTS
                    </motion.span>

                    {/* Button Shine Effect */}
                    <motion.div
                      initial={{ x: "-100%", opacity: 0 }}
                      whileInView={{ x: "100%", opacity: [0, 1, 0] }}
                      transition={{ duration: 2, delay: 1.2 }}
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
              </div>
            </section>
          </div>
        </section>
      </div>

      {/* 35 YEARS OF SERVICE VIDEO SECTION */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="w-full pt-[100px] pr-[100px] pl-[100px] pb-[100px] gap-[80px] bg-[#E8E9EB] items-center text-center flex flex-col"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className={`${outfit.className} font-bold text-4xl leading-[120%] tracking-[0.02em] text-[#0A0D16]`}
        >
          35 YEARS OF SERVICE
        </motion.h3>

        {/* 🎥 Video Block */}
        <motion.video
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-7xl w-full h-auto rounded-lg shadow-lg"
          controls
          autoPlay={false}
          loop={true}
        >
          <source src="/videos/Abouna35thAnniversary.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
      </motion.div>

      {/* Youth & Kids Services Section */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText="Youth & Kids Services"
        roundedBgColor="#FDEFD5"
        roundedTextColor="#896F41"
        title="Engaging and Inspiring Youth & Kids"
        titleColor="#000000"
        textColor=""
        image={MahraganKids}
        altText="A picture of the kids recieving rewards from Mahragan."
        bgColor="#FEFAF1"
        btnTxt="EXPLORE ALL MINISTRIES"
        btnColor="#7A0C02"
        btnHoverColor="#171E34"
        btnTextColor="#FFFFFF"
      >
        Explore a variety of engaging programs for youth and kids at our church,
        from Sunday School to Kids Camp and Fine Arts Service, all crafted to
        nurture faith and foster personal growth.
      </ImageTextBlock>

      {/* Adults Services Section */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText="Adults Services"
        roundedBgColor="#F2E7E6"
        roundedTextColor="#430701"
        title="Diverse Ministries for Adults"
        titleColor="#000000"
        textColor=""
        image={Choir}
        altText="A picture of the choir from St. Mary's."
        bgColor="#FFFFFF"
        btnTxt="GET INVOLVED TODAY"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#7A0C02"
        borderColor="#7A0C02"
      >
        Join various adult ministries, from Family and Senior ministries to
        Young Adult Ministries and the Adults Choir. Enrich your spiritual and
        social life with us.
      </ImageTextBlock>

      {/* Educational Services Section */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText="Educational Services"
        roundedBgColor="#E8E9EB"
        roundedTextColor="#0A0D16"
        title="Nurture Your Spiritual Intelligence & Join Our Educational Services"
        titleColor="#FFFFFF"
        textColor="#E8E9EB"
        image={Tasbeha}
        altText="A picture of youth doing Tasbeha in St. Mary's"
        bgColor="#171E34"
        btnTxt="CHECK NOW"
        btnColor="#171E34"
        btnHoverColor=""
        btnTextColor="#E0AE54"
        borderColor="#E0AE54"
      >
        Deepen your faith, illuminate your life and empower your spiritual
        journey with our educational services.
      </ImageTextBlock>

      {/* Community Services Section */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText="Community Services"
        roundedBgColor="#FDEFD5"
        roundedTextColor="#896F41"
        title="Serving Hearts and Enriching the Community"
        titleColor="#171E34"
        textColor="#151B2F"
        image={Hall}
        altText="A picture of St. Maurice Hall"
        bgColor="#E8E9EB"
        btnTxt="ALL COMMUNITY MINISTRIES"
        btnColor="#171E34"
        btnHoverColor=""
        btnTextColor="#FFFFFF"
        borderColor="#171E34"
      >
        Join our dynamic Community Ministries to make a real difference.
        Participate today and elevate your impact; everyone has a role.
      </ImageTextBlock>

      {/* Priests Section */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Where Faith Meets Family and Fellowship"
        titleColor="#000000"
        textColor=""
        image={Priests}
        altText="A picture of priests."
        bgColor="#FEFAF1"
        btnTxt="LEARN MORE ABOUT SMSM"
        btnColor="#7A0C02"
        btnHoverColor="#171E34"
        btnTextColor="#FFFFFF"
      >
        St. Mary and St. Maurice&apos;s Coptic Orthodox Church in Kitchener
        embodied a fusion of Orthodox tradition with a vibrant community spirit.
        Here, faith, education, and service unite, fostering spiritual growth
        and compassionate outreach. All are welcome to explore faith and journey
        together in Christ&apos;s love.
      </ImageTextBlock>

      {/* Book & Schedule Section */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Book Your Space & Plan Your Event"
        titleColor="#000000"
        textColor=""
        image={Gym}
        altText="A picture of the St. Maurice gym."
        bgColor="#FFFFFF"
        btnTxt="SCHEDULE TODAY"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor="#000000"
      >
        Join various adult ministries, from Family and Senior ministries to
        Young Adult Ministries and the Adults Choir. Enrich your spiritual and
        social life with us.
      </ImageTextBlock>

      {/* Explore Our Spiritual Resources Section */}
      <Hero
        overlayColor="#171E34EB"
        image={Tree}
        altText="Vespers in St Mary's church"
        textPosition="Center"
        title={<div className="pt-[50px]">Explore Our Spiritual Resources</div>}
        titleSize="36px"
        textColor="white"
        textWidth="540px"
        descriptionText="We provide resources for spiritual growth. Discover Orthodox teachings, prayer guides, and scholarly articles. Access sermons, educational tools, and community resources to deepen your faith."
        descriptionColor="#E8E9EB"
        descriptionSize="18px"
        overlayOpacity={0.8}
        height="500px"
        imagePlacement="40%"
        buttonText="ACCESS SPIRITUAL RESOURCES"
        buttonColor="#E0AE54"
        buttonTextColor="#171E34"
        buttonLink=""
      />

      {/* Unite in Generosity Section */}
      <ImageTextBlock
        inverted={true}
        showTag={true}
        roundedText=""
        roundedBgColor=""
        roundedTextColor=""
        title="Unite in Generosity"
        titleColor="#000000"
        textColor=""
        image={Box}
        altText="A picture of Prayer Box."
        bgColor="#E8E9EB"
        btnTxt="DONATE"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor=""
      >
        Your giving creates a legacy that inspires and uplifts. Help us sustain
        our programs, preserve traditions, and encourage new ones.
      </ImageTextBlock>

      {/* Kids Paintings / Volunteer Section */}
      <ImageTextBlock
        inverted={false}
        showTag={true}
        roundedText=""
        roundedBgColor="#FFFFFF"
        roundedTextColor=""
        title="Serve with Us and Volunteer"
        titleColor="#000000"
        textColor=""
        image={Kids}
        altText="A picture of kids with paintings."
        bgColor="#FFFFFF"
        btnTxt="VOLUNTEER"
        btnColor="#FFFFFF"
        btnHoverColor=""
        btnTextColor="#000000"
        borderColor="Black"
      >
        Join us in making a meaningful impact. Share your talents and time to
        enrich our community through acts of service and faith. Together, we can
        strengthen our bonds and uplift those in need.
      </ImageTextBlock>

      {/* Renew Your Spirit Section */}
      <Hero
        overlayColor="#E0AE546B"
        image={Abouna}
        altText="Vespers in St Mary's church"
        textPosition="Center"
        title={<div className="pt-[50px]">Renew Your Spirit</div>}
        titleSize="36px"
        textColor="white"
        textWidth="540px"
        descriptionText="Schedule a confidential confession with your father, 
        and find peace, guidance, and the transformative grace of Christ as you embrace a path of healing and 
        reconciliation."
        descriptionColor="#E8E9EB"
        descriptionSize="18px"
        overlayOpacity={0.8}
        height="500px"
        imagePlacement="20%"
        buttonText="SCHEDULE A CONFESSION"
        buttonColor="#E0AE54"
        buttonTextColor="#FFFFFF"
        buttonLink=""
        contentAlignment="left"
        textAlignment="left"
      />

      {/* Captured Moments Gallery Section */}
      <div className="w-full bg-[#E8E9EB] flex flex-col items-center pb-25 px-6 md:px-12">
        <Hero
          backgroundColor="#E8E9EB"
          altText="Priests and Bishop in Altar"
          textPosition="Center"
          subtitle="Captured Moments"
          title={<div className="pt-[10px]">A look back at our events</div>}
          titleSize="36px"
          textColor="#0A0D16"
          textWidth="522px"
          descriptionText="Explore our gallery to relive moments at St Mary and St Maurice's. From celebrations to workship, each photo tells a story of faith, devotion and community."
          descriptionColor="#151B2F"
          descriptionSize="18px"
          overlayOpacity={0.8}
          height="500px"
          imagePlacement="40%"
          buttonText="VIEW OUR GALLERY"
          buttonColor="White"
          buttonTextColor="#171E34"
          buttonLink=""
        />

        <div className="relative w-full max-w-[1400px] aspect-[2.5/1] rounded-xl overflow-hidden shadow-md mx-auto">
          <Image
            src="/images/Clergy.jpg"
            alt="Clergy in Altar"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
            priority
          />

          {/* Centered Play Button */}
          <a
            href="https://photos.google.com/share/AF1QipOMYuoJTuEZ0hQfWszzH5GW4ifZLQI11A8lVFQlEgFLCvDWNKqr7Yzd97XFFitCtg?key=eElIVDlka3k5YVM3LXlNOGV4MDVkcXRlOTdBTjhB"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="bg-white p-4 rounded-full shadow-lg hover:scale-105 transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-[#7A0C02]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </a>
        </div>
      </div>

      {/* Reach Out Contact Form Section */}
      <div className="w-full bg-[#0D111D] py-[100px] px-6 md:px-12 flex border border-[#646877] justify-center">
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
              className={`${urbanist.className} text-[32px] md:text-[52px] font-[700] leading-[120%] tracking-[-0.02em] text-[#ffffff]`}
            >
              REACH OUT
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
              className={`${urbanist.className} text-[18px] md:text-[18px] font-[400] leading-[150%] tracking-[0.02rem] text-[#E8E9EB]`}
            >
              Please contact us with any questions regarding our ministries,
              masses, or upcoming events. We are here to assist you.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.5,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Image
                src="/Images/Icons/Location.png"
                alt="Location"
                width={16}
                height={20}
                className="mt-1"
              />
              <Link
                href="https://www.google.com/maps/dir/?api=1&destination=388+Ottawa+St+South,+Kitchener,+Ontario,+Canada"
                target="_blank"
                rel="noopener noreferrer"
                className={`${urbanist.className} hover:underline text-lg leading-7 tracking-wide text-[#E8E9EB]`}
              >
                <p className="text-blue hover:underline">
                  388 Ottawa St. South, Kitchener, Ontario, Canada N2M 3P4
                </p>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.7,
                type: "spring",
                bounce: 0.4,
              }}
              viewport={{ once: true }}
              className="flex items-start gap-3"
            >
              <Image
                src="/Images/Icons/Phone.png"
                alt="Phone"
                width={18}
                height={18}
                className="mt-1"
              />
              <a
                href="tel:+15195702199"
                className={`${urbanist.className} text-lg leading-7 tracking-wide text-[#E8E9EB] hover:underline`}
              >
                +1 519 570 2199
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side - Form Container */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "auto", opacity: 1 }}
            transition={{ duration: 1.2, type: "spring", bounce: 0.5 }}
            viewport={{ once: true }}
            className="flex-1 bg-[#0A0D16]/70 text-white p-6 md:p-8 gap-12 rounded-[24px] border border-[#646877]/40 shadow-2xl backdrop-blur-xl"
            style={{
              perspective: "900px",
              boxShadow:
                "0 8px 32px 0 rgba(30, 30, 40, 0.25), 0 1.5px 8px 0 rgba(224, 174, 84, 0.08)",
              transform: "translateZ(0) rotateX(2deg) rotateY(-2deg)",
            }}
          >
            {/* Form Placeholder */}
            <form className="w-full flex flex-col gap-[24px]">
              {/* Input Fields */}
              <motion.div
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
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  NAME
                </label>
                <input
                  type="text"
                  placeholder="First & Last Name"
                  className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F]/60 text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-4 focus:ring-[#E5A93D] focus:border-2 focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                  style={{
                    boxShadow:
                      "0 2px 8px 0 rgba(30,30,40,0.18), 0 1px 4px 0 rgba(224,174,84,0.08)",
                  }}
                />
              </motion.div>

              <motion.div
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
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  EMAIL ADDRESS
                </label>
                <input
                  type="email"
                  placeholder="Your Email Address"
                  className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F]/60 text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-4 focus:ring-[#E5A93D] focus:border-2 focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                  style={{
                    boxShadow:
                      "0 2px 8px 0 rgba(30,30,40,0.18), 0 1px 4px 0 rgba(224,174,84,0.08)",
                  }}
                />
              </motion.div>

              <motion.div
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
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  PHONE NUMBER
                </label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  className={`${raleway.className} h-[56px] rounded-[16px] p-[14px] bg-[#151B2F]/60 text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-4 focus:ring-[#E5A93D] focus:border-2 focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                  style={{
                    boxShadow:
                      "0 2px 8px 0 rgba(30,30,40,0.18), 0 1px 4px 0 rgba(224,174,84,0.08)",
                  }}
                />
              </motion.div>

              {/* Message Section */}
              <motion.div
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
                  className={`${outfit.className} text-[14px] font-[600] leading-[150%] tracking-[0.02em] text-white`}
                >
                  MESSAGE
                </label>
                <textarea
                  placeholder="What is your inquiry..."
                  className={`${raleway.className} h-[120px] rounded-[16px] p-[14px] bg-[#151B2F]/60 text-[#E8E9EB] text-[14px] focus:outline-none focus:ring-4 focus:ring-[#E5A93D] focus:border-2 focus:border-[#E5A93D] border border-white/10 shadow-lg backdrop-blur-md`}
                  style={{
                    boxShadow:
                      "0 2px 8px 0 rgba(30,30,40,0.18), 0 1px 4px 0 rgba(224,174,84,0.08)",
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
                  className={`${outfit.className} w-full h-[48px] rounded-[8px] px-[12px] py-[16px] text-[14px] font-semibold bg-[#E0AE54]/80 text-white flex items-center justify-center relative cursor-pointer border-2 border-white/10 shadow-2xl hover:shadow-2xl hover:border-white/20 transition-all duration-200 ease-out overflow-hidden backdrop-blur-md`}
                  style={{
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
    </>
  );
}
