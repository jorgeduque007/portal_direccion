import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

const Information: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[calc(100vh-100px)] bg-gradient-to-b from-[#EEF5FF] to-[#F7FAFF]">
        <div className="relative flex w-full max-w-[1200px] items-center gap-10">
          {/* Text Section */}
          <div className="flex-1">
            <h1 className="text-[55px] leading-[1.2] font-bold text-[#191847] mb-6">
              Tu portal de información sobre los avances y resultados de la DSCI
            </h1>
            <a
              href="#"
              className="font-inter inline-flex items-center px-6 py-3 text-[19px] font-extrabold	 text-[#191847] bg-[#FFA000] rounded-full hover:bg-[#FF8C00] transition-all"
            >
              Ver datos y gráficos de avances
              <FaArrowRight className="ml-2" />
            </a>
          </div>

          {/* Image Section */}
          <div className="relative flex-1">
            {/* People Image */}
            <Image
              src="/homeheader2.png"
              alt="People"
              className="rounded-[20px] object-cover"
              width={550}
              height={400}
            />
            {/* Green Shape */}
            <Image
              src="/figure.png"
              alt="Green Shape"
              className="absolute top-0 right-0 transform translate-x-[50px] -translate-y-[50px] w-[200px] h-[200px] z-[-1]"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Information;
