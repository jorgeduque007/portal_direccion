import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

const Information: React.FC = () => {
  return (
    <>
      <div className="flex lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center ">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }} // Se activa solo una vez cuando el 50% del elemento es visible
            transition={{ duration: 0.8 }}
            className="text-left pl-20 lg:pl-56 py-10 lg:py-0  md:w-3/4 lg:w-auto"
          >
            <h1 className="text-[55px] font-sans leading-[1.2] font-bold text-[#191847] mb-6 ">
              Tu portal de información sobre los avances y resultados de la DSCI
            </h1>
            <motion.div
              whileHover={{ scale: 1.1 }} // Aumenta de tamaño al hacer hover
              whileTap={{ scale: 0.9 }} // Se reduce al hacer clic
            >
              <Link
                href="/datos"
                className="inline-flex items-center px-6 py-3 text-[19px] font-sans font-bold	 text-[#191847] bg-[#FFA000] rounded-full hover:bg-[#FF8C00] transition-all"
              >
                Ver datos y gráficos de avances
                <FaArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </motion.div>
          {/* Image Section */}
          <div className="relative px-20 lg:w-auto lg:px-0 flex justify-center items-center">
            <motion.div className="relative w-full ">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <Image
                  src="/figure.png"
                  alt="Overlaid Shape"
                  className="w-full"
                  width={847}
                  height={677}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }} // Se activa solo una vez cuando el 50% del elemento es visible
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <Image
                  src="/headerhd2.png"
                  alt="People"
                  className="rounded-[20px] object-cover w-full"
                  width={3015}
                  height={2675}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
