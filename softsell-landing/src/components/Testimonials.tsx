import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <h2 className="text-3xl font-bold mb-10">What Our Clients Say</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <blockquote>
          <p className="italic">"SoftSell transformed our entire sales strategy."</p>
          <footer className="mt-2 font-semibold">— Swabhimaan Thakur, CEO @ BizCorp</footer>
        </blockquote>
        <blockquote>
          <p className="italic">"The automation features saved us hours every week."</p>
          <footer className="mt-2 font-semibold">— Abhinav Sharma, Sales Lead @ TechNova</footer>
        </blockquote>
      </div>
    </section>
  );
};

export default Testimonials;
