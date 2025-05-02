"use client";
import { useState } from "react";

const Auth = ({ handleAuth }: { handleAuth: (email: string, password: string, type: string) => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("login"); // Toggle between login/signup

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAuth(email, password, type);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-5">
      <input 
        type="email" 
        placeholder="Email"
        className="border p-2 rounded w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input 
        type="password" 
        placeholder="Password"
        className="border p-2 rounded w-full"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        {type === "login" ? "Login" : "Sign Up"}
      </button>
      <button type="button" className="text-sm text-gray-600" onClick={() => setType(type === "login" ? "signup" : "login")}>
        {type === "login" ? "Create an Account" : "Already have an account?"}
      </button>
    </form>
  );
};

export default Auth;
