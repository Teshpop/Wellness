import { whatsappLogo, Logo } from "../assets"
import { Form, Formik } from "formik"
import { createDataRequest } from "../api/datas.api.js"
import { Input, Textarea } from "@nextui-org/react"
import Button from "./Button"
import img from "../assets/ceremoniaCacao.png"

function Formulario() {
  const style =
    "focus:outline-none outline-none focus:shadow-none shadow-lg bg-brown-100 py-1 px-2 rounded-lg transition-all duration-300"
  return (
    <>
      <section id="Contact">
        <div className="bg-brown-200 w-full flex flex-col justify-center items-center">
          <div className="container mx-auto w-full">
            <div className="flex flex-col text-center pt-10">
              <h1 className="text-2xl md:text-4xl uppercase">
                ¿Listo para empezar tu viaje hacia el bienestar?
              </h1>
              <h2 className="text-base">
                ¡Contáctanos y déjanos ayudarte en cada paso del camino!
              </h2>
            </div>
            <section className="w-full flex h-[590px] px-28 my-20">
              <div className="flex shadow-2xl rounded-lg overflow-hidden mx-auto">
                <div className="w-1/2 bg-white h-full p-[42px] ">
                  <h2 className="text-[28px]">Contact us</h2>
                  <p className="text-base mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium, sunt.
                  </p>
                  <Formik
                    initialValues={{
                      name: "",
                      email: "",
                      number: "",
                    }}
                    onSubmit={async (values, actions) => {
                      console.log(values)
                      try {
                        const response = await createDataRequest(values)
                        console.log(response)
                        actions.resetForm()
                      } catch (error) {
                        console.error(error)
                      }
                    }}
                  >
                    {({ handleChange, handleSubmit, values, isSubmitting }) => (
                      <Form onSubmit={handleSubmit}>
                        <div className="flex flex-col text-xl gap-4 items-center mt-8 ">
                          <Input
                            className="w-full"
                            type="text"
                            width="100%"
                            name="name"
                            placeholder="Nombre"
                            onChange={handleChange}
                            value={values.name}
                          />

                          <Input
                            className="w-full"
                            width="100%"
                            type="email"
                            name="email"
                            placeholder="Direccion de correo electronico"
                            onChange={handleChange}
                            value={values.email}
                          />

                          <Input
                            className="w-full"
                            width="100%"
                            type="text"
                            name="number"
                            placeholder="Numero de telefono"
                            onChange={handleChange}
                            value={values.number}
                          />
                          <Textarea
                            className="w-full"
                            width="100%"
                            placeholder="Escribe tu mensaje..."
                          ></Textarea>
                          <Button>Enviar</Button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
                <img className="w-1/2 object-cover" src={img} />
              </div>
            </section>

            {/* <div className=" h-full w-full flex justify-center items-center">
            <div className=" flex flex-col lg:flex-row h-[90%] w-[90%] justify-center items-center lg:gap-[5rem]">
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  number: "",
                }}
                onSubmit={async (values, actions) => {
                  console.log(values)
                  try {
                    const response = await createDataRequest(values)
                    console.log(response)
                    actions.resetForm()
                  } catch (error) {
                    console.error(error)
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
                          className="text-3xl py-2 px-6 hover:shadow-md transition-all ease-in duration-300 rounded-md"
                          type="submit"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Eviando..." : "Enviar"}
                        </button>
                      </div>
                    </div>
                  </Form>
                )}
              </Formik>
              <div className="flex flex-col justify-center items-center gap-4">
                <pre>O envianos un mensaje</pre>
                <a href="https://wa.me/34625719131?text=%c2%a1Hola!%2c+me+encantar%c3%ada+apartar+un+lugar">
                  <img
                    className=" h-16 w-16 md:h-20 md:w-20 lg:hover:drop-shadow-lg transition-all duration-300 md:hover:animate-pulse "
                    src={whatsappLogo}
                    alt="icono whatsapp"
                  />
                </a>
              </div>
              <img
                className=" drop-shadow-xl md:h-[20rem] h-32 pt-4"
                src={Logo}
                alt="Logo"
              />
            </div>
          </div> */}
          </div>
        </div>
      </section>
    </>
  )
}

export default Formulario
