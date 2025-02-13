import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Analysis: React.FC = () => {
  return (
    <div className="h-auto py-16 lg:px-56 bg-[#F7C741] items-center justify-between ">
      <h2 className="text-[50px] font-sans font-bold text-[#20284E] mb-16 text-center">
        Análisis e información clave
      </h2>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-x-5 xl:gap-x-36 items-center">
        {/* Card 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }} // Se activa cuando entra en vista
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-md overflow-hidden w-[450px] mb-10 lg:mb-0"
        >
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="boletin">
                <button className="mt-5 font-sans px-4 py-2 bg-[#B6D542] text-[#20284E] font-semibold text-sm rounded-md">
                  Ver
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }} // Se activa cuando entra en vista
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          viewport={{ once: true, amount: 0.2 }}
          className="bg-white rounded-3xl shadow-md overflow-hidden w-[450px]"
        >
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
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
              <Link href="boletin-general">
                <button className="mt-5 font-sans px-4 py-2 bg-[#B6D542] text-[#20284E] font-semibold text-sm rounded-md">
                  Ver
                </button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Analysis;
