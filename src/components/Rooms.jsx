import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import imgH2 from "/img/imgH2.jpg";
import imgH3 from "/img/imgH3.jpg";
import imgH4 from "/img/imgH4.jpg";
import imgH5 from "/img/imgH5.jpg";
import imgH6 from "/img/imgH6.jpg";
import imgH7 from "/img/imgH7.jpg";
import imgH8 from "/img/imgH8.jpg";
import imgH9 from "/img/imgH9.jpg";

function Rooms() {
  return (
    <>
      <AwesomeSlider className="flex flex-col justify-center items-center">
        <div className="">
          <img src={imgH2} alt="" />
        </div>
        <div>
          <img src={imgH3} alt="" />
        </div>
        <div>
          <img src={imgH4} alt="" />
        </div>
        <div>
          <img src={imgH5} alt="" />
        </div>
        <div>
          <img src={imgH6} alt="" />
        </div>
        <div>
          <img src={imgH7} alt="" />
        </div>
        <div>
          <img src={imgH8} alt="" />
        </div>
        <div>
          <img src={imgH9} alt="" />
        </div>
      </AwesomeSlider>
    </>
  );
}

export default Rooms;
