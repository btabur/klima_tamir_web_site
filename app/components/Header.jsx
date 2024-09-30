import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <header className=" flex justify-between flex-col lg:flex-row gap-4 items-center px-20 mt-5">
      {/* left logo */}
      <Link href="/..">
        <article className=" flex items-center justify-center  lg:gap-2 gap-8">
          <img className="object-cover w-32" src="logo.png" alt="" />
          <img className="object-cover w-44" src="logo2.png" alt="" />
        </article>
      </Link>
      {/* right logo */}
      <article className="flex items-center justify-center gap-4">
        <div
          className="flex items-center gap-4 bg-gray-500 text-white py-2 md:px-4 px-2 
         font-semibold xl:text-lg text-sm  rounded-full cursor-pointer hover:bg-gray-700 transition-all"
        >
          <FaPhoneVolume className=" text-white " />
          <a href="tel:+90 507 611 0712">+90 507 611 0712</a>
        </div>

        <div
          className="flex items-center gap-4 bg-red-500 py-2 md:px-4  px-2 rounded-full
         text-white font-semibold xl:text-lg md:text-md text-sm cursor-pointer hover:bg-red-700 transition-all"
        >
          <FaPhoneVolume className=" text-white" />
          <a href="tel:+90 534 616 7622">+90 534 616 7622</a>
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
