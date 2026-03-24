import { FaStar, FaHeart, FaRegHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../redux/store";

import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";
import type { Movie } from "../types/movie";

const MovieCard = ({ movie }: { movie: Movie }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  const isFavorite = favorites.some((item: Movie) => item.id === movie.id);

  return (
    <div
      onClick={() => navigate(`/movie/${movie.id}`)}
      className="w-full max-w-50 mx-auto h-87.5 relative shadow-[0_0_5px_#0000005f] cursor-pointer transform scale-100 transition-all duration-200 hover:scale-105"
    >
      <div className="absolute top-0 w-full h-full z-1 rounded-[5px] bg-[linear-gradient(0deg,#000,#0000_35%)]" />

      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : "https://via.placeholder.com/300x450"
        }
        alt={movie.title}
        className="w-full h-full object-cover rounded-[15px]"
      />

      <div
        onClick={(e) => {
          e.stopPropagation();

          if (isFavorite) {
            dispatch(removeFavorite(movie.id));
          } else {
            dispatch(addFavorite(movie));
          }
        }}
        className="absolute top-2.5 right-2.5 z-20 bg-black/60 p-2 rounded-full backdrop-blur-sm"
      >
        {isFavorite ? (
          <FaHeart className="text-[#ffcc00]" />
        ) : (
          <FaRegHeart className="text-white hover:text-[#ffcc00]" />
        )}
      </div>

      <div className="w-full flex flex-col absolute bottom-2.5 pointer-events-none font-['Roboto',sans-serif] font-bold text-white z-10">
        <div className="flex justify-end items-center text-[20px] pr-2.5 pb-1.25">
          {movie.vote_average?.toFixed(1)}
          <FaStar className="ml-1.25 text-[#ffae00]" />
        </div>

        <div className="px-2.5 text-sm">{movie.title}</div>
      </div>
    </div>
  );
};

export default MovieCard;