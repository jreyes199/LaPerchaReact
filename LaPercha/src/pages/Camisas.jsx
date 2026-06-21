import Navbar from "../components/navbar";
import Footer from "../components/Footer";

import camisa1 from "../assets/camisa1.jpg";
import camisa2 from "../assets/camisa2.jpg";
import camisa3 from "../assets/camisa3.jpg";
import camisa4 from "../assets/camisa4.jpg";
import camisa5 from "../assets/camisa5.jpg";
import camisa6 from "../assets/camisa6.jpg";

import "../styles/camisas.css";
import { useCart } from "../context/CartContext";
function Camisas() {
 const { agregarAlCarrito } = useCart();
  const productos = [
    { id: 1, nombre: "Camisa Casual", precio: 25, imagen: camisa1 },
    { id: 2, nombre: "Camisa Elegante", precio: 30, imagen: camisa2 },
    { id: 3, nombre: "Camisa Polo Gris", precio: 28, imagen: camisa3 },
    { id: 4, nombre: "Camisa Blanca", precio: 32, imagen: camisa4 },
    { id: 5, nombre: "Camisa Elegante Azul", precio: 52, imagen: camisa5 },
    { id: 6, nombre: "Camisa Celeste de Botones", precio: 22, imagen: camisa6 },
  ];

  return (
    <>
      <Navbar />

      <main className="camisas-container">

        <h1 className="titulo">
          Camisas para Caballeros
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
              Moda masculina elegante y cómoda para cualquier ocasión.
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

export default Camisas;