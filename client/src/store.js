import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../src/reducers/alert";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
