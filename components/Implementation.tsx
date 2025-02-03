import React from "react";
import Image from "next/image";

const Implementation: React.FC = () => {
  return (
    <div className="flex flex-col px-10 lg:px-56 justify-center items-center bg-gradient-to-r from-gray-100 to-gray-200">
      <div className="text-center my-12">
        <h1 className="text-[#02033B] font-bold text-2xl">
          Ruta de implementación
        </h1>
        <p className="text-[#02033B] text-sm">
          Resolución 0021 del 16 de julio de 2024
        </p>
      </div>
      <div className="w-auto mb-12 bg-white shadow-lg rounded-3xl p-8">
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          {/* Item 1 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5F8FC] rounded-full">
                <img src="/implementation1.png" alt="Icon" />
              </div>
            </div>
            <h2 className="text-[#02033B] font-bold text-lg">
              Firma de planes de inversión
            </h2>
            <p className="text-[#02033B] text-sm leading-relaxed">
              Un plan de inversión es una herramienta que permite estructurar y
              analizar las inversiones para alcanzar objetivos claros en el
              desarrollo de los proyectos productivos de cada zona. Ayuda a
              identificar oportunidades y minimizar riesgos, con el fin de
              cumplir metas de manera efectiva.
            </p>
          </div>

          {/* Item 2 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5F8FC] rounded-full">
                <img src="/implementation2.png" alt="Icon" />
              </div>
            </div>
            <h2 className="text-[#02033B] font-bold text-lg">
              Alistamiento al proyecto productivo
            </h2>
            <p className="text-[#02033B] text-sm leading-relaxed">
              El alistamiento de labores es una herramienta esencial para el
              desarrollo de las alternativas productivas en las regiones
              rurales. Este proceso incluye la preparación previa necesaria,
              como el arado de la tierra y otras tareas fundamentales, que
              sientan las bases para iniciar cada iniciativa.
            </p>
          </div>

          {/* Item 3 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5F8FC] rounded-full">
                <img src="/implementation3.png" alt="Icon" />
              </div>
            </div>
            <h2 className="text-[#02033B] font-bold text-lg">
              Entrega de insumos y materiales
            </h2>
            <p className="text-[#02033B] text-sm leading-relaxed">
              Ahora, cada beneficiario puede elegir su proveedor de confianza
              entre los habilitados en la base de datos del Banco de Proveedores
              de la DSCI. Esto facilita un proceso más cercano y transparente
              para la entrega de insumos y materiales para proyectos
              productivos.
            </p>
          </div>

          {/* Item 4 */}
          <div>
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 flex items-center justify-center bg-[#F5F8FC] rounded-full">
                <img src="/implementation4.png" alt="Icon" />
              </div>
            </div>
            <h2 className="text-[#02033B] font-bold text-lg">
              Acompañamiento técnico
            </h2>
            <p className="text-[#02033B] text-sm leading-relaxed">
              Se ha habilitado la opción de extender el acompañamiento técnico
              hasta un año, según las necesidades de los proyectos productivos.
              Garantizando el apoyo de profesionales para ofrecer asesoramiento
              en el desarrollo de las alternativas sostenibles de cada región.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-8">
          <a
            href="https://www.renovacionterritorio.gov.co/#/es/direcciones/Sustitucion-de-Cultivos-Ilicitos"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-transparent border-2 border-[#091133] text-[#091133] font-bold rounded-full hover:bg-[#091133] hover:text-white transition duration-300"
          >
            Más información
          </a>
        </div>
      </div>
    </div>
  );
};

export default Implementation;
