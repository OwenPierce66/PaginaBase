import React, { useState } from "react";
// import "./styles.scss";
import "./navigation.scss";
const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);

    const menuItems = [
        {
            name: "Tienda",
            options: ["Ver lo último", "Mac", "iPad", "iPhone", "Apple Watch", "Accesorios"],
        },
        {
            name: "Mac",
            options: ["MacBook Air", "MacBook Pro", "Mac Mini", "iMac", "Mac Studio"],
        },
        {
            name: "iPad",
            options: ["iPad Pro", "iPad Air", "iPad Mini", "iPad"],
        },
        {
            name: "iPhone",
            options: ["iPhone 14", "iPhone 13", "iPhone SE", "Accesorios"],
        },
        {
            name: "Watch",
            options: ["Apple Watch Series 8", "Apple Watch SE", "Apple Watch Ultra"],
        },
        // Agrega más items según sea necesario
    ];

    return (
        <div className="navbar-container">
            <nav className="navbar">
                {menuItems.map((item, index) => (
                    <div
                        className="navbar-item"
                        key={index}
                        onMouseEnter={() => setActiveMenu(item.name)}
                        onMouseLeave={() => setActiveMenu(null)}
                    >
                        {item.name}
                        {activeMenu === item.name && (
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
            </nav>
        </div>
    );
};

export default Navbar;
