import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { useEffect, useState } from "react";

const stats = [
  { value: "3 Million+", label: "Cars Serviced" },
  { value: "25 Lacs+", label: "Happy Customers" },
  { value: "4.0", label: "Average Rating", icon: Star },
  { value: "1000+", label: "Touch Points In India" },
];

const reviews = [
  {
    title: "Outstanding Service Quality",
    text: "The team provided exceptional car servicing with attention to every detail. My vehicle runs smoother than ever before, and the transparent pricing made the experience even better. Highly recommend their professional approach and customer care.",
    name: "Rajesh Kumar",
    platform: "Google Reviews",
    workshop: "Central Auto Service Center",
    rating: 5,
    date: "2 weeks ago",
    icon: "G",
    color: "bg-blue-500",
  },
  {
    title: "Trusted Partner for Car Care",
    text: "Been using their services for over two years now. The consistency in quality and the genuine parts they use make all the difference. The staff is knowledgeable and always ready to explain what needs to be done.",
    name: "Priya Sharma",
    platform: "Facebook",
    workshop: "Premium Motors Workshop",
    rating: 5,
    date: "1 month ago",
    icon: "F",
    color: "bg-indigo-600",
  },
  {
    title: "Best Experience Ever",
    text: "From booking to delivery, everything was seamless. The free pickup and drop service saved me so much time. The real-time tracking feature kept me updated throughout the service process. Will definitely use again!",
    name: "Amit Patel",
    platform: "Twitter",
    workshop: "Express Car Solutions",
    rating: 5,
    date: "3 days ago",
    icon: "T",
    color: "bg-sky-500",
  },
];

const RatingAndReview = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevReview = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      {/* Stats Section */}
      <div className="mb-16">
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="flex items-center gap-2 text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {item.value}
                  {item.icon && (
                    <item.icon
                      size={24}
                      className="text-yellow-500 fill-yellow-500 animate-pulse"
                    />
                  )}
                </div>
                <p className="text-sm md:text-base text-gray-600 font-medium">
                  {item.label}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-xl" />
            </div>
          ))}
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mb-6 rounded-full" />
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          What Car Owners Say
        </h2>

        {/* Review Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevReview}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 disabled:opacity-50 group"
            aria-label="Previous review"
          >
            <ChevronLeft
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          <button
            onClick={nextReview}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 bg-white p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-red-500 hover:text-white transition-all duration-300 disabled:opacity-50 group"
            aria-label="Next review"
          >
            <ChevronRight
              size={24}
              className="group-hover:scale-110 transition-transform"
            />
          </button>

          {/* Review Cards */}
          <div className="overflow-hidden px-8 md:px-16">
            <div className="grid md:grid-cols-2 gap-8">
              {[0, 1].map((offset) => {
                const reviewIndex = (currentReview + offset) % reviews.length;
                const review = reviews[reviewIndex];

                return (
                  <div
                    key={`${reviewIndex}-${offset}`}
                    className={`bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform ${
                      isAnimating
                        ? "scale-95 opacity-50"
                        : "scale-100 opacity-100"
                    }`}
                    style={{
                      animation: isAnimating
                        ? "none"
                        : `slideIn 0.5s ease-out ${offset * 0.1}s both`,
                    }}
                  >
                    {/* Quote Icon */}
                    <div className="relative bg-gradient-to-br from-gray-50 to-white p-6 pb-8">
                      <div className="absolute -top-4 left-6 bg-red-500 p-3 rounded-full shadow-lg">
                        <Quote size={24} className="text-white rotate-180" />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-end gap-1 mb-4">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">
                        {review.title}
                      </h3>

                      {/* Review Text */}
                      <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                        "{review.text}"
                      </p>
                    </div>

                    {/* User Info */}
                    <div className="p-6 border-t border-gray-100">
                      <div className="flex items-center gap-4 mb-4">
                        <div
                          className={`${review.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md`}
                        >
                          {review.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-bold text-gray-900">
                            {review.name}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <span>{review.platform}</span>
                            <span>•</span>
                            <span>{review.date}</span>
                          </div>
                        </div>
                      </div>

                      {/* Workshop */}
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-xs text-gray-500 mb-1">
                          Workshop Name
                        </p>
                        <p className="text-sm font-semibold text-gray-900">
                          {review.workshop}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentReview(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentReview
                    ? "w-8 bg-red-500"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to review ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default RatingAndReview;
