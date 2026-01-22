import { LOGO_URL } from "../../utils/constants";

const DashboardSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div
              className="rounded-3xl overflow-hidden p-3"
              style={{ backgroundColor: "#EF4444" }}
            >
              <div className="grid grid-cols-2 gap-3 bg-white p-3 rounded-2xl">
                <div
                  className="relative overflow-hidden rounded-lg"
                  style={{
                    borderTop: "4px solid #EF4444",
                    borderLeft: "4px solid #EF4444",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=400"
                    alt="Luxury car"
                    className="w-full h-48 object-cover"
                  />
                </div>

                <div className="bg-white flex items-center justify-center rounded-lg">
                  <img
                    src={LOGO_URL}
                    width="170"
                    height="40"
                    alt="Aston Martin Logo"
                  />
                </div>

                <div
                  className="col-span-2 relative overflow-hidden rounded-lg"
                  style={{
                    borderLeft: "4px solid #EF4444",
                    borderBottom: "4px solid #EF4444",
                    borderRight: "4px solid #EF4444",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=400"
                    alt="Handshake"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              Dashboard Overview
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Car Servicing &<br />
              Detailing Made Simple
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Professional automotive detailing, servicing, and maintenance
              solutions designed to keep your vehicle performing and looking its
              best.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We provide high-quality vehicle detailing and servicing using
              modern tools, trained professionals, and trusted automotive
              brands. From routine maintenance to premium detailing, we deliver
              reliable service you can count on.
            </p>
            <div className="flex gap-4">
              <button className="bg-red-600 text-white px-6 py-3 font-semibold text-sm hover:bg-red-700 transition-all transform hover:scale-105 rounded-l-[20px] shadow-lg">
                Get Started
              </button>

              <button className="bg-black text-white px-6 py-3 font-semibold text-sm hover:bg-gray-800 transition-all transform hover:scale-105 rounded-r-[20px] shadow-lg">
                View Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DashboardSection;
