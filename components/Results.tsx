import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";

const Results: React.FC = () => {
  return (
    <div className="flex items-center lg:px-56 justify-center h-auto bg-white">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }} // Se activa solo una vez cuando el 50% del elemento es visible
        transition={{ duration: 0.8 }}
        className="mx-6 lg:mx-0 md:w-full w-2/3 bg-gradient-to-b my-14 from-[#F7C95F] to-[#FDB235] rounded-[30px] p-10 flex flex-col justify-center"
      >
        <h2 className="text-[43px] font-sans font-extrabold text-[#191847] mb-4 px-2-">
          Resultados en cifras.
        </h2>
        <p className="text-3xl font-sans font-normal text-[#191847] mb-6">
          Visualiza la información de forma clara y detallada con nuestras
          gráficas y reportes actualizados.
        </p>
        <div className="flex">
          <Link
            href="/datos"
            className="inline-flex items-center px-6 py-3 text-[15px] font-sans font-extrabold text-white bg-[#4335DE] rounded-full hover:bg-[#3722c5] transition-all w-auto"
          >
            Explorar avances en datos
            <FaArrowRight className="ml-2" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Results;
