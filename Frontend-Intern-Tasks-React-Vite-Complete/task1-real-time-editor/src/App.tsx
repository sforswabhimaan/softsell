import React, { useState, useEffect } from "react";
import Editor from "./components/Editor";
import ActiveUsers from "./components/ActiveUsers";


const App: React.FC = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUsername = localStorage.getItem("username");
    if (!storedUsername) {
      const newUsername = prompt("Enter your name:");
      localStorage.setItem("username", newUsername || "Anonymous");
      setUsername(newUsername || "Anonymous");
    } else {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Real-Time Collaborative Editor</h1>
      <p>Editing as: <strong>{username}</strong></p>
      <Editor username={username} />
      <ActiveUsers />
    </div>
  );
};

export default App;
