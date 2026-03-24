import { FaInstagram, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-gray-800 px-5 md:px-10 lg:px-20 py-6">

      <div className="flex flex-col md:flex-row items-center justify-between gap-4">

        
        <div className="text-sm text-gray-400">
          © 2026 MoviesMarket · 
          <span className="ml-1">
            Developed by{" "}
            <span className="text-[#ffcc00] font-semibold">
              BEKIR SAGLAM
            </span>
          </span>
        </div>

        
        <div className="text-xl font-semibold tracking-wide text-[#ffcc00]">
          MoviesMarket
        </div>

        
        <div className="flex gap-5 items-center text-lg">
          <FaInstagram className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#ffcc00]" />
          <FaFacebookF className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#ffcc00]" />
          <FaXTwitter className="cursor-pointer transition-all duration-200 hover:scale-110 hover:text-[#ffcc00]" />
        </div>

      </div>

    </footer>
  );
};

export default Footer;