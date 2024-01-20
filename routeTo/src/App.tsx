import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import { mainRouter } from "./router/mainRouter";

function App() {
  return (
    <>
      <RouterProvider router={mainRouter} />
    </>
  );
}

export default App;
