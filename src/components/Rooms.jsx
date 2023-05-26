import { imgH3, imgH4, imgH5, imgH7, imgH9, imgVilla } from "../assets"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import { Navigation, Pagination, Autoplay } from "swiper"

function Rooms() {
  const Cont = (props) => {
    return (
      <div className="flex flex-col h-full w-full items-end">
        <div className="h-full md:w-[45%] flex px-14 pt-10 justify-center items-center flex-col bg-brown-300 bg-opacity-[0.52] gap-5 md:gap-20">
          <div className="uppercase flex flex-col">
            <div className="flex flex-row justify-center items-center gap-2 text-3xl">
              <span className="opacity-100 text-white2">Desde</span>
              <span className="opacity-100 text-white2">{props.price}€</span>
            </div>
            <div className="flex justify-center items-end">
              <h2 className="opacity-100 text-white2 text-sm md:text-lg">
                {props.days}
              </h2>
            </div>
          </div>
          <div className=" text-white2 opacity-100 text-center flex flex-col pb-14 justify-center items-center gap-28 md:gap-32">
            <div className=" flex flex-col justify-center items-start text-start gap-2">
              <h1 className="text-xl font-bold flex items-center gap-2 ">
                <span className="rounded-full bg-white2 h-[20px] w-[20px] inline-block"></span>
                Habitacion Privada Estandar:
              </h1>
              <p className="text-base">
                Nuestra habitación privada estándar es una opción ideal para
                aquellos que buscan comodidad y privacidad a un precio
                asequible. Con una cama doble o dos camas individuales, esta
                habitación cuenta con un baño compartido y todas las comodidades
                necesarias para una estancia agradable.
              </p>
            </div>
            <div className=" flex flex-col justify-center items-start text-start gap-2">
              <h1 className="text-xl font-bold flex items-center gap-2 ">
                <span className="rounded-full bg-white2 h-[20px] w-[20px] inline-block"></span>
                Habitacion Compartida Mixta:
              </h1>
              <p className="text-base">
                Nuestra habitación privada estándar es una opción ideal para
                aquellos que buscan comodidad y privacidad a un precio
                asequible. Con una cama doble o dos camas individuales, esta
                habitación cuenta con un baño compartido y todas las comodidades
                necesarias para una estancia agradable.
              </p>
            </div>
            <a
              className="animate-bounce shadow-md rounded-lg py-3 px-3 bg-black hover:shadow-xl transition-shadow hover:opacity-90 uppercase"
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
      <Swiper
        navigation={true}
        modules={[Navigation, Pagination, Autoplay]}
        className="mySwiper h-[120vh]"
        autoplay={{
          delay: 3000,
        }}
        pagination
      >
        <SwiperSlide
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgVilla})` }}
        ></SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: `url(${imgH3})` }}
        >
          <Cont />
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: `url(${imgH4})` }}
        >
          <Cont />
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: `url(${imgH5})` }}
        >
          <Cont />
        </SwiperSlide>
        <SwiperSlide
          className="swiper-slide"
          style={{ backgroundImage: `url(${imgH7})` }}
        >
          <Cont />
        </SwiperSlide>
        <SwiperSlide
          className="h-full w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${imgH9})` }}
        ></SwiperSlide>
      </Swiper>
    </>
  )
}

export default Rooms
