import { useState, useEffect} from 'react'
import Logo from './assets/img/WellnessLogo.png'
import portada from './assets/img/Portada.png'
import menuRs from './assets/img/MenuRS.png'
import imgtesting from './assets/img/imgPruebas.png'
import tiktok from './assets/img/tiktokLogo.png'
import facebook from './assets/img/facebookLogo.png'
import instagram from './assets/img/instagramLogo.png'
import twitter from './assets/img/twitterLogo.png'
import whatsapp from './assets/img/whatsappLogo.png'

function Section0(){
  return(
    <section id='home'>
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

  function Cont({id, color, text}){
    return(
      <>
        <article id={id} className={`flex-none rounded-2xl drop-shadow-md snap-center w-[90%] lg:w-[40%] ${color}`}>
          <div className='flex flex-col w-full h-full items-center gap-8 py-9'>
            <div className='flex flex-row justify-center items-center gap-7'>
              <h2 className='uppercase text-lg'>Titulo</h2>
              <img src={imgtesting} alt="Imagen Prueba" className=' rounded-full 
              h-16 w-16 ' />
            </div>
              <div className='w-[80%] text-center'>
                <p>
                  {text}
                </p>
              </div>
          </div>
        </article>
      </>
    )
  }

  function Button({id, color}){
    return(
      <>
      <a href={id}>
        <div className={`${color} rounded-full h-10 w-10 shadow-md cursor-pointer hover:shadow-none transition-all duration-300 `}>
        </div>
      </a>
      </>
    )
  }

  return(
    <section id='programs'>
      <div className='flex flex-col bg-brown-200 justify-center w-full items-center h-screen gap-5'>
        <h1 className='uppercase text-3xl md:text-4xl lg:text-5xl'>programas</h1>
        <div className="flex flex-row overflow-hidden hover:overflow-scroll gap-5 lg:gap-[10rem] px-4 lg: snap-x w-full h-[70%] py-10">
          <Cont id={'1'} color={'bg-white'}
          text={
            'lorem ipus'
            }/>
          <Cont id={'2'} color={'bg-blue'}
          text={
            'lorem ipus'
            }/>
          <Cont id={'3'} color={'bg-yellow'}
          text={
            'lorem ipus'
            }/>
          <Cont id={'4'} color={'bg-green'}
          text={
            'lorem ipus'
            }/>
          <Cont id={'5'} color={'bg-pink'}
          text={
            'lorem ipus'
            }/>
          <Cont id={'6'} color={'bg-white'}
          text={
            'lorem ipus'
            }/>
        </div>
        <div className='flex flex-row gap-5'>
          <Button id={'#1'} color={'bg-white'}/>
          <Button id={'#2'} color={'bg-blue'}/>
          <Button id={'#3'} color={'bg-yellow'}/>
          <Button id={'#4'} color={'bg-green'}/>
          <Button id={'#5'} color={'bg-pink'}/>
          <Button id={'#6'} color={'bg-white'}/>
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
      <div className='h-screen w-full bg-brown-200 flex justify-center items-center'>
        <div className='flex flex-row w-[85%] h-[70%] bg-brown-100 justify-center items-center gap-36'>
          <form action="" method="post" acceptCharset='UTF-8'>
            <fieldset className='flex flex-col gap-12'>
              <div className='flex flex-col'>
                <label htmlFor="name">Nombre Completo</label>
                <input type="text" id='name' name='name' />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="email">Correo</label>
                <input type="email" name="email" id="email" />
              </div>

              <div className='flex flex-col'>
                <label htmlFor="numbre">Telefono</label>
                <input type="tel" name="number" id="number" />
              </div>

              <div className='flex flex-row gap-10'>
                <button type="submit">Enviar</button>
                <img src={whatsapp} alt="" className='h-12 w-12 drop-shadow-md'/>
              </div>
            </fieldset>
          </form>
          <img src={Logo} alt="LogoWelness" className=' drop-shadow-2xl ' />
        </div>
      </div>
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

  function BtnMen({title,id}){
    const [hover ,setHover] = useState(false)
    return(
      <>
      <a href={id} 
      onMouseEnter={()=>{setHover(true)}}
      onMouseLeave={()=>{setHover(false)}}>
        {title}
        <div className={`h-0.5 bg-brown-300 transition-all duration-300 ${hover ? 'w-full' : 'w-0'}`}></div>
      </a>
      </>
    )
  }

  return(
    <>
      <header className={`z-10 flex flex-row justify-between bg-brown-200 h-24 w-screen bg-opacity-50 fixed drop-shadow-md ${scrollDirection === 'down' ? '-top-24': 'top-0'} transition-all duration-500`}>
          <a href="#home"><img src={Logo} alt="Logo Welness" className=' w-16 h-16 ml-[4.563rem] mt-5 relative'/></a>
          <nav className=' md:flex lg:flex-row md:items-center md:justify-center md:w-full hidden'>
            <div className=' flex flex-row justify-evenly w-[95%] text-base lg:text-xl '>
              <BtnMen title={'Nuestro método'} id={'#'}/>
              <BtnMen title={'Programas'} id={'#programs'}/>
              <BtnMen title={'Sobre Nosotros + Equipo'} id={'#'}/>
              <BtnMen title={'Contacto'} id={'#'}/>
            </div>
          </nav>
          <button className={`block md:hidden py-auto px-7  rounded focus:outline-none md:hover:bg-brown-100 focus:bg-brown-100  transition-all duration-300 ${scrollDirection === 'down' ? 'top-0': 'top-0'}`} onClick={()=>{setShowMenu(!showMenu)}}>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className=' w-10 h-1 bg-brown-200 mb-2 '></div>
            <div className={`absolute top-0 right-0 w-full h-screen transition-all duration-500 bg-brown-200 ${showMenu ? 'opacity-100' : 'opacity-0 translate-y-[-60rem]'}`}>
              <div className='fixed flex flex-col justify-center items-center h-screen w-full text-3xl sm:text-4xl gap-24 sm:gap-36'>
                <a href="#" className='px-10 hover:border-b-2'>Nuestro método</a>
                <a href="#programs" className='px-10 hover:border-b-2'>Programas</a>
                <a href="#" className='px-10 hover:border-b-2'>Sobre Nosotros + Equipo</a>
                <a href="#" className='px-10 hover:border-b-2'>Contacto</a>
                <a href="#" className='px-5 hover:border-b-2 text-xl'>Cerrar</a>
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