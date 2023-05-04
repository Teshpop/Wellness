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
        <h2 className="uppercase">Iconos</h2>
        <div className="flex flex-row gap-16">
          <Button
            link={"https://www.flaticon.es/iconos-gratis/whatsapp"}
            title={"Icono WhatsApp"}
          />
          <Button
            link={"https://www.flaticon.es/iconos-gratis/facebook"}
            title={"Icono Facebook"}
          />
          <Button
            link={"https://www.flaticon.es/iconos-gratis/instagram"}
            title={"Icono Instagram"}
          />
          <Button
            link={"https://www.flaticon.es/iconos-gratis/logotipo-de-twitter"}
            title={"Icono Twitter"}
          />
          <Button
            link={"https://www.flaticon.es/iconos-gratis/tik-tok"}
            title={"Icono TikTok"}
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
