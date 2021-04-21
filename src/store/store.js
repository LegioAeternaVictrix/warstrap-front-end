import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice";

const store = configureStore({
  reducer: { authSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
