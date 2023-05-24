import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NewEmployee from "./pages/NewEmployee/NewEmployee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <NewEmployee />
  },
  {
    path: "/employees",
    element: <EmployeeList />
  }
]);

const theme = createTheme({
  palette: {
    primary: {
      main: "#577399"
    },
    secondary: {
      main: "#FE5F55"
    }
  },
  typography: {
    fontFamily: [
      '"Wix Madefor Text"',
      "sans-serif"
    ].join(",")
  }
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </LocalizationProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
