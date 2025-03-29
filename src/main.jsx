import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // Importar React Router
import App from "./App";
import "./index.css"; // Importa estilos si tienes Tailwind o SCSS.

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Envolver App en BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
