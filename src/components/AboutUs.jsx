import imgtesting from "/img/imgPruebas.png";
import imgmethod from "/img/imgWelness.png";
import bioA from "/img/a.jpg";
import bioM from "/img/m.jpg";
import bioY from "/img/y.jpg";
import { useState } from "react";

function AboutUs() {
  function BioFirst({ name, imgbio, description, extrainfo }) {
    const [showMyModal, setShowModal] = useState(false);

    const handleOnClose = () => setShowModal(false);

    function MyModal({ visible, onClose }) {
      const handleOnClose = (e) => {
        if (e.target.id === "container") onClose();
      };

      if (!visible) return null;

      return (
        <div
          id="container"
          onClick={handleOnClose}
          className=" z-10 fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm flex justify-center items-center"
        >
          <div className="">
            <div className="  md:mx-auto md:mb-[2rem] md:mt-[2rem]  md:h-80% md:w-[47rem] lg:w-[60rem] ">
              <div className=" bg-brown-200 bg-opacity-85 rounded-3xl backdrop-blur-50 drop-shadow-lg flex flex-col">
                <div>
                  <div className="sm:mx-[2rem] border-b md:h-30% flex flex-row justify-between item-center   p-4">
                    <img
                      src={imgbio}
                      className="sm:mt-[2rem]  rounded-full h-[5rem] w-[5rem] md:h-[7rem] md:w-[7rem] lg:h-[10rem] lg:w-[10rem] "
                    ></img>
                    <h2 className="sm:mx-[2rem] mt-[2rem] md:mt-[4rem] lg:mt-[5rem] md:mr-[4rem] md:text-3xl lg:mr-[8rem] lg:text-4xl font-bold">
                      {name}
                    </h2>
                    <button
                      onClick={onClose}
                      className="md:absolute font-bold  md:ml-[32rem] md:mb-[3rem]  lg:ml-[55rem] lg:mb-[8rem] "
                    >
                      x
                    </button>
                  </div>
                </div>
                <div className=" sm:mb-[1rem] text-justify justify-center ">
                  <p className="px-[1rem] md:px-[2rem] lg:px-[5rem] mt-[1rem] text-xs md:text-sm lg:text-base">
                    {description}
                  </p>
                  <p className="px-[1rem] md:px-[2rem] lg:px-[5rem] mt-[1rem] text-xs md:text-sm lg:text-base">
                    {extrainfo}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="max-w-3xl  mx-auto">
          <div className="text-center py-3">
            <button onClick={() => setShowModal(true)}>
              <img
                src={imgtesting}
                className="my-[1rem] w-[10rem] h-[10rem] md:w-[13rem] md:h-[13rem] lg:w-[15rem] lg:h-[15rem] rounded-full lg:mt-[3rem] grayscale transition-all duration-500 md:hover:grayscale-0"
              ></img>
            </button>
          </div>
        </div>
        <MyModal onClose={handleOnClose} visible={showMyModal} />
      </div>
    );
  }

  return (
    <section
      id="AboutUs"
      className="bg-brown-100 flex flex-col justify-evenly w-full   "
    >
      <div className=" font-semibold text-center   text-brown-300 sm:my-[5rem] sm:mx-[2rem] md:my-[12rem] md:mx-[7rem] lg:my-[17rem] lg:mx-[1rem] items-start text-xl md:text-2xl lg:text-3xl  lg:px-[5rem]">
        <h1 className="lg:text-5xl md:text-4xl  text-3xl mb-[2rem]   mx-[3rem] uppercase mt-[3rem] ">
          sobre nosotros
        </h1>
        <p className="text-lg md:text-lg lg:text-2xl mb-[4rem] mx-[3rem] lg:mx-[10rem]   text-center ">
          Nuestro equipo de profesionales apasionados combinan actividades
          revitalizantes, momentos de tranquilidad y reflexión, en un entorno
          sereno y rodeado de hermosos paisajes naturales. Únete a nuestra
          comunidad de apoyo y conexión, donde te brindamos atención
          personalizada para asegurarnos de que tu experiencia sea inolvidable.
          ¡Te esperamos para un viaje hacia la renovación y el bienestar
          integral!
        </p>
        <div>
          <h1 className="pb-[2rem] text-3xl md:text-4xl lg:text-5xl mx-[2rem] uppercase">
            Nuestros Profesionales
          </h1>

          <div>
            <div className=" mb-[2rem] border-hidden gap-5 xl:mb-5 items-center flex flex-col xl:flex-row  justify-between">
              <div className="xl:ml-[10rem]">
                <BioFirst
                  name={"Ana"}
                  imgbio={bioA}
                  description="Dejé los tacones de oficina por los pies descalzos en una esterilla. Empecé a practicar 
                  yoga para aliviar mis dolores de cuello y calmar el caos de mi agitada mente. Con el 
                  tiempo el yoga y otras prácticas espirituales se convirtieron en un ritual sagrado de 
                  conexión conmigo misma de autodescubrimiento y sanación. 
                  Dejé mi trabajo en una multinacional y emprendí mi marca Anikuni Yoga, eventos de 
                  yoga, cacao y retiros espirituales, proyectos que nacen del corazón y me hacen sentir 
                  realizada. Dicen que inspiro a las personas a encontrar su camino, a ser más auténticos 
                  y a que se atrevan a liberarse de los condicionamientos y los juicios externos para 
                  caminar hacia lo que les hace libres. Y para mí no hay más libertad que tener claridad de 
                  quien eres, de dónde vienes, hacia dónde vas y atreverte a dar los pasos hacia aquello 
                  que deseas. 
                  Viajé sola a México sintiendo la llamada de la planta sagrada del cacao y me enamoré 
                  de su medicina, desde entonces el cacao ha sido mi guía y aliado, una relación de pasión, 
                  amor, comunicación y mucho respeto que me acompaña en mis ceremonias. También 
                  estoy iniciada en la senda del chamanismo andino por el linaje de los Q’eros y hago 
                  limpiezas energéticas chamánicas. Mi camino es el del autodescubrimiento, conocerme 
                  cada día más y volver a recordar mi propia sabiduría."
                  extrainfo="- Profesora de Hatha Yoga y Meditación certificada (550h).  
- Iniciada en Chamanismo Andino, linaje Pampa Mesayok de la 
  Tradición Q'ero de los Andes del Perú, Ankakuntur.  
- Creadora de Anikuni Yoga, el yoga social. @anikuniyoga  
- Facilitadora de Ceremonias de Cacao, formada en México.  
- Organizadora de retiros espirituales en México y España. "
                />
                <h2 className="uppercase">Nombre</h2>
              </div>

              <div>
                <BioFirst
                  name={"Marcos"}
                  imgbio={bioM}
                  description="No soy tu Gurú. Te guio, acompaño y sostengo en el viaje de descubrimiento, aceptación 
                  y auto realización de la Maestría en ti. Tú eres tu propio maestro y guía, el creador de tu 
                  destino. 
                  Explorador, aventurero, emprendedor, artista y buscador antes que maestro. Pasé la 
                  mitad de mi vida recorriendo el mundo en busca de algo que me faltaba y finalmente lo 
                  encontré. Me buscaba a mí mismo. Ahora este donde este, estoy en mi hogar. Agradezco 
                  y honro a mis guías. 
                  Practico técnicas asiáticas ancestrales de sanación energética. Mi camino es Luz. Mi 
                  propósito como facilitador es que encuentres tu hogar, dentro de tu corazón, dentro de 
                  todos los corazones, en la unidad de todo lo creado y en el poder, la sabiduría y el amor 
                  que realmente eres, para que puedas brillar en toda la riqueza de tu ser y manifestar 
                  esa abundancia y alegría en cada aspecto de tu vida. 
                  
                  - Maestro de Chi Kung y Tai chi estilo Yang. 
                  - Maestro de Reiki certificado y federado. 
                  - Masajista de nivel 2 (calmante y energizante) de masaje tibetano Ku Nye (Medicina 
                  tibetana de los 4 tantras). 
                  - Licenciado en bellas artes, director de arte audiovisual y artista devocional 
                  multidisciplinar. 
                  - Master en dirección de marketing y comercial, emprendedor, profesor de marketing y 
                  asesor de emprendedores. 
                  - Organizador de retiros espirituales en México y Tailandia. 
                  "
                />
                <h2 className="uppercase"> Nombre</h2>
              </div>
              <div className="xl:mr-[10rem]">
                <BioFirst
                  name={"Yana"}
                  imgbio={bioY}
                  description="Mi historia es un testimonio personal de cómo la búsqueda constante y la práctica pueden cambiar radicalmente nuestra forma de vivir. A través de varias prácticas, he encontrado un sentido profundo de paz, propósito y conexión conmigo misma y con los demás. 
                  Mi misión actual es difundir todos los beneficios de la vida y ayudar a otros a descubrir su propio camino hacia una vida más consciente y plena. Desde esta motivación nace ‘’Serenalia’’, experiencias para reconectar con tu esencia y vivir una vida plena, llena de alegría, serenidad y amor. 
                  
                  -Emprendedora.
                  -Fundadora de Mérito Tuyo.
                  -Organizadora de eventos espirituales en España. 
                  -Coach de Mindfulness
                  -Entrenadora de Pilates suelo 
                  -Apasionada del Yoga
                  
                    "
                />
                <h2 className="uppercase">nombre</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
}

export default AboutUs;
