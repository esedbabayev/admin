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
        path: "/",
        element: <h1>Welcome To Admin Dashboard</h1>,
      },
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
      {
        path: "/inbox",
        element: <h1>Inbox</h1>,
      },
      {
        path: "/settings",
        element: <h1>Settings</h1>,
      },

    ],
  }
]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
