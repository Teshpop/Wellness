import Card from "./Card"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

import { clases } from "../const"

// import required modules
import { EffectCoverflow, Pagination } from "swiper"

import { v4 as uuidv4 } from "uuid"
import Button from "./Button"

export default function Programs() {
  return (
    <section
      id="Programs"
      className="w-screen bg-[#FFF] flex justify-center items-center py-16"
    >
      <div className=" h-full w-full flex flex-col justify-center items-center gap-3 md:gap-0">
        <h2 className="text-center text-lg">
          Te ofrecemos un retiro único en Seralina:
        </h2>
        <h1 className=" text-3xl decoration-brown-300 uppercase text-center mt-2">
          &quot;Reencuentro con tu Ser interior&quot;
        </h1>
        <div className="h-full w-full flex flex-col lg:flex-row lg:justify-around items-center">
          <div className="flex justify-center items-center h-full w-1/2">
            <div className="flex flex-col justify-center items-center h-full w-full md:h-[95%] md:w-[95%] lg:w-full gap-2 sm:gap-0">
              <div className="px-20">
                <p className="text-base text-justify">
                  <span className="h-3 w-3 bg-green rounded-full shadow-md inline-block mr-2"></span>
                  Este retiro especial está diseñado para brindarte una
                  experiencia profunda de conexión contigo mismo/a, donde podrás
                  explorar tu espiritualidad, encontrar la paz interior y nutrir
                  tu bienestar.
                </p>
                <p className="text-base text-justify mt-4">
                  <span className="h-3 w-3 bg-pink rounded-full shadow-md inline-block mr-2"></span>
                  Durante este retiro, te sumergirás en prácticas de meditación,
                  yoga, talleres de crecimiento personal y momentos de reflexión
                  en un entorno natural y sereno.
                </p>
              </div>
              <p className="text-base mt-8 italic">06-09 Jul 2023 Marbella</p>
            </div>
          </div>
          <div className="h-screen w-1/2 justify-center items-center flex flex-col">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Pagination]}
              style={{ width: "100%" }}
            >
              {clases.map((clase) => (
                <SwiperSlide
                  key={uuidv4()}
                  className={` w-[300px] h-[400px] flex flex-col items-center overflow-hidden py-4 px-8 rounded`}
                  style={{ backgroundColor: clase.color }}
                >
                  <Card
                    title={clase.title}
                    imagen={clase.icon}
                    text={clase.description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Button className="mt-10">Reserva ya</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
