import { useState } from "react"
import {
  compartir,
  tiktokLogo,
  facebookLogo,
  instagramLogo,
  twitterLogo,
} from "../assets"

function BtnSocial() {
  const [showButtons, setShowButtons] = useState(false)

  function handleClick() {
    setShowButtons(!showButtons)
  }

  return (
    <div className="z-50 ">
      <a
        rel="notfollow noreferrer"
        href="https://www.tiktok.com/"
        target="_blank"
      >
        <img
          src={tiktokLogo}
          alt="Logo Tik-Tok"
          className={`w-[3rem] h-[3rem] opacity-80 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons ? `visible bottom-[16.5rem]` : "invisible bottom-7"
          }`}
        />
      </a>
      <a
        rel="notfollow noreferrer"
        href="https://www.facebook.com/"
        target="_blank"
      >
        <img
          src={facebookLogo}
          alt="Logo Facebook"
          className={`w-[3rem] h-[3rem] opacity-80 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons ? `visible bottom-[13rem]` : "invisible bottom-7"
          }`}
        />
      </a>
      <a
        rel="notfollow noreferrer"
        href="https://www.twitter.com/"
        target="_blank"
      >
        <img
          src={twitterLogo}
          alt="Logo Twitter"
          className={`w-[3rem] h-[3rem] opacity-80 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons ? `visible bottom-[9.5rem]` : "invisible bottom-7"
          }`}
        />
      </a>
      <a
        rel="notfollow noreferrer"
        href="https://www.instagram.com/"
        target="_blank"
      >
        <img
          src={instagramLogo}
          alt="Logo Instagram"
          className={`w-[3rem] h-[3rem] opacity-80 hover:opacity-100 fixed md:right-7 right-8 transition-all duration-300 ${
            showButtons ? `visible bottom-[6rem]` : "invisible bottom-7"
          }`}
        />
      </a>
      <img
        src={compartir}
        onClick={handleClick}
        alt="Menu Redes Sociales"
        className={`w-[3rem] h-[3rem] fixed bottom-[2.5rem] right-7 hover:opacity-100 cursor-pointer transition-all duration-300 z-[99999] ${
          showButtons ? "opacity-100" : "opacity-90"
        }`}
      />
    </div>
  )
}

export default BtnSocial
