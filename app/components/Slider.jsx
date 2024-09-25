"use client";
import React from "react";
import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Slider = () => {
  const slides = [
    {
      image: "/images/slide1.jpg",
      text: "Klima Montaj ve Servis",
      subText:
        " Ünsal Teknik ile yazın keyfini çıkarın! Klima Montaj ve Servis hizmetimizle yazın sıcakları artık sorun olmaktan çıkıyor! Uzman ekibimiz, en kaliteli klima sistemlerini profesyonel bir şekilde montajını yapar ve ihtiyaçlarınıza uygun çözümler sunar.",
    },
    {
      image: "/images/slide2.jpg",
      text: "Klima Bakımı ve Onarım",
      subText:
        "Klima bakım ve onarım hizmetlerimizle serin kalın, rahat nefes alın! Ünsal Teknik olarak, her marka ve model klimada uzman ekiplerimizle hızlı ve güvenilir çözümler sunuyoruz.",
    },
    {
      image: "/images/slider3.jpg",
      text: "Havalandırma Sistemleri",
      subText:
        "Ünsal Teknik olarak, yaşam alanlarınızda sağlıklı ve konforlu bir atmosfer yapmayı hedefliyoruz. Modern havalandırma sistemlerimiz, iç mekanlarda hava sirkülasyonunu optimize ederken, enerji verimliliği ile bütçenize dost çözümler sunar.",
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
    <div className="relative w-full mx-auto md:mt-0 mt-5">
      {/* Slider görüntüsü */}
      <div className="w-full overflow-hidden">
        <img
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
          className=" w-full h-96 object-cover  transition duration-500"
        />
        {/* Metin Ekleme */}
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h2 className="text-white text-2xl md:text-4xl font-fira font-bold">
            {slides[currentIndex].text}
          </h2>
          <p className="text-white text-xl mx-32 mt-8">
            {slides[currentIndex].subText}
          </p>
        </div>
      </div>

      {/* Sol ok */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white w-8 h-8 flex items-center justify-center 
        text-black text-xl p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={prevSlide}
      >
        <FaArrowLeft/>
      </button>

      {/* Sağ ok */}
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center 
        text-black text-xl
         bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        onClick={nextSlide}
      >
        <FaArrowRight/>
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
