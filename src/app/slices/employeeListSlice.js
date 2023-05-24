import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: []
};

export const employeeListSlice = createSlice({
  name: "employees",
  initialState,
  reducers: {
    addEmployee: (state, action) => {
      state.employees.push(action.payload);
    }
  }
});

export const { addEmployee } = employeeListSlice.actions;
export default employeeListSlice.reducer;