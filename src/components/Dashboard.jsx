import React, { useState, useEffect } from "react";

// Components
import NavBar from "../components/NavBar";


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




  return (
    <div className={`w-full ${sideBarToggle ? "" : "ml-64"}`}>
      <NavBar
        sideBarToggle={sideBarToggle}
        setSideBarToggle={setSideBarToggle}
      />
      <div className="p-4"></div>
    </div>
  );
};

export default Dashboard;
