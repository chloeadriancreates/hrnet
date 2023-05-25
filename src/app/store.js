import { configureStore } from "@reduxjs/toolkit";
import employeeListSlice from "./slices/employeeListSlice";
import selectDataSlice from "./slices/selectDataSlice";

export const store = configureStore({
  reducer: {
    employees: employeeListSlice,
    selectData: selectDataSlice
  }
});