import { X } from "lucide-react";
import { useState } from "react";
import { GALLERY_IMAGES } from "../../utils/constants";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Extended gallery with more images
  const galleryImages = [
    ...GALLERY_IMAGES,
    "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800",
    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800",
    "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800",
    "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
        {/* Page Title */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 text-center mb-4">
            Gallery
          </h1>
          <p className="text-gray-600 text-center text-lg">
            Explore our work and services through images
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedImage(image)}
                  className="relative aspect-square overflow-hidden rounded-xl shadow-lg cursor-pointer group"
                >
                  <img
                    src={image}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-red-600 transition-colors"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;