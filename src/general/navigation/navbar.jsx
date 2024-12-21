import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navigation.scss";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuItems = [
        { name: "Home", route: "/app/home" },
        {
            name: "Tienda",
            route: "/app/vanity-home",
            options: ["Ver lo último", "Mac", "iPad", "iPhone", "Apple Watch", "Accesorios"],
        },
        {
            name: "Services",
            route: "/app/services",
            options: ["MacBook Air", "MacBook Pro", "Mac Mini", "iMac", "Mac Studio"],
        },
        { name: "Testing", route: "/app/testing" },
        { name: "HellsVanity", route: "/app/hellsvanity" },
        { name: "Hells", route: "/app/hells" },
    ];

    return (
        <nav className="navbar-container">
            {/* Botón de menú para dispositivos móviles */}
            <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                ☰
            </div>

            {/* Menú principal */}
            <div className={`navbar ${isMobileMenuOpen ? "open" : ""}`}>
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className="navbar-item"
                        onMouseEnter={() => setActiveMenu(item.name)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {item.route ? (
                            <Link to={item.route} className="navbar-link">
                                {item.name}
                            </Link>
                        ) : (
                            <span className="navbar-link">{item.name}</span>
                        )}

                        {activeMenu === item.name && item.options && (
                            <div className="dropdown">
                                {item.options.map((option, idx) => (
                                    <a href="#" className="dropdown-item" key={idx}>
                                        {option}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;
