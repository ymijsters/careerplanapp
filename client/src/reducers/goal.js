import { createSlice } from "@reduxjs/toolkit";
import api from "../utils/api";
import { addAlertWithTimout } from "./alert";

const initialState = {
  goals: [],
  stockGoals: [],
  tasks: [],
  loading: true,
  error: [],
};

const goalSlice = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    setGoals(state, action) {
      state.loading = false;
      state.goals = action.payload;
      state.error = [];
    },
    setStockGoals(state, action) {
      state.stockGoals = action.payload;
      state.error = [];
    },
    setLoading(state, action) {
      state.loading = true;
      state.error = [];
    },
    setErrors(state, action) {
      state.error = action.payload;
    },
  },
});

export const getGoals = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.get("/goal");
    dispatch(setGoals(res.data));
  } catch (err) {
    console.log(err.response);
  }
};

export const getStockGoals = () => async (dispatch) => {
  try {
    dispatch(setLoading());
    const res = await api.get("/goal/stockgoals");
    dispatch(setStockGoals(res.data));
  } catch (err) {
    console.log(err.response);
  }
};

export const { setGoals, setStockGoals, setLoading, setErrors } =
  goalSlice.actions;
export default goalSlice.reducer;
