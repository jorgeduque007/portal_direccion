// pages/data.tsx
import React from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";

const DataPage: React.FC = () => {
  return (
    <>
      <div className="flex lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center ">
          {/* Text Section */}
          <div className="text-left p-10 md:w-3/4 lg:w-auto">
             <h1 className="text-[55px] font-sans leading-[1.2] font-bold text-[#191847] mb-6">
              Resultados en cifras
            </h1>
            <p className="text-base font-sans text-[#02033B] leading-relaxed mb-6">
              Explora los datos y avances del PNIS en tiempo real. Visualiza
              estadísticas, gráficas y reportes interactivos que reflejan el
              impacto de los programas de sustitución de cultivos y el progreso
              hacia la paz territorial.
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
                  src="/headerdatoscifras.png"
                  alt="People"
                  className="rounded-[20px] object-cover w-full"
                  width={2702}
                  height={2076}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#E0EAF9] py-10">
        <div className="w-full max-w-[1200px] p-5">
          <iframe
            title="PNIS"
            width="100%"
            height="600px"
            src="https://app.powerbi.com/view?r=eyJrIjoiNmU3MjE2YmItMzkwMC00MzBlLThhODAtMDJmNTY0NzY5NGYxIiwidCI6IjhmZDEwMTNlLTJhMDgtNGM0Ny05M2Q0LTE2ZTkyOWEyY2E2MSIsImMiOjR9"
            frameBorder="0"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DataPage;
