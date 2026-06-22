import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import blusa1 from "../assets/blusa1.jpeg";
import blusa2 from "../assets/blusa2.jpg";
import blusa3 from "../assets/blusa3.jpg";
import blusa4 from "../assets/blusa4.jpg";
import blusa5 from "../assets/blusa5.jpg";
import blusa6 from "../assets/blusa6.jpg";
import blusa7 from "../assets/blusa7.jpg";
import blusa8 from "../assets/blusa8.jpg";


import { useCart } from "../context/CartContext";
import "../styles/camisas.css";

function Blusas() {
  const { agregarAlCarrito } = useCart();

  const productos = [
    { id: 1, nombre: "Blusa elegante cafe", precio: 15, imagen: blusa1 },
    { id: 2, nombre: "Blusa casual blanco", precio: 17, imagen: blusa2 },
    { id: 3, nombre: "Blusa elegante rojo vino", precio: 10, imagen: blusa3 },
    { id: 4, nombre: "Blusa casual negra", precio: 18, imagen: blusa4 },
    { id: 5, nombre: "Blusa fina satin cafe", precio: 20, imagen: blusa5 },
    { id: 6, nombre: "Blusa elegante satin verde", precio: 21, imagen: blusa6 },
    { id: 7, nombre: "Blusa elegante satin champan", precio: 22, imagen: blusa7 },
    { id: 8, nombre: "Blusa casual cafe claro", precio: 19, imagen: blusa8 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">

        <h1 className="titulo">
          Blusas para Dama
        </h1>

        <div className="productos">

          {productos.map((producto) => (
            <div className="card" key={producto.id}>

              <img src={producto.imagen} alt={producto.nombre} />

              <div className="card-info">

                <h3>{producto.nombre}</h3>

                <p className="descripcion">
                  Blusas modernas y cómodas para cualquier ocasión.
                </p>

                <div className="estrellas">
                  ⭐⭐⭐⭐⭐
                </div>

                <div className="contenedor-precios">
                  <span className="precio">
                    ${producto.precio}
                  </span>
                </div>

                <button
                  className="btn-carrito"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  Agregar al carrito
                </button>

              </div>
            </div>
          ))}

        </div>

      </main>

      <Footer />
    </>
  );
}

export default Blusas;