import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("home");

  const selectMenuHandler = (menu) => {
    setSelectedMenu(menu);
  };
  return (
    <div className="flex overflow-hidden h-screen flex-col">
      <div className="container mx-auto w-full flex">
        <SideBar sideBarToggle={sideBarToggle} selectMenuHandler={selectMenuHandler} />
        <Dashboard sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} selectedMenu={selectedMenu} />
      </div>
     
    </div>
  
  );
};

export default App;
