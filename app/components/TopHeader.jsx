import React from "react";
import {
  FaCalendar,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const TopHeader = () => {
  return (
    <header className="flex w-full  justify-between items-center py-3 px-20  border-b">
      <article className="flex items-center gap-5">
        <div
          className="flex items-center py-2 px-5 border rounded-full gap-3 
            border-red-600 hover:bg-red-600 hover:text-white transition-all cursor-pointer text-red-600 "
        >
          <FaCalendar />
          <p className="text-xs md:text-base">ACİL SERVİS ÇAĞIR</p>
        </div>
        <div className="md:flex items-center gap-2 hidden text-black cursor-pointer hover:text-gray-500 transition-all">
          <IoMdMail className="text-xl" />
          <p>info@klimateknikservisci.com</p>
        </div>
      </article>

      <article className="flex gap-3 items-center">
        <div className="bg-blue-600 rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all ">
          <FaFacebookF className="text-2xl text-white" />
        </div>
        <div className="bg-pink-700 rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all ">
          <FaInstagram className="text-2xl text-white" />
        </div>
        <div className="bg-green-700 rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all ">
          <FaWhatsapp className="text-2xl font-semibold text-white" />
        </div>
      </article>
    </header>
  );
};

export default TopHeader;
