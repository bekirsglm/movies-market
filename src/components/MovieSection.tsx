import type { Movie } from "../types/movie";
import MovieCard from "./MovieCard";

type Props = {
  title: string;
  movies: Movie[];
};

const MovieSection = ({ title, movies }: Props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-5 text-[#ffcc00]">
        {title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
        {movies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieSection;