import React from "react";
import image from "../assets/Backsplash.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function SportsSection() {
  return (
    <section
      className="relative w-full h-[500px] bg-black"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#002d34]/90 via-[#002d34]/60 to-transparent z-0" />

      {/* Text content */}
      <div className="relative z-10 max-w-[500px] pl-6 sm:pl-12 pt-8 sm:pt-12 md:pt-16">
        <motion.h2
          className="text-white text-3xl sm:text-4xl md:text-[28pxfont-unbounded font-bold leading-tight mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Athletes rise.<br />Fans win!
        </motion.h2>
        <motion.button
          className="bg-[#32c7b2] hover:bg-[#29ad9b] text-white text-base font-semibold px-8 py-2 rounded-md shadow-md"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Apply
        </motion.button>
      </div>
    </section>
  );
}
