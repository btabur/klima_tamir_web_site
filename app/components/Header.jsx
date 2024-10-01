import Image from "next/image";

import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { useBasketContext } from "../context/BasketContext";

const Header = () => {
  const basketContext = useBasketContext();
  // Eğer basketContext undefined ise, boş bir nesne kullan
  const { state = {} } = basketContext || {};
  
  console.log(state);
  
  return (
    <header className="flex justify-between flex-col lg:flex-row gap-4 items-center px-20 mt-5 ">
      {/* left logo */}
      <article className=" flex items-center justify-center  lg:gap-2 gap-8">
        <img className="object-cover w-32" src="logo.png" alt="" />
        <img className="object-cover w-44" src="logo2.png" alt="" />
      </article>
      {/* right logo */}
      <article className="flex items-center justify-center gap-4">
        <div
          className="flex items-center gap-4 bg-gray-500 text-white py-2 md:px-4 px-2 
         font-semibold xl:text-lg text-sm  rounded-full cursor-pointer hover:bg-gray-700 transition-all"
        >
          <FaPhoneVolume className=" text-white " />
          <p>+90 123 456 7890</p>
        </div>
        <div
          className="flex items-center gap-4 bg-red-500 py-2 md:px-4  px-2 rounded-full
         text-white font-semibold xl:text-lg md:text-md text-sm cursor-pointer hover:bg-red-700 transition-all"
        >
          <FaPhoneVolume className=" text-white " />
          <p> +90 534 616 7622</p>
        </div>

        <div className="hidden lg:block">
          <Image
            src="/icons/icon-24.svg"
            alt="icon"
            width={20}
            height={20}
            className="w-10 h-10 xl:w-16 xl:h-16"
          />
        </div>
      </article>
    </header>
  );
};

export default Header;
