import { useEffect, useState } from "react";
import { LOCATIONS } from "../../utils/constants";

const GlobalPresence = () => {
  const [activeSlide, setActiveSlide] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            Where We Operate
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Global Service Presence
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We proudly operate across multiple countries, serving customers
            through a growing network of service locations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {LOCATIONS.map((loc, i) => (
            <div
              key={i}
              className="text-center transform transition-all duration-500 hover:scale-110"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 border-3 border-gray-200 shadow-lg flex items-center justify-center text-4xl mb-4 mx-auto transition-all duration-300 hover:shadow-xl">
                {loc.flag}
              </div>
              <h3 className="font-bold text-gray-900 mb-1 text-lg">
                {loc.name}
              </h3>
              <p className="text-sm text-gray-500">{loc.cities}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12 gap-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`rounded-full transition-all duration-500 ease-in-out ${
                i === activeSlide
                  ? "bg-red-600 w-8 h-3 shadow-lg"
                  : "bg-gray-300 w-3 h-3 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
