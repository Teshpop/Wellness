import React from "react"

const Button = ({ children, onClick = () => {}, className }) => {
  return (
    <button
      onClick={onClick}
      className={`text-base text-white bg-black py-3 px-3 rounded mt-10 hover:shadow-lg transition-shadow hover:opacity-95 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
