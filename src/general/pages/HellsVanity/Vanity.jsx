import React from "react";
import "./hellsvanity.scss";
import CenterImage from "../../../general/images/image.png";
import BlogImage1 from "../../../general/images/blog1.png";
import BlogImage2 from "../../../general/images/blog2.png";
import BlogImage3 from "../../../general/images/blog3.png";

const HellsVanity = () => {
  return (
    <div className="hells-vanity">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={CenterImage} alt="Hells Vanity Logo" />
          <span>Hells Vanity</span>
        </div>
        <nav className="nav">
          <a href="#inicio">Inicio</a>
          <a href="#blog">Blog</a>
          <a href="#reserva-online">Reserva online</a>
          <a href="#portafolio">Portafolio</a>
        </nav>
        <div className="search">
          <span>Search</span>
          <span className="search-icon">🔍</span>
        </div>
      </header>

      {/* Main Section */}
      <main className="main-content">
        <div className="intro">
          <p className="subtitle">Bienvenido a nuestro mundo</p>
          <h1 className="title">Explora Nuestros Diseños</h1>
        </div>

        {/* Positioned Images */}
        <div className="image-layout">
          <div className="image-left">
            <img src={CenterImage} alt="Left Tattoo Design" />
          </div>
          <div className="image-right">
            <img src={CenterImage} alt="Right Tattoo Design" />
          </div>
          <div className="image-bottom">
            <img src={CenterImage} alt="Bottom Tattoo Design" />
          </div>
        </div>
      </main>

      {/* Blog Section */}
      <section className="blog-section">
        <h2 className="blog-title">Blog</h2>
        <div className="blog-cards">
          {/* Blog Card 1 */}
          <div className="blog-card">
            <img src={BlogImage1} alt="Blog 1" className="blog-image" />
            <div className="blog-content">
              <h3>Ahora puedes bloguear estés donde estés...</h3>
              <p>
                Logramos que resulte más rápido y práctico administrar tu blog
                desde cualquier lugar...
              </p>
              <div className="blog-meta">
                <span className="views">26</span>
                <span className="likes">❤</span>
              </div>
            </div>
          </div>

          {/* Blog Card 2 */}
          <div className="blog-card">
            <img src={BlogImage2} alt="Blog 2" className="blog-image" />
            <div className="blog-content">
              <h3>Haz crecer tu comunidad</h3>
              <p>
                Con Wix Blog, no solo compartes tu voz con el mundo, sino que
                también puedes cultivar...
              </p>
              <div className="blog-meta">
                <span className="views">21</span>
                <span className="likes">❤</span>
              </div>
            </div>
          </div>

          {/* Blog Card 3 */}
          <div className="blog-card">
            <img src={BlogImage3} alt="Blog 3" className="blog-image" />
            <div className="blog-content">
              <h3>Diseña un blog atractivo</h3>
              <p>
                Cuando se trata de diseño, Wix Blog tiene todo lo que necesitas
                para crear entradas magníficas...
              </p>
              <div className="blog-meta">
                <span className="views">7</span>
                <span className="likes">❤</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HellsVanity;
