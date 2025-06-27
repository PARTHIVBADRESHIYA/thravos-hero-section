import React from "react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};
const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
};

const FeatureCard = ({
  title,
  description,
  image,
  isFirst,
  isSecond,
  isThird,
}) => (
  <div
    className={`
      relative rounded-[32px] overflow-hidden flex flex-col justify-between
      w-full md:w-[400px] md:h-[570px] bg-[#0f0f0f]
      shadow-[0_0_30px_12px_rgba(0,255,224,0.08)] border border-teal-400/30
      p-6 md:p-8
    `}
  >
    {/* BACKGROUND GLOW EFFECTS for FIRST CARD */}
    {isFirst && (
      <>
        {/* Glow behind and above the image */}
        <div
          className="absolute left-1/2 top-[40%] -translate-x-1/3 -translate-y-1/2 w-[340px] h-[750px] z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(0,255,224,0.40) 0%, transparent 60%)",
            filter: "blur(32px)",
          }}
        />
        {/* Glow at left-bottom */}
        <div
          className="absolute left-0 bottom-0 w-[280px] h-[180px] z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 0% 100%, rgba(0,255,224,0.5) 0%, transparent 100%)",
            filter: "blur(32px)",
          }}
        />
      </>
    )}

    {isSecond && (
      <>
        <div className="absolute inset-0 z-0 rounded-[32px] blur-2xl opacity-20 pointer-events-none bg-gradient-to-br from-teal-300/30 to-transparent" />
        <div
          className="absolute top-0 left-0 w-[350px] h-[250px] z-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(circle at 70% 50%, rgba(0,255,224,0.3) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />
      </>
    )}

    {isThird && (
      <div
        className="absolute left-0 bottom-0 w-[220px] h-[220px] z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 0% 70%, rgba(0,255,224,0.8) 0%, transparent 80%)",
          filter: "blur(24px)",
        }}
      />
    )}

    {/* GLOBAL BACKGROUND GLOW */}
    <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
      <div
        className="w-[360px] h-[360px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(43,182,169,0.15) 0%, transparent 100%)",
          filter: "blur(40px)",
        }}
      />
    </div>

    {/* TEXT SECTIONS */}
    {isSecond ? (
      <motion.div
        className="z-20 absolute bottom-0 left-0 px-6 pb-6 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h3 className="text-white  font-['unbounded'] text-[20px] md:text-[22px] leading-tight mb-2">
          Connect
        </h3>
        <p className="text-gray-300 font-['open-sans'] text-[15px] md:text-[18px] leading-snug">
          Connect with branded <br /> content and channels
        </p>
      </motion.div>
    ) : (
      <motion.div
        className="z-20 absolute top-0 left-0 px-6 pt-6 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h3 className="text-white  font-['unbounded'] text-[20px] md:text-[22px] leading-tight mb-2">
          {title}
        </h3>
        <p className="text-gray-300 font-['open-sans'] text-[15px] md:text-[20px] leading-snug">
          {title === "Train your fans" && (
            <>
              Share workouts and<br />
              inspire the community
            </>
          )}
          {title === "Monetize" && (
            <>
              Make it happen with <br />  AI and
              tokenization tools
            </>
          )}
        </p>
      </motion.div>
    )}

    {/* IMAGE */}
    <motion.div
      className={`relative flex-1 flex items-end justify-center w-full z-10 ${isSecond ? 'pt-5 pb-32 pl-10 ' : 'pb-1 pt-25 pl-10'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={imageVariants}
    >
      <img
        src={image}
        alt={title}
        className={`object-contain w-[100%] ${isSecond ? 'max-h-[450px]' : 'max-h-[450px]'} drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]`}
        draggable={false}
      />
    </motion.div>
  </div>
);

export default FeatureCard;
