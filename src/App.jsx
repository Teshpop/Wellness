import Formulario from "./components/Formulario.jsx";
import Footer from "./components/Footer.jsx";
import BtnSocial from "./components/BtnSocial.jsx";
import Header from "./components/Header.jsx";
import Carousel from "./components/Caroulsel.jsx";
import Card from "./components/Card.jsx";

import portada from "/img/Portada.png";
import imgtesting from "/img/imgPruebas.png";
import imgmethod from "/img/imgWelness.png";

import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Yoga de los 7 chakras"}
          text={
            "Es una Shadana (esfuerzo espiritual hacia una meta) de una semana de duración enfocada en despertar la energía Shakti kundalini con el fin de liberarnos de todo obstáculo que nos impide avanzar y alcanzar la felicidad plena. Durante una semana; con cada práctica de yoga diaria liberaremos la energía de uno de los 7 chakras, trabajando e integrando conscientemente: intención, visualización, respiración, mudras, asanas, energía sagrada y mantras de cada centro energético. 7 prácticas de yoga, 7 chakras, 7 yantras, 7 mantras, 7 pranas, 7 mudras, 7 animales de poder, 7 karmas (Obstáculos a superar) y 7 Avatares (Dioses encarnados o energías sagradas para trascender cada obstáculo). "
          }
          color={"bg-white"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ceremonia de cacao"}
          text={
            "La ceremonia del cacao es un ritual originario de los mayas que se ha extendido a otras culturas indígenas de América Central y del Sur. Se prepara y se consume una bebida hecha con cacao puro y especias en una ceremonia de agradecimiento y apertura del corazón. Se crea un altar sagrado con ofrendas a la tierra y a las energías presentes en ese día. Durante la ceremonia se cantan mantras y se toca música con tambor chamánico para elevar la vibración. El cacao es una planta sagrada que te ayuda a liberar emociones y a sentir paz y alegría. Además, tiene muchas propiedades buenas para la salud, como la mayor fuente de antioxidantes y la presencia de Teobromina, un alcaloide saludable que tiene efectos mucho más suaves y duraderos que la cafeína. "
          }
          color={"bg-blue"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de florecimiento en el Mar"}
          text={
            "Un baño de florecimiento es un ritual en el río, mar o en la montaña para ayudar a limpiar y purificar tu cuerpo y mente. Seleccionamos con mimo flores exóticas, pétalos y plantas silvestres medicinales con las que regaremos tu aura. Te sentirás como una divinidad. Sentirás como un torrente de luz perfumada diluye y transmuta energías negativas, estrés y tensión acumulados en tu cuerpo y mente, y atrae energías positivas de armonía y equilibrio. El ritual sagrado de florecimiento inca es una bendición que activa tu destino y te recarga de energía cósmica espiritual. Conecta con los grandes espíritus y atrae vibraciones positivas."
          }
          color={"bg-yellow"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de Luna nueva "}
          text={
            "Un ritual de luna es una práctica espiritual que se realiza con las fases de la luna. Conectamos con la energía de la luna y aprovechamos su poder para llevar a cabo una intención específica. En los rituales de luna nueva sembramos nuevas intenciones y se establecen nuevos propósitos y en un ritual de luna llena liberamos patrones negativos y celebramos nuestros logros. En los rituales de luna incluimos diversas prácticas, la meditación, el canto, la danza, la creación de altares, velas o incienso, entre otros. Cada fase de la luna requiere diferentes prácticas y herramientas, dependiendo de la intención del ritual."
          }
          color={"bg-green"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Be energy/ Sé energía / Chi kung . Tai Chi "}
          text={
            "La práctica que te propongo es una experiencia mística que busca la armonización de tu cuerpo, mente y espíritu a través de antiguas técnicas orientales como el Chi Kung y el Tai Chi. A través de la conexión con la energía Chi o prana, se busca sanar aspectos vitales determinados a nivel espiritual, energético, mental, emocional y físico. En esta práctica, aprenderás a encontrar tu centro, a estar presente, a ser fluido y expresivo en tus movimientos, a concentrar y dirigir tu energía y a contrarrestar y redirigir las energías adversas fuera de tu campo energético de acción. Al final de la sesión, experimentarás una sensación de paz y armonía, y habrás establecido un vínculo más fuerte con tu propia esencia divina."
          }
          color={"bg-pink"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Be water/ Se agua / Chi kung . Tai Chi acuático"}
          text={
            "En esta práctica de Be water/Se agua/Chi Kung y Tai Chi acuático, nos sumergimos en la sabiduría ancestral del elemento sagrado del agua, conectándonos con la energía universal y aprendiendo a fluir como ella. Nos liberamos de las limitaciones que nos pesan y nos conectamos con la armonía del universo, elevando nuestra energía a niveles más elevados de consciencia. A través de la densidad, pesadez y resistencia fluida del agua, interiorizamos los movimientos y los entendemos mejor dentro de nuestro campo energético y físico, mientras activamos la circulación sanguínea y fortalecemos los músculos, tendones y articulaciones suavemente. Es una experiencia de purificación y unión con la naturaleza que nos permite sanar y crecer espiritualmente."
          }
          color={"bg-green"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={
            "Conexión Reiki / El arte de dar y recibir para manifestar Luz"
          }
          text={
            "Este es un ritual sagrado de conexión con la energía universal y la manifestación de la luz en la materia. En él, nos reunimos para practicar la auto-realización y compartir energía con otros seres, multiplicando el poder del Reiki por el número de participantes. El ritual comienza con una meditación en silencio y un compromiso de respeto hacia todo y todos. Luego, cada participante recibe una iniciación REIJU para transmitir la capacidad de curación a los demás. A través de prácticas grupales, todos dan y reciben Reiki del resto, moviendo la energía con música en círculos que avanzan y retroceden. Al final, cerramos la sesión en un gran círculo y compartimos nuestras experiencias. Este ritual es una experiencia de unión con la energía universal y de elevación de la consciencia."
          }
          color={"bg-yellow"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Extatic dance / La Danza de la Unidad"}
          text={
            "La danza en comunidad es un portal a otras dimensiones, donde se fusionan lo divino y lo terrenal, lo ancestral y lo moderno, lo personal y lo colectivo. Es una ceremonia de alquimia sagrada donde cada cuerpo es un templo y cada movimiento es una oración. A través de los sonidos sagrados del mundo, nos conectamos con nuestro ser más profundo y con los demás, en un ritual de danza extática que nos permite sanar, empatizar, celebrar y abrir nuestro corazón a la unión. Bailamos en silencio, dándole la voz a nuestra energía y explorando las posibilidades creativas de nuestro cuerpo, descubriendo así nuestra verdadera esencia y expresándose en la alegría eterna e ilimitada de la unidad."
          }
          color={"bg-blue"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de creatividad / Eres lo creado y el creador"}
          text={
            "Descubre el poder sagrado creador que hay en ti a través del ritual de creatividad. Visualiza y manifiesta tu avatar, conectándolo con la energía positiva de manifestación en tu corazón y átomos. Eres creador y creado, el aliento en el vacío, la canción del viento, Brahma y Saraswati, adolescente eterno y magia de la medianoche, Krishna y Rada. Sostienes la vida, eres alimento e inspiración natural, Shiva y Parvati, el alquimista de tu vida. Remueve la tierra, destruye lo que ya no sirve y planta la semilla de tus sueños. En ti está el creador y la creación, ohm."
          }
          color={"bg-pink"}
        />
      ),
    },
  ];

  return (
    <section id="Programs">
      <div className="h-screen w-screen bg-brown-200 flex justify-center items-center flex-col">
        <div className="flex flex-col text-center pt-12">
          <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
            programas
          </h1>
          <h3 className="uppercase text-base">
            ¡ is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,!
          </h3>
        </div>
        <Carousel cards={cards} offset={200} showArrows={false} />
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
                className="my-[1rem] w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] rounded-full lg:mt-[3rem] grayscale transition-all duration-500 md:hover:grayscale-0"
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
      id="AboutUs"
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
          <h1 className="pb-[2rem] text-3xl md:text-4xl lg:text-5xl mx-[2rem] uppercase">
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
                <h2 className="uppercase">nombre</h2>
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
