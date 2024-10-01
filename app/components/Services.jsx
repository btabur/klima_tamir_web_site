"use client";
import React from "react";
import { FaThumbsUp } from "react-icons/fa";

const Services = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-slate-300 w-full  ">
      <div className="flex flex-col items-center justify-center mt-14">
        <h2 className="font-serif text-5xl border-solid">HİZMETLERİMİZ</h2>
        <div className="w-full flex items-center justify-center gap-4 mt-6 mb-9">
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/2 border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/2 border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="border-4  border-red-500  border-solid rounded-2xl" />
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  items-start justify-center text-center gap-16 mx-20 my-12">
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
      </div>

      <div className="flex items-center justify-center w-full bg-slate-600 ">
        <article className="flex items-center justify-between w-full text-white text-center flex-col lg:flex-row m-8">
          <div className=" w-full m-10 ml-12">
            <h1 className="font-bold font-tinos text-4xl p-4">
              Her Marka Klima Montaj, Bakım, Onarım ve Servis
            </h1>
            <h5 className="text-xl text-zinc-300 font-serif">
              İstanbul'un tüm ilçelerinde profesyonel ekip ile Klima Bakım,
              Servis, Onarım, Montaj hizmetleri
            </h5>
          </div>
          <a
            className="flex items-center justify-center rounded-full bg-red-600 w-32 h-11 lg:w-40 mr-14 font-bold font-fira  hover:bg-red-500 hover:text-lg  "
            href="tel:+90 507 611 0712"
          >
            ŞİMDİ ARA
          </a>
        </article>
      </div>
      {/* <div className="bg-slate-200 w-full">
        <div className="grid lg:grid-cols-3 md:grid-cols-2  items-start justify-center text-center gap-16 mx-20 my-16">
          <div className="grid justify-items-center  ">
            <img
              className="w-full h-56 rounded-2xl"
              src="/servicess/havalandirma-sistem.jpg"
              alt="klimaAriza"
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">
              Havalandırma Sistemleri
            </h3>
            <p className="font-fira text-lg">
              Ünsal Teknik ile havalandırma sistemleri tüketiciye hizmet
              vermektedir ve aynı zamanda endüstriyel alanlar için de özel
              çözümler üretmektedir. Her türlü havalandırma projesinde yer alan
              firmamız İstanbul genelinde ve İstanbul dışında da faaliyet
              göstermektedir. Havalandırma sistemlerinin imalatında ise en
              kaliteli ve sağlam malzemeleri kullanmaktayız.
            </p>
          </div>
          <div className=" grid justify-items-center  ">
            <img
              className="w-full h-56 rounded-2xl"
              src="/servicess/toztoplama.jpg"
              alt="klimaBakım"
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">
              Toz Toplama Sistemleri
            </h3>
            <p className="font-fira text-lg   ">
              Toz toplama sistemlerinin çalışma konusu dumanlı, tozlu ve talaşlı
              üretim yapmakta olan makinelerin çıkarmış olduğu tozu ve talaşı
              içerisine çekmektir. Diğer bir ismiyle havayı temizlemektir.
            </p>
          </div>
          <div className="grid justify-items-center  ">
            <img
              className="w-full h-56 rounded-2xl"
              src="/servicess/otopark-havalandirmasi.jpg"
              alt="klimaAriza"
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">
              Otopark Havalandırma Sistemleri
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
              src="/servicess/davlumbaz.jpg"
              alt="klimaBakım"
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">
              Davlumbaz Havalandırma Sistemleri
            </h3>
            <p className="font-fira text-lg   ">
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
              src="/servicess/baca.jpg"
              alt=""
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">Baca İşleri</h3>
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
              src="/servicess/tekstil.jpg"
              alt=""
            />
            <h3 className="font-bold text-4xl mt-4 mb-4">
              Tesktil-Atölye Havalandırma Sistemleri
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
        <div className="flex items-center justify-center w-full bg-slate-600 ">
          <article className="flex items-center justify-between w-full text-white text-center flex-col lg:flex-row m-8">
            <div className=" w-full m-10 ml-12">
              <h1 className="font-bold font-tinos text-4xl p-4">
                Her Marka Klima Montaj, Bakım, Onarım ve Servis
              </h1>
              <h5 className="text-xl text-zinc-300 font-serif">
                İstanbul'un tüm ilçelerinde profesyonel ekip ile Klima Bakım,
                Servis, Onarım, Montaj hizmetleri
              </h5>
            </div>
            <a
              className="flex items-center justify-center rounded-full bg-red-600 w-32 h-11 lg:w-40 mr-14 font-bold font-fira  hover:bg-red-500 hover:text-lg  "
              href="tel:+90 507 611 0712"
            >
              ŞİMDİ ARA
            </a>
          </article>
        </div>
      </div> */}
    </div>
  );
};

export default Services;
