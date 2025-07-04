import { LiaInstagram } from "react-icons/lia";
import { FaLinkedinIn } from "react-icons/fa";
import antonio from "../assets/antonio.png";
import greg from "../assets/greg.png";
import phil from "../assets/phil.png";
import { motion } from "framer-motion";

const athletes = [
  {
    name: "Antonio Cairoli",
    role: "Motocross racer",
    image: antonio,
    icon: <LiaInstagram className="text-white w-9 h-9" />,
  },
  {
    name: "Greg Minnaar",
    role: "Mountain bike racer",
    image: greg,
    icon: <LiaInstagram className="text-white w-9 h-9" />,
  },
  {
    name: "Master Phil",
    role: "Martial Arts",
    image: phil,
    icon: <FaLinkedinIn className="text-white w-7 h-7" />,
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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const AthletesSection = () => (
  <section className="w-full py-8 px-4 bg-[#0f0f0f] flex flex-col items-center relative">
    {/* ✅ Gradient Divider now properly anchored */}
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#2BB6A9] to-transparent z-[1000] pointer-events-none" />

    <motion.h2
      className="text-[22px] md:text-[38px] text-white mb-2 mt-12 text-center font-unbounded"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      Athletes rising
    </motion.h2>

    <motion.p
      className="text-white text-2xl md:text-[28px] mb-12 text-center font-open-sans"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
    >
      Join our growing community of athletes
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 w-full max-w-7xl mx-auto px-4">
      {athletes.map((athlete, idx) => (
        <motion.div
          key={idx}
          custom={idx}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={cardVariants}
        >
          <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col items-center justify-between w-full h-auto md:h-[500px] bg-[#181A1B] border border-[#2BB6A9]/20 p-4 md:p-0 pb-8 md:pb-12 mx-auto">
            <div
              className="w-full h-[300px] md:w-[330px] md:h-[350px] rounded-[24px] md:rounded-[32px] mx-auto mt-4 md:mt-8 mb-4 flex items-center justify-center bg-transparent"
              style={{
                background:
                  "radial-gradient(circle at bottom, rgba(0,255,224,0.32) 30%, rgba(0,255,224,0.10) 60%, #181A1B 100%)",
              }}
            >
              <img
                src={athlete.image}
                alt={athlete.name}
                className="w-[85%] md:w-[380px] h-[220px] md:h-[300px] object-cover rounded-[24px] md:rounded-[32px] mt-4 md:mt-10"
              />
            </div>

            <div className="text-center flex items-center justify-center gap-2">
              <span className="text-white text-2xl md:text-[28px] font-bold font-open-sans">
                {athlete.name}
              </span>
              {athlete.icon}
            </div>

            <p className="text-gray-300 text-base md:text-[20px] font-light font-open-sans text-center mt-1 mb-2">
              {athlete.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);


export default AthletesSection;
