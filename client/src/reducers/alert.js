import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const alertSlice = createSlice({
  name: "alert",
  initialState: [],
  reducers: {
    setAlert(state, action) {
      const id = uuidv4();
      state.push({
        msg: action.payload.msg,
        alertType: action.payload.alertType,
        id: id,
      });
    },
    removeAlert(state, action) {
      const { value, index } = state.find((alert) => (alert = action.payload));
      state.splice(index);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
