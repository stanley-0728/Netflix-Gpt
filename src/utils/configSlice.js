import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});
export const { changeLang } = configSlice.actions;
export default configSlice.reducer;
