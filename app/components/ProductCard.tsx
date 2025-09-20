"use client";

// Imports
import React from "react";
import Image from "next/image";
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

// Product and props interfaces
interface Product {
  id: number;
  image: string;
  title: string;
  subheading: string;
  description: string;
  buttontext: string;
}

interface ProductCardProps {
  product: Product;
}

// ProductCard: Card component for displaying a product with image, title, description, and button
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      // Card container with entry and hover animation
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02 }}
      className="w-[632px] h-[811px] bg-[#E8E9EB] rounded-[16px] p-[32px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-300"
    >
      {/* Image Container with Hover Effect */}
      <motion.div className="relative overflow-hidden rounded-[24px] mb-[32px]">
        <motion.div
          // Slight zoom on image hover
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={product.image}
            alt={product.title}
            width={568}
            height={367.81}
            className="rounded-[24px] object-cover"
          />
        </motion.div>
        {/* Overlay gradient on hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"
        />
      </motion.div>

      {/* Content with Staggered Animation */}
      <motion.div
        className="flex flex-col flex-grow"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        {/* Title & Subheading */}
        <motion.div
          className="flex flex-col gap-[12px] mb-6"
          whileHover={{ y: -2 }}
          transition={{ duration: 0.3 }}
        >
          <motion.p
            className={`${urbanist.className} font-[700] text-[#0D111D] text-[28px] leading-[120%] tracking-[0.02em]`}
          >
            {product.title}
          </motion.p>
          <motion.p
            className={`${raleway.className} font-[600] text-[#0D111D] text-[18px] leading-[120%] tracking-[0.02em]`}
          >
            {product.subheading}
          </motion.p>
        </motion.div>

        {/* Description with Fade Effect */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`${urbanist.className} font-[400] text-[#151B2F] text-[18px] leading-[150%] tracking-[0.02em] mb-auto`}
        >
          {product.description}
        </motion.p>
      </motion.div>

      {/* Animated Button */}
      <motion.div className="mt-6">
        <motion.button
          // Button hover/tap animation
          whileHover={{ scale: 1.05, backgroundColor: "#E0AE54" }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className={`${outfit.className} w-full h-[45px] bg-white border border-[#E8E9EB] rounded-[8px] text-[#0D111D] text-sm font-semibold tracking-[0.02em] hover:text-white transition-all duration-300`}
        >
          {product.buttontext}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
