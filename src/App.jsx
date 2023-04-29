import { useState, useEffect } from 'react'
import Logo from './assets/img/WellnessLogo.png'
import portada from './assets/img/Portada.png'
import menuRs from './assets/img/MenuRS.png'
import prueba from './assets/img/imgPruebas.png'
import tiktok from './assets/img/tiktokLogo.png'
import facebook from './assets/img/facebookLogo.png'
import instagram from './assets/img/instagramLogo.png'
import twitter from './assets/img/twitterLogo.png'

function Section0(){
  return(
    <section>
      <div className=' z-2 bg-brown-300 absolute w-full h-screen bg-fixed bg-opacity-40 '></div>
      <div className=' z-1 bg-center h-screen w-full bg-fixed bg-cover bg-no-repeat flex justify-center' 
      style={{backgroundImage: `url(${portada})` }}>
        <div className=' flex flex-col justify-between items-center h-[20%] md:h-[25%] lg:h-[32%] mt-60 md:mt-60 lg:mt-48 relative'>
          <h1 className=' text-4xl md:text-5xl lg:text-6xl uppercase '>
            nombre
          </h1>
          <div className=' w-[35%] md:w-[25%] '>
            <p className=' text-base md:text-xl lg:text-3xl text-center '>
              "La clave para una vida saludable y equilibrada es encontrar la armonia entre la mente, el cuerpo y el espiritu."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section1(){
  return(
    <section>
      <h1>Nuestro metodo</h1>
    </section>
  )
}

function Section2(){

  function Cont(){
    return(
      <>
        <div className='bg-white w-[90%] lg:w-[35%] flex flex-col rounded-xl py-5 pb-10 px-10 lg:my-52 shadow-md '>
          <div className='flex flex-row justify-center items-center py-6'>
            <h2 className=' text-3xl mx-5 '>Titulo</h2>
            <img src={prueba} className='w-16 h-16 rounded-full mx-5'/>
          </div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro similique nam repellat 
            perspiciatis ad eaque sequi eum tempora, nobis aperiam. Enim, nulla? Tenetur quaerat 
            pariatur laudantium enim omnis, sunt illo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro similique nam repellat 
            perspiciatis ad eaque sequi eum tempora, nobis aperiam. Enim, nulla? Tenetur quaerat 
            pariatur laudantium enim omnis, sunt illo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro similique nam repellat 
            perspiciatis ad eaque sequi eum tempora, nobis aperiam. Enim, nulla? Tenetur quaerat 
            pariatur laudantium enim omnis, sunt illo.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro similique nam repellat 
            perspiciatis ad eaque sequi eum tempora, nobis aperiam. Enim, nulla? Tenetur quaerat 
            pariatur laudantium enim omnis, sunt illo.
          </p>
        </div>
      </>
    )
  }

  return(
    <section id='programs' className='z-10'>
      <div className=' w-full h-auto bg-brown-200'>
        <div className=' flex flex-col justify-center items-center '>
          <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl relative top-24'>programas</h1>
          <div className='flex flex-col lg:flex-row lg:gap-20 justify-center gap-10 items-center relative pt-40 pb-20 lg:top-0'>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
            <Cont/>
          </div>
        </div>
      </div>
    </section>
  )
}

function Section3(){
  return(
    <section>
      <h1>Sobre Nosotros</h1>
      <h1>Nuestros Profecionales</h1>
    </section>
  )
}

function Section4(){
  return(
    <section>
      <h1>Formulario</h1>
    </section>
  )
}

function BtnRs(){
  const [showButtons, setShowButtons] = useState(false)

  function handleClick(){
    setShowButtons(!showButtons)
  }

  return(
    <>
      <a href="https://www.tiktok.com/" target='_blank'>
          <img src={tiktok} alt='Logo Tik-Tok' 
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${showButtons ? `visible md:bottom-[24.5rem] bottom-[21.7rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.facebook.com/" target='_blank'>
          <img src={facebook} alt='Logo Facebook' 
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${showButtons ? `visible md:bottom-[19rem] bottom-[16.7rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.twitter.com/" target='_blank'>
          <img src={twitter} alt='Logo Twitter' 
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${showButtons ? `visible md:bottom-[13.5rem] bottom-[11.7rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.instagram.com/" target='_blank'>
          <img src={instagram} alt='Logo Instagram' 
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${showButtons ? `visible md:bottom-[8rem] bottom-[7rem]` : 'invisible bottom-7' }`}/>
      </a>
      <img src={menuRs} onClick={handleClick} alt="Menu Redes Sociales" 
      className={`md:w-24 md:h-24 w-[5rem] h-[5rem] fixed bottom-5 right-5 hover:opacity-100 cursor-pointer transition-all duration-300 sm: ${showButtons ? 'opacity-100':'opacity-40'}`}/>
    </>
  )
}

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== scrollDirection && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  return scrollDirection;
};

function Header(){
  const [showMenu, setShowMenu] = useState(false)
  const scrollDirection = useScrollDirection();
  return(
    <>
      <header className={`z-10 flex flex-row justify-between bg-brown-200 h-24 w-screen bg-opacity-50 fixed drop-shadow-md ${scrollDirection === 'down' ? '-top-24': 'top-0'} transition-all duration-500`}>
          <img src={Logo} alt="Logo Welness" className=' w-16 h-16 ml-[4.563rem] mt-5 relative'/>
          <nav className=' md:flex lg:flex-row md:items-center md:justify-center md:w-full hidden'>
            <div className=' flex flex-row justify-evenly w-[95%] text-base lg:text-xl '>
              <a href="#">Nuestro método</a>
              <a href="#programs">Programas</a>
              <a href="#">Sobre Nosotros + Equipo</a>
              <a href="#">Contacto</a>
            </div>
          </nav>
          <button className='block md:hidden py-auto px-7  rounded focus:outline-none md:hover:bg-brown-100 focus:bg-brown-100  transition-all duration-300' onClick={()=>{setShowMenu(!showMenu)}}>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className={`absolute top-0 right-0 w-full h-screen transition-all duration-500 bg-brown-200 ${showMenu ? 'opacity-100' : 'opacity-0 translate-y-[-60rem]'}`}>
              <div className='fixed flex flex-col justify-center items-center h-screen w-full text-4xl gap-36'>
                <a href="#" className='px-10 hover:border-b-2'>Nuestro método</a>
                <a href="#programs" className='px-10 hover:border-b-2'>Programas</a>
                <a href="#" className='px-10 hover:border-b-2'>Sobre Nosotros + Equipo</a>
                <a href="#" className='px-10 hover:border-b-2'>Contacto</a>
                <a href="#" className='px-5 hover:border-b-2 text-2xl'>Cerrar</a>
              </div>
            </div>
          </button>
        </header>
    </>
  )
}

function App() {
  return (
    <>
      <div className=" font-bellota mr-0 text-brown-300 font-semibold">
        <Header/>
        <Section0/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <BtnRs/>
        <footer></footer>
      </div>
    </>
  )
}

export default App