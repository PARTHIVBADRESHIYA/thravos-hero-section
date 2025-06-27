import { FaDiscord, FaTelegramPlane, FaCog } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
function Navbar() {
    return (
        <div className="relative w-full">
            <nav className="relative w-full h-[64px] bg-[#111] flex items-center justify-between px-0 border-b border-b-[1px] border-gray-700 md:px-16 z-10 overflow-hidden">
                {/* Custom radial gradient shadow background, contained in navbar */}
                <div className="absolute left-0 top-0 w-[600px] h-[80px] z-0 pointer-events-none" style={{
                    background: "radial-gradient(ellipse at 0% 60%, rgba(49, 165, 154, 0.45) 0%, rgba(49, 165, 154, 0.18) 60%, rgba(49, 165, 154, 0.00) 100%)",
                    filter: "blur(60px)",
                }}></div>
                <div className="flex items-center gap-1 ">
                    <img
                        src="/image.png"
                        alt="Thravos Logo"
                        className="h-10 w-10 m-0 p-0 md:ml-16  " 
                    />
                    <span className="text-white font-orbitron md:text-3xl text-xl font-normal m-0 p-0">Thravos</span>
                </div>

                <div className="flex items-center gap-3 pr-2 md:pr-16">
                    <IconButton icon={<FaXTwitter size={28} />} />
                    <IconButton icon={<FaDiscord size={28} />} />
                    <IconButton icon={<FaTelegramPlane size={28} />} />
                    <IconButton icon={<FaCog size={28} />} />

                    <button className="bg-teal-500 rounded-[12px] text-white px-7 py-2 md:ml-2     font-semibold text-lg hover:bg-teal-600 transition-all duration-150" style={{minWidth:'90px', height:'48px'}}>Apply</button>
                </div>
            </nav>
        </div>
    );
}

function IconButton({ icon }) {
    return (
        <button className="bg-[#222] w-12 h-12 flex items-center justify-center rounded-full text-white hover:bg-[#333] transition-all duration-150">
            {icon}
        </button>
    );
}

export default Navbar;
