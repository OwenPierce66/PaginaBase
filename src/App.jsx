import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./general/navigation/navbar";
import AuthLinks from "./general/navigation/AuthLinks";
import PiePagina from "./general/pages/HellsVanity/piePagina";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Rutas privadas o autenticadas */}
        <Route path="/app/*" element={<AuthLinks />} />

        {/* Redirigir cualquier otra ruta a /app/home */}
        <Route path="*" element={<Navigate to="/app/home" replace />} />
      </Routes>
      {/* <PiePagina /> */}
    </Router>
  );
}

export default App;
