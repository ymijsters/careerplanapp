import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";

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
      state.profile = action.payload.profile;
    },
    setProfiles(state, action) {
      state.profiles = action.payload.profiles;
      state.splice(index, 1);
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
