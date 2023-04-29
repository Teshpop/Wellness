import imgmethod from './assets/img/imgWelness.png'
import imgtesting from './assets/img/imgPruebas.png'
import { useEffect } from 'react'

function Section0(){
  return(
    <section>
      <h1>Nombre</h1>
    </section>
  )
}
function pruebas(){
  const containerRef = useRef(null)
  const[isVisible, setIsVisible] = useState(false)

  const callbackFuntion = (entries) =>{
    const [ entry ] = entries
    setIsVisible(entry.isIntersecting)
  }
const options = {
    root:null,
    rootMargin: "0px",
    threshold:1.0
}

useEffect(() => {

  const observer = new IntersectionObserver(callbackFuntion, options)
  if(containerRef.current) observer.observe(containerRef.current)

  return () => {
    if(containerRef.current) observer.unobserve(containerRef,current)
  }
}, [containerRef,options])

return(
  <div id='app' className=' flex flex-col items-center justify-center bg-black'>
    <div id='isVisible' className=''>{isVisible ? "in Viewport" : "not in view"}</div>
    <div id='section' className='w-[20rem] h-[20rem] '></div>
    <div id='box' className='flex justify-center items-center bg-brown-300 text-brown-300' ref={containerRef}> observe me you</div>
  </div>
)
}


function Section1(){
  return(
    <div className='bg-brown-100 w-full text-brown-300 flex flex-col md:flex-row '>
      <section id="ourmethod" className='my-[8rem] md:flex-row flex flex-col justify-evenly items-center' >
        
        <img src={imgmethod} alt="welness place" className=' mx-[4rem] md:mx-[6rem] lg:mx-[7rem] my-[2rem] w-[19rem] h-[19rem] lg:w-[25rem] lg:h-[25rem] xl:w-[40rem]  xl:h-[40rem] rounded-3xl  lg:mt-[5rem] lg:mb-[2rem]	 ' />
            
             <div className='my-[3rem] lg:mx-[4rem] xl:pl-[1rem] mt-[2rem] w-[15rem] lg:w-[25rem]  xl:w-[50rem]  lg:flex flex-col justify-center items-start  font-semibold '>
               
                <h1 className=' lg:text-5xl mb-[2rem] mt-[3rem]  underline underline-offset-8 decoration-brown-300 text-xl md:text-2xl  uppercase text-center'>nuestro metodo </h1> 
                
                 <p className=' md:text-3xl xl:text-4xl lg:mb-[4rem] text-sm  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
                  adipisci voluptates, reprehenderit culpa eum excepturi perferendis explicabo velit 
                  earum vel. Eius voluptates beatae molestias veniam inventore accusamus!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
                  adipisci voluptates, reprehenderit culpa eum excepturi perferendis explicabo velit 
                  earum vel. Eius voluptates beatae molestias veniam inventore accusamus!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat, eos quos 
                  aspernatur corrupti qui, corporis eius earum odio in quasi magnam voluptates cupiditate 
                  optio laudantium impedit blanditiis quisquam consequatur.</p>
               </div>
            
      </section>
    </div>
    
  )
}

function Section2(){
  return(
    <section>
      <h1>Programas</h1>
    </section>
  )
}

function Section3(){
  function Imgs (){
    return(
      <img src={imgtesting}  className=' my-[1rem] w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] xl:w-[18rem] xl:h-[19rem] rounded-full lg:mt-[3rem] grayscale hover:grayscale-0'></img>
      

    )
  } 
  return(
    <section id="aboutus" className="bg-brown-100 flex flex-col justify-evenly w-full   ">
      <div className=' ´ font-semibold text-center  text-brown-300 my-[5rem] mx-[2rem] md:my-[12rem] md:mx-[7rem] xl:my-[17rem] xl:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl px-[2rem] lg:px-[5rem]'>
      
         <h1 className='lg:text-5xl mb-[2rem] uppercase mt-[3rem] ' >sobre nosotros</h1>
          <p className='lg:text-lg xl:text-2xl mb-[4rem] xl:mx-[10rem] text-sm  text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi voluptates, 
          quasi cum expedita obcaecati inventore ad enim iure quas. Iste nam doloribus maiores fugit
          repellat quis dicta perspiciatis corrupti?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut, soluta pariatur ipsa mollitia eaque a autem nostrum 
          explicabo quos laudantium vero possimus cupiditate neque repellendus molestias incidunt itaque repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid iste porro id provident necessitatibus alias 
          adipisci voluptate incidunt et eveniet nam, sequi laudantium est earum? Doloribus possimus nisi itaque.</p>
          <div>
          <h1 className='pb-[2rem] lg:text-4xl xl:text-5xl px-full uppercase'>Nuestros Profecionales</h1>
    
    <div >
           <div className='uppercase mb-[2rem] border-hidden gap-5 xl:mb-5 items-center flex flex-col xl:flex-row  justify-between'>
             <div>
              <Imgs/>
              <p>Nombre</p>
             </div>
              
           <div>
              <Imgs/>
              <p> Nombre</p>
           </div>
           <div>
              <Imgs/>
              <p>nombre</p>
            </div>
        </div>
      </div>
    </div>
  </div>

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

function App() {
  return (
    <>
      <body className=" font-bellota ">
        <header>
          <nav></nav>
        </header>
        <pruebas/>
        <Section0/>
        <Section1/>
        <Section2/>
        <Section3/>

        <footer></footer>
      </body>
    </>
  )
}

export default pruebas