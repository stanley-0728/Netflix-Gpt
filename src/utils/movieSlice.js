import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlaying: [],
  },
  reducers: {
    addNowPlaying: (state, { payload }) => {
      state.nowPlaying = payload;
    },
  },
});
export const { addNowPlaying } = movieSlice.actions;
export default movieSlice.reducer;
