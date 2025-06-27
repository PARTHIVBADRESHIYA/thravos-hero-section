import React from "react";
import FeatureCard from "./FeatureCard";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Train your fans",
    description: "Share workouts and\ninspire the community",
    image: phone1,
  },
  {
    title: "Connect",
    description: "Connect with branded\ncontent and channels",
    image: phone2,
  },
  {
    title: "Monetize",
    description: "Make it happen with\nAI and tokenization tools",
    image: phone3,
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.7, ease: "easeOut" },
  }),
};

const CardSection = () => (
  <section className="w-full px-4 py-12 bg-[#0f0f0f] flex flex-col items-center">
    <div
      className="w-full h-[2px] mb-10"
      style={{
        background:
          "linear-gradient(90deg, rgba(50, 203, 191, 0.00) 0%, #19655F 50%, rgba(50, 203, 191, 0.00) 100%)",
      }}
    />
    <h2 className="text-3xl font-['unbounded'] text-white mb-2 text-center">
      Why join Thravos?
    </h2>
    <p className="text-gray-300 md:text-[22px] font-open-sans text-center text-base mb-10">
      All you need to grow and get rewarded
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          animate="visible"
          variants={cardVariants}
        >
          <FeatureCard
            title={card.title}
            description={card.description}
            image={card.image}
            isFirst={idx === 0}
            isSecond={idx === 1}
            isThird={idx === 2}
          />
        </motion.div>
      ))}
    </div>
    <div
      className="w-full h-[2px] mt-14"
      style={{
        background:
          "linear-gradient(90deg, rgba(50, 203, 191, 0.00) 0%, #19655F 50%, rgba(50, 203, 191, 0.00) 100%)",
      }}
    />
  </section>
);

export default CardSection;
