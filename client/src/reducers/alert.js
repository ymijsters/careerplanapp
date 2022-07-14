import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const dispatch = useDispatch();

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

      setTimeout(() => dispatch(removeAlert(id)), 5000);
    },
    removeAlert(state, action) {
      const { value, index } = state.find(
        (alert) => (alert.id = action.payload)
      );
      state.splice(index);
    },
  },
});

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
