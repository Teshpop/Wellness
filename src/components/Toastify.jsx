import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";

import "react-toastify/dist/ReactToastify.css";

function Toastify({ id }) {
  useEffect(() => {
    toast.info(
      <div className="text-center">
        <h1>
          ¡Reserva ahora y asegura un descuento del 20% y un masaje totalmente
          gratuito!
          <br /> No dejes pasar esta oportunidad de mimarte y disfrutar de una
          experiencia de bienestar única. Dejanos tu contacto a continuación y
          déjanos cuidar de ti durante tu retiro de 7 días.
        </h1>
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
