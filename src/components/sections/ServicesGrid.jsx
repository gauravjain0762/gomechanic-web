
const ServicesGrid = () => {
  const services = [
    {
      title: "Vehicle Detailing",
      desc: "Interior & exterior detailing, polishing, and protection.",
      icon: "🚗",
      bg: "white",
    },
    {
      title: "Car Servicing & Maintenance",
      desc: "Routine servicing, inspections, and preventive maintenance.",
      icon: "🔧",
      bg: "red",
    },
    {
      title: "Engine Cleaning",
      desc: "Professional engine bay cleaning for improved performance and longevity.",
      icon: "⚙️",
      bg: "white",
    },
    {
      title: "Interior Deep Cleaning",
      desc: "Upholstery, leather treatment, and odor removal.",
      icon: "🧽",
      bg: "red",
    },
    {
      title: "Exterior Protection",
      desc: "Waxing, ceramic coating, and paint protection solutions.",
      icon: "🛡️",
      bg: "white",
    },
    {
      title: "Fleet Services",
      desc: "Customized service plans for commercial and fleet vehicles.",
      icon: "🚙",
      bg: "red",
    },
  ];

  return (
    <section className="py-20" style={{ backgroundColor: "#EF4444" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-white text-xs font-bold uppercase tracking-wider mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl font-bold text-white mb-4">
            Professional Services for Every Vehicle
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="p-10 transition-all duration-300 hover:scale-105"
              style={{
                backgroundColor: service.bg === "red" ? "#DC2626" : "#FFFFFF",
                color: service.bg === "red" ? "#FFFFFF" : "#111827",
              }}
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p
                className="leading-relaxed"
                style={{
                  color:
                    service.bg === "red" ? "rgba(255,255,255,0.9)" : "#6B7280",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesGrid;
