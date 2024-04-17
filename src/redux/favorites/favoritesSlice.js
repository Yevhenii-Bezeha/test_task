import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favorites: [],
  filteredFavorites: [],
};

const favoritesSlice = createSlice({
  name: "favoritesCars",
  initialState,
  reducers: {
    addToFavorites: (state, { payload }) => {
      if (!state.favorites.some((favorite) => favorite._id === payload._id)) {
        state.favorites?.push(payload);
      }
    },

    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite._id !== payload._id
      );
    },
  },
});

export const { addToFavorites, removeFromFavorites, setFilterFavorites } =
  favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;
