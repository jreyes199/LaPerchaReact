import React from 'react';
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import { FaInstagram, FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import "../styles/contacto.css";

export default function Contacto() {
  return (
    <div className="contacto-light-container">
      <Navbar />

      <section className="contacto-hero-light">
        <div className="hero-content">
          <span className="hero-subtitle-light">Boutique & Tendencia</span>
          <h1 className="hero-title-light">Conéctate con Nosotros</h1>
          <p className="hero-text-light">
            Elige tu canal preferido. Estamos listos para atenderte y ayudarte con tu estilo.
          </p>
          <div className="luxury-line-light"></div>
        </div>
      </section>

      <main className="channels-section-light">
        <div className="channels-grid-light">

          <a
            href="https://instagram.com/tiendalapercha"
            target="_blank"
            rel="noreferrer"
            className="light-card instagram-hover"
          >
            <div className="card-icon-light">
              <FaInstagram />
            </div>
            <div className="card-body-light">
              <h3>Instagram</h3>
              <p>@tiendalapercha</p>
              <span className="card-link">Ver perfil →</span>
            </div>
          </a>

          <a
            href="https://tiktok.com/@lapercha"
            target="_blank"
            rel="noreferrer"
            className="light-card tiktok-hover"
          >
            <div className="card-icon-light">
              <FaTiktok />
            </div>
            <div className="card-body-light">
              <h3>TikTok</h3>
              <p>@lapercha</p>
              <span className="card-link">Ver videos →</span>
            </div>
          </a>

          <a
            href="https://facebook.com/lapercha"
            target="_blank"
            rel="noreferrer"
            className="light-card facebook-hover"
          >
            <div className="card-icon-light">
              <FaFacebookF />
            </div>
            <div className="card-body-light">
              <h3>Facebook</h3>
              <p>Tienda La Percha</p>
              <span className="card-link">Visitar página →</span>
            </div>
          </a>

          <a
            href="https://wa.me/50558761020"
            target="_blank"
            rel="noreferrer"
            className="light-card whatsapp-hover"
          >
            <div className="card-icon-light">
              <FaWhatsapp />
            </div>
            <div className="card-body-light">
              <h3>WhatsApp</h3>
              <p>+505 5876-1020</p>
              <span className="card-link">Chatear ahora →</span>
            </div>
          </a>

        </div>
      </main>

      <Footer />
    </div>
  );
}