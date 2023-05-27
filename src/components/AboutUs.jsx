import { motion } from "framer-motion";
import { Descripciones } from "../const";
import { useState } from "react";

function AboutUs() {
  function BioFirst({ name, imgbio, description, points }) {
    const [showMyModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);

    function MyModal({ visible, onClose }) {
      const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
      };

      if (!visible) return null;

      return (
        <div
          id="container"
          onClick={handleOnClose}
          className=" z-10 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
        >
          {/* contenedor principal */}
          <div className="bg-brown-200 h-[95%] w-[95%] flex flex-col items-center md:h-[80%] md:w-[50%] rounded-xl shadow-md">
            {/* contenedor encabezado */}
            <div className="flex flex-row py-4 gap-5 md:gap-[3rem] lg:gap-[5rem] w-full justify-center items-center">
              <div className="h-[6rem] w-[6rem] md:h-[8.5rem] md:w-[8.5rem] ml-auto  rounded-full flex justify-center items-center shadow-xl">
                <img
                  src={imgbio}
                  alt={name}
                  className="h-full w-full object-cover rounded-full shadow-xl"
                />
              </div>
              <h2 className=" font-bold text-2xl md:text-5xl">{name}</h2>
              <button
                onClick={onClose}
                className="text-2xl  mb-[5rem]  md:mb-[7rem] ml-auto mr-[1rem] lg:ml-auto md:text-2xl lg:text-xl"
              >
                X
              </button>
            </div>
            {/* Divisor */}
            <div className="w-[90%] md:w-[50%] bg-black h-[0.05rem] md:h-[0.1rem]   " />
            {/* contenedor textos */}
            <div className="flex flex-col items-center w-full h-[95%] md:gap-[1rem] gap-5">
              <div className="mt-5 text-justify px-4 py-3 rounded-md w-[90%] h-[60%] md:h-[50%] overflow-hidden overflow-y-scroll shadow-inner md:shadow-none">
                <p className="text-base md:text-xl">{description}</p>
              </div>
              <div className="flex justify-center items-center h-[20%] md:w-full">
                <div className=" h-full w-[85%] px-2 py-2 overflow-hidden overflow-y-scroll shadow-inner md:shadow-none rounded-md">
                  <ul className=" text-center flex flex-col gap-1 text-base md:text-lg">
                    {points.map((point, index) => (
                      <li key={index}>- {point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="max-w-3xl  mx-auto">
          <div className="text-center py-3">
            <button onClick={() => setShowModal(true)}>
              <div className="my-[1rem] w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] flex justify-center items-center rounded-full">
                <img
                  src={imgbio}
                  className="rounded-full h-full w-full object-cover duration-300 hover:scale-105 transition-transform"
                />
              </div>
            </button>
          </div>
        </div>
        <MyModal onClose={handleOnClose} visible={showMyModal} />
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      viewport={{ once: true }}
      id="AboutUs"
      className="bg-brown-100  w-full py-20 "
    >
      <div className="container mx-auto px-20">
        <h1 className=" text-3xl decoration-brown-300 uppercase text-center mt-2">
          About Us
        </h1>
        <p className="text-base text-center mt-2">
          Nuestro equipo de profesionales apasionados combinan actividades
          revitalizantes, momentos de tranquilidad y reflexión, en un entorno
          sereno y rodeado de hermosos paisajes naturales. Únete a nuestra
          comunidad de apoyo y conexión, donde te brindamos atención
          personalizada para asegurarnos de que tu experiencia sea inolvidable.
          ¡Te esperamos para un viaje hacia la renovación y el bienestar
          integral!
        </p>
        <div className="mt-8 border-hidden items-center flex flex-col xl:flex-row justify-around">
          {Descripciones.map((description, index) => (
            <div key={index}>
              <BioFirst
                name={description.name}
                imgbio={description.icon}
                description={description.description}
                points={description.points}
              />
              <h2 className="uppercase font-bold text-center text-xl">
                {description.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default AboutUs;
