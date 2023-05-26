import {
  AboutUs,
  BtnSocial,
  Rooms,
  Toastify,
  Footer,
  Header,
  Programs,
  Formulario,
} from "./components"
import Faq from "react-faq-component"

import { Portada, imgWelness } from "./assets"

import "./index.css"

function Section0() {
  return (
    <section id="home">
      {/* <div className=" z-2 bg-brown-300 absolute w-full h-screen bg-fixed bg-opacity-40 "></div> */}
      <div
        className=" z-1 bg-center h-screen w-full bg-fixed bg-cover bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(${Portada})` }}
      >
        <div className=" flex flex-col justify-center items-center relative gap-6">
          <h1 className=" text-4xl md:text-5xl lg:text-7xl uppercase ">
            Serenalia
          </h1>
          <div className=" w-[35%] md:w-[70%] ">
            <p className=" text-lg md:text-2xl lg:text-3xl text-center ">
              &quot;Conecta con tu esencia y renueva tu energía&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section1() {
  return (
    <div
      id="OurMethods"
      className=" relative  bg-brown-100  text-brown-300 flex flex-col md:flex-row "
    >
      <section id="OurMethods" className="w-full container mx-auto h-screen">
        <div className="lg:flex-row lg:justify-between flex flex-col w-full justify-center items-center h-full">
          <div
            className={` flex flex-col justify-center items-center font-semibold w-1/2`}
          >
            <span className="uppercase text-center font-extrabold ">
              About us
            </span>
            <h1 className=" lg:text-5xl  lg:mx-[4rem] decoration-brown-300 text-2xl md:text-4xl uppercase text-center mt-2">
              Nuestro Metodo
            </h1>
            <p className="text-base w-2/3 mx-auto text-center mt-4">
              En Serenalia, hemos desarrollado un método único y holístico que
              combina sabiduría ancestral, prácticas espirituales y herramientas
              de desarrollo personal.
            </p>
            <p className="w-2/3 mx-auto text-center mt-1">
              Nuestro enfoque se basa en brindarte una experiencia integral que
              nutra tu bienestar en todos los aspectos de tu vida.
            </p>
          </div>
          <div className={`relative left-0 w-1/2`}>
            <img
              src={imgWelness}
              alt="welness place"
              className={`flex mx-autoo rounded w-3/4 `}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function App() {
  return (
    <>
      <div className=" font-bellota mr-0 text-brown-300 font-semibold">
        <Header />
        <Section0 />
        <Section1 />
        <Programs />
        <Rooms />
        <AboutUs />
        <div className="py-20 container mx-auto">
          <Faq data={data} />
        </div>
        <Formulario />
        <BtnSocial />
        <Footer />
        <Toastify id={"#Contact"} />
      </div>
    </>
  )
}
const data = {
  title: "Preguntas Frecuentes",
  rows: [
    {
      title:
        "¿Qué duración tiene el retiro ‘’Reencuentro con tu ser interior’’?",
      content:
        "En esta exclusiva ocasión, nuestro retiro tendrá la duración de 4 días 3 noches en la hermosa costa del sol.      ",
    },
    {
      title:
        "¿Cuales son las actividades que ofrecen durante el retiro ‘’Reencuentro con tu ser interior’’?      ",
      content: `Este retiro ofrece una experiencia única, diseñada  para nutrir tu bienestar y promover la transformación interior. 
        Podrás disfrutar de diversas actividades como Yoga Nidra, círculo de bienvenida, yoga social, mindfulness, comidas conscientes, conexión Reiki, ritual de la creatividad, fiesta de renacimiento en la playa (cena sunset, ceremonia del cacao y extatic dance), yoga al amanecer y ritual del florecimiento en el mar.
        `,
    },
    {
      title:
        "¿Qué tipo de alojamiento y comidas se ofrecen durante el retiro ‘’Reencuentro con tu ser interior’’?      ",
      content: `Este hermoso lugar de retiro fue cuidadosamente seleccionado por sus espaciosas y relajantes instalaciones que están rodeados de la belleza natural de Marbella, con paisajes que te invitan a conectar con la paz interior y la serenidad.

        Ofrecemos nutritivas comidas saludables que se adaptan a diferentes necesidades dietéticas. El entorno natural y tranquilo proporciona un ambiente propicio para tu descanso y rejuvenecimiento.
        `,
    },
    {
      title: `¿Cómo puedo reservar un lugar en el retiro ‘’Reencuentro con tu ser interior’’ ?
      `,
      content: `Puedes reservar tu lugar en un retiro a través de nuestro sitio web realizando un depósito o poniéndote en contacto con nuestro equipo. Te brindaremos toda la información necesaria y te guiaremos a través del proceso de reserva.
      `,
    },
  ],
}

export default App
