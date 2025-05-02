import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">Event Planner</h1>
      <div className="space-x-4">
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Home</button>
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Events</button>
        <button className="hover:bg-gray-700 px-4 py-2 rounded">Settings</button>
      </div>
    </nav>
  );
};

export default Navbar;
 
