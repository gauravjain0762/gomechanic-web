const Gallery = () => {
  const images = [
    "https://image2url.com/r2/default/images/1769082167255-dd4f4682-61f7-4508-8e62-4456aa618461.jpg",
    "https://image2url.com/r2/default/images/1769082193878-bde9f9b6-6cd0-4e5d-95ff-4c4f6c15c254.jpg",
    "https://image2url.com/r2/default/images/1769082219905-3a1d31de-8ccc-4bcd-a3cc-bf64bd604a1f.jpg",
    "https://image2url.com/r2/default/images/1769082238447-5c234a8e-c2bb-40e2-9afc-cae6f45a218d.jpg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        <div className="text-center mb-16">
          <p className="text-red-600 text-xs font-bold uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See Our Detailing & Service Quality
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Take a look at our work and see the quality we deliver across
            detailing and servicing projects.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/3] overflow-hidden rounded-lg shadow-lg"
            >
              <img
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;
