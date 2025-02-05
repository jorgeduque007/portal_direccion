import React from "react";
import Image from "next/image";

const Gender: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-16 lg:px-56 bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-around  items-center gap-8 max-w-5xl">
        {/* Text Section */}
        <div className="flex-1 mx-20 lg:mx-0">
          <h2 className="text-2xl font-sans font-bold text-[#02033B] mb-4">
            Enfoque Mujer y género
          </h2>
          <p className="text-base font-sans text-[#02033B] leading-relaxed mb-6">
            La DSCI prioriza la incorporación del enfoque de género en los
            procesos de sustitución voluntaria, garantizando igualdad,
            reconocimiento de impactos diferenciados y medidas afirmativas para
            mujeres y población LGBTI, en línea con el Acuerdo Final de Paz.
          </p>

          <div>
            <a
              href="https://www.renovacionterritorio.gov.co/#/es/publicacion/292/enfoque-de-genero-direccion-de-sustitucion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FFC247] text-[#091133] font-sans font-extrabold text-sm rounded-full hover:bg-[#EAA63C] transition duration-300"
            >
              Informes y lineamientos de género
              <span className="ml-2 text-lg">→</span>
            </a>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex-1  mx-20 lg:mx-0">
          <div className="w-full h-full border-8 border-[#2925CC]">
            <Image
              src="/mujergenero.png"
              alt="Group working together"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
