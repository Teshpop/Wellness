import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card(props) {
  const [show, setShow] = useState(false);

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <>
      <animated.div
        className={` flex flex-col items-center ${props.color} w-[17.5rem] sm:w-[35rem] xl:w-[33rem] h-[70%] rounded-xl py-8 gap-5`}
        style={props3}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="flex flex-row justify-center items-center w-[80%] lg:gap-5">
          <h2 className=" text-lg sm:text-2xl uppercase text-center">
            {props.title}
          </h2>
          <img
            className=" rounded-full h-16 sm:h-20"
            src={props.imagen}
            alt="imagen clase"
          />
        </div>
        <div className=" h-[80%] w-[70%] overflow-hidden overflow-y-scroll ">
          <p className="text-justify text-sm sm:text-base">{props.text}</p>
        </div>
      </animated.div>
    </>
  );
}

export default Card;
