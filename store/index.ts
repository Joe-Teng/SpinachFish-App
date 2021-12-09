import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user";

// configureStore automatically calls combineReducers and enables redux dev tools!
const store = configureStore({
  reducer: {
    userSlice,
  },
});

export default store;
