import Formulario from "./components/Formulario.jsx";
import Footer from "./components/Footer.jsx";
import BtnSocial from "./components/BtnSocial.jsx";
import Header from "./components/Header.jsx";

import portada from "/img/Portada.png";
import imgtesting from "/img/imgPruebas.png";

function Section0() {
  return (
    <section id="home">
      <div className=" z-2 bg-brown-300 absolute w-full h-screen bg-fixed bg-opacity-40 "></div>
      <div
        className=" z-1 bg-center h-screen w-full bg-fixed bg-cover bg-no-repeat flex justify-center"
        style={{ backgroundImage: `url(${portada})` }}
      >
        <div className=" flex flex-col justify-between items-center h-[20%] md:h-[25%] lg:h-[32%] mt-60 md:mt-60 lg:mt-48 relative">
          <h1 className=" text-4xl md:text-5xl lg:text-6xl uppercase ">
            nombre
          </h1>
          <div className=" w-[35%] md:w-[25%] ">
            <p className=" text-base md:text-xl lg:text-3xl text-center ">
              "La clave para una vida saludable y equilibrada es encontrar la
              armonia entre la mente, el cuerpo y el espiritu."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Section1() {
  return (
    <section>
      <h1>Nuestro metodo</h1>
    </section>
  );
}

function Section2() {
  function Cont({ id, color, text }) {
    return (
      <>
        <article
          id={id}
          className={`flex-none rounded-2xl drop-shadow-md snap-center w-[90%] lg:w-[40%] ${color}`}
        >
          <div className="flex flex-col w-full h-full items-center gap-8 py-9">
            <div className="flex flex-row justify-center items-center gap-7">
              <h2 className="uppercase text-lg">Titulo</h2>
              <img
                src={imgtesting}
                alt="Imagen Prueba"
                className=" rounded-full 
              h-16 w-16 "
              />
            </div>
            <div className="w-[80%] text-center">
              <p>{text}</p>
            </div>
          </div>
        </article>
      </>
    );
  }

  function Button({ id, color }) {
    return (
      <>
        <a rel="notfollow" href={id}>
          <div
            className={`${color} rounded-full h-10 w-10 shadow-md cursor-pointer hover:shadow-none transition-all duration-300 `}
          ></div>
        </a>
      </>
    );
  }

  return (
    <section id="programs">
      <div className="flex flex-col bg-brown-200 justify-center w-full items-center h-screen gap-5">
        <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
          programas
        </h1>
        <div className="flex flex-row overflow-hidden hover:overflow-scroll gap-5 lg:gap-[10rem] px-4 lg: snap-x w-full h-[70%] py-10">
          <Cont id={"1"} color={"bg-white"} text={"lorem ipus"} />
          <Cont id={"2"} color={"bg-blue"} text={"lorem ipus"} />
          <Cont id={"3"} color={"bg-yellow"} text={"lorem ipus"} />
          <Cont id={"4"} color={"bg-green"} text={"lorem ipus"} />
          <Cont id={"5"} color={"bg-pink"} text={"lorem ipus"} />
          <Cont id={"6"} color={"bg-white"} text={"lorem ipus"} />
        </div>
        <div className="flex flex-row gap-5">
          <Button id={"#1"} color={"bg-white"} />
          <Button id={"#2"} color={"bg-blue"} />
          <Button id={"#3"} color={"bg-yellow"} />
          <Button id={"#4"} color={"bg-green"} />
          <Button id={"#5"} color={"bg-pink"} />
          <Button id={"#6"} color={"bg-white"} />
        </div>
      </div>
    </section>
  );
}

function Section3() {
  return (
    <section>
      <h1>Sobre Nosotros</h1>
      <h1>Nuestros Profecionales</h1>
    </section>
  );
}

function App() {
  return (
    <>
      <div className=" font-bellota mr-0 text-brown-300 font-semibold">
        <Header />
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Formulario />
        <BtnSocial />
        <Footer />
      </div>
    </>
  );
}
export default App;
