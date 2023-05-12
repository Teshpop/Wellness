import imgH2 from "/img/imgH2.jpg";
import imgH3 from "/img/imgH3.jpg";
import imgH4 from "/img/imgH4.jpg";
import imgH5 from "/img/imgH5.jpg";
import imgH7 from "/img/imgH7.jpg";
import imgH8 from "/img/imgH8.jpg";
import imgH9 from "/img/imgH9.jpg";
import Carousel from "nuka-carousel";

function Rooms() {
  const Cont = (props) => {
    return (
      <div className="flex flex-col h-full w-full items-end">
        <div className="h-full md:w-[45%] flex px-14 pt-10 justify-center items-center flex-col bg-brown-300 bg-opacity-[0.52] gap-20">
          <div className="uppercase flex flex-col">
            <div className="flex flex-row justify-center items-center gap-3">
              <h1 className="md:text-3xl opacity-100 text-white2">Desde</h1>
              <h1 className="md:text-5xl opacity-100 text-white2">
                {props.price}€
              </h1>
            </div>
            <div className="flex justify-center items-end">
              <h2 className="opacity-100 text-white2 md:text-lg">
                {props.days}
              </h2>
            </div>
          </div>
          <div className=" text-white2 opacity-100 text-center flex flex-col justify-center items-center gap-32">
            <div className=" flex flex-col justify-center items-center">
              <div className="flex flex-row justify-start items-center gap-5">
                <div className="rounded-full bg-white2 h-[1.7rem] w-[1.7rem]"></div>
                <h1 className=" md:text-3xl font-bold ">
                  Habitacion Privada Estandar:
                </h1>
              </div>
              <div className="w-[80%]">
                <p className="md:text-lg">
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
                <div className="rounded-full bg-white2 h-[1.7rem] w-[1.7rem]"></div>
                <h1 className=" md:text-3xl font-bold ">
                  Habitación Compartida Mixta:
                </h1>
              </div>
              <div className="w-[75%]">
                <p className="md:text-lg">
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
    );
  };

  return (
    <>
      <Carousel className="h-screen w-screen">
        <div>
          <img className=" opacity-90 w-full" src={imgH9} alt="" />
        </div>
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH8})` }}
        >
          <Cont price={"1650"} days={"7 dias 6 noches"} />
        </div>
        <div
          className=" h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH2})` }}
        >
          <Cont />
        </div>
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
  );
}

export default Rooms;
