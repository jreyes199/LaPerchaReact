import "../index.css";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer">

      <div className="footer-col">
        <h2 className="footer-logo">La Percha</h2>

        <p>
          Tienda de ropa especializada en prendas casuales para hombres y mujeres,
          diseñada para quienes buscan combinar estilo, comodidad y tendencias
          actuales en su día a día.
        </p>
      </div>

      <div className="footer-col">
        <h3>Más información</h3>

         <Link to="/">Inicio</Link>
        <Link to="/damas">Damas</Link>
                  <Link to="/caballeros">Caballeros</Link>
                  <Link to="/contacto">Contáctanos</Link>
                  <Link to="/blog">Blog</Link>
      </div>

      <div className="footer-col">
        <h3>Contáctanos</h3>

        <p>📍 3c.primer modulo M/I, Managua, Mercado Oriental, Del Banpro de Ciudad Jardín, al lago 1 1/2 abajo, Managua.</p>
        <p>📞 +505 58761020</p>
        <p>✉️ laperchanica@gmail.com</p>
      </div>

      <div className="footer-col">
        <h3>Suscríbete</h3>

        <p>
          Recibe promociones, descuentos y novedades exclusivas de La Percha.
        </p>

        <div className="newsletter">
          <input
            type="email"
            placeholder="Tu correo electrónico"
          />
          <button>→</button>
        </div>
      </div>

    </footer>
  );
}

export default Footer;