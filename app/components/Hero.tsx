"use client";

import React from "react";
import { useEffect, useState } from "react";
import Image, { StaticImageData } from "next/image";

import { Urbanist, Outfit, Zilla_Slab } from "next/font/google";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// --- Glass Animated Button (copied from ImageTextBlock) ---
// This is a reusable button component with a glassmorphism effect and hover animation.
const RoundedButton = ({
  children,
  color = "#7A0C02",
  borderColor,
  link = "",
  textColor = "white",
}: {
  children: React.ReactNode;
  color?: string;
  borderColor?: string;
  link?: string;
  textColor?: string;
}) => {
  const btnStyle = `${outfit.className} w-auto px-[16px] py-[16px] pt-[12px] pb-[12px] font-[600] text-[14px] leading-[120%] tracking-[0.02em] rounded-[8px] flex items-center justify-center relative overflow-hidden backdrop-blur-md`;
  const inlineStyle = {
    backgroundColor: `${color}CC`,
    color: textColor,
    border: borderColor
      ? `1.5px solid ${borderColor}80`
      : `1px solid rgba(255, 255, 255, 0.18)`,
    boxShadow: `
      0 8px 32px rgba(0, 0, 0, 0.12),
      0 4px 16px rgba(0, 0, 0, 0.10),
      0 2px 8px rgba(0, 0, 0, 0.08),
      inset 0 1px 0 rgba(255, 255, 255, 0.4),
      inset 0 -1px 0 rgba(0, 0, 0, 0.15),
      inset 1px 0 0 rgba(255, 255, 255, 0.2),
      inset -1px 0 0 rgba(0, 0, 0, 0.1)
    `,
    backdropFilter: "blur(20px) saturate(200%) brightness(110%)",
    WebkitBackdropFilter: "blur(20px) saturate(200%) brightness(110%)",
  };
  const StaticButton = () => {
    const [hovered, setHovered] = React.useState(false);
    return (
      <button
        className={btnStyle}
        style={{
          ...inlineStyle,
          transform: hovered ? "scale(1.05)" : "scale(1)",
          boxShadow: hovered
            ? `0 16px 64px rgba(0, 0, 0, 0.18),
                0 8px 32px rgba(0, 0, 0, 0.15),
                0 4px 16px rgba(0, 0, 0, 0.12),
                inset 0 1px 0 rgba(255, 255, 255, 0.6),
                inset 0 -1px 0 rgba(0, 0, 0, 0.2),
                inset 1px 0 0 rgba(255, 255, 255, 0.3),
                inset -1px 0 0 rgba(0, 0, 0, 0.15)`
            : inlineStyle.boxShadow,
          transition:
            "transform 0.18s cubic-bezier(.4,2,.3,1), box-shadow 0.18s cubic-bezier(.4,2,.3,1)",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Button text */}
        <span className="relative z-10">{children}</span>
        {/* Subtle gradient overlay for glass effect */}
        <div
          className="absolute inset-0 rounded-[8px] pointer-events-none"
          style={{
            background: `linear-gradient(135deg, 
              rgba(255, 255, 255, 0.25) 0%, 
              rgba(255, 255, 255, 0.1) 25%,
              rgba(255, 255, 255, 0.05) 50%, 
              rgba(0, 0, 0, 0.05) 75%,
              rgba(0, 0, 0, 0.1) 100%)`,
          }}
        />
        {/* Additional frosted glass layer */}
        <div
          className="absolute inset-0 rounded-[8px] pointer-events-none opacity-60"
          style={{
            background: `radial-gradient(circle at top left, 
              rgba(255, 255, 255, 0.3) 0%, 
              rgba(255, 255, 255, 0.15) 30%,
              transparent 60%)`,
          }}
        />
      </button>
    );
  };
  if (link && link !== "") {
    return (
      <a href={link}>
        <StaticButton />
      </a>
    );
  } else {
    return <StaticButton />;
  }
};

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const zilla_slab = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

interface HeroProps {
  backgroundColor?: string;
  height?: string;
  title: React.ReactNode;
  titleSize?: string;
  subtitle?: string;
  textColor?: string;
  textWidth?: string;
  image?: StaticImageData;
  imagePlacement?: string;
  altText: string;
  overlayColor?: string;
  overlayOpacity?: number;
  textPosition?: "Center" | "Left" | "Right";
  descriptionText?: string;
  descriptionColor?: string;
  descriptionSize?: string;
  buttonText?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonLink?: string;
  textAlignment?: "left" | "center" | "right";
  contentAlignment?: "left" | "center" | "right";
  backgroundPosition?: string; // NEW PROP
}

// Custom typewriter hook
// Custom hook to create a typewriter effect for text display
const useTypewriter = (text: string, speed: number = 50, delay: number = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    setDisplayText("");
    setIsComplete(false);
    setShowCursor(true);

    const timer = setTimeout(() => {
      let i = 0;
      const typeInterval = setInterval(() => {
        if (i < text.length) {
          setDisplayText(text.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typeInterval);
          setIsComplete(true);
          // Hide cursor after completion
          setTimeout(() => setShowCursor(false), 500);
        }
      }, speed);

      return () => clearInterval(typeInterval);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, speed, delay]);

  return { displayText, isComplete, showCursor };
};

// Animation variants for the hero image
const imageVariants = {
  hidden: {
    scale: 1.2,
    opacity: 0,
    transition: { duration: 0 },
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2 },
  },
} as const;

// Main Hero component for displaying a prominent section with image, title, subtitle, and button
function Hero(props: HeroProps) {
  const {
    backgroundColor,
    image,
    altText,
    title,
    titleSize,
    subtitle,
    textPosition = "Center",
    overlayColor,
    overlayOpacity,
    textColor = "black",
    textWidth,
    height = "460px",
    imagePlacement = "90%",
    descriptionText = "",
    descriptionColor = "#0D111D",
    descriptionSize = "18px",
    buttonText,
    buttonColor = "#7A0C02",
    buttonTextColor = "#ffffff",
    buttonLink = "#",
    textAlignment = "center",
    contentAlignment = "center",
    backgroundPosition,
  } = props;

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Helper function to extract plain text from React nodes (for typewriter effect)
  const extractTextFromNode = (node: React.ReactNode): React.ReactNode[] => {
    if (typeof node === "string") return [node];
    if (Array.isArray(node)) return node.flatMap(extractTextFromNode);
    if (React.isValidElement(node)) {
      if (node.type === "br") return ["\n"];
      const props = node.props as { children?: React.ReactNode };
      return extractTextFromNode(props.children || "");
    }
    return [];
  };

  // Get the full title text as a string
  const getTitleText = () => {
    const nodes = extractTextFromNode(title);
    return nodes.join("");
  };

  // Use custom typewriter hooks
  // Typewriter effect for the title
  const titleTypewriter = useTypewriter(inView ? getTitleText() : "", 50, 500);

  // Typewriter effect for the description, starts after title is complete
  const descriptionTypewriter = useTypewriter(
    inView && titleTypewriter.isComplete ? descriptionText : "",
    25, // faster typing speed
    1200
  );

  // Main container for the hero section with entry animation
  return (
    <motion.div
      ref={ref}
      initial={{ height: 0 }}
      animate={inView ? { height: height } : { height: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ overflow: "hidden" }}
    >
      {/* Header Section with Background Image and optional overlay */}
      <div
        className="w-full relative overflow-hidden"
        style={{
          height: "100%",
          backgroundColor:
            !image && backgroundColor ? backgroundColor : undefined,
        }}
      >
        {/* Animated background image and overlay */}
        {image && (
          <motion.div
            className="absolute inset-0 z-0"
            initial="hidden"
            animate="visible"
            variants={imageVariants}
          >
            <Image
              src={image}
              alt={altText}
              fill
              priority
              className="object-cover"
              style={{
                objectPosition:
                  backgroundPosition || `center ${imagePlacement}`,
              }}
            />
            {/* Overlay for dimming or coloring the image */}
            <motion.div
              className="absolute inset-0 z-10"
              initial={{ opacity: 0 }}
              animate={{
                opacity: overlayOpacity !== undefined ? overlayOpacity : 1,
              }}
              transition={{ duration: 1 }}
              style={{
                backgroundColor: overlayColor || "transparent",
              }}
            />
          </motion.div>
        )}

        {/* Main content area: centers or aligns text and button */}
        <div
          className={`relative z-10 w-full max-w-[1512px] mx-auto h-full px-6 md:px-12 xl:px-[100px] flex items-center
    ${
      textPosition === "Left"
        ? "justify-start"
        : textPosition === "Right"
        ? "justify-end"
        : "justify-center"
    }`}
        >
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`w-full flex flex-col gap-5 ${
              contentAlignment === "left"
                ? "items-start"
                : contentAlignment === "right"
                ? "items-end"
                : "items-center"
            }`}
          >
            {/* Subtitle (optional) */}
            {subtitle && (
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`${zilla_slab.className} font-[500] text-[36px] leading-[120%] tracking-[-0.02em] text-black`}
                style={{ textAlign: textAlignment }}
              >
                {subtitle}
              </motion.h2>
            )}

            {/* Title with typewriter effect */}
            {title && (
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className={`${outfit.className} font-[700] uppercase items-center text-center justify-center leading-[120%] whitespace-pre-line`}
                style={{
                  color: textColor,
                  fontSize: titleSize,
                  textAlign: textAlignment,
                  width: "100%",
                }}
              >
                {/* Animated title text */}
                {titleTypewriter.displayText}
                {/* Blinking cursor during typing */}
                {titleTypewriter.showCursor && (
                  <span className="animate-pulse">|</span>
                )}
              </motion.h1>
            )}

            {/* Description with typewriter effect */}
            {descriptionText && (
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className={`${urbanist.className} leading-[150%]`}
                style={{
                  color: descriptionColor,
                  fontSize: descriptionSize,
                  maxWidth: textWidth,
                  textAlign: textAlignment,
                  width: "100%",
                }}
              >
                {/* Animated description text, supports line breaks */}
                {descriptionTypewriter.displayText
                  .split("\n")
                  .map((line, idx, arr) => (
                    <React.Fragment key={idx}>
                      {line}
                      {idx < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                {/* Blinking cursor during typing */}
                {descriptionTypewriter.showCursor && (
                  <span className="animate-pulse">|</span>
                )}
              </motion.p>
            )}

            {/* Optional call-to-action button */}
            {buttonText && (
              <div className="mt-4">
                <RoundedButton
                  color={buttonColor}
                  textColor={buttonTextColor}
                  link={buttonLink}
                >
                  {buttonText}
                </RoundedButton>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Hero;
