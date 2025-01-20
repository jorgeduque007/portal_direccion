// pages/data.tsx
import React from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";

const DataPage: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className="relative flex w-full max-w-[1200px] items-center gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-[55px] leading-[1.2] font-bold text-[#191847] mb-6">
              Resultados en cifras
            </h1>
            <p className="text-base text-[#02033B] font-inter leading-relaxed mb-6">
              Explora los datos y avances del PNIS en tiempo real. Visualiza
              estadísticas, gráficas y reportes interactivos que reflejan el
              impacto de los programas de sustitución de cultivos y el progreso
              hacia la paz territorial.
            </p>
          </div>

          {/* Image Section */}
          <div className="relative flex-1">
            {/* People Image */}
            <Image
              src="/home-header-2.png"
              alt="People"
              className="rounded-[20px] object-cover"
              width={550}
              height={400}
            />
            {/* Green Shape */}
            <Image
              src="/figure.png"
              alt="Green Shape"
              className="absolute top-0 right-0 transform translate-x-[50px] -translate-y-[50px] w-[200px] h-[200px] z-[-1]"
              width={200}
              height={200}
            />
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