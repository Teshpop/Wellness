import { useState } from 'react'
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
        <div className='bg-white w-[35%] flex flex-col rounded-xl py-5 pb-10 px-10 my-52 shadow-md '>
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
    <section id='#programs' className='z-10'>
      <div className=' w-full h-screen bg-brown-200'>
        <div className=' flex flex-col justify-center items-center '>
          <h1 className='uppercase text-4xl md:text-5xl lg:text-6xl relative top-24'>programas</h1>
          <div className='flex flex-row'>
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
          className={`h-20 w-20 opacity-40 hover:opacity-100 fixed right-7 transition-all duration-300 ${showButtons ? `visible bottom-[24.5rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.facebook.com/" target='_blank'>
          <img src={facebook} alt='Logo Facebook' 
          className={`h-20 w-20 opacity-40 hover:opacity-100 fixed right-7 transition-all duration-300 ${showButtons ? `visible bottom-[19rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.twitter.com/" target='_blank'>
          <img src={twitter} alt='Logo Twitter' 
          className={`h-20 w-20 opacity-40 hover:opacity-100 fixed right-7 transition-all duration-300 ${showButtons ? `visible bottom-[13.5rem]` : 'invisible bottom-7' }`}/>
      </a>
      <a href="https://www.instagram.com/" target='_blank'>
          <img src={instagram} alt='Logo Instagram' 
          className={`h-20 w-20 opacity-40 hover:opacity-100 fixed right-7 transition-all duration-300 ${showButtons ? `visible bottom-[8rem]` : 'invisible bottom-7' }`}/>
      </a>
      <img src={menuRs} onClick={handleClick} alt="Menu Redes Sociales" 
      className={`w-24 h-24 fixed bottom-5 right-5 hover:opacity-100 cursor-pointer transition-all duration-300 ${showButtons ? 'opacity-100':'opacity-40'}`}/>
    </>
  )
}




function App() {
  return (
    <>
      <body className=" font-bellota mr-0 text-brown-300 font-semibold ">
        <header className='z-10 flex flex-row justify-between bg-brown-200 h-24 w-screen bg-opacity-50 fixed'>
          <img src={Logo} alt="Logo Welness" className=' w-16 h-16 ml-[4.563rem] mt-5 relative'/>
          <nav className=' flex flex-row items-center justify-center w-full '>
            <div className=' flex flex-row justify-evenly w-[95%] text-base lg:text-xl '>
              <a href="#">Nuestro método</a>
              <a href="#">Programas</a>
              <a href="#">Sobre Nosotros + Equipo</a>
              <a href="#">Contacto</a>
            </div>
          </nav>
        </header>
        <Section0/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <BtnRs/>
        <footer></footer>
      </body>
    </>
  )
}

export default App