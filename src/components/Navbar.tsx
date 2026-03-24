import { PiFilmReelLight } from "react-icons/pi";
import { FaHome, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const Navbar = () => {
  const favorites = useSelector(
    (state: RootState) => state.favorites.items
  );

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-white/10 h-18 flex justify-between items-center px-5 md:px-10 lg:px-20">

      <div className="text-[25px] cursor-pointer group">
        <Link to="/">
          <h1 className="text-white font-bold tracking-wide transition-all duration-200 group-hover:text-[#ffcc00]">
            MoviesMarket
          </h1>
        </Link>
      </div>

      <div>
        <PiFilmReelLight className="text-[40px] text-[#ffcc00] transition-all duration-500 hover:rotate-720" />
      </div>

      <div>
        <ul className="flex gap-6 items-center list-none">
          <li className="cursor-pointer">
            <Link to="/">
              <FaHome className="text-[22px] text-white transition-all duration-200 hover:scale-110 hover:text-[#ffcc00]" />
            </Link>
          </li>

          <li className="relative cursor-pointer">
            <Link to="/my-list" className="relative block">
              <FaHeart className="text-[20px] text-white transition-all duration-200 hover:scale-110 hover:text-[#ffcc00]" />

              {favorites.length > 0 && (
                <span className="absolute -top-3 -right-4 min-w-4.5 h-4.5 px-1 border border-[#ffcc00] font-bold rounded-full text-white flex items-center justify-center text-[10px] bg-black leading-none">
                  {favorites.length}
                </span>
              )}
            </Link>
          </li>
        </ul>
      </div>

    </nav>
  );
};

export default Navbar;