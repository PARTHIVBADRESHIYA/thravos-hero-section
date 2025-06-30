import { motion } from "framer-motion";

function Hero() {
    return (
        <section className="w-full bg-[#0f0f0f] text-white relative overflow-hidden">
            {/* ✅ Background Glow (like your screenshot) */}

            <div className="relative z-10 max-w-6xl mx-auto px-2 sm:px-4 md:px-8 flex flex-col justify-center md:py-9 lg:py-12">

                {/* Hero Container */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-20= flex-grow py-6 sm:py-10 md:py-20 ">

                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="w-full md:w-1/2 flex flex-col items-center md:items-start justify-center relative text-center md:text-left"
                    >
                        <h1 className="font-unbounded text-[16px] sm:text-3xl md:text-4xl mb-2 sm:mb-4 leading-normal md:leading-[1.5] text-white">
                            <span className="block md:hidden">Be seen. Get backed.</span>
                            <span className="hidden md:inline">Be seen.<br />Get backed.</span>
                        </h1>
                        <p className="font-[open-sans] text-xs sm:text-sm md:text-[25px] text-gray-200 mb-3 sm:mb-5 leading-snug md:leading-[1.2] max-w-xs sm:max-w-md">
                            <span className="block md:hidden">
                                For athletes ready to connect with <span className="text-[#2BB6A9]">fans</span>,<br />
                                partner with <span className="text-teal-400">brands</span> and own their journey.
                            </span>
                            <span className="hidden md:inline">
                                For athletes ready to connect <br />with <span className="text-[#2BB6A9]">fans</span>, partner with <span className="text-teal-400">brands</span>,<br /> and own their journey.
                            </span>
                        </p>

                        <button className="bg-[#2BB6A9] text-white font-[Inter] text-xs sm:text-sm px-5 py-2 rounded-md shadow-lg hover:bg-[#28a89b] transition">
                            Apply
                        </button>
                    </motion.div>

                    {/* Right Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
                        className="w-full md:w-1/2 flex justify-center md:justify-end relative"
                    >
                        <div className="relative z-10 w-full max-w-[300px] sm:max-w-sm md:max-w-lg h-40 sm:h-64 md:h-80 rounded-xl overflow-hidden bg-black shadow-lg flex items-center justify-center">
                            {/* ✅ Background shadow now contained only behind video */}
                            <div className="absolute -bottom-10 -right-10 w-[300px] h-[300px] bg-[#2BB6A9] opacity-40 blur-[100px] rounded-full z-0 pointer-events-none md:hidden" />

                            <video
                                src="https://storage.googleapis.com/thravos-prod/videos/onboarding.mov"
                                controls
                                className="w-full h-full object-cover rounded-xl relative z-10"
                            >
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        {/* ✅ For md+ (keep previous full blur) */}
                        <div className="hidden md:block absolute bottom-[-90px] right-[-60px] w-[520px] h-[480px] bg-[#2BB6A9] opacity-40 blur-[100px] rounded-[350px] z-0 pointer-events-none" />
                    </motion.div>

                </div>

                {/* Gradient Divider */}
                <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#19655F] to-transparent opacity-100 mt-8 mb-6 sm:opacity-90 sm:mt-6" />

                {/* Welcome Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    className="text-center w-full flex flex-col items-center px-2"
                >
                    <h3 className="font-unbounded text-base sm:text-lg md:text-2xl mb-2  md:mt-7 text-white">
                        Welcome to Thravos
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-lg max-w-xl mx-auto">
                        Join the next era of sports with Thravos where AI, fans, and real rewards power your rise.
                        Showcase your skills, grow your following, and earn through performance.
                        <span className="block text-white  font-semibold mt-1">We're live. You in?</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

export default Hero;
