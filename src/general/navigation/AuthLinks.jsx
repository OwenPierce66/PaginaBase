import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import VanityHome from "../pages/HellsVanity/VanityHome";
import Home from "../pages/Home/home";
import TestImage from "../pages/services/testing";
import Services from "../pages/services/Services";
import HellsVanity from "../pages/HellsVanity/HellsVanity";
import Hells from "../pages/HellsVanity/Hells";
import LesliSpa from "../pages/leslispa/LesliSpa";

const AuthLinks = () => {
    return (
        <Routes>
            {/* Ruta principal: Home */}
            <Route path="home" element={<Home />} />

            {/* Redirigir /app a /app/home */}
            <Route path="/" element={<Navigate to="home" replace />} />

            {/* Rutas adicionales */}
            <Route path="vanity-home" element={<VanityHome />} />
            <Route path="hellsvanity" element={<HellsVanity />} />
            <Route path="testing" element={<TestImage />} />
            <Route path="services" element={<Services />} />
            <Route path="hells" element={<Hells />} />
            <Route path="leslispa" element={<LesliSpa />} />
        </Routes>
    );
};

export default AuthLinks;
