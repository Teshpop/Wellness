import whatsapp from "/img/whatsappLogo.png";
import icono from "/img/WellnessLogo.png";

import { Form, Formik } from "formik";
import { createDataRequest } from "../api/datas.api.js";

function Formulario() {
  const style =
    "focus:outline-none outline-none focus:shadow-none shadow-lg bg-brown-100 py-1 px-2 rounded-lg transition-all duration-300";
  return (
    <>
      <section>
        <h1>Tienes alguna duda?</h1>
        <h2>Contacta con nosotros!</h2>
        <div className=" bg-brown-200 h-screen w-full flex justify-center items-center flex-row">
          <div className=" flex flex-row h-[90%] w-[90%] justify-center items-center gap-[20rem]">
            <Formik
              initialValues={{
                name: "",
                email: "",
                number: "",
                date: "",
                time: "",
              }}
              onSubmit={async (values, actions) => {
                console.log(values);
                try {
                  const response = await createDataRequest(values);
                  console.log(response);
                  actions.resetForm();
                } catch (error) {
                  console.error(error);
                }
              }}
            >
              {({ handleChange, handleSubmit, values, isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                  <div className="flex flex-col gap-10">
                    <div className="flex flex-col text-xl gap-5">
                      <fieldset className="flex flex-col">
                        <label className="text-center">Nombre</label>
                        <input
                          className={style}
                          type="text"
                          name="name"
                          placeholder="Nombre(s)"
                          onChange={handleChange}
                          value={values.name}
                        />
                      </fieldset>

                      <fieldset className="flex flex-col">
                        <label className="text-center">Email</label>
                        <input
                          className={style}
                          type="email"
                          name="email"
                          placeholder="example@gmail.com"
                          onChange={handleChange}
                          value={values.email}
                        />
                      </fieldset>

                      <fieldset className="flex flex-col">
                        <label className="text-center">Telefono</label>
                        <input
                          className={style}
                          type="tel"
                          name="number"
                          onChange={handleChange}
                          value={values.number}
                        />
                      </fieldset>
                    </div>

                    <div className="flex flex-row justify-center items-center gap-16">
                      <button
                        className="text-3xl underline"
                        type="submit"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Eviando..." : "Enviar"}
                      </button>
                      <a href="https://wa.me/524442896434?text=%c2%a1Hola!%2c+me+encantar%c3%ada+apartar+un+lugar">
                        <img
                          className=" h-16 w-16 hover:drop-shadow-lg transition-all duration-300 "
                          src={whatsapp}
                          alt="icono whatsapp"
                        />
                      </a>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
            <img
              className=" drop-shadow-xl h-[20rem] "
              src={icono}
              alt="Logo"
            />
          </div>
        </div>
      </section>
    </>
  );
}

export default Formulario;
