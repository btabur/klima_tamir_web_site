"use client";
import React from "react";

const Services = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-slate-300 p-10 gap-8">
      <div className="flex flex-col items-center justify-center mt-14">
        <h2 className="font-serif text-5xl border-solid">HİZMETLERİMİZ</h2>
        <div className="w-full flex items-center justify-center gap-4 mt-6 mb-9">
          {/* <hr className="w-full border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/3 border-4  border-red-500  border-solid rounded-2xl" /> */}
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/2 border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/2 border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  items-start justify-center text-center gap-16 mx-20 my-4">
        <div className="grid justify-items-center  ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/chiller.jpg"
            alt="klimaAriza"
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">
            Chiller Soğutma Servisi
          </h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemleri, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className=" grid justify-items-center  ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/klimaSantrali.jpg"
            alt="klimaBakım"
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">
            Klima Santrali Servisi
          </h3>
          <p className="font-fira text-lg   ">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className="grid justify-items-center  ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/klimaAriza.jpg"
            alt="klimaAriza"
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">Klima Arıza</h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemleri, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className=" grid justify-items-center  ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/klimaBakım.jpg"
            alt="klimaBakım"
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">Klima Bakım</h3>
          <p className="font-fira text-lg   ">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className="grid justify-items-center ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/klimaServis.jpg"
            alt=""
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">Klima Servis</h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className="grid justify-items-center   ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/klimaTamir.jpg"
            alt=""
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">Klima Tamir</h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className="grid justify-items-center   ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/24-7service.jpg"
            alt=""
          />
          <h3 className="font-bold text-4xl mt-4 mb-4">7/24 Klima Servis</h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
        <div className="grid justify-items-center   ">
          <img
            className="w-full h-56 rounded-2xl"
            src="/servicess/hermarka.jpg"
            alt=""
          />
          <h3 className="font-bold text-3xl mt-4 mb-4">
            Her Marka Klima Montaj, Bakım ve Onarım
          </h3>
          <p className="font-fira text-lg">
            Welcome to our company! At Ünsal Teknik Isıtma-Soğutma ve
            Havalandırma Sistemler, we specialize in providing top-notch HVAC
            solutions to both residential and commercial clients. Our
            experienced team ensures your environment remains comfortable and
            energy-efficient throughout the year.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
