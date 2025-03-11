import React, { useState, useEffect } from "react";

const images = [
  "https://cdn.pixabay.com/photo/2017/06/10/20/39/avett-brothers-2390713_1280.jpg",
  "https://cdn.pixabay.com/photo/2020/05/14/02/31/covid-19-5169689_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/09/06/20/36/doctor-2722941_1280.jpg",
];

const ImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex]);

  return (
    <div className="relative w-full h-[400px]">
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        className="w-full h-full object-cover"
      />

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        ❮
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-white p-3 rounded-full"
      >
        ❯
      </button>
    </div>
  );
};

export default ImageCarousel;
