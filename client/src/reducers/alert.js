import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: [],
  reducers: {
    setAlert(state, action) {
      state.push(action.payload);
    },
    removeAlert(state, action) {
      const { value, index } = state.find((alert) => (alert = action.payload));
      state.splice(index);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
