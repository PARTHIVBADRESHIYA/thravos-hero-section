import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import CardSection from "./components/CardSection";
import AthletesSection from "./components/AthletesSection";
import HowItWorks from "./components/Howitworks";


function App() {
  return (
    <div className="bg-[#18191c] min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <CardSection />
      <AthletesSection />
      <HowItWorks />
      <Footer />
    </div>
  );
}

export default App;
