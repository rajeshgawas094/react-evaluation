import React from "react";

const Footer = () => {
  const sections = [
    { title: "Product", items: ["Overview", "Features", "Pricing", "Releases"] },
    { title: "Resources", items: ["Docs", "API", "Guides", "Support"] },
    { title: "Company", items: ["About", "Blog", "Careers", "Press"] },
    { title: "Legal", items: ["Privacy Policy", "Terms of Service"] },
  ];

  return (
    <footer className="bg-dark text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-10 text-sm">
        <div>
          <h3 className="text-lg font-bold mb-3">cometchat</h3>
          <p className="text-gray-400">Powerful chat & messaging solutions for modern apps.</p>
        </div>

        {sections.map((section, idx) => (
          <div key={idx}>
            <h4 className="font-semibold mb-2">{section.title}</h4>
            <ul className="text-gray-400 space-y-1">
              {section.items.map((item, i) => (
                <li key={i} className="hover:text-white transition">{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-xs">
        &copy; {new Date().getFullYear()} CometChat. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
