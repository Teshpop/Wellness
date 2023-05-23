/* eslint-disable react/no-unescaped-entities */
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

import { Portada, imgWelness } from "./assets"

import { useEffect, useRef, useState } from "react"

import "./index.css"

function Section0() {
  return (
    <section id="home">
      <div className=" z-2 bg-brown-300 absolute w-full h-screen bg-fixed bg-opacity-40 "></div>
      <div
        className=" z-1 bg-center h-screen w-full bg-fixed bg-cover bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(${Portada})` }}
      >
        <div className=" flex flex-col justify-between items-center h-[20%] md:h-[25%] lg:h-[32%] mt-60 md:mt-60 lg:mt-48 relative">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl uppercase ">
            Serenalia
          </h1>
          <div className=" w-[35%] md:w-[70%] ">
            <p className=" text-lg md:text-2xl lg:text-4xl text-center ">
              "Conecta con tu esencia y renueva tu energía"
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section1() {
  const [scrollDirection, setScrollDirection] = useState(null)

  const divRef = useRef()
  useEffect(() => {
    const div = divRef.current
    const divTop = div.offsetTop
    const divHeight = div.offsetHeight
    const windowHeight = window.innerHeight

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset
      const direction = scrollY > lastScrollY ? "down" : "up"
      if (
        scrollY >= divTop - windowHeight / 2 &&
        scrollY <= divTop + divHeight - windowHeight / 2
      ) {
        setScrollDirection(direction)
      } else if (scrollY === 0) {
        setScrollDirection(null)
      }
      lastScrollY = scrollY <= 0 ? scrollY : 0
    }

    let lastScrollY = window.pageYOffset
    window.addEventListener("scroll", updateScrollDirection)

    return () => {
      window.removeEventListener("scroll", updateScrollDirection)
    }
  }, [scrollDirection])

  const imgPosition =
    scrollDirection === "down"
      ? "-translate-x-0 opacity-100"
      : "-translate-x-full opacity-0"
  const textPosition =
    scrollDirection === "down"
      ? "translate-x-0 opacity-100"
      : "md:translate-x-full opacity-0 sm:-translate-x-full opacity-0"

  return (
    <div
      ref={divRef}
      id="OurMethods"
      className=" relative  bg-brown-100  text-brown-300 flex flex-col md:flex-row "
    >
      <section id="OurMethods" className="w-full">
        <div className="my-8 lg:flex-row flex flex-col w-full justify-evenly md:items-center lg:items-start ">
          <div
            className={`relative left-0 ${imgPosition} lg:py-[5rem] lg:ml-[2rem] transition-all duration-500 ease-out lg:w-1/2`}
          >
            <img
              src={imgWelness}
              alt="welness place"
              className={`flex  h-[20rem] mx-auto md:w-[25rem] md:h-[25rem] lg:mx-auto lg:w-[38rem]  lg:h-auto  rounded-3xl `}
            />
          </div>

          <div
            className={`relative lg:my-auto right-0 ${textPosition} transition-all duration-500 md:ease-out flex flex-col justify-center mx-[2rem] md:mx-auto font-semibold my-[3rem] lg:mr-[8rem]  lg:my-[4rem]  md:w-[49rem]   lg:w-[45rem] `}
          >
            <h1 className=" lg:text-5xl  lg:mx-[4rem] mb-[2rem]   underline underline-offset-8 decoration-brown-300 text-2xl md:text-4xl  uppercase text-center">
              Nuestro Metodo
            </h1>

            <p className=" md:text-2xl lg:text-3xl lg:mb-[4rem] mx-[2rem] lg:mx-[4rem] md:mx-[4rem] text-2xl  text-justify">
              Creemos en la importancia de conectar el cuerpo, la mente y el
              espíritu. Nuestro método de bienestar total se centra en la
              armonía y el equilibrio para ayudarte a alcanzar un estado de paz
              y serenidad.
            </p>
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
        <Formulario />
        <BtnSocial />
        <Footer />
        <Toastify id={"#Contact"} />
      </div>
    </>
  )
}

export default App
