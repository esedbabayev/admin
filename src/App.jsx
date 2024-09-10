import React, { useState } from "react";

// Components
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";


const App = () => {
  const [sideBarToggle, setSideBarToggle] = useState(false);


  return (
    <>
      <div className="flex">
        <SideBar
          sideBarToggle={sideBarToggle}
     
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
