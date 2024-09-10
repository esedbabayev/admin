import React from "react";

import { Outlet } from "react-router-dom";

// Components
import NavBar from "../components/NavBar";
import Users from "./Users";

import { useLocation } from "react-router-dom";


const Dashboard = ({ sideBarToggle, setSideBarToggle, selectedMenu }) => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // fetch user data
        const userResponse = await fetch("http://localhost:5000/api/users");
        const userData = await userResponse.json();

        setUsers(userData.data);

        // fetch product data
        const productResponse = await fetch(
          "http://localhost:5000/api/products"
        );
        const productData = await productResponse.json();

        setProducts(productData.products);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  const location = useLocation();

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
