import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import Carrito from "./Carrito";

const OPCIONES_BUSQUEDA = [
  { nombre: "Camisas de mujer", ruta: "/blusas" },
  { nombre: "Camisas de hombre", ruta: "/camisas" },
  { nombre: "Blusas", ruta: "/blusas" },
  { nombre: "Pantalones para caballero", ruta: "/pantalones" },
  { nombre: "Pantalones para dama", ruta: "/pantalonesdama" },
  { nombre: "Vestidos", ruta: "/vestidos" },
  { nombre: "Damas", ruta: "/damas" },
  { nombre: "Caballeros", ruta: "/Caballeros" },
  { nombre: "Contacto", ruta: "/contacto" },
  { nombre: "Blog",ruta:"/blog"}
];

function Navbar() {
  const [abrirCarrito, setAbrirCarrito] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [sugerencias, setSugerencias] = useState([]);
  
  const navigate = useNavigate();
  const { carrito } = useCart();

  const cantidadTotal = carrito.reduce(
    (acc, item) => acc + item.cantidad,
    0
  );

  const manejarCambioBusqueda = (e) => {
    const valor = e.target.value;
    setBusqueda(valor);

    if (valor.trim() === "") {
      setSugerencias([]);
      return;
    }

    const filtradas = OPCIONES_BUSQUEDA.filter((opcion) =>
      opcion.nombre.toLowerCase().includes(valor.toLowerCase())
    );
    setSugerencias(filtradas);
  };

  const seleccionarSugerencia = (ruta) => {
    navigate(ruta);
    setBusqueda(""); 
    setSugerencias([]); 
  };

  const manejarKeyDown = (e) => {
    if (e.key === "Enter" && sugerencias.length > 0) {
      seleccionarSugerencia(sugerencias[0].ruta);
    }
  };

  return (
    <>
      <header className="header">
        <nav className="navbar">
          
          {/* LOGO DISTINGUIDO Y REFINADO */}
          <div className="title">
              La Percha
          </div>

          {/* BARRA DE BÚSQUEDA COMPACTA CON LUPA */}
          <div className="search-box">
            <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              placeholder="Buscar..." 
              value={busqueda}
              onChange={manejarCambioBusqueda}
              onKeyDown={manejarKeyDown}
            />
            
            {sugerencias.length > 0 && (
              <ul className="search-suggestions">
                {sugerencias.map((opcion, index) => (
                  <li key={index} onClick={() => seleccionarSugerencia(opcion.ruta)}>
                    {opcion.nombre}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* ICONOS VECTORIALES: USUARIO Y CARRITO CLÁSICO */}
          <div className="icons">
            {/* Icono de Usuario */}
            <Link to="/login" className="icon-link" aria-label="Usuario">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
            
            {/* Icono de Carrito Tradicional */}
            <div className="icon cart" onClick={() => setAbrirCarrito(!abrirCarrito)} aria-label="Carrito de compras">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
              {cantidadTotal > 0 && (
                <span id="cart-count">{cantidadTotal}</span>
              )}
            </div>
          </div>

        </nav>

        <div className="tabs">
          <Link to="/">Inicio</Link>
          <Link to="/damas">Damas</Link>
          <Link to="/caballeros">Caballeros</Link>
          <Link to="/contacto">Contáctanos</Link>
          <Link to="/blog">Blog</Link>
          
        </div>
      </header>

      <Carrito abierto={abrirCarrito} cerrar={() => setAbrirCarrito(false)} />
    </>
  );
}

export default Navbar;