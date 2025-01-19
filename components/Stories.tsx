import { useState } from "react";

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
    <section className="bg-[#C2DE35] py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-sans font-bold text-[#02033B] mb-6">
          Historias que inspiran: Crónicas del PNIS
        </h2>
        <div className="relative">
          {/* Slides */}
          <div
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          ></div>

          {/* Controles */}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            ❮
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            ❯
          </button>
        </div>

        {/* Indicadores */}
        <div className="mt-6 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-blue-900" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
      <p className="mx-auto text-center mt-8 text-3xl font-sans text-black px-52">
        Descubre historias de cambio y progreso a través de crónicas emotivas
        que reflejan el impacto del PNIS en las comunidades.
      </p>
    </section>
  );
};

export default Carousel;
