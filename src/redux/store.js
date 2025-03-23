import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import notificationReducer from "./notificationSlice";

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    notification: notificationReducer,
  },
});
