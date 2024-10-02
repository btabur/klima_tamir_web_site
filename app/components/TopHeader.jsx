"use client";
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
  const [user, setUser] = useState(null);

  const userId = localStorage.getItem("Klima_Tamir_userId");
  useEffect(() => {
    const fetchUser = async () => {
      if (!userId) return;

      try {
        const response = await fetch(`/api/users?userId=${userId}`);
        if (!response.ok) {
          throw new Error("Kullanıcı bilgileri alınamadı");
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error("Kullanıcı bilgileri alınamadı:", error);
      }
    };

    fetchUser();
  }, [userId]);

  return (
    <>
      <header className="flex w-full sticky top-0 left-0 right-0 z-40 bg-white  justify-between items-center py-3 lg:px-20 px-2 border-b ">
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
            <FaFacebookF className="lg:text-2xl text-sm text-white" />
          </div>
          <div className="bg-pink-700 rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all ">
            <FaInstagram className="lg:text-2xl text-sm text-white" />
          </div>
          <div className="bg-green-700 rounded-full p-2 cursor-pointer hover:bg-blue-400 transition-all ">
            <FaWhatsapp className="lg:text-2xl text-sm font-semibold text-white" />
          </div>
        </article>
        <article className="flex items-center gap-3">
          {user ? (
            <Link
              href={user.role === "admin" ? "/admin/dashboard" : "/profile"}
            >
              <button className="flex items-center text-black gap-2 border-2 py-1 px-2 rounded-lg hover:bg-blue-500 hover:text-white transition-all">
                <IoPersonCircleOutline className="lg:text-2xl text-sm" />
                <p>{user.username}</p>
              </button>
            </Link>
          ) : (
            <Link href="/login">
              <button
                className=" rounded-lg lg:px-4 lg:py-2 px-2 py-1 bg-blue-500 text-black
            hover:bg-blue-600 hover:text-white transition-all"
              >
                Giriş Yap
              </button>
            </Link>
          )}

          <button
            onClick={() => {
              setState((prevState) => ({
                ...prevState,
                isShowBasketModal: true,
              }));
            }}
            className="relative"
          >
            <MdOutlineShoppingCart className="text-2xl text-black" />
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
