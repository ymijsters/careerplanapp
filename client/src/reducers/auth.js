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
    setLoading(state, action) {
      state.loading = true;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
    authSuccess(state, action) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.loading = false;
    },
    removeUser(state) {
      state.user = {};
      state.isAuthenticated = false;
      state.token = "";
    },
  },
});

//Potentially move these functions to another file
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await api.post("/auth", body);
    dispatch(authSuccess(res.data));
    dispatch(getUser());
  } catch (err) {
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
      );
    }
  }
};

export const logout = () => async (dispatch) => {
  dispatch(removeUser());
};

export const addUpdateUser = (user) => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.post("/user", user);
    dispatch(authSuccess(res.data));
    dispatch(getUser());
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
