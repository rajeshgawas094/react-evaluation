import HeroSection from "./components/HeroSection";
import AdvantagesSection from "./components/AdvantagesSection";
import PartnershipTypes from "./components/PartnershipTypes";
import FAQSection from "./components/FAQSection";
import Footer from "./components/Footer";
import GetStartedSection from "./components/GetStartedSection";


function App() {
  return (
    <div className="bg-black text-white font-sans">
      <div className="font-inter bg-black text-white">
      <HeroSection />
      <AdvantagesSection />
      <PartnershipTypes />
      <FAQSection />
      <Footer />
      <GetStartedSection />
    </div>
    </div>
  );
}

export default App;
