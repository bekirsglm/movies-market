import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../../constants/api";
import type { Movie } from "../../types/movie";

// 🎯 Liste response type
type MoviesResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  endpoints: (builder) => ({
    getPopular: builder.query<MoviesResponse, void>({
      query: () => `/movie/popular?api_key=${API_KEY}`,
    }),
    getTopRated: builder.query<MoviesResponse, void>({
      query: () => `/movie/top_rated?api_key=${API_KEY}`,
    }),
    getTrending: builder.query<MoviesResponse, void>({
      query: () => `/trending/movie/week?api_key=${API_KEY}`,
    }),
    getMovieDetail: builder.query<Movie, number>({
      query: (id) => `/movie/${id}?api_key=${API_KEY}`,
    }),
  }),
});

export const {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetMovieDetailQuery,
} = movieApi;