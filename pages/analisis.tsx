// pages/data.tsx
import React from "react";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";

const AnalisisPage: React.FC = () => {
  return (
    <>
      <div className="h-auto min-h-[calc(100vh-100px)] bg-[#F7C741] flex flex-col items-center justify-center ">
        <h2 className="text-[50px] font-sans font-bold text-[#20284E] mb-10">
          Análisis e información clave
        </h2>
        <div className="flex flex-col lg:flex-row gap-60">
          {/* Card 1 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden w-[320px] md:w-[380px]">
            <div className="h-[180px]">
              <Image
                src="/analisis1.png"
                alt="Group working together"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-3xl	font-bold font-sans text-[#20284E]">
                Boletín <br />
                Precios de la coca
              </h3>
              <p className="text-xl	 font-sans text-[#02033B] mt-3">
                Accede al boletín con los precios actuales de la coca, clave
                para entender el contexto de las regiones.
              </p>
              <button className="mt-5 px-4 py-2 bg-[#B6D542] text-[#20284E] font-semibold text-sm rounded-md">
                Ver
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl shadow-md overflow-hidden w-[320px] md:w-[380px]">
            <div className="h-[180px]">
              <Image
                src="/analisis2.png"
                alt="Group working together"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-3xl	 font-bold font-sans text-[#20284E]">
                Boletín <br />
                Avance general PNIS
              </h3>
              <p className="text-xl	 font-sans text-[#02033B] mt-3">
                Conoce los hitos y resultados destacados del programa en nuestro
                boletín mensual.
              </p>
              <button className="mt-5 px-4 py-2 bg-[#B6D542] text-[#20284E] font-semibold text-sm rounded-md">
                Ver
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnalisisPage;
