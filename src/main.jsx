import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Components
import Users from "./components/Users.jsx";
import Products from "./components/Products.jsx";
import AddProduct from "./components/AddProduct.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <h1>Welcome To Admin Dashboard</h1>,
      },
      {
        path: "home",
        element: <div>home</div>,
      },
      {
        path: "users",
        element: <Users />,
      },

      {
        path: "products",
        element: <Products />,
        children: [
          {
            path: "add-product",
            element: <AddProduct />,
          },
        ],
      },
      {
        path: "/inbox",
        element: <div>inbox</div>,
      },
      {
        path: "/settings",
        element: <div>settings</div>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />{" "}
  </StrictMode>
);
