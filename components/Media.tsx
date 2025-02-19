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
    const instagramScript = document.createElement("script");
    instagramScript.src = "//www.instagram.com/embed.js";
    instagramScript.async = true;
    document.body.appendChild(instagramScript);

    // Cargar el script de Twitter
    const twitterScript = document.createElement("script");
    twitterScript.src = "https://platform.twitter.com/widgets.js";
    twitterScript.async = true;
    twitterScript.charset = "utf-8";
    document.body.appendChild(twitterScript);

    return () => {
      document.body.removeChild(instagramScript);
      document.body.removeChild(twitterScript);
    };
  }, []);

  return (
    <div className="bg-[#F7C95F] p-6 pt-14 lg:px-56 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 place-items-center items-start">
      {/* Card 1 */}
      <div className="flex flex-col items-center w-full max-w-xl">
        <div className="flex items-center bg-white rounded-full px-4 py-2 mb-4 shadow">
          <span className="text-black font-sans font-bold text-sm">
            <FontAwesomeIcon icon={faXTwitter} className="text-black text-xl" />{" "}
            Post de @Soysustitucion
          </span>
        </div>
        <div className="w-full h-fit rounded-lg mt-3 ">
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
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col items-center w-full max-w-xl sm:col-span-1 lg:col-span-1">
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-4  shadow">
          <FontAwesomeIcon icon={faWhatsapp} className="text-black text-xl" />
          <span className="text-black font-sans font-bold text-sm">Canal de WTP</span>
        </div>
        <div className="w-full bg-gray-300 rounded-lg mt-6">
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
