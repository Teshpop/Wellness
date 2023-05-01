import imgmethod from './assets/img/imgWelness.png'
import imgtesting from './assets/img/imgPruebas.png'
import Modal from 'react-modal'; 
import { useEffect, useState } from 'react'

function Section0(){
  return(
    <section>
      <h1>Nombre</h1>
    </section>
  )
}

function Section1(){
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (direction !== 'up' && (scrollY - lastScrollY > 5 || scrollY - lastScrollY < -5)) {
        setScrollDirection(direction);
      }else if(scrollY === 0){
        setScrollDirection(null)
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    }
  }, [scrollDirection]);

  const imgPosition = scrollDirection === "down" ? "-translate-x-0 opacity-100" : "-translate-x-full opacity-0";
  const textPosition = scrollDirection === "down" ? "translate-x-0 opacity-100" : "translate-x-full opacity-0";


  return(
    <div className=' relative bg-brown-100 w-full text-brown-300 flex flex-col md:flex-row '>
      <section id="ourmethod" className='my-8 mx-auto lg:flex-row flex flex-col justify-evenly items-start ' >
          <div className='relative lg:w-1/2 '>
          <img src={imgmethod} 
              alt="welness place" 
              className={`flex  left-0 ${imgPosition} transition-all duration-500 ease-out mt-[10rem] w-[19rem] h-[19rem] md:mx-[13rem] md:w-[25rem] md:h-[25rem] lg:mx-[5rem] xl:mx-full lg:w-[35rem] lg:h-full rounded-3xl `} />  
          </div>
        
          <div className={`relative  right-0 ${textPosition} transition-all duration-500 ease-out flex flex-col justify-center font-semibold my-[3rem] mx-auto mt-[2rem] w-[15rem] md:mx-[13rem] md:w-[25rem] lg:mt-[10rem] lg:mx-full lg:w-[30rem] ` }>
               
                <h1 className=' lg:text-3xl mb-[2rem] mt-auto  underline underline-offset-8 decoration-brown-300 text-xl md:text-2xl  uppercase text-center'>nuestro metodo </h1> 
                
                 <p className=' md:text-xl lg:text-xl lg:mb-[4rem] text-sm  text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi totam quas nesciunt 
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
  function BioFirst() {
    const [showModal, setShowModal] = useState(false);
  
    const openModal = () => setShowModal(true);
    const closeModal = () => setShowModal(false);
  
    return (
      <div>
        <button onClick={openModal}>
          <img
            src={imgtesting}
            className="my-[1rem] w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] rounded-full lg:mt-[3rem] grayscale hover:grayscale-0"
          ></img>
        </button>
  
        <Modal className=" bg-blue w-50% h-50% md:mt-[2rem]  md:h-80% md:w-[37rem] lg:w-[60rem] lg:h-auto md:mx-auto lg:mt-[2rem] md:mb-[2rem] " isOpen={showModal} onRequestClose={closeModal}>
          <div className="border-b mx-full w-70% md:h-30% flex flex-col md:flex-row md:justify-between item-start md:items-center p-4">
            <img src={imgtesting} className='ml-[2rem] rounded-full h-[5rem] w-[5rem] md:h-[5rem] md:w-[5rem] lg:h-[10rem] lg:w-[10rem] '></img>
            <h2 className="md:text-2xl lg:text-3xl font-bold">Jesus Fabian Cortez Perez</h2>
            <button className='absolute ml-[20rem] md:mb-[5rem] md:ml-[34rem] lg:mt-[1rem] lg:ml-[57rem] font-bold lg:mb-[10rem] mr-[2rem]' onClick={closeModal}>
            X
            </button>
          </div>
          <div className="p-4 text md:text-lg lg:text-2xl md:mt-[1rem] lg:mt-[2rem] mx-[4rem] justify-center  text-justify">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa similique harum quis porro. Ea earum quas expedita, dolorum in praesentium voluptatem laborum aliquid nisi, quia suscipit at placeat, autem sequi!
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi, qui voluptatum, nam nisi consequuntur nemo, provident eum exercitationem quos tenetur dolore velit dolorum ipsa neque facere iure saepe dignissimos quaerat.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis culpa quidem dolorum eaque, repudiandae eveniet facere facilis illo! Totam nisi cupiditate vero ex voluptatem. Iste non blanditiis itaque laboriosam quae.
            </p>
          </div>
        </Modal>
      </div>
    );
  }
    
  return(
    <section id="aboutus" className="bg-brown-100 flex flex-col justify-evenly w-full   ">
      <div className=' ´ font-semibold text-center  text-brown-300 my-[5rem] mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl px-[2rem] lg:px-[5rem]'>
      
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
             <div className='xl:ml-[10rem]'>
              <BioFirst/>
              <p>Nombre</p>
             </div>
              
           <div>
              <BioFirst/>
              <p> Nombre</p>
           </div>
           <div className='xl:mr-[10rem]'>
              <BioFirst/>
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

function Header(){
  return(<></>)
}

function BtnRs(){
  return(<></>)
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