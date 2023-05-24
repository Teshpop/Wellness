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
      <div className="h-[125vh] py-24 w-screen bg-[#FFF] flex justify-center items-center flex-col">
        <div className="flex flex-col text-center justify-center items-center ">
          <h1 className="uppercase text-3xl md:text-3xl lg:text-4xl">
            Reencuentro con tu Ser Interior
          </h1>
          <div className=" flex justify-center items-center text-center w-[85%] lg:w-[60%]">
            <h3 className="text-[0.8rem] text-sm">
              Este retiro especial está diseñado para brindarte una experiencia
              profunda de conexión contigo mismo/a, donde podrás explorar tu
              espiritualidad, a
            </h3>
          </div>
        </div>
        <Carousel cards={cards} offset={200} showArrows={false} />
      </div>
    </section>
  )
}
