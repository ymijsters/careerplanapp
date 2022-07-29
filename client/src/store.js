import { configureStore } from "@reduxjs/toolkit";
import alertReducer from "../src/reducers/alert";
import authReducer from "../src/reducers/auth";
import profileReducer from "../src/reducers/profile";
import goalReducer from "../src/reducers/goal";
import setAuthToken from "./utils/setAuthToken";

const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,
    profile: profileReducer,
    goal: goalReducer,
  },
});

/*
  initialize current state from redux store for subscription comparison
  preventing undefined error
 */
let currentState = store.getState();

store.subscribe(() => {
  // keep track of the previous and current state to compare changes
  let previousState = currentState;
  currentState = store.getState();
  // if the token changes set the value in localStorage and axios headers
  if (previousState.auth.token !== currentState.auth.token) {
    const token = currentState.auth.token;
    setAuthToken(token);
  }
});

export default store;
