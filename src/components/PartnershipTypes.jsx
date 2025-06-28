import React from "react";

const types = [
  {
    title: "Technology Partners",
    description: "Collaborate on innovative solutions and integrations.",
  },
  {
    title: "Channel Partners",
    description: "Resell and distribute our offerings in your market.",
  },
  {
    title: "Strategic Partners",
    description: "Build long-term alliances for mutual growth.",
  },
];

const PartnershipTypes = () => {
  return (
    <section className="py-16 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-12">Types of Partnerships</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {types.map((type, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-white transition"
            >
              <h3 className="text-xl font-bold mb-3">{type.title}</h3>
              <p className="text-gray-300">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipTypes;
