import { ChevronRight, Cog, Plus, Search, Settings, ShoppingCart, Sparkles, Star, Wind, Wrench } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

// Service data structure with Lucide icons
const serviceCategories = [
  { id: "services", label: "Services", icon: "Settings" },
  { id: "clutch", label: "Clutch", icon: "Cog" },
  { id: "ac", label: "AC", icon: "Wind" },
  { id: "spa", label: "SPA", icon: "Sparkles" },
  { id: "mechanical", label: "Mechanical Service", icon: "Wrench" },
];

// Icon mapping component
const IconComponent = ({ name, className }) => {
  const icons = {
    Settings: Settings,
    Cog: Cog,
    Wind: Wind,
    Sparkles: Sparkles,
    Wrench: Wrench,
  };
  const Icon = icons[name];
  return <Icon className={className} />;
};

const services = [
  {
    id: "cs1",
    category: "Car Services",
    title: "Premium Service",
    imageColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=400&h=400&fit=crop",
    inclusions: [
      "Car Scanning",
      "Battery Water Top up",
      "Interior Vacuuming (Carpet & Seats)",
      "Wiper Fluid Replacement",
      "Car Wash"
    ],
    price: 3169,
    originalPrice: 4527,
    offerPrice: 2669,
    tag: "RECOMMENDED",
    hoursTaken: "6 Hrs Taken",
    warranty: "1000 Kms or 3 Months Warranty",
    recommendedInterval: "Every 10,000 Kms or 6 Months (Recommended)"
  },
  {
    id: "cs2",
    category: "Car Services",
    title: "Performance Service",
    imageColor: "bg-gradient-to-br from-orange-400 to-red-600",
    imageUrl: "https://images.unsplash.com/photo-1486754735734-325b5831c3ad?w=400&h=400&fit=crop",
    inclusions: [
      "AC Filter Replacement",
      "Car Scanning",
      "Battery Water Top up",
      "Fuel Filter Checking",
      "Wiper Fluid Replacement"
    ],
    price: 5319,
    originalPrice: 7599,
    offerPrice: 4255,
    tag: "ENHANCED ENGINE PERFORMANCE",
    hoursTaken: "8 Hrs Taken",
    warranty: "1000 Kms or 3 Months Warranty",
    recommendedInterval: "Every 20,000 Kms or 12 Months (Recommended)"
  },
  {
    id: "cs3",
    category: "Car Services",
    title: "Brake Service",
    imageColor: "bg-gradient-to-br from-green-400 to-emerald-600",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inclusions: [
      "Takes 4 Hours",
      "1 Month Warranty on Labour",
      "Spare Part Charges will be Extra",
      "Opening & Fitting of Brake Discs",
      "Inspection of Brake Discs"
    ],
    price: 699,
    originalPrice: 874,
    offerPrice: 524,
    discountTag: "Extra 25% OFF"
  },
  {
    id: "cs4",
    category: "Car Services",
    title: "Caliper Service",
    imageColor: "bg-gradient-to-br from-purple-400 to-indigo-600",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    inclusions: [
      "Caliper Assembly Cost Additional",
      "Inspection of Brake System Included"
    ],
    price: 1030,
    originalPrice: 1288,
    offerPrice: 772,
    discountTag: "Extra 25% OFF"
  },
  {
    id: "cl1",
    category: "Clutch",
    title: "Standard Clutch",
    imageColor: "bg-gradient-to-br from-gray-400 to-gray-600",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "cl2",
    category: "Clutch",
    title: "Premium Clutch",
    imageColor: "bg-gradient-to-br from-red-400 to-pink-600",
    imageUrl: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "ac1",
    category: "AC",
    title: "AC Basic Service",
    imageColor: "bg-gradient-to-br from-cyan-400 to-blue-600",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "ac2",
    category: "AC",
    title: "AC Premium Service",
    imageColor: "bg-gradient-to-br from-pink-400 to-rose-600",
    imageUrl: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "spa1",
    category: "SPA",
    title: "SPA Basic",
    imageColor: "bg-gradient-to-br from-blue-300 to-indigo-500",
    imageUrl: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "spa2",
    category: "SPA",
    title: "SPA Premium",
    imageColor: "bg-gradient-to-br from-green-300 to-emerald-500",
    imageUrl: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
  {
    id: "mech1",
    category: "Mechanical Service",
    title: "Mechanical Complete",
    imageColor: "bg-gradient-to-br from-slate-400 to-zinc-600",
    imageUrl: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=400&h=400&fit=crop",
    inclusions: [
      "4 Hrs Taken",
      "1000 Kms or 3 Months Warranty",
      "Free Pick-up & Drop",
      "Engine Oil Replacement",
      "Car Wash"
    ],
    price: 2669,
    originalPrice: 3559,
    offerPrice: 2169
  },
];

const CarServices = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState("Services");
  const [searchQuery, setSearchQuery] = useState("");

  // Handle category from navigation
  useEffect(() => {
    if (location.state?.category) {
      const categoryMap = {
        "Car Services": "Services",
        "Clutch": "Clutch",
        "AC": "AC",
        "SPA": "SPA",
        "Mechanical Services": "Mechanical Service"
      };
      
      const mappedCategory = categoryMap[location.state.category] || location.state.category;
      setActiveCategory(mappedCategory);
      
      // Clear the state after setting the category
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  const getServicesForCategory = (category) => {
    if (category === "Services") {
      return services.filter(s => s.category === "Car Services");
    }
    return services.filter(s => s.category === category);
  };

  const displayedServices = getServicesForCategory(activeCategory).filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.inclusions.some(inc => inc.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesSearch;
  });

  return (
    <>
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Search & Category Bar - No Sticky */}
        <div className="bg-white border-b border-gray-200">
          {/* Breadcrumb */}
          <div className="max-w-7xl mx-auto px-4 pt-4">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Link to="/" className="hover:text-red-600">Home</Link>
              <ChevronRight size={16} />
              <span className="text-gray-900 font-medium">
                {activeCategory === "Services" ? "Car Services" : activeCategory}
              </span>
            </div>
          </div>

          {/* Search Bar */}
          <div className="max-w-7xl mx-auto px-4 py-4">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-gray-50 text-gray-900 placeholder-gray-400 border border-gray-300 rounded-full pl-11 pr-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>

          {/* Category Navigation */}
          <div className="max-w-7xl mx-auto px-4 pb-4">
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {serviceCategories.map((category) => {
                const isActive = activeCategory === category.label;
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.label)}
                    className={`flex-shrink-0 flex flex-col items-center gap-1.5 px-5 py-3 rounded-xl transition-all ${
                      isActive
                        ? "bg-gradient-to-br from-red-600 to-red-700 text-white shadow-lg scale-105"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    <IconComponent 
                      name={category.icon} 
                      className={`w-8 h-8 ${isActive ? "text-white" : "text-gray-600"}`}
                    />
                    <span className="text-xs font-semibold whitespace-nowrap">
                      {category.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-4 py-8">
          {/* Page Title */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">
              {activeCategory === "Services" ? "Car Services" : activeCategory}
            </h1>
            <p className="text-gray-600 text-sm">
              Explore our premium {activeCategory.toLowerCase()} packages
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {displayedServices.map((service) => (
              <article
                key={service.id}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  {service.tag && (
                    <div className="absolute top-3 left-3 z-10 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      {service.tag}
                    </div>
                  )}
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      if (e.target.parentElement) {
                        e.target.parentElement.innerHTML = `<div class="w-full h-full ${service.imageColor}"></div>`;
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Service Details */}
                <div className="p-5">
                  {/* Title */}
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-xl font-bold text-gray-900 flex-1">
                      {service.title}
                    </h2>
                    <span className="ml-2 bg-red-100 text-red-700 px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {service.hoursTaken || "4 Hrs"}
                    </span>
                  </div>

                  {/* Key Info */}
                  <div className="bg-gray-50 p-3 rounded-lg mb-4 space-y-1.5">
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      <span>{service.warranty || "1000 Kms or 3 Months Warranty"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-gray-700">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full" />
                      <span>{service.recommendedInterval || "Every 5000 Kms"}</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-green-700 font-semibold">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full" />
                      <span>Free Pick-up & Drop</span>
                    </div>
                  </div>

                  {/* Inclusions */}
                  <div className="mb-4">
                    <h3 className="text-sm font-bold text-gray-900 mb-2 flex items-center gap-1.5">
                      <Star className="text-red-600 fill-red-600" size={14} />
                      Service Includes
                    </h3>
                    <div className="grid grid-cols-1 gap-1.5">
                      {service.inclusions.slice(0, 5).map((inclusion, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-gray-600">
                          <Plus className="text-green-600 flex-shrink-0 mt-0.5" size={12} />
                          <span>{inclusion}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                    <div>
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span className="text-xs text-gray-400 line-through">
                          ₹{service.originalPrice.toLocaleString('en-IN')}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">
                          ₹{service.price.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <span className="text-xs text-green-600 font-semibold">
                        Save ₹{(service.originalPrice - service.price).toLocaleString('en-IN')}
                      </span>
                    </div>
                    <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all flex items-center gap-2">
                      <ShoppingCart size={16} />
                      ADD
                    </button>
                  </div>

                  {/* Offer Bar */}
                  <div className="mt-3 bg-gray-900 text-white px-3 py-2 rounded-lg flex items-center justify-between text-sm">
                    <span className="font-semibold">
                      Get at ₹{service.offerPrice.toLocaleString('en-IN')}
                    </span>
                    {service.discountTag && (
                      <span className="bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full text-xs font-bold">
                        {service.discountTag}
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* No Results */}
          {displayedServices.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-block p-5 bg-gray-100 rounded-full mb-3">
                <Search className="text-gray-400" size={40} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">No services found</h3>
              <p className="text-gray-600 text-sm">Try adjusting your search</p>
            </div>
          )}
        </main>

        {/* Stats */}
        <section className="bg-gray-900 text-white py-12 border-t-4 border-red-600">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: "3M+", label: "Cars Serviced" },
                { value: "25L+", label: "Happy Customers" },
                { value: "4.9★", label: "Average Rating" },
                { value: "1000+", label: "Touch Points" }
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold mb-1 bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              What Car Owners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { name: "John Doe", title: "Friendly Staff", initials: "JD", color: "from-blue-400 to-blue-600" },
                { name: "Anita Sharma", title: "Best Among All", initials: "AS", color: "from-pink-400 to-rose-600" },
                { name: "Rajesh Kumar", title: "Excellent Service", initials: "RK", color: "from-green-400 to-emerald-600" }
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6">
                  <div className="text-red-600 text-5xl font-serif mb-3">"</div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900">{testimonial.title}</h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. The service was exceptional.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                      {testimonial.initials}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                      <div className="text-xs text-gray-500">Verified Customer</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </>
  );
};

export default CarServices;