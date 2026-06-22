import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import short1 from "../assets/short1.jpg";
import short2 from "../assets/short2.jpg";
import short3 from "../assets/short3.jpg";
import short4 from "../assets/short4.jpg";
import short5 from "../assets/short5.jpg";
import short6 from "../assets/short6.jpg";

import "../styles/camisas.css";
import { useCart } from "../context/CartContext";

function Shorts() {
  const { agregarAlCarrito } = useCart();

  const productos = [
    { id: 1, nombre: "Short Deportivo Negro", precio: 15, imagen: short1 },
    { id: 2, nombre: "Short Casual Azul", precio: 18, imagen: short2 },
    { id: 3, nombre: "Short Jean", precio: 20, imagen: short3 },
    { id: 4, nombre: "Short Deportivo Gris", precio: 17, imagen: short4 },
    { id: 5, nombre: "Short Urbano Negro", precio: 22, imagen: short5 },
    { id: 6, nombre: "Short Verano Blanco", precio: 19, imagen: short6 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">
        <h1 className="titulo">
          Shorts para Caballeros
        </h1>

        <div className="productos">
          {productos.map((producto) => (
            <div className="card" key={producto.id}>
              <img
                src={producto.imagen}
                alt={producto.nombre}
              />

              <div className="card-info">
                <h3>{producto.nombre}</h3>

                <p className="descripcion">
                  Shorts cómodos y modernos para cualquier ocasión.
                </p>

                <div className="estrellas">
                  ⭐⭐⭐⭐⭐
                </div>

                <div className="contenedor-precios">
                  <span className="precio-anterior">
                    ${producto.precio + 10}
                  </span>

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

export default Shorts;