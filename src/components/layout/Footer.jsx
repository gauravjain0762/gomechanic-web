import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { CONTACT_INFO, LOGO_URL } from "../../utils/constants";

const Footer = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Car Services", path: "/services", category: "Services" },
    { label: "Clutch", path: "/services", category: "Clutch" },
    { label: "AC", path: "/services", category: "AC" },
    { label: "SPA", path: "/services", category: "SPA" },
    { label: "Mechanical Services", path: "/services", category: "Mechanical Service" },
  ];

  const companyLinks = [
    { label: "About Us", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "FAQ", path: "/faq" },
    { label: "Gallery", path: "/gallery" },
  ];

  const handleNavigation = (item) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (item.category) {
      navigate(item.path, { state: { category: item.category } });
    } else {
      navigate(item.path);
    }
  };

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
        <div className="grid md:grid-cols-4 gap-12 items-start">
          {/* Column 1: Logo & Description */}
          <div className="flex flex-col">
            <img
              src={LOGO_URL}
              alt="Logo"
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

            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Facebook size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Twitter size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Instagram size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Youtube size={18} className="text-white" />
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors">
                <Linkedin size={18} className="text-white" />
              </a>
            </div>

            <p className="text-gray-400 text-xs mt-auto">
              © 2026 Company Name. All rights reserved.
            </p>
          </div>

          {/* Column 2: Our Services */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Our Services</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {menuItems.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleNavigation(item)}
                  className="hover:text-white hover:translate-x-2 transition-all cursor-pointer duration-300"
                >
                  • {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Company</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              {companyLinks.map((item, i) => (
                <li
                  key={i}
                  onClick={() => handleNavigation(item)}
                  className="hover:text-white hover:translate-x-2 transition-all cursor-pointer duration-300"
                >
                  • {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>

            <div className="space-y-5 text-sm">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    {item.label === "Email" ? (
                      <Mail size={18} className="text-white" />
                    ) : (
                      <Phone size={18} className="text-white" />
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