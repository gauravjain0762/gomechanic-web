import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    owner: "Owner",
    car: "Maruti Swift",
    mobile: "",
  });

  const handleCheckPrices = () => {
    // Validate mobile number (optional)
    if (formData.mobile.length < 10) {
      alert("Please enter a valid mobile number");
      return;
    }

    // Navigate to services page
    window.scrollTo({ top: 0, behavior: 'smooth' });
    navigate("/services");
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1600')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#EF4444"
            d="M0,60 Q360,30 720,60 T1440,60 L1440,120 L0,120 Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 w-full py-32">
        <div className="flex justify-end">
          <div className="w-full lg:w-[420px] bg-black/70 backdrop-blur-md p-10 rounded-lg shadow-2xl border border-white/10">
            <h1 className="text-white text-3xl font-bold mb-2">
              Professional Car
            </h1>
            <h1 className="text-white text-3xl font-bold mb-4">
              Servicing & Detailing
            </h1>
            <p className="text-gray-300 text-sm mb-6">
              Get instant quotes for your car service
            </p>

            <div className="space-y-4">
              <div className="relative">
                <select
                  value={formData.owner}
                  onChange={(e) =>
                    setFormData({ ...formData, owner: e.target.value })
                  }
                  className="w-full bg-white px-4 py-3 text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none rounded"
                >
                  <option>Owner</option>
                  <option>Company</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  size={20}
                />
              </div>

              <div className="relative">
                <select
                  value={formData.car}
                  onChange={(e) =>
                    setFormData({ ...formData, car: e.target.value })
                  }
                  className="w-full bg-white px-4 py-3 text-gray-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-red-500 appearance-none rounded"
                >
                  <option>Maruti Swift</option>
                  <option>Hyundai Creta</option>
                  <option>Honda City</option>
                  <option>Tata Nexon</option>
                </select>
                <ChevronDown
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none"
                  size={20}
                />
              </div>

              <input
                type="tel"
                value={formData.mobile}
                onChange={(e) =>
                  setFormData({ ...formData, mobile: e.target.value })
                }
                placeholder="Enter Mobile Number"
                maxLength="10"
                className="w-full bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
              />

              <button 
                onClick={handleCheckPrices}
                className="w-full bg-red-600 text-white font-bold text-sm py-3 hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg rounded"
              >
                CHECK PRICES FOR FREE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;