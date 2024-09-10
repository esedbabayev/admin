import React from "react";

import { Outlet } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";

const Dashboard = ({ sideBarToggle, setSideBarToggle }) => {
  return (
    <div className={`w-full ${sideBarToggle ? "" : "ml-64"}`}>
      <NavBar
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div className="p-4">{<Outlet />}</div>
    </div>
  );
};

export default Dashboard;
