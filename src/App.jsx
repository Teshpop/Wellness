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
      : "md:translate-x-full opacity-0 sm:-translate-x-full opacity-0";

  return (
    <div
      ref={divRef}
      id="OurMethods"
      className=" relative  bg-brown-100  text-brown-300 flex flex-col md:flex-row "
    >
      <section id="OurMethods" className="w-full">
        <div className="my-8 lg:flex-row flex flex-col w-full justify-evenly md:items-center lg:items-start ">
          <div
            className={`relative left-0 ${imgPosition}  lg:ml-[2rem] transition-all duration-500 ease-out lg:w-1/2`}
          >
            <img
              src={imgmethod}
              alt="welness place"
              className={`flex mt-[10rem] h-[20rem] mx-auto md:w-[25rem] md:h-[25rem] lg:mx-auto lg:w-[35rem]  lg:h-auto  rounded-3xl `}
            />
          </div>

          <div
            className={`relative  right-0 ${textPosition} transition-all duration-500 md:ease-out flex flex-col justify-center mx-[2rem] md:mx-auto font-semibold my-[3rem] lg:mr-[8rem] mt-[2rem]   md:w-[49rem]  lg:mt-[10rem]  lg:w-[45rem] `}
          >
            <h1 className=" lg:text-4xl  lg:mx-[4rem] mb-[2rem] mt-auto  underline underline-offset-8 decoration-brown-300 text-2xl md:text-4xl  uppercase text-center">
              Nuestro Metodo
            </h1>

            <p className=" md:text-xl lg:text-xl lg:mb-[4rem] mx-[2rem] lg:mx-[4rem] md:mx-[4rem] text-lg  text-justify">
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
    <section id="Programs">
      <div className="flex flex-col bg-brown-200 justify-center w-full items-center h-screen gap-5">
        <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
          programas
        </h1>
        <div className="flex flex-row overflow-hidden hover:overflow-scroll gap-5 lg:gap-[10rem] px-4 lg: snap-x w-full h-[70%] py-10">
          <Carousel
            id={"1"}
            color={"bg-white"}
            text={
              "Es una Shadana (esfuerzo espiritual hacia una meta) de una semana de duración enfocada en despertar la energía Shakti kundalini con el fin de liberarnos de todo obstáculo que nos impide avanzar y alcanzar la felicidad plena. Durante una semana; con cada práctica de yoga diaria liberaremos la energía de uno de los 7 chakras, trabajando e integrando conscientemente: intención, visualización, respiración, mudras, asanas, energía sagrada y mantras de cada centro energético. 7 prácticas de yoga, 7 chakras, 7 yantras, 7 mantras, 7 pranas, 7 mudras, 7 animales de poder, 7 karmas (Obstáculos a superar) y 7 Avatares (Dioses encarnados o energías sagradas para trascender cada obstáculo)."
            }
            img={imgtesting}
            title={"Yoga de los 7 chakras"}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"2"}
            color={"bg-blue"}
            text={
              "Una ceremonia de cacao es el Ritual original Maya que posteriormente se extendió a otras culturas indígenas de América Central y del Sur, donde el cacao es originario. En esta ceremonia, se prepara y se consume una bebida hecha con cacao puro, generalmente mezclado con especias y otros ingredientes naturales. La ceremonia empieza en el momento en el que la facilitadora prepara el cacao con mucho amor. Es una celebración para dar gracias y abrir el corazón con la planta sagrada del cacao. Se prepara un altar sagrado con ofrendas a la tierra y a las energías presentes en ese día. Cada día tiene una energía especial en la cosmología maya, y está energía está presente durante la ceremonia apoyando el propósito del ritual. Unimos nuestros corazones en círculo alrededor del altar donde colocaremos con amor nuestras ofrendas (Flores, fruta, cualquier cosa que sea noble, bella o importante para nosotros), cantaremos música medicina y mantras acompañados de tambor chamánico y juntos elevaremos la vibración de nuestros caminos y de la tierra. Si tú también tocas algún instrumento puedes traerlo para honrar la ceremonia con tu arte. 🌱 ☕ ¿y qué es el cacao? El cacao era para los mayas y los aztecas, el alimento de los dioses, es una planta sagrada que se toma en forma de bebida caliente, se hace con cacao puro 100% orgánico y una infusión de especias. No lleva leche. Viene de la selva de México, está cultivado por una comunidad indígena y en su preparación se le canta y reza. Este cacao no tiene comparación al cacao del supermercado, os contaré la diferencia desde su producción. A nivel energético, es una planta sagrada que te abre el corazón, que te ayuda a liberar emociones, calmandote. Sentirás mucha paz y alegría. A nivel físico ayuda a que la sangre fluya más y sentirás apertura y relajación. Tiene muchísimas propiedades buenas para la salud, para el cerebro y el corazón, posee la mayor fuente de antioxidantes, es un sustitutivo saludable al café, porque posee Teobromina, un alcaloide presente en el cacao que tiene efectos sobre el organismo mucho más suaves, duraderos y saludables que la cafeína."
            }
            img={imgtesting}
            title={"Ceremonia de cacao"}
            txtSize={"text-sm"}
          />
          <Carousel
            id={"3"}
            color={"bg-yellow"}
            text={
              "Un baño de florecimiento es un ritual en el río, mar o en la montaña para ayudar a limpiar y purificar tu cuerpo y mente. Seleccionamos con mimo flores exóticas, pétalos y plantas silvestres medicinales con las que regaremos tu aura. Te sentirás como una divinidad. Sentirás como un torrente de luz perfumada diluye y transmuta energías negativas, estrés y tensión acumulados en tu cuerpo y mente, y atrae energías positivas de armonía y equilibrio. El ritual sagrado de florecimiento inca es una bendición que activa tu destino y te recarga de energía cósmica espiritual. Conecta con los grandes espíritus y atrae vibraciones positivas. "
            }
            img={imgtesting}
            title={"Ritual de florecimiento en el Mar"}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"4"}
            color={"bg-green"}
            text={
              "Un ritual de luna es una práctica espiritual que se realiza con las fases de la luna. Conectamos con la energía de la luna y aprovechamos su poder para llevar a cabo una intención específica. En los rituales de luna nueva sembramos nuevas intenciones y se establecen nuevos propósitos y en un ritual de luna llena liberamos patrones negativos y celebramos nuestros logros. En los rituales de luna incluimos diversas prácticas, la meditación, el canto, la danza, la creación de altares, velas o incienso, entre otros. Cada fase de la luna requiere diferentes prácticas y herramientas, dependiendo de la intención del ritual."
            }
            img={imgtesting}
            title={"Ritual de Luna nueva"}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"5"}
            color={"bg-pink"}
            text={
              "Comenzamos con un calentamiento y abriendo la sesión de Chi Kung (una serie de técnicas orientadas a liberar, aumentar y equilibrar el flujo de energía Chi o prana), posteriormente analizaremos y practicaremos un ejercicio de chi kung enfocado a sanar un aspecto vital determinado a nivel espiritual, energético, mental, emocional y físico. La segunda parte de la sesión consiste en una práctica de Tai Chi estilo Yang (Kung fu interno chino de la corte imperial), en la que aprenderemos a enraizar, estar presentes, auto observarnos, concentrar, dirigir y soltar nuestra energía, encontrar nuestro centro y no perderlo, Relajar nuestro cuerpo y mente, ser fluidos y expresivos en nuestros movimientos, mirar de frente a la vida y contrarrestar y redirigir las energías adversas fuera de nuestro campo energético de acción. La sesión se cierra con algunos ejercicios con pelotas individuales y por parejas y el mismo saludo ritual con que se abre."
            }
            img={imgtesting}
            title={"Be energy/ Sé energía / Chi kung . Tai Chi "}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"6"}
            color={"bg-green"}
            text={
              "Este entrenamiento lo cree hace años para mí, llevando la práctica a la piscina y el mar. Es un aprendizaje profundo sobre la fluidez y el espacio que ocupamos en cada momento y como interactuamos con él. El agua proporciona una densidad, una pesadez y una resistencia fluida que hace que interioricemos conscientemente los movimientos y los entendamos mejor dentro de nuestro campo energético y físico, además de activar la circulación sanguínea y fortalecer músculos, tendones y articulaciones amable y suavemente. "
            }
            img={imgtesting}
            title={"Be water/ Se agua / Chi kung . Tai Chi acuático"}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"7"}
            color={"bg-yellow"}
            text={"Lorem impus"}
            img={imgtesting}
            title={
              "Conexión Reiki / El arte de dar y recibir para manifestar Luz"
            }
          />
          <Carousel
            id={"8"}
            color={"bg-blue"}
            text={
              "El baile y la música en comunidad es un ritual tan antiguo como el ser humano, cuando entre las tribus se congregaban para compartir, sanar, empatizar, celebrar, conectar y abrir el corazón. Durante 2 horas vibramos con los sonidos sagrados del mundo, conectaremos con nosotros mismos y el resto de los participantes en un ritual de danza, en silencio, dándole la voz a nuestra energía y descubriendo las posibilidades creativas de nuestro cuerpo y nuestro verdadero ser, expresándose en la alegría eterna e ilimitada de la unidad. "
            }
            img={imgtesting}
            title={"Extatic dance / La Danza de la Unidad"}
            txtSize={"text-lg"}
          />
          <Carousel
            id={"9"}
            color={"bg-white"}
            text={
              "Descubre el poder sagrado creador en ti. Visualiza, manifiesta y representa tu avatar, crea tus símbolos de poder y conéctalos con tu energía positiva de manifestación (Dharma, acción sagrada, propósito vital) en tu corazón y cada uno de tus átomos. Ohm Eres el aliento, brotando en el vacío de la cueva, la respiración del bosque y la canción del viento en el acantilado, el rocío y el primer rayo de luz, el niño recién nacido que va a descubrir el universo mientras lo crea jugando, eres Brahma, eres Saraswati. Eres el adolescente eterno, el calor del medio día y la magia de la media noche, pletórico de primavera, derramas tu abundancia, el misterio de la Luna y la alegría del sol, sostienes la vida, eres alimento e inspiración natural, reinas en las mareas y las flores, eres Krishna, eres Rada. Eres el silencio meditativo del ocaso, la danza cósmica de los ciclos, el fuego que purifica, el agua del tiempo que todo lo pule, el alquimista de tu vida, aquel que despierta, remueve la tierra, destruye lo que ya no sirve y planta la nueva semilla para ver sus sueños crecer hechos realidad. Eres Shiva, eres Parvati. Tu eres Yo soy, el creador y la creación. Ohm"
            }
            img={imgtesting}
            title={"Ritual de creatividad / Eres lo creado y el creador"}
            txtSize={"lg:text-[1.1rem]"}
          />
        </div>
        <div className="flex flex-row gap-5">
          <Button id={"#1"} color={"bg-white"} />
          <Button id={"#2"} color={"bg-blue"} />
          <Button id={"#3"} color={"bg-yellow"} />
          <Button id={"#4"} color={"bg-green"} />
          <Button id={"#5"} color={"bg-pink"} />
          <Button id={"#6"} color={"bg-green"} />
          <Button id={"#7"} color={"bg-yellow"} />
          <Button id={"#8"} color={"bg-blue"} />
          <Button id={"#9"} color={"bg-white"} />
        </div>
      </div>
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
<<<<<<< HEAD
      id="AboutUs"
=======
      id="About s"
>>>>>>> Fabian
      className="bg-brown-100 flex flex-col justify-evenly w-full   "
    >
      <div className=" ´ font-semibold text-center   text-brown-300 sm:my-[5rem] sm:mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl  lg:px-[5rem]">
        <h1 className="lg:text-5xl md:text-4xl  text-3xl mb-[2rem]   mx-[3rem] uppercase mt-[3rem] ">
          sobre nosotros
        </h1>
        <p className="text-lg md:text-lg lg:text-2xl mb-[4rem] mx-[3rem] lg:mx-[6rem]   text-justify ">
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
          <h1 className="pb-[2rem] text-3xl md:text-4xl lg:text-5xl px-full uppercase">
            Nuestros Profesionales
          </h1>

          <div>
            <div className=" mb-[2rem] border-hidden gap-5 xl:mb-5 items-center flex flex-col xl:flex-row  justify-between">
              <div className="xl:ml-[10rem]">
                <BioFirst name={"uno"} imgbio={imgtesting} description={""} />
                <h2 className="uppercase">Nombre</h2>
              </div>

              <div>
                <BioFirst
                  name={"dos"}
                  imgbio={imgtesting}
                  description={
                    "Juego de habilidad que se practica sobre una mesa rectangular cubierta por fieltro verde con un reborde de goma y que consiste en golpear con la punta de un taco una bola, generalmente de marfil, con el fin de que, con el impulso, choque sucesivamente con las otras dos bolas, consiguiendo una carambola; gana la partida el jugador que llega primero a un número de carambolas fijado de antemano."
                  }
                />
                <h2 className="uppercase"> Nombre</h2>
              </div>
              <div className="xl:mr-[10rem]">
                <BioFirst
                  name={"tres"}
                  imgbio={imgmethod}
                  description={"Lorem"}
                />
<<<<<<< HEAD
                <p className="uppercase">Nombre</p>
=======
                <h2 className="uppercase">nombre</h2>
>>>>>>> Fabian
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
