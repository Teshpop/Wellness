import { useEffect, useState } from "react";
import Logo from "/img/WellnessLogo.png";

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const scrollDirection = useScrollDirection();

  function BtnMen({ title, id }) {
    const [hover, setHover] = useState(false);
    return (
      <>
        <a
          rel="notfollow"
          href={id}
          onMouseEnter={() => {
            setHover(true);
          }}
          onMouseLeave={() => {
            setHover(false);
          }}
        >
          {title}
          <div
            className={`h-0.5 bg-brown-300 transition-all duration-300 ${
              hover ? "w-full" : "w-0"
            }`}
          ></div>
        </a>
      </>
    );
  }

  return (
    <>
      <header
        className={`z-10 flex flex-row justify-between backdrop-blur-sm bg-brown-200 h-24 w-screen bg-opacity-50 fixed drop-shadow-md ${
          scrollDirection === "down" ? "-top-24" : "top-0"
        } transition-all duration-500`}
      >
        <a rel="notfollow" href="#home">
          <img
            src={Logo}
            alt="Logo Welness"
            className=" w-16 h-16 ml-[4.563rem] mt-5 relative"
          />
        </a>
        <nav className=" md:flex lg:flex-row md:items-center md:justify-center md:w-full hidden">
          <div className=" flex flex-row justify-evenly w-[95%] text-base lg:text-xl ">
            <BtnMen title={"Nuestro método"} id={"#"} />
            <BtnMen title={"Programas"} id={"#programs"} />
            <BtnMen title={"Sobre Nosotros + Equipo"} id={"#"} />
            <BtnMen title={"Contacto"} id={"#"} />
          </div>
        </nav>
        <button
          className={`block md:hidden py-auto px-7  rounded focus:outline-none md:hover:bg-brown-100 focus:bg-brown-100  transition-all duration-300 ${
            scrollDirection === "down" ? "top-0" : "top-0"
          }`}
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <div className=" w-10 h-1 bg-brown-200 mb-2 "></div>
          <div className=" w-10 h-1 bg-brown-200 mb-2 "></div>
          <div className=" w-10 h-1 bg-brown-200 mb-2 "></div>
          <div
            className={`absolute top-0 right-0 w-full h-screen transition-all duration-500 bg-brown-200 ${
              showMenu ? "opacity-100" : "opacity-0 translate-y-[-60rem]"
            }`}
          >
            <div className="fixed flex flex-col justify-center items-center h-screen w-full text-3xl sm:text-4xl gap-24 sm:gap-36">
              <a rel="notfollow" href="#" className="px-10 hover:border-b-2">
                Nuestro método
              </a>
              <a
                rel="notfollow"
                href="#programs"
                className="px-10 hover:border-b-2"
              >
                Programas
              </a>
              <a rel="notfollow" href="#" className="px-10 hover:border-b-2">
                Sobre Nosotros + Equipo
              </a>
              <a rel="notfollow" href="#" className="px-10 hover:border-b-2">
                Contacto
              </a>
              <a
                rel="notfollow"
                href="#"
                className="px-5 hover:border-b-2 text-xl"
              >
                Cerrar
              </a>
            </div>
          </div>
        </button>
      </header>
    </>
  );
}

export default Header;
