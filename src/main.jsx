import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Redux
import { Provider } from "react-redux";
import { store } from "../redux/store.js";

// Components
import Users from "./components/Users.jsx";
import Products from "./components/Products.jsx";
import AddProduct from "./components/AddProduct.jsx";
import AddUser from "./components/AddUser.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import UploadImage from "./components/UploadImage.jsx";

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
        children: [],
      },
      {
        path: "add-user",
        element: <AddUser />,
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
      {
        path: "/image-upload",
        element: <UploadImage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />{" "}
    </StrictMode>
  </Provider>
);
