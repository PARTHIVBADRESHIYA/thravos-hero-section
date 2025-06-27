const Footer = () => {
    return (
        <footer className="relative z-10 w-full px-6 md:px-12 py-4 bg-black/50 backdrop-blur-sm text-white text-sm flex flex-col sm:flex-row justify-between items-center border-t border-white/10">
        <p className="mb-2 sm:mb-0">©2024, All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:underline">Terms and Conditions</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </footer>
    );
};

export default Footer;
