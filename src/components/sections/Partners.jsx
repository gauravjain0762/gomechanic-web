import { useEffect, useState } from "react";
import { PARTNER_BRANDS } from "../../utils/constants";

const Partners = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            Our Partners
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Trusted Automotive Brands We Use
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We work with trusted automotive brands to ensure high-quality
            materials, tools, and products for every service.
          </p>
        </div>

        <div className="flex justify-center items-center gap-16 flex-wrap">
          {PARTNER_BRANDS.map((brand, i) => (
            <div
              key={i}
              className="w-32 h-20 flex items-center justify-center transform transition-all duration-300 hover:scale-110 grayscale hover:grayscale-0"
            >
              <img
                src={brand.img}
                alt={brand.name}
                className="max-w-full max-h-full object-contain"
              />
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

export default Partners;
