import { Descripciones } from "../const";
import { useState } from "react";
import { imgPruebas } from "../assets";

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
          <div>
            <div className="  md:mx-auto md:mb-[2rem] md:mt-[2rem]  md:h-80% md:w-[47rem] lg:w-[60rem] ">
              <div className=" bg-brown-200 bg-opacity-85 rounded-3xl backdrop-blur-50 drop-shadow-lg flex flex-col">
                <div className="flex justify-center">
                  <div className="sm:mx-[2rem] gap-12 border-b md:h-30% flex flex-row justify-center item-center p-4">
                    <div className="sm:mt-[2rem]  rounded-full h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] flex justify-center items-center">
                      <img
                        src={imgbio}
                        className="h-full w-full object-cover rounded-full"
                      />
                    </div>
                    <h2 className="sm:mx-[2rem] mt-[2rem] md:mt-[4rem] lg:mt-[5rem] md:mr-[4rem] md:text-3xl lg:mr-[8rem] lg:text-5xl font-bold">
                      {name}
                    </h2>
                    <button
                      onClick={onClose}
                      className="md:absolute font-bold  md:ml-[32rem] md:mb-[3rem]  lg:ml-[55rem] lg:mb-[8rem] "
                    >
                      x
                    </button>
                  </div>
                </div>
                <div className=" sm:mb-[1rem] text-justify justify-center  overflow-y-scroll">
                  <p className="px-[1rem] md:px-[2rem] lg:px-[5rem] mt-[1rem] text-sm md:text-base lg:text-lg">
                    {description}
                  </p>
                  <ul className="list-disc px-[1rem] md:px-[2rem] lg:px-[5rem] mt-[1rem] text-sm md:text-base lg:text-lg">
                    {points.map((point, index) => (
                      <li key={index}>{point}</li>
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
                  className="rounded-full h-full w-full object-cover grayscale transition-all duration-300 md:hover:grayscale-0"
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
    <section
      id="AboutUs"
      className="bg-brown-100 flex flex-col justify-evenly w-full   "
    >
      <div className=" font-semibold text-center   text-brown-300 sm:my-[5rem] sm:mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl  lg:px-[5rem]">
        <h1 className="lg:text-5xl md:text-4xl  text-3xl mb-[2rem]   mx-[3rem] uppercase mt-[3rem] ">
          sobre nosotros
        </h1>
        <p className="text-lg md:text-lg lg:text-2xl mb-[4rem] mx-[3rem] lg:mx-[10rem]   text-center ">
          Nuestro equipo de profesionales apasionados combinan actividades
          revitalizantes, momentos de tranquilidad y reflexión, en un entorno
          sereno y rodeado de hermosos paisajes naturales. Únete a nuestra
          comunidad de apoyo y conexión, donde te brindamos atención
          personalizada para asegurarnos de que tu experiencia sea inolvidable.
          ¡Te esperamos para un viaje hacia la renovación y el bienestar
          integral!
        </p>
        <div>
          <h1 className="pb-[2rem] text-3xl md:text-4xl lg:text-5xl mx-[2rem] uppercase">
            Nuestros Profesionales
          </h1>
          <div>
            <div className=" mb-[2rem] border-hidden xl:mb-5 items-center flex flex-col xl:flex-row justify-around">
              {Descripciones.map((description, index) => (
                <div key={index}>
                  <BioFirst
                    name={description.name}
                    imgbio={description.icon}
                    description={description.description}
                    points={description.points}
                  />
                  <h2 className="uppercase font-bold">{description.name}</h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
