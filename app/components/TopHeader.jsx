"use client"
import React, { useEffect, useState } from "react";
import {
  FaCalendar,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { useBasketContext } from "../context/BasketContext";
import Link from "next/link";
import Basket from "./Basket";

const TopHeader = () => {

    const basketContext = useBasketContext();
  const { state = {}, setState } = basketContext || {};
  const [user, setUser] = useState(null)

  const userId = localStorage.getItem("Klima_Tamir_userId");
  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/users?userId=${userId}`);
        if (!response.ok) {
          throw new Error('Kullanıcı bilgileri alınamadı');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error('Kullanıcı bilgileri alınamadı:', error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <header className="flex w-full  justify-between items-center py-3 px-20  border-b ">
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
        <article className="flex items-center gap-3">
          {user ? (
            <Link href={user.role === 'admin' ? "/admin/dashboard" : "/profile"}>
              <button className="flex items-center gap-2 border py-1 px-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
              <IoPersonCircleOutline className="text-2xl" />
              <p>{user.username}</p>
            </button>
          </Link>
          ) : (
            <Link href="/login">
            <button className="border border-gray-500 rounded-lg px-4 py-2
            hover:bg-blue-500 hover:text-white transition-all">
              Giriş Yap
            </button>
          </Link>
          )}
         
        
          <button 
           onClick={() => {
            setState((prevState) => ({...prevState, isShowBasketModal: true}))
           }}
           className="relative">
            <MdOutlineShoppingCart className="text-2xl" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
              {state.basket.length}
            </span>
          </button>
        </article>
      </header>
      {state.isShowBasketModal && <Basket />}
    </>
  );
};

export default TopHeader;
