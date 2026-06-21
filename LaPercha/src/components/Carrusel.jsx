import { useState, useEffect } from "react";
import "../index.css";

function Carrusel() {

  const imagenes = [
    "/imagenes/IMG1.avif",
    "/imagenes/IMG2.jpg",
    "/imagenes/IMG3.avif",
    "/imagenes/IMG4.jpg",
  ];

  const titulos = [
    "Moda que inspira",
    "Nueva colección",
    "Elegancia moderna",
    "Estilo único",
  ];

  const descripciones = [
    "Descubre las nuevas tendencias",
    "Prendas modernas para cada ocasión",
    "Viste con personalidad y confianza",
    "Diseños exclusivos para ti",
  ];

  const [index, setIndex] = useState(0);

  // CAMBIO AUTOMATICO
  useEffect(() => {

    const interval = setInterval(() => {

      setIndex((prev) =>
        prev === imagenes.length - 1
          ? 0
          : prev + 1
      );

    }, 4000);

    return () => clearInterval(interval);

  }, [imagenes.length]);



  // SIGUIENTE
  const siguiente = () => {

    setIndex(
      index === imagenes.length - 1
        ? 0
        : index + 1
    );

  };


  // ANTERIOR
  const anterior = () => {

    setIndex(
      index === 0
        ? imagenes.length - 1
        : index - 1
    );

  };



  return (

    <section className="carrusel">

      <div className="slider">

        {/* BOTON IZQUIERDO */}
        <button
          className="flecha izquierda"
          onClick={anterior}
        >
          ❮
        </button>


        {/* IMAGENES */}
        <div
          className="slides"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >

          {imagenes.map((img, i) => (

            <img
              key={i}
              src={img}
              alt={`slide-${i}`}
              className="slide-img"
            />

          ))}

        </div>


        {/* BOTON DERECHO */}
        <button
          className="flecha derecha"
          onClick={siguiente}
        >
          ❯
        </button>

      </div>



      {/* TEXTO */}
      <div className="info-carrusel">

        <h2>{titulos[index]}</h2>

        <p>{descripciones[index]}</p>

      </div>



      {/* PUNTITOS */}
      <div className="indicadores">

        {imagenes.map((_, i) => (

          <span
            key={i}
            className={`dot ${index === i ? "activo" : ""}`}
            onClick={() => setIndex(i)}
          ></span>

        ))}

      </div>

    </section>

  );

}

export default Carrusel;