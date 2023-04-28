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
    <div className='bg-brown-100 w-full text-brown-300 flex flex-col md:flex-row '>
      <section id="ourmethod" className=' md:flex-row flex flex-col justify-evenly items-center' >
        
        <img src={imgmethod} alt="welness place" className='mx-[2rem] my-[1rem] w-[19rem] h-[15rem] md:w-[15$] md:h-[20rem] lg:w-[40rem]  lg:h-[40rem] rounded-3xl  lg:mt-[5rem] lg:mb-[2rem]	 ' />
            
             <div className=' bg-black mt-[2rem] w-[15rem] md:w-[25%] md:h-[40rem]] lg:w-[47%]  lg:flex flex-col justify-center items-start  font-semibold '>
               
                <h1 className=' lg:text-5xl mb-[2rem] mt-[3rem] mx-auto underline decoration-brown-300 text-xl md:text-2xl  uppercase '>nuestro metodo </h1> 
                
                 <p className='mx-[3rem] my-[5rem] md:text-lg lg:text-2xl mb-[4rem] text-sm  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
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
      <img src={imgtesting}  className='  w-[13rem] h-[13rem] lg:w-[15rem] lg:h-[15rem] rounded-full lg:mt-[3rem] grayscale hover:grayscale-0'></img>
      

    )
  } 
  return(
    <section id="aboutus" className="bg-brown-100 flex flex-col justify-evenly w-full   ">
      <div className=' font-semibold text-center  text-brown-300 lg:my-[17rem] lg:mx-[20rem] items-start text-xl md:text-2xl lg:text-3xl px-[2rem] lg:px-[5rem]'>
      
        <h1 className='lg:text-5xl mb-[2rem] uppercase mt-[3rem]' >sobre nosotros</h1>
          <p className='md:text-lg lg:text-2xl mb-[4rem] text-sm px-[2rem] text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur animi voluptates, 
          quasi cum expedita obcaecati inventore ad enim iure quas. Iste nam doloribus maiores fugit
          repellat quis dicta perspiciatis corrupti?
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. At aut, soluta pariatur ipsa mollitia eaque a autem nostrum 
          explicabo quos laudantium vero possimus cupiditate neque repellendus molestias incidunt itaque repellat.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum aliquid iste porro id provident necessitatibus alias 
          adipisci voluptate incidunt et eveniet nam, sequi laudantium est earum? Doloribus possimus nisi itaque.</p>
        <h1 className='pb-[2rem] md:text-4xl lg:text-5xl lg:mb-[2rem] uppercase'>Nuestros Profecionales</h1>
    
        <div className='gap-5 mb-5 items-center flex flex-col lg:flex-row justify-between '>
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