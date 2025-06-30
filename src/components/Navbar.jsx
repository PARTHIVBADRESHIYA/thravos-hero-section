import { useState } from "react";
import { FaDiscord, FaTelegramPlane, FaCog, FaBars, FaTimes } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full bg-[#111] border-b border-gray-700 relative">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-16 py-3 flex items-center justify-between flex-wrap gap-y-3 relative">
                

                {/* Logo */}
                <div className="flex items-center gap-2 z-10">
                    <img src="/image.png" alt="Thravos Logo" className="h-10 w-10" />
                    <span className="text-white font-orbitron text-xl sm:text-2xl md:text-3xl font-normal">
                        Thravos
                    </span>
                </div>

                {/* Desktop menu */}
                <div className="hidden md:flex items-center gap-2 sm:gap-3 z-10">
                    <IconButton icon={<FaXTwitter size={24} />} />
                    <IconButton icon={<FaDiscord size={24} />} />
                    <IconButton icon={<FaTelegramPlane size={24} />} />
                    <IconButton icon={<FaCog size={24} />} />

                    <button
                        className="bg-teal-500 rounded-[12px] text-white px-6 py-2 font-semibold text-sm sm:text-base hover:bg-teal-600 transition-all duration-150"
                        style={{ minWidth: "90px", height: "44px" }}
                    >
                        Apply
                    </button>
                </div>

                {/* Mobile menu toggle */}
                <div className="md:hidden z-10">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="text-white focus:outline-none"
                    >
                        {menuOpen ? <FaTimes size={26} /> : <FaBars size={26} />}
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-[#111] border-t border-gray-700 flex flex-col items-start gap-4 px-6 py-4 z-50 animate-slide-down">
                    <MobileLink label="Apply Now!" />
                    <MobileLink label="Twitter" icon={<FaXTwitter />} />
                    <MobileLink label="Telegram" icon={<FaTelegramPlane />} />
                    <MobileLink label="Discord" icon={<FaDiscord />} />
                    <MobileLink label="Linktree" />
                    <MobileLink label="Privacy" />
                    <MobileLink label="Terms and Conditions" />
                </div>
            )}
        </div>
    );
}

function IconButton({ icon }) {
    return (
        <button className="bg-[#222] w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white hover:bg-[#333] transition-all duration-150">
            {icon}
        </button>
    );
}

function MobileLink({ label, icon }) {
    return (
        <button className="flex items-center gap-2 text-white text-base font-medium hover:text-teal-400 transition">
            {icon && <span>{icon}</span>}
            {label}
        </button>
    );
}

export default Navbar;