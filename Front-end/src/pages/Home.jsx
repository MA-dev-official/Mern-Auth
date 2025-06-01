import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    toast.success("Logged out successfully!");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000); // wait for toast before redirect
  };

  if (!user) return <p className="text-center mt-10">Loading user data...</p>;

  return (
    <div className="max-w-md sm:mx-auto mt-12 p-6 rounded-xl shadow-lg border text-center m-3">
      <h2 className="text-2xl font-bold mb-4">Welcome, {user.name}</h2>

      <div className="bg-gray-100 p-2 rounded-lg">
        <p className="text-lg font-medium text-gray-700">Name: {user.name}</p>
        <p className="text-lg font-medium text-gray-700">Email: {user.email}</p>
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 w-full bg-red-600 text-white py-2 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
};

export default Home;