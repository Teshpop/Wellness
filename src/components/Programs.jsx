import Card from "./Card"
import Carousel from "./Caroulsel"

import { clases } from "../const"
import { v4 as uuidv4 } from "uuid"

export default function Programs() {
  let cards = clases.map((clase) => ({
    key: uuidv4(),
    content: (
      <Card
        title={clase.title}
        color={clase.color}
        imagen={clase.icon}
        text={clase.description}
      />
    ),
  }))

  return (
    <section id="Programs">
      <div className="h-screen w-screen bg-brown-200 flex justify-center items-center">
        <div className=" h-full w-full flex flex-col justify-center items-center pt-14 gap-3 md:gap-0">
          <h2 className="text-center text-lg md:text-3xl">
            Te ofrecemos un retiro único en Seralina:
          </h2>
          <h1 className="text-center text-2xl md:text-5xl font-bold">
            "Reencuentro con tu Ser interior"
          </h1>
          <div className="h-full w-full flex flex-col lg:flex-row lg:justify-around items-center">
            <div className=" flex justify-center items-center h-[50%] md:h-full w-full lg:w-[45%]">
              <div className="flex flex-col justify-center items-center h-full w-full md:h-[95%] md:w-[95%] lg:w-full gap-2 sm:gap-0">
                <div className="h-[95%] w-[95%] lg:h-[50%] xl:w-[70%] md:w-[95%] md:h-full flex flex-col md:flex-row lg:flex-col xl:flex-col justify-center items-center gap-2 md:gap-20 lg:gap-16 xl:gap-20">
                  <div className="flex flex-row gap-4 w-full lg:w-[100%] h-[90%] lg:h-[25%] justify-center items-center">
                    <div className="h-5 w-[4rem] bg-green rounded-full shadow-md" />
                    <p className="md:text-base xl:text-xl text-justify">
                      Este retiro especial está diseñado para brindarte una
                      experiencia profunda de conexión contigo mismo/a, donde
                      podrás explorar tu espiritualidad, encontrar la paz
                      interior y nutrir tu bienestar.
                    </p>
                  </div>
                  <div className="flex flex-row gap-4 w-full lg:w-[100%] h-[90%] lg:h-[25%] justify-center items-center">
                    <div className="h-5 w-[3rem] bg-pink rounded-full shadow-md" />
                    <p className="md:text-base xl:text-xl text-justify">
                      Durante este retiro, te sumergirás en prácticas de
                      meditación, yoga, talleres de crecimiento personal y
                      momentos de reflexión en un entorno natural y sereno.
                    </p>
                  </div>
                </div>
                <p className="md:text-base xl:text-xl">
                  06-09 Jul 2023 Marbella
                </p>
              </div>
            </div>
            <div className="h-[60%] md:h-full w-full lg:w-[50%] justify-center items-center flex flex-col pb-2 md:pb-32">
              <Carousel cards={cards} offset={200} showArrows={false} />
              <div className="md:w-[30%]">
                <button className="text-base md:text-2xl md:text-center bg-brown-100 py-3 px-3 rounded-xl animate-pulse hover:animate-none">
                  Reserva ya + informacion
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
