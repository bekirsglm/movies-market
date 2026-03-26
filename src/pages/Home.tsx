import {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
} from "../features/api/movieApi";
import MovieSection from "../components/MovieSection";
import Error from "../components/Error";

const Home = () => {
  const {
    data: popular,
    isLoading: loadingPopular,
    error: errorPopular,
  } = useGetPopularQuery();

  const {
    data: topRated,
    isLoading: loadingTopRated,
    error: errorTopRated,
  } = useGetTopRatedQuery();

  const {
    data: trending,
    isLoading: loadingTrending,
    error: errorTrending,
  } = useGetTrendingQuery();

  const isLoading =
    loadingPopular || loadingTopRated || loadingTrending;

  const isError =
    errorPopular || errorTopRated || errorTrending;

  if (isError) {
    return <Error />;
  }

  if (isLoading) {
    return (
      <div className="pt-20 space-y-12 px-5">
        {[1, 2, 3].map((section) => (
          <div key={section}>
            <div className="h-6 w-40 bg-gray-800 animate-pulse mb-3 rounded" />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-5">
              {Array.from({ length: 8 }).map((_, i) => (
                <div
                  key={i}
                  className="w-full h-75 bg-gray-800 animate-pulse rounded-xl"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  const hasNoData =
    !popular?.results?.length &&
    !topRated?.results?.length &&
    !trending?.results?.length;

  if (hasNoData) {
    return (
      <div className="pt-20 flex items-center justify-center text-white">
        No movies found
      </div>
    );
  }

  return (
    <div className="pt-20 px-5 space-y-12">
      <MovieSection title="Popular" movies={popular?.results || []} />
      <MovieSection title="Top Rated" movies={topRated?.results || []} />
      <MovieSection title="Trending" movies={trending?.results || []} />
    </div>
  );
};

export default Home;