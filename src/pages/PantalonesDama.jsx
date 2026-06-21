import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import jean1 from "../assets/Palazzo1.jpg";
import jean2 from "../assets/Palazzo2.jpg";
import jean3 from "../assets/Palazzo3.png";
import jean4 from "../assets/Palazzo4.jpg";
import jean5 from "../assets/Palazzo5.jpg";
import jean6 from "../assets/Palazzo6.jpg";
import jean7 from "../assets/Palazzo7.jpg";
import jean8 from "../assets/Palazzo8.jpg";
import { useCart } from "../context/CartContext";
import "../styles/camisas.css";

function  PantalonesDama() {
  const { agregarAlCarrito } = useCart();
  const productos = [
    { id: 1, nombre: "Pantalon de corte amplio", precio: 20, imagen: jean1 },
    { id: 2, nombre: "Pantalon de acabado refinado", precio: 23, imagen: jean2 },
    { id: 3, nombre: "Pantalon tiro alto, de tela fresca", precio: 30, imagen: jean3 },
    { id: 4, nombre: "Palazzo blanco moderno", precio: 32, imagen: jean4 },
    { id: 5, nombre: "Pantalon de caida fluida", precio: 35, imagen: jean5 },
    { id: 6, nombre: "Pantalon negro de pierna ancha", precio: 38, imagen: jean6 },
    { id: 7, nombre: "Pantalon celeste de corte recto", precio: 30, imagen: jean7 },
    { id: 8, nombre: "Pantalon crema suelto", precio: 20, imagen: jean8 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">

        <h1 className="titulo">
          Pantalones para Dama
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

export default PantalonesDama;