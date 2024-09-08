import React, { useState, useEffect } from "react";

// Components
import NavBar from "../components/NavBar";
import Products from "./Products";
import Users from "./Users";

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

  const renderMenu = () => {
    switch (selectedMenu) {
      case "users":
        return <Users users={users} setUsers={setUsers} />;
      case "products":
        return <Products products={products} setProducts={setProducts} />;
      default:
        return <p>Welcome to the Admin Dashboard</p>;
    }
  };
  return (
    <div className={`w-full ${sideBarToggle ? "" : "ml-64"}`}>
      <NavBar
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div className="p-4">{renderMenu()}</div>
    </div>
  );
};

export default Dashboard;
