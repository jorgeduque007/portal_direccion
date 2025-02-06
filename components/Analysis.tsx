import React from "react";
import Image from "next/image";
import Link from "next/link";

const Analysis: React.FC = () => {
  return (
    <div className="h-auto py-16 lg:px-56 bg-[#F7C741] items-center justify-between ">
      <h2 className="text-[50px] font-sans font-bold text-[#20284E] mb-16 text-center">
        Análisis e información clave
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-5 xl:gap-x-36 items-center">
        {/* Card 1 */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden w-[450px] mb-10 lg:mb-0">
          <div className="h-[180px]">
            <Image
              src="/boletincocamini.png"
              alt="Group working together"
              width={1800}
              height={768}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 h-[300px] lg:h-[400px] xl:h-[320px]">
            <h3 className="text-3xl font-sans	font-bold text-[#20284E]">
              Boletín <br />
              Precios de la coca
            </h3>
            <p className="text-xl font-sans text-[#02033B] mt-3">
              Accede al boletín con los precios actuales de la coca, clave para
              entender el contexto de las regiones.
            </p>
            <Link href="boletin">
              <button className="mt-5 font-sans px-4 py-2 bg-[#B6D542] text-[#20284E] font-semibold text-sm rounded-md">
                Ver
              </button>
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-3xl shadow-md overflow-hidden w-[450px]">
          <div className="h-[180px]">
            <Image
              src="/boletingeneralmini.png"
              alt="Group working together"
              width={1800}
              height={720}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-10 h-[300px] lg:h-[400px] xl:h-[320px]">
            <h3 className="text-3xl font-sans font-bold text-[#20284E]">
              Boletín <br />
              Avance general PNIS
            </h3>
            <p className="text-xl font-sans text-[#02033B] mt-3">
              Conoce los hitos y resultados destacados del programa en nuestro
              boletín mensual.
            </p>
            <Link href="boletin-general">
              <button className="mt-5 px-4 py-2 bg-[#B6D542] font-sans text-[#20284E] font-semibold text-sm rounded-md">
                Ver
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analysis;
