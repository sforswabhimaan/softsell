import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ variant = "primary", children, onClick }) => {
  return (
    <button
      className={`px-4 py-2 rounded ${variant === "primary" ? "bg-blue-500 text-white" : "bg-gray-500 text-white"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
