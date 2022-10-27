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
import PrivateRoutes from "./PrivateRoutes";
export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <FAQ></FAQ>
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
        element: <CourseDetails></CourseDetails>,
      },
      {
        path: "/premiumCourse/:id",
        loader: async ({ params }) =>
          fetch(`http://localhost:5000/course_details/${params.id}`),
        element: (
          <PrivateRoutes>
            <CourseDetails></CourseDetails>,
          </PrivateRoutes>
        ),
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
  {
    path: "*",
    element: (
      <div className="text-warning text-bold"> Ops! 404 Not Found</div>
    ),
  },
]);