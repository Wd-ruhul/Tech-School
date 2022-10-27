import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import CourseDetails from "../Components/Courses/CourseDetails";
import Courses from "../Components/Courses/Courses";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Login/Login";
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
        path: "/courses",
        loader: async () => fetch("http://localhost:5000/courses-categories"),
        element: <Courses></Courses>,
      },
      {
        path: "/course_details/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/course_details/${params.id}`),
        element: <CourseDetails></CourseDetails>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);