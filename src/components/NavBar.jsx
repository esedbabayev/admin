import React from "react";

// Hooks
import { useState } from "react";

// React Icons
import { FaBars, FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const NavBar = ({ sideBarToggle, setSideBarToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropDownHandler = () => {
    setIsOpen(!isOpen);
  };

  const sideBarToggleHandler = () => {
    setSideBarToggle(!sideBarToggle);
  };

  return (
    <nav className="bg-gray-800 px-4 py-3 flex justify-between">
      <div className="flex items-center text-xl">
        <FaBars className="text-white me-4 cursor-pointer" onClick={sideBarToggleHandler} />
        <span className="text-white font-semibold">E-commerce</span>
      </div>
      <div className="flex items-center gap-x-5">
        <div className="relative md:w-64">
          <span className="relative md:absolute inset-y-0 left-0 flex items-center pl-2">
            <button className="p-1 focus:outline-none text-white md:text-black">
              <FaSearch />
            </button>
          </span>
          <input
            type="text"
            className="w-full px-4 py-1 pl-12 rounded shadow outline-none hidden md:block"
          />
        </div>
        <div className="text-white cursor-pointer">
          <FaBell className="w-6 h-6" />
        </div>
        <div onClick={dropDownHandler} className="relative">
          <button className="text-white">
            <FaUserCircle className="w-6 h-6 mt-1" />
            {isOpen && (
              <div className="z-10 block absolute bg-white rounded-lg shadow w-32 top-full right-0">
                <ul className="py-2 text-sm  text-gray-950">
                  <li>
                    <a href="">Profile</a>
                  </li>
                  <li>
                    <a href="">Settings</a>
                  </li>
                  <li>
                    <a href="">Log Out</a>
                  </li>
                </ul>
              </div>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
