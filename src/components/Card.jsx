import { useState } from "react"
import { useSpring, animated } from "react-spring"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"

import "swiper/css"
import "swiper/css/effect-cards"

function Card1(props) {
  return (
    <>
      <img
        className="!h-[100px] !w-[100px] object-fit rounded-full overflow-hidden select-none"
        src={props.imagen}
        alt="imagen clase"
      />
      <div className="select-none mt-4">
        <h2 className="text-lg uppercase text-center">{props.title}</h2>
        <p className="text-center text-sm mt-2 opacity-80">{props.text}</p>
      </div>
    </>
  )
}

function Card(props) {
  return <Card1 title={props.title} text={props.text} imagen={props.imagen} />
}

export default Card
