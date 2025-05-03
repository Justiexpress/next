'use client';

import { useEffect } from 'react';
import styles from './QuienesSomos.module.scss';

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

export const QuienesSomos = () => {
  // Inicializamos AOS cuando el componente se monta (solo en el cliente)
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div 
      className={`container ${styles.quienesSomos}`}
      id="Quiénes-Somos"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <h2>Quiénes somos</h2>
      <div className="section-title-divider"></div>
      <div className="row">
        <br />
        <br />
        <br />
        <div className="col-lg-2 d-inline-flex justify-content-center">
          <i
            className="bi bi-slash-lg d-flex"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          ></i>
          <i
            className={`i2 bi bi-slash-lg d-flex`}
            data-aos="fade-down-left"
            data-aos-duration="3000"
          ></i>
        </div>
        <br />
        <div className="col-lg-8">
          <p>
            Somos un equipo interdisciplinario de abogados y economistas que
            trabajamos para posicionarnos como la plataforma virtual de
            servicios jurídicos más ágil y confiable del mercado. Nuestro
            propósito es universalizar el acceso a servicios jurídicos a bajo
            costo, con rapidez, agilidad y en condiciones de alta calidad.
          </p>
        </div>
        <div className="col-lg-2 d-inline-flex justify-content-center">
          <i
            className="bi bi-slash-lg d-flex"
            data-aos="fade-up-right"
            data-aos-duration="3000"
          ></i>
          <i
            className={`i2 bi bi-slash-lg d-flex`}
            data-aos="fade-down-left"
            data-aos-duration="3000"
          ></i>
        </div>
      </div>
    </div>
  );
};