import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Components
import AddUser from './components/AddUser.jsx'
import Users from './components/Users.jsx'
import Products from './components/Products.jsx'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/addUser",
        element: <AddUser />,
      },

    ],
  }
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
