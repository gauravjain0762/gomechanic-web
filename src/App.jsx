import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import CompleteServiceSection from "./components/sections/CompleteServiceSection";
import DashboardSection from "./components/sections/DashboardSection";
import Gallery from "./components/sections/Gallery";
import GlobalPresence from "./components/sections/GlobalPresence";
import HeroSection from "./components/sections/HeroSection";
import Partners from "./components/sections/Partners";
import ServicesGrid from "./components/sections/ServicesGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      <HeroSection />
      <DashboardSection />
      <CompleteServiceSection />
      <GlobalPresence />
      <Partners />
      <ServicesGrid />
      <Gallery />
      <Footer />
    </div>
  );
}
