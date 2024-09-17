import React from "react";

// React Icons
import { FaCog, FaHome, FaRegEnvelope, FaUsers } from "react-icons/fa";
import { AiFillProduct } from "react-icons/ai";

// Link
import { Link } from "react-router-dom";

const SideBar = ({ sideBarToggle }) => {
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
        <Link to={"/home"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a className="px-3">
              <FaHome className="inline-block w-6 h-6 mr-2 -mt-2"></FaHome>
              Home
            </a>
          </li>
        </Link>
        <Link to={"/users"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a className="px-3">
              <FaUsers className="inline-block w-6 h-6 mr-2 -mt-2"></FaUsers>
              Users
            </a>
          </li>
        </Link>
        <Link to={"products"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a className="px-3">
              <AiFillProduct className="inline-block w-6 h-6 mr-2 -mt-2"></AiFillProduct>
              Proucts
            </a>
          </li>
        </Link>
        <Link to={"inbox"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a href="" className="px-3">
              <FaRegEnvelope className="inline-block w-6 h-6 mr-2 -mt-2"></FaRegEnvelope>
              Inbox
            </a>
          </li>
        </Link>
        <Link to={"settings"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a href="" className="px-3">
              <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
              Settings
            </a>
          </li>
        </Link>
        <Link to={"image-upload"}>
          <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2 cursor-pointer">
            <a href="" className="px-3">
              <FaCog className="inline-block w-6 h-6 mr-2 -mt-2"></FaCog>
              Upload Image
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default SideBar;
