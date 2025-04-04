import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Gender: React.FC = () => {
  return (
    <div className="flex items-center justify-center py-16 lg:px-56 bg-white">
      <div className="flex flex-col lg:flex-row lg:justify-around  items-center gap-8 max-w-5xl">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }} // Se activa solo una vez cuando el 50% del elemento es visible
          transition={{ duration: 0.8 }}
          className="flex-1 mx-20 lg:mx-0"
        >
          <h2 className="text-2xl font-sans font-bold text-[#02033B] mb-4">
            Enfoque Mujer y género
          </h2>
          <p className="text-base font-sans text-[#02033B] leading-relaxed mb-6">
            La DSCI prioriza la incorporación del enfoque de género en los
            procesos de sustitución voluntaria, garantizando igualdad,
            reconocimiento de impactos diferenciados y medidas afirmativas para
            mujeres y población LGBTI, en línea con el Acuerdo Final de Paz.
          </p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <a
              href="https://www.renovacionterritorio.gov.co/#/es/publicacion/292/enfoque-de-genero-direccion-de-sustitucion"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#FFC247] text-[#091133] font-sans font-extrabold text-sm rounded-full hover:bg-[#EAA63C] transition duration-300"
            >
              Informes y lineamientos de género
              <span className="ml-2 text-lg">→</span>
            </a>
          </motion.div>
        </motion.div>
        {/* Image Section */}
        <div className="flex-1 relative sm:px-40 px-20 pt-10 lg:w-auto lg:px-0 lg:pt-0 flex justify-center items-center">
          <motion.div
            className="relative w-full"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="w-full h-full bg-[#4335DE] rounded-[20px] rotate-[5deg]">
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                }} className="relative">
              <Image
                src="/mujerygenero.png"
                alt="Group working together"
                width={2320}
                height={1585}
                className="rounded-[20px] object-cover w-full rotate-[-7deg]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Gender;
