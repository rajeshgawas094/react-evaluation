import React from "react";

const GetStartedSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-[#0A061F] to-black text-white text-center">
      <h2 className="text-3xl font-semibold mb-4">Get started for free</h2>
      <p className="text-lg mb-6 text-gray-300">
        Build your first use case in minutes. Start your journey now.
      </p>
      <button className="bg-[#8358FF] hover:bg-[#6a3deb] px-6 py-3 rounded-full transition font-semibold">
        Create Account
      </button>
    </section>
  );
};

export default GetStartedSection;
