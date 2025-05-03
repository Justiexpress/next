'use client';

import React, { useEffect } from "react";

// Verificamos si AOS está disponible (solo en el cliente)
const initAOS = () => {
  if (typeof window !== 'undefined') {
    // Importación dinámica de AOS solo en el cliente
    import('aos').then((AOS) => {
      AOS.init({
        // Configuración por defecto si es necesaria
      });
    });
  }
};

export const ServiciosText = () => {
  // Inicializamos AOS cuando el componente se monta (solo en el cliente)
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div
      id="ServiciosText"
      className="container"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <h2>Nuestros servicios</h2>
      <div className="section-title-divider"></div>
    </div>
  );
};

export default ServiciosText;