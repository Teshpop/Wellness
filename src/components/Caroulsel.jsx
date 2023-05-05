function Caroulsel({ id, color, text, img, title, txtSize }) {
  return (
    <>
      <article
        id={id}
        className={`flex-none rounded-2xl drop-shadow-md snap-center w-[90%] lg:w-[40%] ${color}`}
      >
        <div className="flex flex-col w-full h-full items-center gap-8 py-9">
          <div className="flex flex-row justify-center items-center gap-7">
            <h2 className="uppercase text-lg">{title}</h2>
            <img
              src={img}
              alt="Imagen Prueba"
              className=" rounded-full 
              h-16 w-16 "
            />
          </div>
          <div className="w-[80%] text-justify">
            <p className={txtSize}>{text}</p>
          </div>
        </div>
      </article>
    </>
  );
}

export default Caroulsel;
