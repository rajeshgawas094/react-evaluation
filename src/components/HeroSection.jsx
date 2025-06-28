import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-black py-20 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <div className="text-center font-inter">
        <h1 className="text-4xl font-bold text-white">Join the CometChat Partner Program</h1>
<p className="text-lg font-medium text-gray-300 mt-4">Collaborate with us for success.</p>

        <form className="mt-6 flex flex-col md:flex-row justify-center gap-4">
  <input
    type="email"
    placeholder="Enter your email"
    className="px-4 py-3 rounded-lg text-black w-full md:w-auto"
  />
  <button
    type="submit"
    className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
  >
    Join Now
  </button>
</form>
<div className="bg-dark text-white">
  <button className="bg-primary hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded">
    Get Started
  </button>
</div>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Become a Partner
        </button>
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
