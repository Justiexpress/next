import React from 'react';
import styles from './Testimonios.module.scss';

export const Testimonios = () => {
  return (
    <div
      className="container"
      id="Testimonios"
      data-aos="fade-up"
      data-aos-duration="2500"
    >
      <h1>Testimonios de nuestros clientes</h1>
      <div className="section-title-divider"></div>
      <p>
        En Justiexpress somos los más interesados en proteger los derechos de
        nuestros clientes. A continuación, algunos testimonios que dan cuenta de
        la gratificante y satisfactoria experiencia con Justiexpress:
      </p>
    </div>
  );
};

export default Testimonios;