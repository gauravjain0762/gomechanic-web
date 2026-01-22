import { LOGO_URL } from "../../utils/constants";

const CompleteServiceSection = () => {
  return (
    <section className="py-20" style={{ backgroundColor: "#F3F4F6" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
              What We Do
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Complete Motor
              <br />
              Vehicle Detailing
              <br />& Servicing
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              We are a professional motor vehicle detailing and servicing
              company committed to delivering excellence, reliability, and
              transparency. With a strong focus on quality workmanship and
              customer satisfaction, our team ensures every vehicle receives
              expert care and attention.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our services are designed for individuals, businesses, and fleet
              owners looking for dependable automotive solutions backed by
              experience and trusted processes.
            </p>
            <button className="bg-red-600 rounded-3xl text-white px-6 py-3 font-semibold text-sm hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg">
              Get Started
            </button>
          </div>

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
                    src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400"
                    alt="Dashboard"
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
                    src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=400"
                    alt="Car detailing"
                    className="w-full h-48 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompleteServiceSection;
