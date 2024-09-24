"use client";
import React from "react";
import { useState, useEffect } from "react";

const Slider = () => {
  const slides = [
    {
      image: "/images/slide1.jpg",
      text: "Klima Montaj ve Servis",
    },
    {
      image: "/images/slide2.jpg",
      text: "Klima Bakımı ve Onarım",
    },
    {
      image: "/images/slide3.jpg",
      text: "Havalandırma Sistemleri",
    },
  ]; // Slider'da gösterilecek görsellerin yolları

  const [currentIndex, setCurrentIndex] = useState(0);

  // Otomatik geçiş için useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3 saniyede bir kaydır

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  return (
    <div className="relative w-full mx-auto mt-10">
      {/* Slider görüntüsü */}
      <div className="w-full overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className=" w-full h-96 object-cover  transition duration-500"
        />
        {/* Metin Ekleme */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-2xl md:text-4xl font-bold">
            {slides[currentIndex].text}
          </h2>
        </div>
      </div>

      {/* Sol ok */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={prevSlide}
      >
        &lt;
      </button>

      {/* Sağ ok */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={nextSlide}
      >
        &gt;
      </button>

      {/* Slide göstergesi */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
