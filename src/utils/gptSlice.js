import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGpt: false,
    showSuggestions: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGpt = !state.showGpt;
    },
    toggleSuggestions: (state) => {
      state.showSuggestions = !state.showSuggestions;
    },
  },
});
export const { toggleGptSearchView, toggleSuggestions } = gptSlice.actions;
export default gptSlice.reducer;
