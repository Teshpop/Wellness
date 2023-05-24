import { useState } from "react"
import { useSpring, animated } from "react-spring"

function Card(props) {
  const [show, setShow] = useState(false)

  const props3 = useSpring({
    opacity: 1,
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  })
  return (
    <>
      <animated.div
        className={` flex flex-col items-center ${props.color} w-[450px] h-[350px] rounded-xl py-8 gap-5`}
        style={props3}
        onMouseEnter={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
      >
        <div className="flex flex-col justify-center items-center w-[80%] lg:gap-5">
          <div className="w-20 h-20 rounded-full flex justify-center items-center relative ">
            <img
              className="rounded-full w-full h-full object-fill"
              style={{ objectFit: "cover" }}
              src={props.imagen}
              alt="imagen clase"
            />
          </div>
          <h2 className="text-lg sm:text-xl uppercase text-center">
            {props.title}
          </h2>
          <p className="text-center text-sm sm:text-base">{props.text}</p>
        </div>
      </animated.div>
    </>
  )
}

export default Card
