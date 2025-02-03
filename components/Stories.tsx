import { useState } from "react";
import VideoCarousel from "./VideoCarousel";

const Carousel = () => {
  const slides = [
    {
      id: 1,
      image: "/homeheader2.png", // Reemplaza con la URL de tu imagen
      title: "Asoculsan",
      description:
        "Descubre historias de cambio y progreso a través de crónicas emotivas.",
    },
    {
      id: 2,
      image: "/homeheader2.png",
      title: "Cortucán",
      description:
        "Crónicas que reflejan el impacto positivo en las comunidades locales.",
    },
    {
      id: 3,
      image: "/homeheader2.png",
      title: "Asopazpez",
      description: "El impacto del PNIS visto desde las comunidades rurales.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="bg-[#C2DE35] py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#02033B] mb-14">
          Historias que inspiran: Crónicas del PNIS
        </h2>
      </div>

      <VideoCarousel />
      <p className="mx-auto text-center mt-8 text-2xl	font-sans text-black px-10 md:px-52">
        Descubre historias de cambio y progreso a través de crónicas emotivas
        que reflejan el impacto del PNIS en las comunidades.
      </p>
    </section>
  );
};

export default Carousel;
