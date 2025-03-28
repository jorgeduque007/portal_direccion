// pages/data.tsx
import React from "react";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
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
      <div className="lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF] py-8">
        <Image
          src="/proveedores_argelia.jpg"
          alt="Overlaid Shape"
          className="w-full"
          width={847}
          height={677}
        />
        <div className="container mx-auto text-center py-8">
          <h2 className="text-3xl font-sans md:text-4xl font-bold text-[#02033B] mb-8">
            Adquisición de Bienes y Servicios
          </h2>
          <h2 className="text-2xl font-sans md:text-3xl font-bold text-[#02033B] mb-8">
            Convocatoria ACMP 01 de 2025
          </h2>
        </div>

        <p className="mx-auto   text-2xl font-sans text-black px-10 md:px-52">
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
          <h2 className="text-3xl font-sans md:text-3xl font-bold text-[#02033B] mb-8">
            ¿Quiénes pueden participar?
          </h2>
        </div>

        <p className="mx-auto   text-2xl font-sans text-black px-10 md:px-52">
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

          <h2 className="text-2xl font-sans md:text-2xl font-bold text-[#02033B] mb-8">
            Cronograma de la convocatoria. test sad
          </h2>
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

export default ConvocatoriasPage;
