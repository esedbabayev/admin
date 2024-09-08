import React from "react";

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
        <li
          onClick={() => selectMenuHandler("home")}
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
          <a className="px-3">
            <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
            Home
          </a>
        </li>
        <li
          onClick={() => selectMenuHandler("users")}
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
          <a className="px-3">
            <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2"></FaUsers>
            Users
          </a>
        </li>
        <li
          onClick={() => selectMenuHandler("products")}
          className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer"
        >
          <a className="px-3">
            <AiFillProduct className="inline-block w-6 h-6 mr-2 -mt-2"></AiFillProduct>
            Proucts
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <a href="" className="px-3">
            <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
            Inbox
          </a>
        </li>
        <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
          <a href="" className="px-3">
            <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
