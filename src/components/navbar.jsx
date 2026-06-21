import { Link } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../context/CartContext";
import Carrito from "./Carrito";

function Navbar() {
  const [abrirCarrito, setAbrirCarrito] = useState(false);

  const { carrito } = useCart();

  const cantidadTotal = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  return (
    <>
      <header className="header">
        <nav className="navbar">
          <div className="title">La Percha</div>

          <div className="search-box">
            <input type="text" placeholder="Buscar" />
          </div>

          <div className="icons">
            <div className="icon user">👤</div>

            <div
              className="icon cart"
              onClick={() => setAbrirCarrito(!abrirCarrito)}
              style={{ cursor: "pointer" }}
            >
              🛒
              <span id="cart-count">
                {cantidadTotal}
              </span>
            </div>
          </div>
        </nav>

        <div className="tabs">
          <Link to="/">Inicio</Link>
          <Link to="/damas">Damas</Link>
          <Link to="/caballeros">Caballeros</Link>
          <Link to="/contacto">Contáctanos</Link>
          <a href="#">Blog</a>
          <a href="#">Verano</a>
        </div>
      </header>

      <Carrito
        abierto={abrirCarrito}
        cerrar={() => setAbrirCarrito(false)}
      />
    </>
  );
}

export default Navbar;