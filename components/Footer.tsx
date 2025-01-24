import React from "react";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="w-full py-16 bg-[#0A0C46] flex items-center justify-around px-16">
      {/* Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="text-white">
          {/* Address */}
          <div className="flex items-start mb-8">
            <FaMapMarkerAlt className="text-3xl text-white mr-4" />
            <div>
              <p className="font-bold">Dirección:</p>
              <p>
                Carrera 7 No. 26-20,
                <br />
                Edificio Tequendama (Pisos 32 - 33)
              </p>
              <p className="font-bold mt-2">Horario de Atención:</p>
              <p>Lunes a Viernes 8:00 am - 5:00 pm.</p>
            </div>
          </div>
          {/* Phone */}
          <div className="flex items-center mb-4">
            <FaPhone className="text-3xl text-white mr-4" />
            <div>
              <p className="font-bold">Línea PQRSD Conmutador:</p>
              <p>(+57) 601 422 10 30</p>
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col md:flex-row items-center">
            <FaEnvelope className="text-3xl text-white mr-4" />
            <div>
              <p className="font-bold">Correo:</p>
              <p>
                <a
                  href="mailto:enlaceciudadano@renovacionterritorio.gov.co"
                  className="text-white underline"
                >
                  enlaceciudadano@renovacionterritorio.gov.co
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-center text-white">
          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.youtube.com/channel/UCpEuwzI8PqS6xPnvr2-PV5g"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <FaYoutube className="text-4xl" />
            </a>
            <a
              href="https://www.instagram.com/soysustitucion/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className="text-4xl" />
            </a>
            <a
              href="https://www.linkedin.com/company/direcci%C3%B3n-de-sustituci%C3%B3n-de-cultivos-de-uso-il%C3%ADcito/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-4xl" />
            </a>
            <a
              href="https://web.facebook.com/SoySustitucion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-4xl" />
            </a>
            <a
              href="https://x.com/SoySustitucion"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter className="text-4xl" />
            </a>
          </div>
          {/* Social Media Button */}
          <div>
            <div className="bg-white text-[#0A0C46] font-bold py-2 px-4 rounded-full">
              Síguenos en todas nuestras redes sociales
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
