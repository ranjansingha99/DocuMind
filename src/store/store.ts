import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./uploadSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
