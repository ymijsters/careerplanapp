import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import api from "../utils/api";

const authSlice = createSlice({
  name: "auth",
  initialState: [
    {
      token: localStorage.getItem("token"),
      isAuthenticated: null,
      loading: true,
      user: null,
    },
  ],
  reducers: {
    setUser(state, action) {
      state.user.user = action.payload;
      state.user.isAuthenticated = true;
    },
    removeUser(state) {
      state.user.user = {};
      state.user.isAuthenticated = false;
    },
  },
});

//Potentially move these functions to another file
export function login(dispatch, user) {
  //@TODO: perform login through Axios
  //@TODO: Set the token
}

export function logout(dispatch) {
  dispatch(removeUser());
  //@TODO: Move to new page?
}

export const addUpdateUser = (user) => async (dispatch) => {
  try {
    const res = await api.post("/user", user);
    dispatch(setUser(user));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }
  }
};

export function getUser(dispatch, token) {
  //@TODO get ID from token and Axios request user for ID
  const user = {};
  dispatch(setUser(user));
}

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;