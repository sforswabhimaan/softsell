import React from "react";

const Features: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-xl font-semibold mb-2">CRM Integration</h3>
          <p>Easily connect your existing tools and workflows.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
          <p>Track conversions, leads, and engagement instantly.</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Workflows</h3>
          <p>Automate and tailor your sales pipeline effortlessly.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
