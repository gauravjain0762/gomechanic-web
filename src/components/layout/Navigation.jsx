import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LOGO_URL, MENU_ITEMS } from "../../utils/constants";

const Navigation = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavClick = (item) => {
    // Scroll to top and close mobile menu
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);

    // If it's a service-related item, navigate to services page with category
    const serviceCategories = ["car services", "clutch", "ac", "spa", "mechanical services"];
    
    if (serviceCategories.includes(item.label.toLowerCase())) {
      navigate("/services", { state: { category: item.label } });
    } else {
      navigate(item.path);
    }
  };

  const handleLoginClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileOpen(false);
    navigate("/login");
  };

  return (
    <>
      <nav className="bg-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link 
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <img
                  src={LOGO_URL}
                  width="220"
                  height="40"
                  alt="Logo"
                  className="cursor-pointer transition-transform hover:scale-105"
                />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              {MENU_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleNavClick(item)}
                  className="px-4 py-5 text-white text-sm font-medium hover:bg-gray-800 transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleLoginClick}
                className="ml-4 bg-red-600 text-white text-sm font-bold px-6 py-2 rounded hover:bg-red-700 transition-colors"
              >
                Login
              </button>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden text-white"
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <>
          <div
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 z-50 shadow-2xl">
            <div className="flex justify-between items-center p-6 border-b border-gray-800">
              <span className="text-white font-bold text-lg">Menu</span>
              <button onClick={() => setMobileOpen(false)}>
                <X size={24} className="text-white" />
              </button>
            </div>
            <div className="p-6 space-y-4">
              {MENU_ITEMS.map((item, i) => (
                <button
                  key={i}
                  onClick={() => handleNavClick(item)}
                  className="block w-full text-left text-gray-300 hover:text-white text-lg font-medium transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <button 
                onClick={handleLoginClick}
                className="w-full bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded font-bold transition-all mt-6"
              >
                Login
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;