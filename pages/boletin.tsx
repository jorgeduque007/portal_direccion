// pages/data.tsx
import React from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";

const BoletinPage: React.FC = () => {
  const resolutions = [
    "Boletín dic 2024",
    "boletín enero 2025",
    "boletín pnis nov 2024",
    "boletín pnis oct 2024",
    "boletín pnis sept 2024",
  ];

  return (
    <>
      <div className="flex lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center ">
          {/* Text Section */}
          <div className="text-left p-10 md:w-3/4 lg:w-auto">
            <h1 className="text-[55px] leading-[1.2] font-bold text-[#02033B] mb-6">
              Precios de la Coca: Análisis y Seguimiento
            </h1>
            <p className="text-base text-[#02033B] font-inter leading-relaxed mb-6">
              Accede a la información actualizada sobre los precios de la coca
              en el mercado ilícito y sus impactos en las comunidades. Conoce
              los datos clave que sustentan las políticas de sustitución y los
              esfuerzos para reducir la dependencia de cultivos ilícitos.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative pb-20 lg:pb-0 px-20 lg:w-auto lg:px-0 flex justify-center items-center mx-20 lg:mx-0">
            <div className="relative w-full ">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/figure.png"
                  alt="Overlaid Shape"
                  className="w-full"
                  width={847}
                  height={677}
                />
              </div>
              <div className="relative">
                <Image
                  src="/home-header-2.png"
                  alt="People"
                  className="rounded-[20px] object-cover w-full"
                  width={550}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#E0EAF9] py-10">
        <div className="w-full max-w-[1200px] p-5 ">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Boletines
          </h1>
          <ul className="w-full max-w-2xl mx-auto">
            {resolutions.map((resolution, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-3 px-4 text-gray-700 text-sm font-medium"
              >
                {resolution}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BoletinPage;
