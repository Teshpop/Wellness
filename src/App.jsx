import imgtesting from "/img/imgPruebas.png";
import imgmethod from "/img/imgWelness.png";

import { useEffect, useRef, useState } from "react";
import "./index.css";

function Section0() {
  return (
    <section>
      <h1>Nombre</h1>
    </section>
  );
}

function Section1() {
  const [scrollDirection, setScrollDirection] = useState(null);

  const divRef = useRef();
  useEffect(() => {
    const div = divRef.current;
    const divTop = div.offsetTop;
    const divHeight = div.offsetHeight;
    const windowHeight = window.innerHeight;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        scrollY >= divTop - windowHeight / 2 &&
        scrollY <= divTop + divHeight - windowHeight / 2
      ) {
        setScrollDirection(direction);
      } else if (scrollY === 0) {
        setScrollDirection(null);
      }
      lastScrollY = scrollY <= 0 ? scrollY : 0;
    };

    let lastScrollY = window.pageYOffset;
    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  const imgPosition =
    scrollDirection === "down"
      ? "-translate-x-0 opacity-100"
      : "-translate-x-full opacity-0";
  const textPosition =
    scrollDirection === "down"
      ? "translate-x-0 opacity-100"
      : "md:translate-x-full opacity-0 sm:-translate-x-full opacity-0";

  return (
    <div
      ref={divRef}
      className=" relative  bg-brown-100  text-brown-300 flex flex-col md:flex-row "
    >
      <section id="ourmethod" className="w-full">
        <div className="my-8 lg:flex-row flex flex-col w-full justify-evenly md:items-center lg:items-start ">
          <div
            className={`relative left-0 ${imgPosition} lg:ml-[2rem] transition-all duration-500 ease-out lg:w-1/2`}
          >
            <img
              src={imgmethod}
              alt="welness place"
              className={`flex mt-[10rem] h-[22rem] mx-auto  md:w-[25rem] md:h-[25rem] lg:mx-auto lg:w-[35rem]  lg:h-auto  rounded-3xl `}
            />
          </div>

          <div
            className={`relative  right-0 ${textPosition} transition-all duration-500 md:ease-out flex flex-col justify-center mx-[2rem] md:mx-auto font-semibold my-[3rem] lg:mr-[8rem] mt-[2rem]   md:w-[25rem]  lg:mt-[10rem]  lg:w-[45rem] `}
          >
            <h1 className=" lg:text-3xl  lg:mx-[4rem] mb-[2rem] mt-auto  underline underline-offset-8 decoration-brown-300 text-xl md:text-2xl  uppercase text-center">
              Nuestro Metodo
            </h1>

            <p className="   md:text-xl lg:text-xl lg:mb-[4rem] lg:mx-[4rem] mx-[2rem] sm:text-sm  text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
              totam quas nesciunt adipisci voluptates, reprehenderit culpa eum
              excepturi perferendis explicabo velit earum vel. Eius voluptates
              beatae molestias veniam inventore accusamus! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Nisi totam quas nesciunt
              adipisci voluptates, reprehenderit culpa eum excepturi perferendis
              explicabo velit earum vel. Eius voluptates beatae molestias veniam
              inventore accusamus! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Labore repellat, eos quos aspernatur corrupti
              qui, corporis eius earum odio in quasi magnam voluptates
              cupiditate optio laudantium impedit blanditiis quisquam
              consequatur.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

function Section2() {
  return (
    <section>
      <h1>Programas</h1>
    </section>
  );
}

function Section3() {
  function BioFirst({ name, imgbio, description }) {
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
          <div className="">
            <div className="  md:mx-auto md:mb-[2rem] md:mt-[2rem]  md:h-80% md:w-[37rem] lg:w-[60rem] ">
              <div className=" bg-brown-200 bg-opacity-85 rounded-3xl backdrop-blur-50 drop-shadow-lg flex flex-col">
                <div>
                  <div className="sm:mx-[2rem] border-b md:h-30% flex flex-row justify-between item-center   p-4">
                    <img
                      src={imgbio}
                      className="sm:mt-[2rem]  rounded-full h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] "
                    ></img>
                    <h2 className="sm:mx-[2rem] mt-[2rem] md:mt-[4rem] lg:mt-[5rem] md:mr-[4rem] md:text-3xl lg:mr-[8rem] lg:text-4xl font-bold">
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
                <div className="p-4 sm:mb-[1rem] mx-auto justify-center  text-justify">
                  <p className="mx-[2rem] mt-[1rem] md:text-2xl lg:text-3xl">
                    {description}
                  </p>
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
              <img
                src={imgtesting}
                className="my-[1rem] w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] rounded-full lg:mt-[3rem] grayscale transition-all duration-500 hover:grayscale-0"
              ></img>
            </button>
          </div>
        </div>
        <MyModal onClose={handleOnClose} visible={showMyModal} />
      </div>
    );
  }

  return (
    <section
      id="aboutus"
      className="bg-brown-100 flex flex-col justify-evenly w-full   "
    >
      <div className=" ´ font-semibold text-center   text-brown-300 sm:my-[5rem] sm:mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl  lg:px-[5rem]">
        <h1 className="lg:text-5xl mb-[2rem]   mx-[3rem] uppercase mt-[3rem] ">
          sobre nosotros
        </h1>
        <p className="text-sm md:text-lg lg:text-2xl mb-[4rem] mx-[3rem] lg:mx-[6rem]   text-justify ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          animi voluptates, quasi cum expedita obcaecati inventore ad enim iure
          quas. Iste nam doloribus maiores fugit repellat quis dicta
          perspiciatis corrupti? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. At aut, soluta pariatur ipsa mollitia eaque a autem
          nostrum explicabo quos laudantium vero possimus cupiditate neque
          repellendus molestias incidunt itaque repellat. Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Illum aliquid iste porro id
          provident necessitatibus alias adipisci voluptate incidunt et eveniet
          nam, sequi laudantium est earum? Doloribus possimus nisi itaque.
        </p>
        <div>
          <h1 className="pb-[2rem] lg:text-4xl xl:text-5xl px-full uppercase">
            Nuestros Profecionales
          </h1>

          <div>
            <div className=" mb-[2rem] border-hidden gap-5 xl:mb-5 items-center flex flex-col xl:flex-row  justify-between">
              <div className="xl:ml-[10rem]">
                <BioFirst name={"uno"} imgbio={imgtesting} description={""} />
                <p className="uppercase">Nombre</p>
              </div>

              <div>
                <BioFirst
                  name={"dos"}
                  imgbio={imgtesting}
                  description={
                    "Juego de habilidad que se practica sobre una mesa rectangular cubierta por fieltro verde con un reborde de goma y que consiste en golpear con la punta de un taco una bola, generalmente de marfil, con el fin de que, con el impulso, choque sucesivamente con las otras dos bolas, consiguiendo una carambola; gana la partida el jugador que llega primero a un número de carambolas fijado de antemano."
                  }
                />
                <p className="uppercase"> Nombre</p>
              </div>
              <div className="xl:mr-[10rem]">
                <BioFirst
                  name={"tres"}
                  imgbio={imgmethod}
                  description={"Lorem"}
                />
                <p className="uppercase"></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

function Section4() {
  return (
    <section>
      <h1>Formulario</h1>
    </section>
  );
}

function Header() {
  return <></>;
}

function BtnRs() {
  return <></>;
}

function App() {
  return (
    <>
      <div className=" font-bellota mr-0 text-brown-300 font-semibold">
        <Header />
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />

        <Section4 />
        <BtnRs />
        <footer></footer>
      </div>
    </>
  );
}

export default App;
