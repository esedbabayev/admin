import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

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
