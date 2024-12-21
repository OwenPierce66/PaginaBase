import React from "react";
// import "./FullPage.scss";
import CenterImage from "../../../general/images/image.png";

import "./vanityhome.scss";
const FullPage = () => {
    return (
        <div className="full-page">
            {/* Header */}
            <header className="header">
                <div className="logo">Hells Vanity</div>
                <nav className="nav">
                    <a href="#home">Inicio</a>
                    <a href="#blog">Blog</a>
                    <a href="#booking">Reserva online</a>
                    <a href="#portfolio">Portafolio</a>
                    <a href="#search">Search</a>
                </nav>
            </header>

            {/* Sección principal */}
            <section className="main-content">
                <div className="intro">
                    <h1>Explora Nuestros Diseños</h1>
                    <p>Bienvenido a nuestro mundo</p>
                    <div className="images">
                        <img src={CenterImage} alt="Design 1" />
                        <img src={CenterImage} alt="Design 2" />
                        <img src={CenterImage} alt="Design 3" />
                    </div>
                </div>
            </section>

            {/* Blog Section */}
            <section className="blog-section">
                <h2>Blog</h2>
                <div className="blog-cards">
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 1" />
                        <h3>Ahora puedes bloguear estés...</h3>
                        <p>
                            Logramos que resulte más rápido y práctico administrar tu blog
                            desde cualquier lugar...
                        </p>
                    </div>
                    <div className="blog-card">
                        <img src={CenterImage} alt="Blog 2" />
                        <h3>Haz crecer tu comunidad</h3>
                        <p>
                            Con Wix Blog, no solo compartes tu voz con el mundo, sino que
                            también puedes cultivar...
                        </p>
                    </div>
                </div>
            </section>

            {/* Servicios */}
            <section className="services-section">
                <h2>Servicios</h2>
                <div className="services">
                    <div className="service-item">
                        <p>Diseño de tatuajes personalizados</p>
                        <span>$300</span>
                        <button>Reservar ahora</button>
                    </div>
                    <div className="service-item">
                        <p>Perforaciones o "piercings" barbell</p>
                        <span>$150</span>
                        <button>Reservar ahora</button>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="footer-contact">
                    <h3>Hells Vanity</h3>
                    <p>52-1-33-12345678</p>
                    <p>info@sitio.com</p>
                    <p>Centro, Nuevo Casas Grandes, Chih., México</p>
                </div>
                <div className="footer-subscribe">
                    <h3>Suscríbete a Nuestro Boletín</h3>
                    <input type="email" placeholder="Ingresa tu correo" />
                    <button>Únete</button>
                </div>
            </footer>
        </div>
    );
};

export default FullPage;
