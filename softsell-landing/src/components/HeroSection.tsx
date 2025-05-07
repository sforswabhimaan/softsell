import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="w-full h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to SoftSell</h1>
      <p className="text-xl max-w-xl">
        Revolutionize your sales process with our cutting-edge SaaS solutions.
        Seamless integration, powerful insights, and effortless user experience.
      </p>
      <button className="mt-8 px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">
        Get Started
      </button>
    </section>
  );
};

export default HeroSection;
