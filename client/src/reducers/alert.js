import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const alertSlice = createSlice({
  name: "alert",
  initialState: [],
  reducers: {
    setAlert(state, action) {
      state.push({
        msg: action.payload.msg,
        alertType: action.payload.alertType,
        id: action.payload.id,
      });
    },
    removeAlert(state, action) {
      const { value, index } = state.find(
        (alert) => (alert.id = action.payload)
      );
      state.splice(index, 1);
    },
  },
});

export const addAlertWithTimout = (alert) => async (dispatch) => {
  const id = uuidv4();
  //dispatch(setAlert({ ...alert, id: id }));
  //setTimeout(() => dispatch(removeAlert(id)), 5000);
};

export const { setAlert, removeAlert } = alertSlice.actions;
export default alertSlice.reducer;
