import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import camisaImg from "../assets/camisas.jpg";
import pantalonImg from "../assets/pantalones.jpg";

import "../styles/categoriaDyC.css";

function Caballeros() {
  return (
    <>
      <Navbar />

      <main className="contenido-caballeros">
        <div className="breadcrumb">
          <strong>Sección para Caballeros</strong>
        </div>

        <section className="hero"></section>

        <div className="categorias">

          <Link to="/camisas" className="item">
            <img src={camisaImg} alt="Camisas" />
            <p>Camisas</p>
          </Link>

          <Link to="/pantalones" className="item">
  <img src={pantalonImg} alt="Pantalones" />
  <p>Pantalones</p>
</Link>

        </div>
      </main>

      <Footer />
    </>
  );
}

export default Caballeros;