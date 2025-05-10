import React from "react";
import { Button } from "../lib/Button";

const Home = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Coding Conf 2025</h1>
      <p>Your journey to next year's biggest event starts here.</p>
      <Button label="Secure Your Spot" onClick={() => alert("Registered!")} />
    </div>
  );
};

export default Home;
