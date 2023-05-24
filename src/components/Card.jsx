import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

function Card1(props) {
  return (
    <>
      <div className="absolute -top-10 md:relative md:top-0  h-[4.5rem] w-[5rem] md:h-[7.5rem] md:w-[7rem] rounded-full flex justify-center items-center">
        <img
          className="rounded-full h-full w-[90%] object-cover"
          style={{ objectFit: "cover" }}
          src={props.imagen}
          alt="imagen clase"
        />
      </div>
      <div className="flex flex-col justify-center items-center w-[95%] md:w-[80%] xl:gap-5">
        <h2 className="text-sm sm:text-base xl:text-xl uppercase text-center">
          {props.title}
        </h2>
      </div>
      <div className="h-[80%] w-[76%] overflow-hidden overflow-y-scroll">
        <p className="text-justify text-sm sm:text-base">{props.text}</p>
      </div>
    </>
  );
}

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
        className={` flex flex-col items-center ${props.color} w-[18rem] h-[80%] md:w-[17.5rem] lg:w-[30rem] xl:w-[29rem] md:h-[70%] rounded-xl pb-2 pt-8 gap-2 md:py-8 md:gap-5`}
        style={props3}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <Card1 title={props.title} text={props.text} imagen={props.imagen} />
      </animated.div>
    </>
  );
}

export default Card;
