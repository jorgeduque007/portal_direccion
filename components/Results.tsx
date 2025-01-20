import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Results: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-auto bg-white">
      <div className="w-2/3 bg-gradient-to-b my-24 from-[#F7C95F] to-[#FDB235] rounded-[30px] p-10 flex flex-col justify-center">
        <h2 className="text-[43px] font-inter font-extrabold text-[#191847] mb-4">
          Resultados en cifras
        </h2>
        <p className="text-3xl font-normal text-[#191847] mb-6">
          Visualiza la información de forma clara y detallada con nuestras
          gráficas y reportes actualizados.
        </p>
        <div className="flex">
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 text-[15px] font-extrabold text-white bg-[#4335DE] rounded-full hover:bg-[#3722c5] transition-all w-auto"
          >
            Explorar avances en datos
            <FaArrowRight className="ml-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Results;