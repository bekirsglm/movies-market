import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import MovieCard from "../components/MovieCard";
import { clearFavorites } from "../features/favorites/favoritesSlice";
import type { RootState, AppDispatch } from "../redux/store";
import type { Movie } from "../types/movie";

const MyList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (favorites.length === 0) {
    return (
      <div className="pt-20 h-[70vh] flex flex-col items-center justify-center text-center space-y-4 px-5">
        <h2 className="text-2xl font-semibold text-gray-300">
          No favorite movies yet
        </h2>

        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 text-white cursor-pointer transition-all duration-200 hover:text-[#ffcc00]"
        >
          <FaArrowLeft />
          <span>Back to Home</span>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 px-5 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-[#ffcc00]">My Favorites</h1>

        <button
          onClick={() => dispatch(clearFavorites())}
          className="bg-red-600 text-white px-4 py-2 rounded-full text-sm hover:bg-red-700 transition-all duration-200"
        >
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(180px,1fr))] gap-5 pt-2">
  {favorites.map((movie: Movie) => (
    <MovieCard key={movie.id} movie={movie} />
  ))}
</div>
    </div>
  );
};

export default MyList;
