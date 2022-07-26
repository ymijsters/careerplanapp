import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";
import { addAlertWithTimout } from "./alert";

const initialState = {
  profile: null,
  profiles: [],
  repos: [],
  loading: true,
  error: {},
};

const profileSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setProfile(state, action) {
      state.profile = action.payload;
    },
    setProfiles(state, action) {
      state.profiles = action.payload.profiles;
    },
  },
});

//Potentially move these functions to another file
export const createProfile =
  (name, currentCompany, unemployed, currentFunction) => async (dispatch) => {
    const body = { name, currentCompany, unemployed, currentFunction };
    try {
      const res = await api.post("/profile", body);
      dispatch(setProfile(res.data));
    } catch (err) {
      console.log(err.response);
      const errors = err.response.data.errors;
      if (errors) {
        errors.forEach((error) =>
          dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
        );
      }
    }
  };

export const getCurrentProfile = () => async (dispatch) => {
  try {
    const res = await api.get("/profile", body);
    dispatch(setProfile(res.data));
  } catch (err) {
    console.log(err.response);
    const errors = err.response.data.errors;
    if (errors) {
      errors.forEach((error) =>
        dispatch(addAlertWithTimout({ msg: error.msg, alertType: "danger" }))
      );
    }
  }
};

export const { setProfile, setProfiles } = profileSlice.actions;
export default profileSlice.reducer;
