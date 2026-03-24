export const BASE_URL = "https://api.themoviedb.org/3";

const key = import.meta.env.VITE_API_KEY;

if (!key) {
  throw new Error("VITE_API_KEY is not defined in .env");
}

export const API_KEY = key;

export const endpoints = {
  popular: "/movie/popular",
  topRated: "/movie/top_rated",
  trending: "/trending/movie/week",
} as const;