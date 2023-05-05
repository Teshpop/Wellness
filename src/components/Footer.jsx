import { useState } from "react";

function Footer() {
  const Button = ({ link, title }) => {
    const [hover, setHover] = useState(false);
    return (
      <a
        className=" text-xl "
        href={link}
        target="_blank"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {title}
        <div
          className={`${
            hover ? "w-full" : "w-0"
          } h-0.5 bg-brown-300 transition-all duration-300`}
        ></div>
      </a>
    );
  };
  return (
    <>
      <div className=" h-32 bg-brown-100 justify-center items-center flex flex-col text-2xl gap-2 ">
        <h2 className="uppercase">Enlaces</h2>
        <div className="flex text-center flex-col md:flex-row gap-3 md:gap-16">
          <Button link={"https://www.flaticon.es/"} title={"Iconos"} />
        </div>
      </div>
    </>
  );
}

export default Footer;
