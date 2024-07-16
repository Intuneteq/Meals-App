import { RootState } from "../store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IFavorite {
  ids: string[];
}

const initialState: IFavorite = {
  ids: [],
};

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.push(action.payload.id);
    },
    removeFavorite: (state, action: PayloadAction<{ id: string }>) => {
      state.ids.splice(state.ids.indexOf(action.payload.id));
    },
  },
});

// Export actions
export const { addFavorite, removeFavorite } = favoriteSlice.actions;

export const selectFavoriteMealsIds = (state: RootState) => state.favorites.ids;

// Export reducer to be used in the store
export default favoriteSlice.reducer;
