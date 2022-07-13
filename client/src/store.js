import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../src/reducers/alert";

const store = configureStore({
  reducer: {
    alert: alertReducer,
  },
});
export default store;
