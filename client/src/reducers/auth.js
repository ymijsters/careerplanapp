import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";
import { addAlertWithTimout } from "./alert";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    loading: true,
    user: null,
  },
  reducers: {
    setUser(state, action) {
      console.log(action.payload);
      state.auth.user = action.payload.user;
      state.auth.token = action.payload.token;
      state.auth.isAuthenticated = true;
      console.log(state);
    },
    removeUser(state) {
      state.auth.user = {};
      state.auth.isAuthenticated = false;
    },
  },
});

//Potentially move these functions to another file
export const login = (user) => async (dispatch) => {
  //@TODO: perform login through Axios
  //@TODO: Set the token
  console.log(user);
};

export const logout = () => async (dispatch) => {
  dispatch(removeUser());
  //@TODO: Move to new page?
};

export const addUpdateUser = (user) => async (dispatch) => {
  try {
    const res = await api.post("/user", user);
    console.log(res);
    dispatch(setUser({ user: user, token: res.data.token }));
    //@TODO: on register; store token
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
      );
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
