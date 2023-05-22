import Card from "./Card";
import Carousel from "./Caroulsel";

import { clases } from "../const";
import { v4 as uuidv4 } from "uuid";

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
  }));

  return (
    <section id="Programs">
      <div className="h-screen w-screen bg-brown-200 flex justify-center items-center flex-col">
        <div className="flex flex-col text-center justify-center items-center pt-12">
          <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
            Clases incluidas en el pack
          </h1>
          <div className=" flex justify-center items-center text-center w-[85%] lg:w-[60%]">
            <h3 className="uppercase text-[0.8rem] md:text-lg">
              Con nuestro pack de bienestar total, tendrás acceso a una
              variedad. Cada clase está diseñada para nutrir tu cuerpo, mente y
              alma y ayudarte a alcanzar una profunda relajación ¡No te pierdas
              esta oportunidad única de transformar tu vida!
            </h3>
          </div>
        </div>
        <Carousel cards={cards} offset={200} showArrows={false} />
      </div>
    </section>
  );
}
