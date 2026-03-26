import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

const MAX_MOVIES = 8;

const MovieSection = ({ title, movies }: Props) => {
  if (!movies || movies.length === 0) {
    return (
      <div>
        <h2 className="text-2xl font-bold mb-5 text-[#ffcc00]">
          {title}
        </h2>
        <p className="text-gray-400">No movies found</p>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-[#ffcc00]">
        {title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {movies.slice(0, MAX_MOVIES).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;