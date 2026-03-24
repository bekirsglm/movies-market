import { useParams, useNavigate } from "react-router-dom";
import { useGetMovieDetailQuery } from "../features/api/movieApi";
import Loading from "../Loading";
import Error from "../components/Error";
import { FaArrowLeft, FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store";
import type { Movie } from "../types/movie";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const { data: movie, isLoading, error } = useGetMovieDetailQuery(Number(id));

  const favorites = useSelector((state: RootState) => state.favorites.items);

  if (error) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <div className="pt-20">
        <Loading />
      </div>
    );
  }

  if (!movie) {
    return (
      <div className="h-screen flex items-center justify-center text-white">
        Film bulunamadı
      </div>
    );
  }

  const isFavorite = favorites.some((item: Movie) => item.id === movie.id);

  return (
    <div className="pt-20 max-w-6xl mx-auto px-5 md:px-10 py-10">
      <div
        onClick={() => navigate("/")}
        className="mb-8 cursor-pointer inline-flex items-center gap-2 text-xl md:text-2xl text-white transition-all duration-200 hover:text-[#ffcc00]"
      >
        <FaArrowLeft />
        <span>Back to Home</span>
      </div>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt=""
            className="w-full rounded-2xl object-cover"
          />
        </div>

        <div className="flex-1 space-y-4 relative">
          <div
            onClick={() => {
              if (isFavorite) {
                dispatch(removeFavorite(movie.id));
              } else {
                dispatch(addFavorite(movie));
              }
            }}
            className="absolute top-0 right-0 flex items-center gap-2 bg-gray-900/80 backdrop-blur-sm px-3 py-1.5 rounded-full cursor-pointer transition-all duration-200 hover:bg-gray-800 hover:scale-105"
          >
            {isFavorite ? (
              <>
                <FaHeart className="text-[#ffcc00] hover:text-red-600" />
                <span className="hidden lg:inline text-sm text-white">
                  In Favorites
                </span>
              </>
            ) : (
              <>
                <FaRegHeart className="text-white hover:text-[#ffcc00]" />
                <span className="hidden lg:inline text-sm text-white">
                  Add to Favorites
                </span>
              </>
            )}
          </div>

          <h1 className="text-3xl font-bold text-white">{movie.title}</h1>

          <div className="flex items-center gap-4 text-gray-400">
            <span>⭐ {movie.vote_average?.toFixed(1)}</span>
            <span>{movie.release_date}</span>
            <span>{movie.runtime} min</span>
          </div>

          <p className="text-gray-300 leading-relaxed">{movie.overview}</p>

          <div className="flex flex-wrap gap-2">
            {movie.genres?.map((genre) => (
              <span
                key={genre.id}
                className="px-3 py-1 bg-gray-800 rounded-full text-sm text-white"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
