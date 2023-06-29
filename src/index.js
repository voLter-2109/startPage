import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import StingerModalWindow from "./stinger";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "sicret",
    element: <StingerModalWindow />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
