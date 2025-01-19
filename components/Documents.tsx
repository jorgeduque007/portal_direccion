import React from "react";

const Documents: React.FC = () => {
  return (
    <div className="py-20 flex justify-center items-center bg-gradient-to-b from-[#2925CC] to-[#4B48E5]">
      <div className="text-center">
        {/* Title */}
        <h1 className="text-white font-bold font-sans text-2xl md:text-3xl mb-4">
          Documentos oficiales y resoluciones clave
        </h1>

        {/* Subtitle */}
        <p className="text-[#F5F8FC] font-sans text-2xl mb-8 px-52">
          Encuentra en esta sección resoluciones, fallos y documentos oficiales
          que reflejan los avances y compromisos del PNIS.
        </p>

        {/* Button */}
        <div>
          <a
            href="#"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#F3C049] text-[#091133] font-extrabold font-inter text-sm rounded-full hover:bg-[#EAA63C] transition duration-300"
          >
            Accede a los fallos y resoluciones
            <span className="ml-2 text-lg">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Documents;
