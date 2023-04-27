import imgmethod from './assets/img/imgWelness.png'
import imgtesting from './assets/img/imgPruebas.png'

function Section0(){
  return(
    <section>
      <h1>Nombre</h1>
    </section>
  )
}

function Section1(){
  return(
    <div className=' box-border display: block'>
      <section id="ourmethod" className='bg-brown-100 h-screen text-brown-300    ' >
<div classname='md:flex'>
    <div id="arthp" className='md:shrink-0  flex flex-row justify-evenly items-center '  >
        <img src={imgmethod} alt="welness place" className='w-[20rem] h-[20rem] md:w-[35rem] lg:w-[45rem] md:h-[35rem] lg:h-[45rem] rounded-3xl lg:ml-[5rem] lg:mt-[5rem] lg:mb-[2rem]	 ' />
      
      <div className='flex flex-col  items-start w-[47%] justify-center  font-semibold '>
        <h1 className='underline decoration-brown-300 text-4xl uppercase ml-[15rem] mb-[1rem] '>nuestro metodo</h1>  

        <article className='text-xl md:text-2xl lg:text-3xl px-[1rem] lg:px-[5rem] '>  
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
          adipisci voluptates, reprehenderit culpa eum excepturi perferendis explicabo velit 
          earum vel. Eius voluptates beatae molestias veniam inventore accusamus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
          adipisci voluptates, reprehenderit culpa eum excepturi perferendis explicabo velit 
          earum vel. Eius voluptates beatae molestias veniam inventore accusamus!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore repellat, eos quos 
          aspernatur corrupti qui, corporis eius earum odio in quasi magnam voluptates cupiditate 
          optio laudantium impedit blanditiis quisquam consequatur.</p>
        </article>

       </div>
     </div>
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
      <img src={imgtesting}  className='w-[15rem] h-[15rem] rounded-full mt-[3rem] grayscale hover:grayscale-0'></img>
      

    )
  } 
  return(
    <section id="aboutus" className="bg-brown-100 flex flex-col justify-evenly  ">
<div className='  font-semibold text-center  text-brown-300 my-[10rem] mx-[20rem]  items-start '>
      
      <h1 className='text-5xl mb-[4rem] uppercase' >sobre nosotros</h1>
      <p className='text-2xl mb-[10rem] text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi voluptates, 
        quasi cum expedita obcaecati inventore ad enim iure quas. Iste nam doloribus maiores fugit
        repellat quis dicta perspiciatis corrupti?
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut, soluta pariatur ipsa mollitia eaque a autem nostrum 
        explicabo quos laudantium vero possimus cupiditate neque repellendus molestias incidunt itaque repellat.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid iste porro id provident necessitatibus alias 
        adipisci voluptate incidunt et eveniet nam, sequi laudantium est earum? Doloribus possimus nisi itaque.</p>
     <h1 className='text-5xl mb-[2rem] uppercase'>Nuestros Profecionales</h1>
    
    <div className='flex flex-row justify-between '>
    <Imgs/>
    <Imgs/>
    <Imgs/>
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

export default App