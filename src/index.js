import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import NewEmployee from "./pages/NewEmployee/NewEmployee";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EmployeeList from "./pages/EmployeeList/EmployeeList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
