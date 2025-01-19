// components/Header.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <header className="bg-[#F3F8FF] text-[#02033B] h-[100px] font-inter font-bold	text-[24px]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-6">
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
        <ul className="flex space-x-6">
          <li>
            <Link href="/datos">Cifras</Link>
          </li>
          <li>
            <Link href="/">Historias</Link>
          </li>
          <li>
            <Link href="/ ">Documentos</Link>
          </li>
          <li>
            <Link href="/analisis">Análisis</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
