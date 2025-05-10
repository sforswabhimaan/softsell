import React, { useState, useEffect } from "react";

const ActiveUsers: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);

  // Simulate fetching active users (Replace with WebSocket or API integration if needed)
  useEffect(() => {
    const activeUsers = JSON.parse(localStorage.getItem("activeUsers") || "[]");
    setUsers(activeUsers);

    // Simulate a new user joining
    const newUser = `User-${Math.floor(Math.random() * 1000)}`;
    localStorage.setItem("activeUsers", JSON.stringify([...activeUsers, newUser]));
    setUsers((prev) => [...prev, newUser]);

    return () => {
      // Cleanup: Remove user on component unmount
      localStorage.setItem("activeUsers", JSON.stringify(users.filter((user) => user !== newUser)));
    };
  }, []);

  return (
    <div className="border p-4 w-48 rounded bg-gray-100">
      <h2 className="font-bold text-lg">Active Users:</h2>
      {users.length > 0 ? (
        users.map((user, index) => (
          <p key={index} className="text-sm text-gray-700">{user}</p>
        ))
      ) : (
        <p className="text-sm text-gray-500">No active users</p>
      )}
    </div>
  );
};

export default ActiveUsers;
