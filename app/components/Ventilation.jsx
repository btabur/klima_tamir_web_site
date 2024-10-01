import React from "react";
import { FaHome } from "react-icons/fa";
import { GiMoebiusStar } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { FaScrewdriverWrench } from "react-icons/fa6";

const Ventilation = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-slate-300 w-full  ">
      <div className=" w-full">
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
        <div className="flex items-center justify-center w-full bg-indigo-50 ">
          <article className="flex items-center justify-between w-full text-black text-center flex-col  m-8">
            <div className=" m-10 ml-12">
              <h1 className="font-bold font-tinos text-4xl text-center  mb-2">
                Neden Biz?
              </h1>
              <hr className="w-36  border-2  border-yellow-500 rounded-md mx-auto mt-0 mb-6" />

              <h5 className="text-xl text-zinc-600 font-serif">
                Uzman ekibimizle, yüksek kaliteli hizmetler sunarak
                beklentilerinizi karşılıyoruz. Yenilikçi çözümlerimizle, size en
                iyi deneyimi yaşatmayı hedefliyoruz. Hızlı ve etkili hizmet
                anlayışımızla her zaman yanınızdayız. Bizimle çalışarak,
                güvenilir ve profesyonel bir destek almanın rahatlığını yaşayın!
              </h5>
            </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 items-start justify-center w-full  text-center md:gap-12 my-12  ">
              <div className="flex justify-center items-center   flex-col hover:text-blue-500 mb-12">
                <i className="flex justify-center items-center text-6xl  text-white bg-lime-700 hover:bg-blue-500 hover:shadow-[0_0_8px_12px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full  w-32 h-32 hover:w-28 hover:h-28   ">
                  <FaHome />
                </i>
                <h3 className="text-center text-xl font-serif mt-9">
                  Ücretsiz Keşif
                </h3>
              </div>
              <div class="flex justify-center items-center    flex-col hover:text-blue-500 mb-12">
                <i class="flex justify-center items-center text-6xl  text-white bg-violet-900 hover:bg-blue-500 hover:shadow-[0_0_8px_12px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full  w-32 h-32 hover:w-28 hover:h-28   ">
                  <GiMoebiusStar />
                </i>
                <h3 className="text-center text-xl font-serif mt-9">Üretim</h3>
              </div>
              <div class="flex justify-center items-center    flex-col hover:text-blue-500 mb-12">
                <i class="flex justify-center items-center text-6xl  text-white bg-yellow-500 hover:bg-blue-500 hover:shadow-[0_0_8px_12px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full  w-32 h-32 hover:w-28 hover:h-28  ">
                  <AiOutlineFundProjectionScreen />
                </i>
                <h3 className="text-center text-xl font-serif mt-9">
                  Projelendirme
                </h3>
              </div>
              <div class="flex justify-center items-center  flex-col hover:text-blue-500 mb-12">
                <i class="flex justify-center items-center text-6xl  text-white bg-rose-500 hover:bg-blue-500 hover:shadow-[0_0_8px_12px_rgba(59,130,246,0.5)] transition-all duration-300 rounded-full  w-32 h-32 hover:w-28 hover:h-28">
                  <FaScrewdriverWrench />
                </i>
                <h3 className="text-center text-xl font-serif mt-9 ">Montaj</h3>
              </div>
            </div>
            <a
              className="flex items-center justify-center text-white rounded-full bg-red-600 w-32 h-11 lg:w-40 mr-14 font-bold font-fira  hover:bg-red-500 hover:text-lg  "
              href="tel:+90 534 616 7622"
            >
              ŞİMDİ ARA
            </a>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Ventilation;
