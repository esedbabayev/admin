import React, { useState } from "react";
import { RiDeleteBin6Line, RiEditLine } from "react-icons/ri";

import { Link } from "react-router-dom";

const Users = ({ users, setUsers }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    surName: "",
    userName: "",
    password: "",
    email: "",
  });

  // Open modal and set current user data
  const openModal = (user) => {
    setCurrentUser(user);
    setFormData({
      name: user.name,
      surName: user.surName,
      userName: user.userName,
      password: user.password,
      email: user.email,
    });
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentUser(null);
  };

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/users/${currentUser._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (!response.ok) throw new Error("Failed to update user");
      const updatedUser = await response.json();
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user._id === updatedUser._id ? updatedUser : user
        )
      );
      closeModal();
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  // Function to handle delete
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        const response = await fetch(`http://localhost:5000/api/users/${id}`, {
          method: "DELETE",
        });
        if (!response.ok) throw new Error("Failed to delete user");
        setUsers((prevUsers) => prevUsers.filter((user) => user._id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
      }
    }
  };

  return (
    <div className="overflow-x-auto">

      {/* <Link to="/addUser">
      <button>Add User</button>
      </Link> */}
      
      <table className="w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border border-gray-300 text-center">#</th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Name
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Surname
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Username
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Password
            </th>
            <th className="py-2 px-4 border border-gray-300 text-center">
              Email
            </th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user._id} className="odd:bg-white even:bg-gray-100">
              <td className="py-2 px-4 border border-gray-300 text-center">
                {index + 1}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {user.name}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {user.surName}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {user.userName}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {user.password}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                {user.email}
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => openModal(user)}
                  className="hover:text-blue-500 ml-2"
                >
                  <RiEditLine />
                </button>
              </td>
              <td className="py-2 px-4 border border-gray-300 text-center">
                <button
                  onClick={() => handleDelete(user._id)}
                  className="hover:text-red-500"
                >
                  <RiDeleteBin6Line />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-md w-96">
            <h2 className="text-xl mb-4">Edit User</h2>
            <form onSubmit={handleFormSubmit}>
              <label className="block mb-2">
                Name:
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Surname:
                <input
                  type="text"
                  name="surName"
                  value={formData.surName}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Username:
                <input
                  type="text"
                  name="userName"
                  value={formData.userName}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Password:
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>
              <label className="block mb-2">
                Email:
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border w-full p-2"
                />
              </label>

              <div className="flex justify-end mt-4">
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-4 py-2 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2"
                >
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
