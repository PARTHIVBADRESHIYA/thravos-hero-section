import React from "react";
import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="bg-[#0f0f0f] text-white px-3 sm:px-6 md:py-20  min-h-screen flex flex-col items-center justify-center">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-6xl w-full gap-10  md:py-28  py-20 ">
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-start relative pt-2 md:pt-4"
                >
                    <div className="absolute left-[-380px] bottom-[-70px] z-0 pointer-events-none">
                        <div
                            className="w-[520px] h-[650px] rounded-full"
                            style={{
                                background: "radial-gradient(ellipse at 0% 100%, rgba(49, 165, 154, 0.58) 0%, rgba(49, 165, 154, 0.10) 60%, rgba(49, 165, 154, 0.00) 100%)",
                                filter: "blur(80px)",
                            }}
                        ></div>
                    </div>
                    <h1 className="font-unbounded text-3xl sm:text-5xl md:text-[48px] text-white mb-8 text-center md:text-left leading-[1.2] md:leading-[1.4]">
                        Be seen.<br />Get backed.
                    </h1>
                    <p className="font-[open-sans] text-base sm:text-xl md:text-3xl text-gray-200 mb-8 text-center md:text-left max-w-md">
                        For athletes ready to connect <br />  with <span className="text-[#2BB6A9] font-semibold">fans</span>,
                        partner with <span className="text-teal-400 font-semibold">brands</span>,<br />
                        and own their journey.
                    </p>
                    <button className="bg-[#2BB6A9] text-white font-[Inter] text-base sm:text-xl px-8 py-3 rounded-lg shadow-lg hover:bg-[#28a89b] transition font-semibold">
                        Apply
                    </button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="w-full md:w-1/2 flex justify-center md:justify-end relative mt-8 md:mt-0"
                >
                    <div
                        className="absolute top-1/2 right-[-200px] -translate-y-1/2 pointer-events-none z-0"
                        style={{
                            width: "700px",
                            height: "700px",
                            borderRadius: "50%",
                            background: "radial-gradient(ellipse at 40% 60%, rgba(49, 165, 154, 0.32) 0%, rgba(49, 165, 154, 0.50) 60%, rgba(49, 165, 154, 0.00) 100%)",
                            filter: "blur(100px)",
                        }}
                    ></div>
                    <div className="relative z-10 w-full sm:max-w-sm md:min-w-[630px] h-56 sm:h-80 md:h-[372px] rounded-xl overflow-hidden bg-black">
                        <video
                            className="w-full h-full object-cover rounded-xl"
                            controls
                            preload="metadata"
                        >
                            <source src="https://storage.googleapis.com/thravos-prod/videos/onboarding.mov" type="video/quicktime" />
                            <source src="https://storage.googleapis.com/thravos-prod/videos/onboarding.mov" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </motion.div>
            </div>

            <div
                className="w-full h-[2px] my-8 md:my-8 "
                style={{
                    background:
                        "linear-gradient(90deg, rgba(50, 203, 191, 0.00) 0%, #19655F 47%, rgba(50, 203, 191, 0.00) 100%)",
                }}
            ></div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
                className="text-center mt-8 md:mt-12 mb-8 md:mb-12 w-full flex flex-col items-center"
            >
                <h3 className="font-unbounded text-3xl sm:text-4xl md:text-xl xl:text-4xl mb-4 ">Welcome to Thravos</h3>
                <p className="text-gray-300 text-lg sm:text-xl md:text-xl xl:text-2xl max-w-4xl mx-auto">
                    Join the next era of sports with Thravos where AI, fans, and real rewards power your rise. Showcase your skills, grow your following, and earn through performance.<br />
                    <span className="block text-white text-xl md:text-2xl mt-2">We're live. You in?</span>
                </p>
            </motion.div>
        </section>
    );
}

export default Hero;
