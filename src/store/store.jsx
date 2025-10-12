import { configureStore } from "@reduxjs/toolkit";
import MovieoReducer from "./MovieoSlice";

export const store = configureStore({
  reducer: {
    movieoData: MovieoReducer,
  },
});
