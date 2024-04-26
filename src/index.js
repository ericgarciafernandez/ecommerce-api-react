import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Category from "./components/Category";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Stripe from "./components/Stripe";
import "./index.css";
import "@fontsource/montserrat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/categorias/:category",
    element: <Category />,
  },
  {
    path: "/detalles/:id",
    element: <Details />,
  },
  {
    path: "/carrito",
    element: <Cart />,
  },
  {
    path: "/api/checkout",
    element: <Stripe />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
