import whatsapp from "../assets/img/whatsappLogo.png";
import { Form, Formik } from "formik";
import { createDataRequest } from "../api/datas.api.js";
import Calendar from "./Calendario.jsx";

function Formulario() {
  return (
    <>
      <section>
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
              <label>Nombre</label>
              <input
                type="text"
                name="name"
                placeholder="Nombre(s)"
                onChange={handleChange}
                value={values.name}
              />

              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="example@gmail.com"
                onChange={handleChange}
                value={values.email}
              />

              <label>Telefono</label>
              <input
                type="tel"
                name="number"
                onChange={handleChange}
                value={values.number}
              />

              <label>Fecha</label>
              <input
                type="date"
                name="date"
                onChange={handleChange}
                value={values.date}
              />
              <Calendar />

              <label>Hora</label>
              <input
                type="time"
                name="time"
                onChange={handleChange}
                value={values.time}
              />

              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Saving..." : "Save"}
              </button>
            </Form>
          )}
        </Formik>
        <a href="">
          <img src={whatsapp} alt="" />
        </a>
      </section>
    </>
  );
}

export default Formulario;
