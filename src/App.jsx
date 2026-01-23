import { Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer";
import Navigation from "./components/layout/Navigation";
import CarServices from "./components/sections/CarServices";
import CompleteServiceSection from "./components/sections/CompleteServiceSection";
import DashboardSection from "./components/sections/DashboardSection";
import Gallery from "./components/sections/Gallery";
import GlobalPresence from "./components/sections/GlobalPresence";
import HeroSection from "./components/sections/HeroSection";
import Partners from "./components/sections/Partners";
import ServicesGrid from "./components/sections/ServicesGrid";

// Home Page Component
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <DashboardSection />
      <CompleteServiceSection />
      <GlobalPresence />
      <Partners />
      <ServicesGrid />
      <Gallery />
    </>
  );
};

// Placeholder components for other routes
const ComingSoon = ({ title }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 text-xl">Coming Soon...</p>
      </div>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-white font-poppins">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<CarServices />} />
        <Route path="/clutch" element={<ComingSoon title="Clutch Services" />} />
        <Route path="/ac" element={<ComingSoon title="AC Services" />} />
        <Route path="/spa" element={<ComingSoon title="SPA Services" />} />
        <Route path="/mechanical" element={<ComingSoon title="Mechanical Services" />} />
        <Route path="/more" element={<ComingSoon title="More Services" />} />
        <Route path="/blog" element={<ComingSoon title="Blog" />} />
        {/* 404 Page */}
        <Route path="*" element={<ComingSoon title="404 - Page Not Found" />} />
      </Routes>
      <Footer />
    </div>
  );
}