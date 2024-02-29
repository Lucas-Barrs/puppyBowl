import { configureStore } from "@reduxjs/toolkit";
import { playersApi } from "./playerSlice";

export const store = configureStore({
reducer: {
  playersApi: playersApi.reducer
},
middleware: (getDefaultMiddleware) =>
getDefaultMiddleware().concat(playersApi.middleware)
});

export default store