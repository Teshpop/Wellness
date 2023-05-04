import { useState } from "react";

import menuRs from "/img/MenuRS.png";
import tiktok from "/img/tiktokLogo.png";
import facebook from "/img/facebookLogo.png";
import instagram from "/img/instagramLogo.png";
import twitter from "/img/twitterLogo.png";

function BtnSocial() {
  const [showButtons, setShowButtons] = useState(false);

  function handleClick() {
    setShowButtons(!showButtons);
  }

  return (
    <>
      <a rel="notfollow" href="https://www.tiktok.com/" target="_blank">
        <img
          src={tiktok}
          alt="Logo Tik-Tok"
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons
              ? `visible md:bottom-[24.5rem] bottom-[21.7rem]`
              : "invisible bottom-7"
          }`}
        />
      </a>
      <a rel="notfollow" href="https://www.facebook.com/" target="_blank">
        <img
          src={facebook}
          alt="Logo Facebook"
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons
              ? `visible md:bottom-[19rem] bottom-[16.7rem]`
              : "invisible bottom-7"
          }`}
        />
      </a>
      <a rel="notfollow" href="https://www.twitter.com/" target="_blank">
        <img
          src={twitter}
          alt="Logo Twitter"
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons
              ? `visible md:bottom-[13.5rem] bottom-[11.7rem]`
              : "invisible bottom-7"
          }`}
        />
      </a>
      <a rel="notfollow" href="https://www.instagram.com/" target="_blank">
        <img
          src={instagram}
          alt="Logo Instagram"
          className={`md:h-20 md:w-20 w-[4rem] h-[4rem] opacity-40 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons
              ? `visible md:bottom-[8rem] bottom-[7rem]`
              : "invisible bottom-7"
          }`}
        />
      </a>
      <img
        src={menuRs}
        onClick={handleClick}
        alt="Menu Redes Sociales"
        className={`md:w-24 md:h-24 w-[5rem] h-[5rem] fixed bottom-5 right-5 hover:opacity-100 cursor-pointer transition-all duration-300 sm: ${
          showButtons ? "opacity-100" : "opacity-40"
        }`}
      />
    </>
  );
}

export default BtnSocial;
