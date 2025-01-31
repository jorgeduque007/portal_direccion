import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const Information: React.FC = () => {
  return (
    <>
      <div className="flex lg:min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className=" grid grid-cols-1 lg:grid-cols-2 lg:items-center ">
          {/* Text Section */}
          <div className="text-left p-10 md:w-3/4 lg:w-auto">
            <h1 className="text-[55px] leading-[1.2] font-bold text-[#191847] mb-6 ">
              Tu portal de información sobre los avances y resultados de la DSCI
            </h1>
            <Link
              href="/datos"
              className="font-inter inline-flex items-center px-6 py-3 text-[19px] font-extrabold	 text-[#191847] bg-[#FFA000] rounded-full hover:bg-[#FF8C00] transition-all"
            >
              Ver datos y gráficos de avances
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          {/* Image Section */}
          <div className="relative px-20 lg:w-auto lg:px-0 flex justify-center items-center">
            <div className="relative w-full ">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/figure.png"
                  alt="Overlaid Shape"
                  className="w-full"
                  width={847}
                  height={677}
                />
              </div>
              <div className="relative">
                <Image
                  src="/headerhd2.png"
                  alt="People"
                  className="rounded-[20px] object-cover w-full"
                  width={3015}
                  height={2675}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
