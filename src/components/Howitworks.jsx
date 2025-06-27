import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create account",
    desc: "Sign up and begin your journey as an athlete",
  },
  {
    number: 2,
    title: "Submit application",
    desc: "Complete a 2-minute form to join our athlete community",
  },
  {
    number: 3,
    title: "Setup profile",
    desc: "Create your profile and upload one workout video",
  },
  {
    number: 4,
    title: "Start earning",
    desc: "Begin earning rewards as fans support your journey",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

export default function HowItWorks() {
  return (
    <section className="w-full pt-2 pb-10 bg-[#0f0f0f] text-white flex flex-col items-center">
      <motion.h2
        className="text-4xl md:text-[28px] font-unbounded text-center mb-2 mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        How it works
      </motion.h2>
      <motion.p
        className="text-lg md:text-[20px] text-center mb-12 font-open-sans"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        Journey to being a backed athlete is simple
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 w-full max-w-7xl">
        {steps.map((step, idx) => (
          <motion.div
            key={step.number}
            custom={idx}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            className="flex flex-col items-center bg-gradient-to-b from-[#18191c] to-[#111111] border border-[#232323] rounded-[24px] px-6 py-10 text-center"
          >
            <div className="w-16 h-16 md:w-20 md:h-[75px] flex items-center justify-center bg-gradient-to-b from-[#232425] to-[#111] text-white text-2xl md:text-3xl font-unbounded font-semibold rounded-xl mb-6">
              {step.number}
            </div>
            <h3 className="text-xl md:text-[20px] font-unbounded  mb-2">
              {step.title}
            </h3>
            <p className="text-base md:text-[18px] font-open-sans leading-snug">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
