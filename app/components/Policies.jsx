import React from "react";
import { FaThumbsUp } from "react-icons/fa";
import { GrDocumentPerformance } from "react-icons/gr";
import { TiTick } from "react-icons/ti";
import { MdOutlineInsertEmoticon } from "react-icons/md";
import { GiAutoRepair } from "react-icons/gi";
import { FaHandshakeAngle, FaHandsAslInterpreting } from "react-icons/fa6";

const Policies = () => {
  return (
    <div className="flex flex-wrap items-center justify-center bg-slate-300 w-full">
      <div className="flex flex-col items-center justify-center mt-14">
        <h2 className="font-serif lg:text-5xl text-3xl border-solid">
          Hizmet Politakalarımız
        </h2>
        <div className="w-full flex items-center justify-center gap-12 mt-6 mb-9">
          <hr className="w-full border-4  border-red-500  border-solid rounded-2xl" />
          <hr className="w-1/3 border-4  border-red-500  border-solid rounded-2xl" />
        </div>
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1  items-start justify-end  gap-8 mx-20 my-4">
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center ">
            <FaHandsAslInterpreting className="text-6xl text-blue-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Yerinde Hizmet
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              Ünsal Teknik olarak yerinde hizmet avantajıyla müşterilerimize
              hızlı ve güvenilir çözümler sunuyoruz. Sorunlarınızı yerinde
              tespit edip, en uygun çözümleri ayağınıza getiriyoruz. Kaliteli
              hizmeti evinizde veya iş yerinizde deneyimleyin!
            </h5>
          </p>
        </div>

        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center">
            <FaHandshakeAngle className="text-6xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Söz verdiğimiz gibi
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              Ünsal Teknik olarak, size söz verdiğimiz gibi en kaliteli hizmeti
              sunuyoruz. İhtiyaçlarınıza özel çözümlerle konforu en üst düzeye
              çıkarın. Güvenilir hizmet, hızlı teslimat, uygun fiyatlar sadece
              bir telefon uzağınızda!"
            </h5>
          </p>
        </div>
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center">
            <GrDocumentPerformance className="text-6xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Fiyat - Performans dengesi
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              En uygun fiyatlarla üstün performans! Ünsal Teknik, kaliteli
              çözümlerle enerji tasarrufu sağlar. Evinizde ya da iş yerinizde
              konforu yakalayın, bütçenizi koruyun!
            </h5>
          </p>
        </div>
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex justify-items-center">
            <FaThumbsUp className="text-6xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Hızlı Servis
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              "Ünsal Teknik" ile hızlı servis imkanı! Sorunlarınızı anında
              çözüyor, kaliteli hizmeti kapınıza getiriyoruz. Arayın, uzman
              ekibimizle en kısa sürede yanınızda olalım!
            </h5>
          </p>
        </div>
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center">
            <GiAutoRepair className="text-6xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Genel Kontroller
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              İşletmenizin güvenliği ve verimliliği için genel kontroller şart!
              Ünsal Teknik olarak tüm tesisatlarınızın düzenli bakımını
              sağlıyoruz. Arıza ve beklenmedik durumlardan kaçınmak için şimdi
              bizi arayın!
            </h5>
          </p>
        </div>
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center">
            <MdOutlineInsertEmoticon className="text-6xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Müşteri Memnuniyeti
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              Ünsal Teknik olarak müşteri memnuniyeti bizim için her zaman
              öncelikli! Uzman ekibimizle kaliteli hizmet sunuyor,
              ihtiyaçlarınıza hızlı ve etkili çözümler üretiyoruz. Bize güvenin,
              konforu evinize taşıyalım!
            </h5>
          </p>
        </div>
        <div className="flex items-center justify-center  shadow-2xl rounded-lg bg-white lg:gap-12 gap-4 p-6 ">
          <div className="flex items-center justify-center">
            <TiTick className="text-7xl text-red-600" />
          </div>
          <p className="">
            <h3 className="font-bold font-serif text-2xl mt-2 mb-4">
              Garanti Takibi
            </h3>
            <h5 className="font-fira text-md text-gray-800">
              Ünsal Teknik ile garantiniz emin ellerde! Yaptığımız her işte
              kaliteye ve müşteri memnuniyetine odaklanıyoruz. Cihazlarınızın
              bakım ve garanti takibini bizimle kolayca yapın, rahat edin
            </h5>
          </p>
        </div>
        {/* <div class="flex justify-center items-center min-h-screen">
          <i class="text-6xl text-gray-500 hover:text-blue-500 hover:shadow-[0_0_10px_4px_rgba(59,130,246,0.5)] transition-all duration-300">
            <TiTick />
          </i>
        </div> */}
      </div>
    </div>
  );
};

export default Policies;
