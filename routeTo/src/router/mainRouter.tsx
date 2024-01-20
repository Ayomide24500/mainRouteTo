import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/Home/HomeScreen";
import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Verify from "../pages/Auth/Verify";

export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify/:id",
    element: <Verify />,
  },
]);
