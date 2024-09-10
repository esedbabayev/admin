import React, { useState } from 'react';

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    surName: '',
    userName: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send a POST request to your local server
      const response = await fetch('http://localhost:5000/api/users', {
        method: 'POST', // Specify the method as POST
        headers: {
          'Content-Type': 'application/json', // Set the content type to JSON
        },
        body: JSON.stringify(formData), // Convert the form data to a JSON string
      });
  
      const data = await response.json(); // Parse the JSON response
  
      if (response.ok) {
        // Success handling
        console.log('User added successfully:', data);
        alert('User added successfully!');
        // Optionally, clear the form after successful submission
        setFormData({
          name: '',
          surName: '',
          userName: '',
          password: '',
          email: '',
        });
      } else {
        // Error handling
        console.error('Error adding user:', data);
        alert('Error adding user: ' + (data.message || 'Something went wrong'));
      }
    } catch (error) {
      // Network or other errors
      console.error('Network error:', error);
      alert('Network error. Please try again later.');
    }
  };
  
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md border rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add User</h2>
      <form onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Surname */}
        <div className="mb-4">
          <label htmlFor="surName" className="block text-sm font-medium text-gray-700">Surname</label>
          <input
            type="text"
            name="surName"
            id="surName"
            value={formData.surName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Username */}
        <div className="mb-4">
          <label htmlFor="userName" className="block text-sm font-medium text-gray-700">Username</label>
          <input
            type="text"
            name="userName"
            id="userName"
            value={formData.userName}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
        >
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;

