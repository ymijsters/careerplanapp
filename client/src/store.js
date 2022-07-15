import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../src/reducers/alert";
import authReducer from "../src/reducers/auth";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
  },
});
export default store;
