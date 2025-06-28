import React from "react";

const features = [
  {
    title: "Global Reach",
    description: "Expand your presence and connect with partners worldwide.",
  },
  {
    title: "Robust Tools",
    description: "Leverage cutting-edge technology to grow your business.",
  },
  {
    title: "24/7 Support",
    description: "Get assistance anytime from our expert team.",
  },
];

const AdvantagesSection = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Why Partner with Us?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
