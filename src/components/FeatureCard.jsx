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

const FeatureCard = ({ title, description, image, isFirst, isSecond, isThird }) => (
  <div
    className={`
      relative rounded-[32px] overflow-hidden flex flex-col justify-between
      w-full md:w-[400px] md:h-[570px] bg-[#0f0f0f]
      shadow-[0_0_30px_12px_rgba(0,255,224,0.08)] border border-teal-400/30
      p-6 md:p-8
    `}
  >
    {/* ======= BACKGROUND GLOW EFFECTS ======= */}

    {/* FIRST CARD glow: behind image + right side only */}
    {isFirst && (
      <>
        <div
          className="absolute left-1/2 top-[45%] -translate-x-1/3 -translate-y-1/2 w-[350px] h-[600px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,224,0.5) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
        <div
          className="absolute right-[-50px] top-[-10%] w-[300px] h-[300px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(43,182,169,0.5) 0%, transparent 70%)",
            filter: "blur(90px)",
          }}
        />
      </>
    )}

    {/* SECOND CARD glow: top-left and behind image (left only) */}
    {isSecond && (
      <>
        <div
          className="absolute top-[-30px] left-[30px] w-[300px] h-[250px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,255,224,0.3) 0%, transparent 80%)",
            filter: "blur(32px)",
          }}
        />
        <div
          className="absolute left-[-120px] bottom-[30%] w-[300px] h-[300px] z-0 pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(43,182,169,0.35) 0%, transparent 80%)",
            filter: "blur(36px)",
          }}
        />
      </>
    )}

    {/* THIRD CARD glow: only at left-bottom */}
    {isThird && (
      <div
        className="absolute left-[-40px] bottom-[-20px] w-[300px] h-[200px] z-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 0% 100%, rgba(0,255,224,0.4) 0%, transparent 80%)",
          filter: "blur(36px)",
        }}
      />
    )}

    {/* TEXT SECTION */}
    {isSecond ? (
      <motion.div
        className="z-20 absolute bottom-0 left-0 px-6 pb-6 text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h3 className="text-white font-['unbounded'] text-[20px] md:text-[22px] leading-tight mb-2">
          Connect
        </h3>
        <p className="text-gray-300 font-['open-sans'] text-[15px] md:text-[18px] leading-snug">
          Connect with branded <br /> content and channels
        </p>
      </motion.div>
    ) : (
      <motion.div
        className={`z-20 ${isSecond
          ? "absolute bottom-0 left-0 px-6 pb-6 text-left"
          : "relative md:absolute top-0 left-0 px-6 pt-6 text-left"
          }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={textVariants}
      >
        <h3 className="text-white font-['unbounded'] text-[20px] md:text-[22px] leading-tight mb-2">
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
              Make it happen with <br /> AI and tokenization tools
            </>
          )}
        </p>
      </motion.div>
    )}

    {/* IMAGE SECTION */}
    <motion.div
      className={`relative flex-1 flex items-end justify-center w-full z-10 ${isSecond ? 'pt-5 pb-32 pl-10' : 'pb-1 pt-25 pl-10'}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={imageVariants}
    >
      <img
        src={image}
        alt={title}
        className={`object-contain w-[100%] max-h-[450px] drop-shadow-[0_8px_24px_rgba(0,0,0,0.6)]`}
        draggable={false}
      />
    </motion.div>
  </div>
);

export default FeatureCard;
