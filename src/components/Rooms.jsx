import { imgH2, imgH3, imgH4, imgH5, imgH7, imgH8, imgH9 } from "../assets"
import Carousel from "nuka-carousel"

function Rooms() {
  const Cont = (props) => {
    return (
      <div className="flex flex-col h-full w-full items-end">
        <div className="h-full md:w-[45%] flex px-14 pt-10 justify-center items-center flex-col bg-brown-300 bg-opacity-[0.52] gap-5 md:gap-20">
          <div className="uppercase flex flex-col">
            <div className="flex flex-row justify-center items-center gap-2 md:gap-3">
              <h1 className="text-lg md:text-3xl opacity-100 text-white2">
                Desde
              </h1>
              <h1 className="text-2xl md:text-5xl opacity-100 text-white2">
                {props.price}€
              </h1>
            </div>
            <div className="flex justify-center items-end">
              <h2 className="opacity-100 text-white2 text-sm md:text-lg">
                {props.days}
              </h2>
            </div>
          </div>
          <div className=" text-white2 opacity-100 text-center flex flex-col pb-14 justify-center items-center gap-28 md:gap-32">
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-row justify-start items-center gap-5">
                <div className="rounded-full bg-white2 h-[1.2rem] w-[1.2rem] md:h-[1.7rem] md:w-[1.7rem]"></div>
                <h1 className="text-xl md:text-3xl font-bold ">
                  Habitacion Privada Estandar:
                </h1>
              </div>
              <div className="w-[80%]">
                <p className="text-base text-md md:text-lg">
                  Nuestra habitación privada estándar es una opción ideal para
                  aquellos que buscan comodidad y privacidad a un precio
                  asequible. Con una cama doble o dos camas individuales, esta
                  habitación cuenta con un baño compartido y todas las
                  comodidades necesarias para una estancia agradable.
                </p>
              </div>
            </div>
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-row justify-start items-center gap-5">
                <div className="rounded-full bg-white2 h-[1.2rem] w-[1.2rem] md:h-[1.7rem] md:w-[1.7rem]"></div>
                <h1 className="text-xl md:text-3xl font-bold ">
                  Habitación Compartida Mixta:
                </h1>
              </div>
              <div className="w-[75%]">
                <p className="text-base md:text-lg">
                  Nuestra habitación compartida mixta es una opción popular para
                  aquellos que desean conocer a otros huéspedes y compartir
                  experiencias durante su retiro.
                </p>
              </div>
            </div>
            <a
              className="animate-bounce shadow-md rounded-lg py-3 px-3 bg-brown-300 md:text-3xl uppercase"
              href="/"
            >
              Reserva ahora
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Carousel>
        <div
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH9})` }}
        ></div>
        {/* <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH8})` }}
        >
          <Cont price={"1650"} days={"7 dias 6 noches"} />
        </div> */}
        {/* <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH2})` }}
        >
          <Cont />
        </div> */}
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH3})` }}
        >
          <Cont />
        </div>
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH4})` }}
        >
          <Cont />
        </div>
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH5})` }}
        >
          <Cont />
        </div>
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH7})` }}
        >
          <Cont />
        </div>
      </Carousel>
    </>
  )
}

export default Rooms
