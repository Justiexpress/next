import { useEffect } from 'react';
import styles from './Quote.module.scss';

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

export const Quote = () => {
  // Inicializamos AOS cuando el componente se monta (solo en el cliente)
  useEffect(() => {
    initAOS();
  }, []);

  return (
    <div
      id="Quote"
      className={`container ${styles.quote}`}
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <p>
        <i>
          "El rol de la tecnología y la automatización en Justiexpress se
          traduce en precios justos, calidad y velocidad en la entrega de todo
          nuestro portafolio de servicios"
        </i>
        <br />
        <sub>Fundadores Justiexpress</sub>
      </p>
    </div>
  );
};