import React, { useEffect, useState } from "react";

type AlertProps = {
  message: string;
  type: "success" | "error";
};

const Alert: React.FC<AlertProps> = ({ message, type }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => setVisible(false), 3000);
  }, []);

  return visible ? (
    <div className={`p-4 rounded ${type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}>
      {message}
    </div>
  ) : null;
};

export default Alert;
