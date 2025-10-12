import { createSlice } from "@reduxjs/toolkit";
//  createSlice is a collection of state , reducer and action,
// state (data you wont to store),
// reducer {function that modies the state}
// action {function you call to trigger}

const initialState = {
  //   value: 0,
  bannerData: [],
  imageUrl: "",
};

export const MovieoSlice = createSlice({
  name: "movieo",
  initialState,
  reducers: {
    setBannerData: (state, action) => {
      state.bannerData = action.payload;
    },
    setImage: (state, action) => {
      state.imageUrl = action.payload;
    },
  },
});

export const { setBannerData, setImage } = MovieoSlice.actions;

export default MovieoSlice.reducer;
