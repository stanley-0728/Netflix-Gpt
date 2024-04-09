import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./UserSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
  reducer: {
    user: userSlice,
    movie: movieSlice,
    gpt: gptSlice,
    config: configSlice,
  },
});
export default appStore;
