function Section0(){
  return(
    <section>
      <h1>Nombre</h1>
    </section>
  )
}

function Section1(){
  return(
    <section>
      <h1>Nuestro metodo</h1>
    </section>
  )
}

function Section2(){
  return(
    <section>
      <h1>Programas</h1>
    </section>
  )
}

function Section3(){
  return(
    <section>
      <h1>Sobre Nosotros</h1>
      <h1>Nuestros Profecionales</h1>
    </section>
  )
}

function Section4(){
  return(
    <section>
      <h1>Formulario</h1>
    </section>
  )
}

function App() {
  return (
    <>
      <body className=" font-bellota ">
        <header>
          <nav></nav>
        </header>
        <Section0/>
        <Section1/>
        <Section2/>
        <Section3/>

        <footer></footer>
      </body>
    </>
  )
}

export default App