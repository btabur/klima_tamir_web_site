import Link from "next/link";
import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";

const Header = () => {
  return (
    <header className="w-full h-30 border border-spacing-2 ">
      <div className="flex flex-row">
        <div className="mt-4 mb-4 ml-20">
          <Link href="/..">
            <div className="flex flex-row space-x-1 hover:scale-1 transform transition duration-300 cursor-pointer">
              <img className="w-36 h-28" src="logo.png" alt="" />
              <img className="w-48 h-28 " src="logo2.png" alt="" />
            </div>
          </Link>
        </div>
        <div class="text-lg text-blue-800  flex items-center justify-between space-x-3 ml-auto mr-20">
          <a
            className="rounded-full  bg-neutral-500 w-full h-12 flex items-center justify-end "
            href="tel:+901234567890"
            class="hover:text-blue-800"
          >
            <FaPhoneVolume className=" text-red-600 " />
            +90 123 456 7890
          </a>
          <a
            className="rounded-full bg-neutral-500 w-full h-12  flex items-center justify-end"
            href="tel:+905346167622"
            class="hover:text-blue-800"
          >
            <FaPhoneVolume className=" text-red-600" />
            +90 534 616 7622
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
