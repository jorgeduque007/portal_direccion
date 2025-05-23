// components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-[#F3F8FF] text-[#02033B] h-[100px] font-bold text-[24px] sticky top-0 z-50 shadow-md">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/">
            <Image
              src="/logoprograma.png"
              alt="People"
              className="rounded-[20px] object-cover"
              width={250}
              height={100}
            />
          </Link>
        </div>

        {/* Botón de hamburguesa / cerrar */}
        <button
          className="block md:hidden focus:outline-none z-50"
          onClick={toggleMenu}
        >
          {isOpen ? (
            <></>
          ) : (
            <>
              <span className="sr-only">Abrir menú</span>
              <div className="space-y-2">
                <div className="w-8 h-1 bg-[#02033B]"></div>
                <div className="w-8 h-1 bg-[#02033B]"></div>
                <div className="w-8 h-1 bg-[#02033B]"></div>
              </div>
            </>
          )}
        </button>

        {/* Menú completo */}
        <ul className="hidden font-sans md:flex space-x-6">
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/">Inicio</Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/convocatorias">Convocatorias</Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/datos">Cifras</Link>
            </motion.div>
          </li>
          <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/#stories">Historias</Link>
            </motion.div>
          </li>
          {/* <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/documentos">Documentos</Link>
            </motion.div>
          </li> */}
          {/* <li>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.97 }}>
              <Link href="/#analysis">Análisis</Link>
            </motion.div>
          </li> */}
        </ul>

        {/* Menú desplegable */}
        {isOpen && (
          <div className="fixed inset-0 bg-[#02033B] text-white z-40">
            {/* Logo menú hamburguesa */}
            <div className="text-2xl font-bold absolute top-7 left-7">
              <Image
                src="/logoprograma.png"
                alt="People"
                className="rounded-[20px] object-cover"
                width={250}
                height={100}
              />
            </div>
            {/* Botón de cerrar */}
            <button
              className="absolute top-7 right-7 text-[#FFA000] text-3xl font-bold focus:outline-none"
              onClick={toggleMenu}
            >
              ✖
            </button>

            <ul className="flex flex-col font-sans text-[#FFA000] items-start justify-center h-full space-y-6 ml-8">
              <li>
                <Link href="/" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Inicio
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/convocatorias" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Convocatorias
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/datos" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Cifras
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#stories" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Historias
                  </div>
                </Link>
              </li>
              {/* <li>
                <Link href="/documentos" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Documentos
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/#analysis" onClick={() => setIsOpen(false)}>
                  <div className="flex items-center">
                    <FaArrowRight className="mr-2" />
                    Análisis
                  </div>
                </Link>
              </li> */}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
