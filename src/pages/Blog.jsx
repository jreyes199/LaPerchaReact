import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import "../styles/blog.css";

import moda1 from "../assets/moda1.jpg";
import moda2 from "../assets/moda2.jpg";
import moda3 from "../assets/moda3.jpg";

function Blog() {
  const articulos = [
    {
      id: 1,
      titulo: "Tendencias de moda actuales",
      descripcion: "Descubre las tendencias más importantes de este año.",
      url: "https://genial.guru/articles/6-tendencias-de-moda-actuales-que-vale-la-pena-conocer-1475625/",
      imagen: moda1
    },
    {
      id: 2,
      titulo: "Estilo minimalista",
      descripcion: "Cómo vestir simple pero elegante en tu día a día.",
      url: "https://www.vogue.mx/moda/articulo/minimalismo-cuales-son-las-marcas-de-ropa-en-tendencia",
      imagen: moda2
    },
    {
      id: 3,
      titulo: "Colores en tendencia 2026",
      descripcion: "Los colores que dominarán la moda este año.",
      url: "https://www.vogue.mx/articulo/colores-2026",
      imagen: moda3
    }
  ];

  return (
    <>
      <Navbar />

      <main className="blog-container">
        <h1 className="titulo-blog">Blog de Moda</h1>

        <div className="blog-grid">
          {articulos.map((a) => (
            <div className="blog-card" key={a.id}>

              <img
                src={a.imagen}
                alt={a.titulo}
                className="blog-img"
              />

              <h3>{a.titulo}</h3>

              <p>{a.descripcion}</p>

              <a
                href={a.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-leer"
              >
                Leer más
              </a>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Blog;