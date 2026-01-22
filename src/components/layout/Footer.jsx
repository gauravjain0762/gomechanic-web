import { Mail, MapPin, Phone } from "lucide-react";
import { CONTACT_INFO, LOGO_URL, QUICK_LINKS } from "../../utils/constants";

const Footer = () => {
  return (
    <footer
      className="relative bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/95" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="flex flex-col">
            <img
              src={LOGO_URL}
              alt="Aston Martin Logo"
              className="h-80 w-auto mb-6"
              style={{ marginTop: -120 }}
            />

            <p
              className="text-gray-300 text-sm mb-6 leading-relaxed"
              style={{ marginTop: -110 }}
            >
              Providing professional motor vehicle detailing and servicing
              solutions with a focus on quality, trust, and customer
              satisfaction.
            </p>

            <p className="text-gray-400 text-xs mt-auto">
              © 2026 Company Name. All rights reserved.
            </p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {QUICK_LINKS.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-white hover:translate-x-2 transition-all cursor-pointer duration-300"
                >
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>

            <div className="space-y-5 text-sm">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    {item.label === "Email" ? (
                      <Mail size={18} />
                    ) : (
                      <Phone size={18} />
                    )}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs mb-1">{item.label}:</p>
                    <p className="text-white">{item.value}</p>
                  </div>
                </div>
              ))}

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <p className="text-gray-400 text-xs mb-1">Address:</p>
                  <p className="text-white leading-relaxed">
                    Suite 405, Auto Service Plaza,
                    <br />
                    Main Commercial District
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
