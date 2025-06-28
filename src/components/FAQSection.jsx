import React, { useState } from "react";

const faqs = [
  {
    question: "How do I become a partner?",
    answer: "You can apply by clicking the 'Become a Partner' button and filling the form.",
  },
  {
    question: "Is there a cost to join?",
    answer: "Joining is free. We believe in mutual value generation.",
  },
  {
    question: "What kind of support will I get?",
    answer: "We offer technical, strategic, and marketing support to our partners.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="py-16 px-6 bg-[#F3F1F8] text-black">
  <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-md">
    <h2 className="text-xl font-semibold text-center mb-6 text-[#FF5C00]">FAQ’s</h2>
    <h3 className="text-2xl font-bold text-center mb-6">
      We want to help you with all your doubts
    </h3>
    {/* Existing FAQ mapping here */}
  </div>
</section>
  );
};

export default FAQSection;
