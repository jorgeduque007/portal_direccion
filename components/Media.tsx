import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { useEffect } from "react";

const Media = () => {
  useEffect(() => {
    // Cargar el script de Instagram
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="bg-[#F7C95F] p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center items-start">
      {/* Card 1 */}
      <div className="flex flex-col items-center w-full max-w-xl">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
          <span className="text-black font-bold text-sm">
            <FontAwesomeIcon icon={faXTwitter} className="text-black text-xl" />{" "}
            Post de @Soysustitucion
          </span>
        </div>
        <div className="w-full h-fit  bg-gray-300 rounded-lg mt-3">
          <blockquote
            className="twitter-tweet"
            data-lang="es"
            data-theme="light"
          >
            <p lang="es" dir="ltr">
              &quot;Hoy tenemos plátano chocoano en las tiendas del Grupo Éxito;
              es solo el inicio. El plátano es una sola cosa, pero la capacidad
              de ustedes es grande. Tienen nuestro compromiso para caminar a la
              par de ustedes.&quot; Carlos Calleja, Presidente del{" "}
              <a href="https://twitter.com/Grupo_Exito?ref_src=twsrc%5Etfw">
                @Grupo_Exito
              </a>{" "}
              <a href="https://t.co/QDlzTKRkDD">pic.twitter.com/QDlzTKRkDD</a>
            </p>
            &mdash; Dirección Sustitución de Cultivos de Uso Ilícito
            (@SoySustitucion){" "}
            <a href="https://twitter.com/SoySustitucion/status/1824199480079798295?ref_src=twsrc%5Etfw">
              15 de agosto de 2024
            </a>
          </blockquote>{" "}
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          ></script>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center w-full max-w-xl">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
          <FontAwesomeIcon icon={faInstagram} className="text-black text-xl" />
          <span className="text-black font-bold text-sm">
            Post de Instagram
          </span>
        </div>
        <div className="w-full  bg-gray-300 rounded-lg mt-3">
          <blockquote
            className="instagram-media bg-white border-0 rounded-lg shadow-sm  w-full "
            data-instgrm-captioned
            data-instgrm-permalink="https://www.instagram.com/reel/DC5BWa8Puqu/?utm_source=ig_embed&amp;utm_campaign=loading"
            data-instgrm-version="14"
          >
            <div className="p-4">
              <a
                href="https://www.instagram.com/reel/DC5BWa8Puqu/?utm_source=ig_embed&amp;utm_campaign=loading"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center no-underline w-full"
              >
                <div className="flex flex-row items-center">
                  <div className="bg-gray-100 rounded-full w-10 h-10 mr-3"></div>
                  <div className="flex flex-col flex-grow justify-center">
                    <div className="bg-gray-100 rounded h-3.5 w-24 mb-1.5"></div>
                    <div className="bg-gray-100 rounded h-3.5 w-16"></div>
                  </div>
                </div>
                <div className="pt-[19%]"></div>
                <div className="block h-12 mx-auto my-3 w-12">
                  <svg
                    className="w-12 h-12"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101"></path>
                  </svg>
                </div>
                <div className="pt-2">
                  <div className="text-instagram-blue font-sans text-sm font-semibold leading-5">
                    Ver esta publicación en Instagram
                  </div>
                </div>
                <div className="pt-[12.5%]"></div>
                <div className="flex flex-row items-center mb-3.5">
                  <div>
                    <div className="bg-gray-100 rounded-full w-3 h-3 transform translate-x-0 translate-y-2"></div>
                    <div className="bg-gray-100 w-3 h-3 transform -rotate-45 translate-x-1 translate-y-0.5"></div>
                    <div className="bg-gray-100 rounded-full w-3 h-3 transform translate-x-2 -translate-y-4"></div>
                  </div>
                  <div className="ml-2">
                    <div className="bg-gray-100 rounded-full w-5 h-5"></div>
                    <div className="w-0 h-0 border-t-2 border-l-6 border-b-2 border-transparent border-l-gray-100 transform translate-x-4 -translate-y-1 rotate-30"></div>
                  </div>
                  <div className="ml-auto">
                    <div className="w-0 h-0 border-t-8 border-r-8 border-transparent border-t-gray-100 transform translate-y-4"></div>
                    <div className="bg-gray-100 h-3 w-4 transform -translate-y-1"></div>
                    <div className="w-0 h-0 border-t-8 border-l-8 border-transparent border-t-gray-100 transform -translate-y-1 translate-x-2"></div>
                  </div>
                </div>
                <div className="flex flex-col flex-grow justify-center mb-6">
                  <div className="bg-gray-100 rounded h-3.5 w-56 mb-1.5"></div>
                  <div className="bg-gray-100 rounded h-3.5 w-36"></div>
                </div>
              </a>
              <p className="text-gray-500 font-sans text-sm leading-5 my-0 mt-2 overflow-hidden text-ellipsis whitespace-nowrap text-center">
                <a
                  href="https://www.instagram.com/reel/DC5BWa8Puqu/?utm_source=ig_embed&amp;utm_campaign=loading"
                  className="text-gray-500 font-sans text-sm leading-5 no-underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Una publicación compartida de Dirección de Sustitución
                  (@soysustitucion)
                </a>
              </p>
            </div>
          </blockquote>
        </div>
      </div>

      {/* Card 3 (Centrado en tablet) */}
      <div className="flex flex-col items-center w-full max-w-xl sm:col-span-2 lg:col-span-1">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow">
          <FontAwesomeIcon icon={faWhatsapp} className="text-black text-xl" />
          <span className="text-black font-bold text-sm">Canal de WTP</span>
        </div>
        <div className="w-full bg-gray-300 rounded-lg mt-3">
          <Image
            src="/whatsappfoto.jpg"
            alt="Overlaid Shape"
            className="w-full"
            width={847}
            height={677}
          />
        </div>
      </div>
    </div>
  );
};

export default Media;
