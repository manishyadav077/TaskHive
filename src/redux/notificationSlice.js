import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notificationSlice = createSlice({
  name: "notification",
  initialState: null,
  reducers: {
    showSuccess: (_, action) => {
      toast.success(action.payload);
    },
    showError: (_, action) => {
      toast.error(action.payload);
    },
    showWarning: (_, action) => {
      toast.warn(action.payload);
    },
  },
});

export const { showSuccess, showError, showInfo, showWarning } =
  notificationSlice.actions;

export default notificationSlice.reducer;
