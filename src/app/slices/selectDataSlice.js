import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  USstates: [],
  departments: []
};

export const selectDataSlice = createSlice({
  name: "selectData",
  initialState,
  reducers: {
    setUSstates: (state, action) => {
        state.USstates = action.payload;
    },
    setDepartments: (state, action) => {
        state.departments = action.payload;
    }
  }
});

export const { setUSstates, setDepartments } = selectDataSlice.actions;
export default selectDataSlice.reducer;