import Formulario from "./components/Formulario.jsx";
import Footer from "./components/Footer.jsx";
import BtnSocial from "./components/BtnSocial.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Caroulsel.jsx";

import portada from "/img/Portada.png";
import imgtesting from "/img/imgPruebas.png";
import imgmethod from "/img/imgWelness.png";

import { useEffect, useRef, useState } from "react";

import "./index.css";

function Section0() {
  return (
    <section id="home">
      <div className=" z-2 bg-brown-300 absolute w-full h-screen bg-fixed bg-opacity-40 "></div>
      <div
        className=" z-1 bg-center h-screen w-full bg-fixed bg-cover bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className=" flex flex-col justify-between items-center h-[20%] md:h-[25%] lg:h-[32%] mt-60 md:mt-60 lg:mt-48 relative">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl uppercase ">
            nombre
          </h1>
          <div className=" w-[35%] md:w-[25%] ">
            <p className=" text-base md:text-xl lg:text-3xl text-center ">
              "La clave para una vida saludable y equilibrada es encontrar la
              armonia entre la mente, el cuerpo y el espiritu."
            </p>
          </div>
        </div>
      </div>
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
      : "translate-x-full opacity-0";

  return (
    <div
      ref={divRef}
      className="  relative bg-brown-100 w-full text-brown-300 flex flex-col md:flex-row "
    >
      <section
        id="ourmethod"
        className="my-8 mx-auto lg:flex-row flex flex-col justify-evenly items-start "
      >
        <div className="relative lg:w-1/2 ">
          <img
            src={imgmethod}
            alt="welness place"
            className={`flex  left-0 ${imgPosition} transition-all duration-500 ease-out mt-[10rem] w-[19rem] h-[19rem] md:mx-[13rem] md:w-[25rem] md:h-[25rem] lg:mx-[5rem] xl:mx-full lg:w-[35rem] lg:h-full rounded-3xl `}
          />
        </div>

        <div
          className={`relative  right-0 ${textPosition} transition-all duration-500 ease-out flex flex-col justify-center font-semibold my-[3rem] mx-auto mt-[2rem] w-[15rem] md:mx-[13rem] md:w-[25rem] lg:mt-[10rem] lg:mx-full lg:w-[30rem] `}
        >
          <h1 className=" lg:text-3xl mb-[2rem] mt-auto  underline underline-offset-8 decoration-brown-300 text-xl md:text-2xl  uppercase text-center">
            nuestro metodo{" "}
          </h1>

          <p className=" md:text-xl lg:text-xl lg:mb-[4rem] text-sm  text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
            quas nesciunt adipisci voluptates, reprehenderit culpa eum excepturi
            perferendis explicabo velit earum vel. Eius voluptates beatae
            molestias veniam inventore accusamus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi totam quas nesciunt adipisci
            voluptates, reprehenderit culpa eum excepturi perferendis explicabo
            velit earum vel. Eius voluptates beatae molestias veniam inventore
            accusamus! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Labore repellat, eos quos aspernatur corrupti qui, corporis eius
            earum odio in quasi magnam voluptates cupiditate optio laudantium
            impedit blanditiis quisquam consequatur.
          </p>
        </div>
      </section>
    </div>
  );
}

function Section2() {
  function Button({ id, color }) {
    return (
      <>
        <a rel="notfollow" href={id}>
          <div
            className={`${color} rounded-full h-10 w-10 shadow-md cursor-pointer hover:shadow-none transition-all duration-300 `}
          ></div>
        </a>
      </>
    );
  }

  return (
    <section id="programs">
      <div className="flex flex-col bg-brown-200 justify-center w-full items-center h-screen gap-5">
        <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
          programas
        </h1>
        <div className="flex flex-row overflow-hidden hover:overflow-scroll gap-5 lg:gap-[10rem] px-4 lg: snap-x w-full h-[70%] py-10">
          <Carousel
            id={"1"}
            color={"bg-white"}
            text={"lorem ipus"}
            img={imgtesting}
          />
          <Carousel
            id={"2"}
            color={"bg-blue"}
            text={"lorem ipus"}
            img={imgtesting}
          />
          <Carousel
            id={"3"}
            color={"bg-yellow"}
            text={"lorem ipus"}
            img={imgtesting}
          />
          <Carousel
            id={"4"}
            color={"bg-green"}
            text={"lorem ipus"}
            img={imgtesting}
          />
          <Carousel
            id={"5"}
            color={"bg-pink"}
            text={"lorem ipus"}
            img={imgtesting}
          />
          <Carousel
            id={"6"}
            color={"bg-white"}
            text={"lorem ipus"}
            img={imgtesting}
          />
        </div>
        <div className="flex flex-row gap-5">
          <Button id={"#1"} color={"bg-white"} />
          <Button id={"#2"} color={"bg-blue"} />
          <Button id={"#3"} color={"bg-yellow"} />
          <Button id={"#4"} color={"bg-green"} />
          <Button id={"#5"} color={"bg-pink"} />
          <Button id={"#6"} color={"bg-white"} />
        </div>
      </div>
    </section>
  );
}

function Section3() {
  function BioFirst({ nombre, image, descriptiopn }) {
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
          <div className=" ">
            <div className="  md:mx-auto md:mb-[2rem] md:mt-[2rem]  md:h-80% md:w-[37rem] lg:w-[60rem] ">
              <div className=" bg-brown-200 bg-opacity-85 rounded-3xl backdrop-blur-50 drop-shadow-lg flex flex-col">
                <div>
                  <div className="mx-[2rem] border-b md:h-30% flex flex-row justify-between item-center   p-4">
                    <img
                      src={imgtesting}
                      className="mt-[2rem]  rounded-full h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] "
                    ></img>
                    <h2 className="mx-[2rem] mt-[4rem] md:mt-[4rem] lg:mt-[5rem] md:mr-[4rem] md:text-3xl lg:mr-[8rem] lg:text-4xl font-bold">
                      Jesus Fabian Cortez Perez
                    </h2>
                    <button
                      onClick={onClose}
                      className="md:absolute font-bold  md:ml-[32rem] md:mb-[3rem]  lg:ml-[55rem] lg:mb-[8rem] "
                    >
                      x
                    </button>
                  </div>
                </div>
                <div className="p-4 mb-[1rem] mx-auto    justify-center  text-justify">
                  <p className="mx-[2rem] mt-[1rem] md:text-2xl lg:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos sed nisi ipsa, voluptate fugiat quo consectetur sit
                    minus, totam laborum corrupti amet! Similique, consectetur.
                    Dolorem nemo v oluptate a reiciendis doloribus!
                  </p>
                  <p className="mx-[2rem] mt-[1rem] md:text-2xl lg:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos sed nisi ipsa, voluptate fugiat quo consectetur sit
                    minus, totam laborum corrupti amet! Similique, consectetur.
                    Dolorem nemo v oluptate a reiciendis doloribus!
                  </p>
                  <p className="mx-[2rem] mt-[1rem] md:text-2xl lg:text-3xl">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Eos sed nisi ipsa, voluptate fugiat quo consectetur sit
                    minus, totam laborum corrupti amet! Similique, consectetur.
                    Dolorem nemo v oluptate a reiciendis doloribus!
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
        <div className="max-w-3xl mx-auto">
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
      <div className=" ´ font-semibold text-center  text-brown-300 my-[5rem] mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl  lg:px-[5rem]">
        <h1 className="lg:text-5xl mb-[2rem] mx-[3rem] uppercase mt-[3rem] ">
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
                <BioFirst />
                <p className="uppercase">Nombre</p>
              </div>

              <div>
                <BioFirst />
                <p className="uppercase"> Nombre</p>
              </div>
              <div className="xl:mr-[10rem]">
                <BioFirst />
                <p className="uppercase">nombre</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
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
        <Formulario />
        <BtnSocial />
        <Footer />
      </div>
    </>
  );
}

export default App;
