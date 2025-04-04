// pages/data.tsx
import React from "react";
import Head from "next/head";
import { BsFiletypePdf, BsFiletypeDocx, BsFiletypeXls } from "react-icons/bs";
import Image from "next/image";
import Footer from "../components/Footer";

const ConvocatoriasPage: React.FC = () => {
  const resolutions = [
    "Boletín dic 2024",
    "boletín enero 2025",
    "boletín pnis nov 2024",
    "boletín pnis oct 2024",
    "boletín pnis sept 2024",
  ];

  const handleDownload = () => {
    // Ruta al archivo PDF en la carpeta public
    const pdfUrl = "/DSCI-Tamaño Carta.pdf";
    // Crear un enlace temporal
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "DSCI-Tamaño Carta.pdf"; // Nombre del archivo que se descargará
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF] ">
        <Image
          src="/proveedores-argelia2.jpg"
          alt="Overlaid Shape"
          className="w-full"
          width={847}
          height={677}
        />
        <div className="container mx-auto text-center py-8">
          <h2 className="text-3xl font-sans md:text-4xl font-bold text-[#02033B] mb-8">
            Adquisición de Bienes y Servicios
          </h2>
          <h2 className="text-2xl font-sans md:text-3xl font-bold text-[#02033B] mb-4">
            Convocatoria ACMP 01 de 2025
          </h2>
        </div>

        <p className="mx-auto  text-base md:text-2xl font-sans text-black text-justify px-10 md:px-52">
          La Dirección de Sustitución de Cultivos Ilícitos - DSCI, en alianza
          estratégica con la Corporación Parque Tecnológico de Innovación del
          Café y su Caficultura - PARQUE TECNOLÓGICO TECNICAFE y la Cooperativa
          de Beneficiarios de la Reforma Agraria del Cauca - COOBRA, lo invita a
          presentar su portafolio de bienes y servicios para conformar un
          listado de oferentes habilitados que permitirá a los productores
          identificar y seleccionar directamente a los proveedores de bienes
          necesarios para su fortalecimiento, tanto a nivel local, regional como
          nacional mediante la en la suscripción de un Acuerdo Comercial a
          Mediano Plazo - ACMP No 01. El objetivo de este acuerdo es garantizar
          el suministro de bienes y servicios para los bloques de: Ferretería y
          Materiales de Construcción, Maquinaria y Equipos, Material Vegetal,
          Insumos Agropecuarios, Electrodomésticos, Mobiliario y Enseres,
          Artículos de Miscelánea, Productos Adicionales y Materias Primas.
        </p>

        <div className="container mx-auto py-8 px-10 md:px-52">
          <h2 className="text-3xl font-sans md:text-3xl font-bold text-[#02033B]">
            ¿Quiénes pueden participar?
          </h2>
        </div>

        <p className="mx-auto   text-base md:text-2xl font-sans text-black text-justify px-10 md:px-52">
          Podrán participar en la presente invitación, todos los oferentes
          personas naturales (mayores de edad) y jurídicas que, cuenten con
          registro mercantil vigente y cuyo objeto social lo habilite para
          desarrollar la actividad económica, (Los oferentes se podrán presentar
          al o los bloques que su objeto social le permita). Las personas
          jurídicas, además deberán tener duración superior a la vigencia del
          Acuerdo Comercial de Mediano Plazo - ACMP No 01 y que el representante
          legal acredite su capacidad para celebrar dicho acuerdo.
        </p>

        <div className="container mx-auto py-8 px-10 md:px-52">
          <h2 className="text-3xl font-sans md:text-3xl font-bold text-[#02033B] mb-8">
            Cronograma de la convocatoria
          </h2>

          <h2 className="text-2xl font-sans md:text-2xl  text-black mb-8">
            <span className="font-bold mr-2">Apertura:</span>
            26 de marzo de 2025
          </h2>
          <h2 className="text-2xl font-sans md:text-2xl  text-black mb-8">
            <span className="font-bold mr-2">
              Recepción de preguntas o solicitud de aclaraciones:
            </span>
            Hasta el 31 de marzo de 2025 a las 11:00 AM
          </h2>
          <h2 className="text-2xl font-sans md:text-2xl  text-black mb-8">
            <span className="font-bold mr-2">Publicación de respuestas:</span>
            02 de abril de 2025
          </h2>
          <h2 className="text-2xl font-sans md:text-2xl  text-black mb-8">
            <span className="font-bold mr-2">Fecha de cierre:</span>
            07 de abril de 2025 a las 10:00 AM
          </h2>
          <h2 className="text-xl font-sans md:text-2xl  text-black ">
            <span className="font-bold mr-2">NOTA:</span>
            Todas las comunicaciones deberán ser enviadas a
            cooperativacoobra.1@gmail.com y tecnicafecauca@gmail.com
          </h2>
        </div>

        <div className="container mx-auto py-8 px-10 md:px-52">
          <h2 className="text-3xl font-sans md:text-3xl font-bold text-[#02033B] mb-8">
            Documentos de la convocatoria
          </h2>

          <ul className="list-disc list-inside text-lg md:text-2xl font-sans text-black mb-8">
            <li className="mb-8 flex items-center gap-2">
              <a
                href="https://stpnis.blob.core.windows.net/testdsci/Documentos_convocatoria_argelia_UNODC/1._TdR_ACMP_No_01_MA_467-470_Argelia_VB.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center"
              >
                <span className="mr-2">•</span>
                <span className="underline">Términos de Referencia</span>
                <BsFiletypePdf className="text-3xl text-black ml-2" />
              </a>
            </li>
            <li className="mb-8 flex items-center gap-2">
              <a
                href="https://stpnis.blob.core.windows.net/testdsci/Documentos_convocatoria_argelia_UNODC/2._Formato_Presentacion_MA_467-470_Argelia_VB.docx"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center"
              >
                <span className="mr-2">•</span>
                <span className="underline">
                  Formato Presentación MA 467 - 470
                </span>
                <BsFiletypeDocx className="text-3xl text-black ml-2" />
              </a>
            </li>
            <li className="mb-8 flex items-center gap-2">
              <a
                href="https://stpnis.blob.core.windows.net/testdsci/Documentos_convocatoria_argelia_UNODC/3.Formato_presentacion_de_portafolio_de_bienes_VB.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center"
              >
                <span className="mr-2">•</span>
                <span className="underline">
                  Formato presentación de portafolio de bienes
                </span>
                <BsFiletypeXls className="text-3xl text-black ml-2" />
              </a>
            </li>
            <li className="mb-8 flex items-center gap-2">
              <a
                href="https://stpnis.blob.core.windows.net/testdsci/Documentos_convocatoria_argelia_UNODC/Documento_de_referencia_de_bienes.xlsx"
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center"
              >
                <span className="mr-2">•</span>
                <span className="underline">
                  Documento de referencia de bienes
                </span>
                <BsFiletypeXls className="text-3xl text-black ml-2" />
              </a>
            </li>
            <li className="mb-8 flex items-center gap-2">
              <a
                href="https://stpnis.blob.core.windows.net/testdsci/preregistroArgelia/Documento_Aclaraciones_ACMP_No_01_Argelia.pdf "
                target="_blank"
                rel="noopener noreferrer"
                className=" flex items-center"
              >
                <span className="mr-2">•</span>
                <span className="underline">
                  Preguntas frecuentes
                </span>
                <BsFiletypePdf className="text-3xl text-black ml-2" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="flex items-center justify-center bg-[#E0EAF9] py-10">
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
      </div> */}
      <Footer />
    </>
  );
};

export default ConvocatoriasPage;
