import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styles from './Testimonios.module.scss';

export const TestimoniosCarusel = () => {
  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };
  
  return (
    <div
      id="TestimoniosCarusel"
      className={`${styles.testimoniosCarusel} justify-content-center`}
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>
                  "Su tarifa es increíble para personas que realmente no
                  tienen capacidad para un servicio como el que ustedes
                  prestan. Y, sin duda, su servicio para mí, vale más de lo
                  que me han cobrado."
                </i>
              </p>
              <blockquote className="blockquote-reverse">
                <br />
                <footer className={styles.footer}>Fredy Alexánder Agudelo</footer>
              </blockquote>
              <br />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>
                  "Muy buena presentación de los servicios profesionales que
                  ofrecen, página amigable y clara, de mucha utilidad en el
                  día a día de las personas, ofrecen asesoría inmediata y sin
                  moverse del sitio donde se encuentran, las personas no
                  gastan en desplazamientos onerosos para buscar asesoría,
                  aquí la tienen a la mano."
                </i>
              </p>
              <blockquote className="blockquote-reverse">
                <br />
                <footer className={styles.footer}>Gerardo Ramírez</footer>
              </blockquote>
              <br />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>
                  "Les doy gracias infinitas por su ayuda, pues mi
                  preocupación era mucha. Mil gracias por la eficiencia y
                  rapidez con la que ayudan a las personas."
                </i>
              </p>
              <blockquote className="blockquote-reverse">
                <br />
                <footer className={styles.footer}>Albanny Giraldo</footer>
              </blockquote>
              <br />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>
                  "Muy agradecida con ustedes y su trabajo. Sin duda,
                  cualquier cosa que necesite acudiré a ustedes."
                </i>
              </p>
              <blockquote className="blockquote-reverse">
                <br />
                <footer className={styles.footer}>Ana Milena Ramírez</footer>
              </blockquote>
              <br />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>
                  "Muchísimas gracias a ustedes, fue una excelente gestión y
                  sobre todo a un excelente precio. Estoy inmensamente
                  agradecida. Yo los súper recomiendo, sin duda alguna cada
                  que tenga que acudir mi familia, mis amistades o yo, no
                  dudaré en elegirlos nuevamente."
                </i>
              </p>
              <blockquote className="blockquote-reverse">
                <br />
                <footer className={styles.footer}>Paula Andrea Jaramillo</footer>
              </blockquote>
              <br />
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
        
        <Carousel.Item interval={3000}>
          <div className={`card text-white text-center ${styles.card}`}>
            <div className={`card-header ${styles.cardHeader}`}>
              <p className="text-center">
                Otros comentarios que nos comparten nuestros clientes:
              </p>
            </div>
            <div className="card-body">
              <p className={`card-text ${styles.cardText}`}>
                <i>"Excelente servicio, con total eficiencia y calidad."</i>
                <br />
                <i>"Es excelente el servicio para con los ciudadanos."</i>
                <br />
                <i>"Servicio, rápido, confiable y seguro."</i>
                <br />
                <i>"Un servicio excelente y ágil."</i> <br />
                <br />
              </p>
            </div>
            <Carousel.Caption></Carousel.Caption>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};