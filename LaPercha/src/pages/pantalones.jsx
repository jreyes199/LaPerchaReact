import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import jean1 from "../assets/jean1.jpg";
import jean2 from "../assets/jean2.jpg";
import jean3 from "../assets/jean3.jpg";
import jean4 from "../assets/jean4.jpg";
import { useCart } from "../context/CartContext";
import "../styles/camisas.css";

function Pantalones() {
  const { agregarAlCarrito } = useCart();
  const productos = [
    { id: 1, nombre: "Jean Azul Clásico", precio: 25, imagen: jean1 },
    { id: 2, nombre: "Jean Negro Slim", precio: 28, imagen: jean2 },
    { id: 3, nombre: "Jean Casual", precio: 30, imagen: jean3 },
    { id: 4, nombre: "Jean Moderno", precio: 32, imagen: jean4 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">

        <h1 className="titulo">
          Pantalones para Caballeros
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
                  Pantalones modernos y cómodos para cualquier ocasión.
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

export default Pantalones;