import React from "react";
import image from "../assets/Backsplash.png";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const Footer = () => {
  // Get screen width to conditionally apply layout
  const screenWidth = window.innerWidth;

  const isZoomedOut = screenWidth >= 769 && screenWidth <= 1023;

  return (
    <footer className="w-full text-white bg-[#02404b] overflow-hidden">
      {/* ✅ Mobile Layout (Text + Image Stack) */}
      <div className="block md:hidden text-center px-4 pt-10">
        <motion.h2
          className="font-unbounded text-lg leading-tight mb-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Athletes rise.
          <br />
          Fans win!
        </motion.h2>

        <motion.button
          className="bg-[#32c7b2] hover:bg-[#29ad9b] text-white text-sm font-semibold px-6 py-2 rounded-md shadow-md transition-all"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          Apply
        </motion.button>

        {/* ✅ Image also shown in mobile */}
        <div className="mt-6">
          <img
            src={image}
            alt="Athletes"
            className="w-full object-contain"
            style={{ maxHeight: 220 }}
          />
        </div>
      </div>

      {/* ✅ Medium & Larger Screens */}
      <div
        className={`hidden md:flex w-full items-center justify-center px-4 py-8 ${
          isZoomedOut ? "flex-col-reverse text-center" : "flex-row"
        }`}
      >
        {/* Text Side */}
        <div
          className={`${
            isZoomedOut ? "mb-4" : "mr-8 text-left"
          } max-w-[480px]`}
        >
          <motion.h2
            className="text-white font-unbounded text-2xl md:text-3xl leading-tight mb-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Athletes rise.
            <br />
            Fans win!
          </motion.h2>

          <motion.button
            className="bg-[#32c7b2] hover:bg-[#29ad9b] text-white text-base font-semibold px-8 py-3 rounded-md shadow-md transition-all"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
          >
            Apply
          </motion.button>
        </div>

        {/* Image Side */}
        <div className="w-full max-w-[600px]">
          <img
            src={image}
            alt="Athletes"
            className="w-full object-contain"
            style={{
              maxHeight: isZoomedOut ? 280 : 440,
              margin: "0 auto",
            }}
          />
        </div>
      </div>

      {/* ✅ Legal Section */}
      <div className="w-full px-4 sm:px-6 md:px-12 py-4 bg-[#02343e] backdrop-blur-sm border-t border-white/10 text-sm text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-center md:text-left">©2025, All rights reserved.</p>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:underline">
              Terms and Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
