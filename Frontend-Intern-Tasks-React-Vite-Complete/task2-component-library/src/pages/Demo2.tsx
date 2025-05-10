import React from "react";
import Button from "../components/Button";
import Alert from "../components/Alert";

const Demo2: React.FC = () => {
  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Demo 2: Alerts and Button Variants</h1>
      <Alert message="Success alert!" type="success" />
      <Alert message="Error alert!" type="error" />
      <div className="mt-4 space-x-4">
        <Button variant="primary" onClick={() => alert("Primary button clicked!")}>Primary</Button>
        <Button variant="secondary">Secondary</Button>
      </div>
    </div>
  );
};

export default Demo2;
