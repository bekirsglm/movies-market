import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Movie } from "../../types/movie";

type FavoritesState = {
  items: Movie[];
};

const loadFromLocalStorage = (): Movie[] => {
  try {
    const data = localStorage.getItem("favorites");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

const saveToLocalStorage = (items: Movie[]) => {
  localStorage.setItem("favorites", JSON.stringify(items));
};

const initialState: FavoritesState = {
  items: loadFromLocalStorage(),
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Movie>) => {
      const exists = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (exists) {
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        state.items.push(action.payload);
      }

      saveToLocalStorage(state.items);
    },

    clearFavorites: (state) => {
      state.items = [];
      saveToLocalStorage(state.items);
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;