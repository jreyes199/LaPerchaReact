import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import blusaImg from "../assets/blusas.png";
import pantalonImg from "../assets/pantalon.png";
import vestidoImg from "../assets/vestido.png";
import "../styles/categoriaDyC.css";
function Damas() {
  return (
    <>
      <Navbar />

      <main className="contenido-damas">
        <div className="breadcrumb">
          <strong>Sección para Damas</strong>
        </div>

        <section className="hero"></section>

        <div className="categorias">

          <Link to="/blusas" className="item">
            <img src={blusaImg} alt="blusas" />
            <p>Blusas</p>
          </Link>

          <Link to="/pantalonesdama" className="item">
  <img src={pantalonImg} alt="Pantalones" />
  <p>Pantalones</p>
</Link>

          <Link to="/vestidos" className="item">
            <img src={vestidoImg} alt="vestidos" />
            <p>Vestidos</p>
          </Link>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Damas;





