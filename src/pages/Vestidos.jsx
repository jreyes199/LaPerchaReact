import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import vestidos1 from "../assets/vestidos1.jpg";
import vestidos2 from "../assets/vestidos2.jpg";
import vestidos3 from "../assets/vestidos3.jpg";
import vestidos4 from "../assets/vestidos4.jpg";
import vestidos5 from "../assets/vestidos5.jpg";
import vestidos6 from "../assets/vestidos6.jpg";
import vestidos7 from "../assets/vestidos7.jpg";
import vestidos8 from "../assets/vestidos8.jpg";


import { useCart } from "../context/CartContext";
import "../styles/camisas.css";

function Vestidos() {
  const { agregarAlCarrito } = useCart();

  const productos = [
    { id: 1, nombre: "Vestido corto casual verde", precio: 20, imagen: vestidos1 },
    { id: 2, nombre: "Vestido elegante verde olivo", precio: 35, imagen: vestidos2 },
    { id: 3, nombre: "Vestido fino elegante azul", precio: 30, imagen: vestidos3 },
    { id: 4, nombre: "Vestido largo elegante champan", precio: 38, imagen: vestidos4 },
    { id: 5, nombre: "Vestido elegante blanco", precio: 33, imagen: vestidos5 },
    { id: 6, nombre: "Vestido hermoso casual azulón", precio: 28, imagen: vestidos6 },
    { id: 7, nombre: "Vestido casual rojito con blanco", precio: 26, imagen: vestidos7 },
    { id: 8, nombre: "Vestido aesthetic lindo en negro", precio: 22, imagen: vestidos8 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">

        <h1 className="titulo">
          Vestidos para Dama
        </h1>

        <div className="productos">

          {productos.map((producto) => (
            <div className="card" key={producto.id}>

              <img src={producto.imagen} alt={producto.nombre} />

              <div className="card-info">

                <h3>{producto.nombre}</h3>

                <p className="descripcion">
                  Vestidos elegantes y cómodos para cualquier ocasión.
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

export default Vestidos;