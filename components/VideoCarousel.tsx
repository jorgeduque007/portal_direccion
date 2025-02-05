// components/YoutubeCarousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, FreeMode } from "swiper/modules";
import YouTube from "react-youtube";
import { FaArrowRight } from "react-icons/fa";

// Importar estilos de Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const VideoCarousel: React.FC = () => {
  const videoIds = [
    { id: "AMi2tr6X3Bg", title: "AGROPAZPEZ " },
    { id: "sYR0ofeZn2s", title: "ASOCULSAN" },
    { id: "hAQn2PNhq90", title: "CORTUCÁN" },
    { id: "GyXGevxOdlE", title: "ASOAGROPAZ" },
  ]; // IDs de los videos de YouTube

  return (
    <div className="w-full font-sans mx-auto px-10">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, FreeMode]}
        navigation
        freeMode={true}
        loop
        slidesPerView={1} // Mostrar 2 slides a la vez
        spaceBetween={20} // Espacio entre los slides en píxeles
        breakpoints={{
          640: { slidesPerView: 1, spaceBetween: 10 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
        className="rounded-lg overflow-hidden shadow-lg"
      >
        {videoIds.map((video, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <div className="flex">
              <a className="inline-flex items-center px-6 py-3 text-[15px] border-2 border-[#02033B]	 font-extrabold text-[#02033B] bg-[#FFFFFF] rounded-full mb-5 transition-all w-auto">
                {video.title}
                <FaArrowRight className="ml-2" />
              </a>
              <div></div>
            </div>
            <YouTube
              videoId={video.id}
              opts={{
                width: "100%",
                height: "360",
                playerVars: {
                  autoplay: 0,
                  modestbranding: 1,
                  rel: 0,
                },
              }}
              className="w-full"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VideoCarousel;
