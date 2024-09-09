import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import Users from "./components/Users";

import { Outlet } from "react-router-dom";

const App = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <>
      <div className="flex">
        <SideBar
          sideBarToggle={sideBarToggle}
          selectMenuHandler={selectMenuHandler}
        />
        <Dashboard
          sideBarToggle={sideBarToggle}
          setSideBarToggle={setSideBarToggle}
        />
      </div>
    </>
  );
};

export default App;
