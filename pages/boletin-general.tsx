// pages/data.tsx
import React from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Footer from "../components/Footer";

const BoletinPage: React.FC = () => {
  const resolutions = [
    "Boletín-PNIS_20-dic",
    "Boletín-PNIS_20-dic",
    "Boletín-PNIS_20-dic",
    "Boletín-PNIS_20-dic",
    "Boletín-PNIS_20-dic",
  ];

  const handleDownload = () => {
    // Ruta al archivo PDF en la carpeta public
    const pdfUrl = '/Boletín-PNIS_20-dic.pdf';
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Boletín-PNIS_20-dic.pdf'; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="flex lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center ">
          {/* Text Section */}
          <div className="text-left p-10 md:w-3/4 lg:w-auto">
            <h1 className="text-[55px] leading-[1.2] font-sans font-bold text-[#02033B] mb-6">
              Boletín Informativo del PNIS
            </h1>
            <p className="text-base text-[#02033B] font-sans leading-relaxed mb-6">
              Conoce los últimos avances, noticias y artículos relevantes sobre
              la implementación del PNIS a través de nuestro boletín. Esta es tu
              fuente principal para mantenerte actualizado sobre las acciones y
              compromisos del programa.
            </p>
          </div>
          {/* Image Section */}
          <div className="relative pb-20 lg:pb-0 px-20 lg:w-auto lg:px-0 flex justify-center items-center mx-20 lg:mx-0">
            <div className="relative w-full ">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/figure2.png"
                  alt="Overlaid Shape"
                  className="w-full"
                  width={847}
                  height={677}
                />
              </div>
              <div className="relative m-5">
                <Image
                  src="/headerboletingeneral.png"
                  alt="People"
                  className="rounded-[20px] object-cover w-full"
                  width={2811}
                  height={2128}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center bg-[#E0EAF9] py-10">
        <div className="w-full max-w-[1200px] p-5 ">
          <h1 className="text-2xl font-sans font-bold text-gray-800 mb-6 text-center">
            Boletines
          </h1>
          <ul className="w-full max-w-2xl mx-auto">
            {resolutions.map((resolution, index) => (
              <li
                key={index}
                className="border-b border-gray-300 py-3 px-4 text-gray-700 text-sm font-medium"
                onClick={handleDownload}
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
