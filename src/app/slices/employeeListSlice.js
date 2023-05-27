import { createSlice } from "@reduxjs/toolkit";
import { mockEmployees } from "../../mockData/mockEmployees";

const initialState = [...mockEmployees];

export const employeeListSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { addEmployee } = employeeListSlice.actions;
export default employeeListSlice.reducer;