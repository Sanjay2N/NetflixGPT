import { configureStore } from "@reduxjs/toolkit";
import useeReducer from "./userSlice";
const appStore = configureStore({
  reducer: {
    user: useeReducer,
  },
});

export default appStore;
