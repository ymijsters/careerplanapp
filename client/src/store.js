import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    filters: filtersReducer,
  },
});
