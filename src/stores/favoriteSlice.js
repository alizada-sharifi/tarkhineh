import { createSlice } from "@reduxjs/toolkit";

const getFavoritesFromLocalStorage = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : { selectedItems: [] };
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const initialState = getFavoritesFromLocalStorage();

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    likeItem: (state, action) => {
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({ ...action.payload });
        saveFavoritesToLocalStorage(state);
      }
    },

    disLikeItem: (state, action) => {
      const newSelectedItems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.selectedItems = newSelectedItems;
      saveFavoritesToLocalStorage(state);
    },
  },
});

export default favoriteSlice.reducer;
export const { likeItem, disLikeItem } = favoriteSlice.actions;
