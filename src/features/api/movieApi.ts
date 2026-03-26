import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL, API_KEY } from "../../constants/api";
import type { Movie } from "../../types/movie";

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
  tagTypes: ["Movies"],
  endpoints: (builder) => ({
    getPopular: builder.query<MoviesResponse, number | void>({
      query: (page = 1) => ({
        url: "/movie/popular",
        params: {
          api_key: API_KEY,
          page,
        },
      }),
      providesTags: ["Movies"],
    }),

    getTopRated: builder.query<MoviesResponse, number | void>({
      query: (page = 1) => ({
        url: "/movie/top_rated",
        params: {
          api_key: API_KEY,
          page,
        },
      }),
      providesTags: ["Movies"],
    }),

    getTrending: builder.query<MoviesResponse, void>({
      query: () => ({
        url: "/trending/movie/week",
        params: {
          api_key: API_KEY,
        },
      }),
      providesTags: ["Movies"],
    }),

    getMovieDetail: builder.query<Movie, number>({
      query: (id) => ({
        url: `/movie/${id}`,
        params: {
          api_key: API_KEY,
        },
      }),
    }),
  }),
});

export const {
  useGetPopularQuery,
  useGetTopRatedQuery,
  useGetTrendingQuery,
  useGetMovieDetailQuery,
} = movieApi;