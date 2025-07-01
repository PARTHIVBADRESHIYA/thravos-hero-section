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
  return (
    <footer className="w-full text-white bg-[#02404b] overflow-hidden">
      {/* ✅ TEXT for MOBILE ONLY */}
      <div className="block md:hidden text-center px-4 py-10">
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
      </div>

      {/* ✅ IMAGE + TEXT BLOCK */}
      <div
        className="relative w-full flex items-center justify-center h-[180px] md:h-[40vw] md:max-h-[440px] overflow-hidden footer-image-wrapper"
        style={{
          backgroundImage: `url(${image})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "top",
          backgroundSize: "contain",
        }}
      >
        {/* ✅ TEXT BLOCK for md+ */}
        <div className="hidden md:block footer-text px-4 max-w-[480px]">
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
      </div>

      {/* ✅ LEGAL SECTION */}
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
