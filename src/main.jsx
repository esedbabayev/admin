import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Components
import AddUser from './components/AddUser.jsx'
import Users from './components/Users.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/users",
    element: <Users/>,
  },
  {
    path: "/addUser",
    element: <AddUser/>,
  },

]);

createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router} />
)
