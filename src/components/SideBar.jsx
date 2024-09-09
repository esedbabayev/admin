import React from "react";

import { Link } from "react-router-dom";

// React Icons
import { FaCog, FaHome, FaRegEnvelope, FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

const SideBar = ({ sideBarToggle, selectMenuHandler }) => {
  return (
    <div
      className={`${
        sideBarToggle ? "hidden" : "block"
      } w-64 h-full fixed bg-gray-800 px-4 py-2`}
    >
      <div className="my-2 mb-4">
        <h1 className="text-2xl text-white font-bold">Admin Dashboard</h1>
      </div>
      <hr />
      <ul className="mt-3 text-white font-bold">

        <Link to="/">
        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
            Home
        </li>
        </Link>
       
       <Link to="/users">
        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
            <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2"></FaUsers>
            Users
        </li>
        </Link>

        <Link to="/products">
        <li
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
            <AiFillProduct className="inline-block w-6 h-6 mr-2 -mt-2"></AiFillProduct>
            Products
        </li>
        </Link>

        <Link to="/inbox">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
            Inbox
        </li>
        </Link>

        <Link to="/settings">
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
            Settings
        </li>
        </Link>

      </ul>
    </div>
  );
};

export default SideBar;
