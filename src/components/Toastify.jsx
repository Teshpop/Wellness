import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

function Toastify({ id }) {
  useEffect(() => {
    toast.info(
      <div className="text-center">
        <h1>¡Obten el 20% de descuento al mandanos tu correo electronico!</h1>
        <a className="underline" href={id}>
          ¡Haz click aqui!
        </a>
      </div>,
      {
        className: "bg-brown-100 text-brown-300",
        progressClassName: "bg-brown-300",
      }
    );
  }, []);
  return (
    <>
      <div>
        <ToastContainer icon={false} />
      </div>
    </>
  );
}

export default Toastify;
