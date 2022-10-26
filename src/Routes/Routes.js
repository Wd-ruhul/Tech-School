import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import Registration from "../Components/Registration/Registration";
import Main from "../Layout/Main";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
    ],
  },
]);