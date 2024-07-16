import { configureStore, combineReducers } from "@reduxjs/toolkit";

import favoritesReducer from "./slices/favorites";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootReducer>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
