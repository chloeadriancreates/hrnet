import { configureStore } from "@reduxjs/toolkit";
import employeeListSlice from "./slices/employeeListSlice";

export const store = configureStore({
  reducer: {
    employees: employeeListSlice
  }
});