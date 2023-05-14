import { Card, Carousel } from "../components";

import imgtesting from "/img/imgPruebas.png";
import { v4 as uuidv4 } from "uuid";

export default function Programs() {
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Yoga de los 7 chakras"}
          text={
            "Es una Shadana (esfuerzo espiritual hacia una meta) de una semana de duración enfocada en despertar la energía Shakti kundalini con el fin de liberarnos de todo obstáculo que nos impide avanzar y alcanzar la felicidad plena. Durante una semana; con cada práctica de yoga diaria liberaremos la energía de uno de los 7 chakras, trabajando e integrando conscientemente: intención, visualización, respiración, mudras, asanas, energía sagrada y mantras de cada centro energético. 7 prácticas de yoga, 7 chakras, 7 yantras, 7 mantras, 7 pranas, 7 mudras, 7 animales de poder, 7 karmas (Obstáculos a superar) y 7 Avatares (Dioses encarnados o energías sagradas para trascender cada obstáculo). "
          }
          color={"bg-white"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ceremonia de cacao"}
          text={
            "La ceremonia del cacao es un ritual originario de los mayas que se ha extendido a otras culturas indígenas de América Central y del Sur. Se prepara y se consume una bebida hecha con cacao puro y especias en una ceremonia de agradecimiento y apertura del corazón. Se crea un altar sagrado con ofrendas a la tierra y a las energías presentes en ese día. Durante la ceremonia se cantan mantras y se toca música con tambor chamánico para elevar la vibración. El cacao es una planta sagrada que te ayuda a liberar emociones y a sentir paz y alegría. Además, tiene muchas propiedades buenas para la salud, como la mayor fuente de antioxidantes y la presencia de Teobromina, un alcaloide saludable que tiene efectos mucho más suaves y duraderos que la cafeína. "
          }
          color={"bg-blue"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de florecimiento en el Mar"}
          text={
            "Un baño de florecimiento es un ritual en el río, mar o en la montaña para ayudar a limpiar y purificar tu cuerpo y mente. Seleccionamos con mimo flores exóticas, pétalos y plantas silvestres medicinales con las que regaremos tu aura. Te sentirás como una divinidad. Sentirás como un torrente de luz perfumada diluye y transmuta energías negativas, estrés y tensión acumulados en tu cuerpo y mente, y atrae energías positivas de armonía y equilibrio. El ritual sagrado de florecimiento inca es una bendición que activa tu destino y te recarga de energía cósmica espiritual. Conecta con los grandes espíritus y atrae vibraciones positivas."
          }
          color={"bg-yellow"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de Luna nueva "}
          text={
            "Un ritual de luna es una práctica espiritual que se realiza con las fases de la luna. Conectamos con la energía de la luna y aprovechamos su poder para llevar a cabo una intención específica. En los rituales de luna nueva sembramos nuevas intenciones y se establecen nuevos propósitos y en un ritual de luna llena liberamos patrones negativos y celebramos nuestros logros. En los rituales de luna incluimos diversas prácticas, la meditación, el canto, la danza, la creación de altares, velas o incienso, entre otros. Cada fase de la luna requiere diferentes prácticas y herramientas, dependiendo de la intención del ritual."
          }
          color={"bg-green"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Be energy/ Sé energía / Chi kung . Tai Chi "}
          text={
            "La práctica que te propongo es una experiencia mística que busca la armonización de tu cuerpo, mente y espíritu a través de antiguas técnicas orientales como el Chi Kung y el Tai Chi. A través de la conexión con la energía Chi o prana, se busca sanar aspectos vitales determinados a nivel espiritual, energético, mental, emocional y físico. En esta práctica, aprenderás a encontrar tu centro, a estar presente, a ser fluido y expresivo en tus movimientos, a concentrar y dirigir tu energía y a contrarrestar y redirigir las energías adversas fuera de tu campo energético de acción. Al final de la sesión, experimentarás una sensación de paz y armonía, y habrás establecido un vínculo más fuerte con tu propia esencia divina."
          }
          color={"bg-pink"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Be water/ Se agua / Chi kung . Tai Chi acuático"}
          text={
            "En esta práctica de Be water/Se agua/Chi Kung y Tai Chi acuático, nos sumergimos en la sabiduría ancestral del elemento sagrado del agua, conectándonos con la energía universal y aprendiendo a fluir como ella. Nos liberamos de las limitaciones que nos pesan y nos conectamos con la armonía del universo, elevando nuestra energía a niveles más elevados de consciencia. A través de la densidad, pesadez y resistencia fluida del agua, interiorizamos los movimientos y los entendemos mejor dentro de nuestro campo energético y físico, mientras activamos la circulación sanguínea y fortalecemos los músculos, tendones y articulaciones suavemente. Es una experiencia de purificación y unión con la naturaleza que nos permite sanar y crecer espiritualmente."
          }
          color={"bg-green"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={
            "Conexión Reiki / El arte de dar y recibir para manifestar Luz"
          }
          text={
            "Este es un ritual sagrado de conexión con la energía universal y la manifestación de la luz en la materia. En él, nos reunimos para practicar la auto-realización y compartir energía con otros seres, multiplicando el poder del Reiki por el número de participantes. El ritual comienza con una meditación en silencio y un compromiso de respeto hacia todo y todos. Luego, cada participante recibe una iniciación REIJU para transmitir la capacidad de curación a los demás. A través de prácticas grupales, todos dan y reciben Reiki del resto, moviendo la energía con música en círculos que avanzan y retroceden. Al final, cerramos la sesión en un gran círculo y compartimos nuestras experiencias. Este ritual es una experiencia de unión con la energía universal y de elevación de la consciencia."
          }
          color={"bg-yellow"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Extatic dance / La Danza de la Unidad"}
          text={
            "La danza en comunidad es un portal a otras dimensiones, donde se fusionan lo divino y lo terrenal, lo ancestral y lo moderno, lo personal y lo colectivo. Es una ceremonia de alquimia sagrada donde cada cuerpo es un templo y cada movimiento es una oración. A través de los sonidos sagrados del mundo, nos conectamos con nuestro ser más profundo y con los demás, en un ritual de danza extática que nos permite sanar, empatizar, celebrar y abrir nuestro corazón a la unión. Bailamos en silencio, dándole la voz a nuestra energía y explorando las posibilidades creativas de nuestro cuerpo, descubriendo así nuestra verdadera esencia y expresándose en la alegría eterna e ilimitada de la unidad."
          }
          color={"bg-blue"}
        />
      ),
    },
    {
      key: uuidv4(),
      content: (
        <Card
          imagen={imgtesting}
          title={"Ritual de creatividad / Eres lo creado y el creador"}
          text={
            "Descubre el poder sagrado creador que hay en ti a través del ritual de creatividad. Visualiza y manifiesta tu avatar, conectándolo con la energía positiva de manifestación en tu corazón y átomos. Eres creador y creado, el aliento en el vacío, la canción del viento, Brahma y Saraswati, adolescente eterno y magia de la medianoche, Krishna y Rada. Sostienes la vida, eres alimento e inspiración natural, Shiva y Parvati, el alquimista de tu vida. Remueve la tierra, destruye lo que ya no sirve y planta la semilla de tus sueños. En ti está el creador y la creación, ohm."
          }
          color={"bg-pink"}
        />
      ),
    },
  ];

  return (
    <section id="Programs">
      <div className="h-screen w-screen bg-brown-200 flex justify-center items-center flex-col">
        <div className="flex flex-col text-center justify-center items-center pt-12">
          <h1 className="uppercase text-3xl md:text-4xl lg:text-5xl">
            Clases incluidas en el pack
          </h1>
          <div className=" flex justify-center items-center text-center w-[85%] lg:w-[60%]">
            <h3 className="uppercase text-[0.8rem] md:text-lg">
              Con nuestro pack de bienestar total, tendrás acceso a una
              variedad. Cada clase está diseñada para nutrir tu cuerpo, mente y
              alma y ayudarte a alcanzar una profunda relajación ¡No te pierdas
              esta oportunidad única de transformar tu vida!
            </h3>
          </div>
        </div>
        <Carousel cards={cards} offset={200} showArrows={false} />
      </div>
    </section>
  );
}
