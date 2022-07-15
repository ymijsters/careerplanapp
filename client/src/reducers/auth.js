import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";
import { addAlertWithTimout } from "./alert";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: localStorage.getItem("token"),
    isAuthenticated: false,
    loading: true,
    user: null,
  },
  reducers: {
    setLoading(state, action) {
      state.loading = true;
    },
    setUser(state, action) {
      state.user = action.payload.user;
    },
    authSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
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
    dispatch(setLoading());
    const res = await api.post("/user", user);
    console.log(res);
    dispatch(authSuccess(res.data));
    //@TODO: on register; store token
  } catch (err) {
    console.log(err);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
      );
    }
  }
};

export const getUser = () => async (dispatch) => {
  //@TODO get ID from token and Axios request user for ID
  try {
    const res = await api.get("/auth");
    dispatch(setUser(res.data));
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
      );
    }
  }
};

export const { setUser, removeUser, setLoading, authSuccess } =
  authSlice.actions;
export default authSlice.reducer;
