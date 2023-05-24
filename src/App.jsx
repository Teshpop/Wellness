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
              "Conecta con tu esencia y renueva tu energía"
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
        <Formulario />
        <BtnSocial />
        <Footer />
        <Toastify id={"#Contact"} />
      </div>
    </>
  )
}

export default App
