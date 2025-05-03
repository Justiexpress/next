'use client';

import React, { useState } from "react";
import styles from "./FAQ.module.scss";
import Link from "next/link";

export interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className={`${styles["faq-item"]} ${isOpen ? styles.active : ""}`}>
      <button
        className={styles["faq-question"]}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span className={styles["question-text"]}>{question}</span>
        <span className={styles["toggle-icon"]}>
          <i className={`bi ${isOpen ? "bi-dash-circle" : "bi-plus-circle"}`}></i>
        </span>
      </button>
      <div className={`${styles["faq-answer"]} ${isOpen ? styles.open : ""}`}>
        <p>{answer}</p>
      </div>
    </article>
  );
};

export interface FAQSectionProps {
  faqItems?: {
    question: string;
    answer: string;
  }[];
  trackConversion?: (eventName: string, eventData?: any) => void;
  initialItems?: number;
  loadMoreIncrement?: number;
}

export const FAQ: React.FC<FAQSectionProps> = ({
  faqItems = [],
  trackConversion,
  initialItems = 6,
  loadMoreIncrement = 6,
}) => {
  // Estado para manejar el número de elementos visibles
  const [visibleItems, setVisibleItems] = useState(initialItems);

  // Verificar si hay más elementos para mostrar
  const hasMoreItems = visibleItems < faqItems.length;

  // Función para cargar más elementos
  const loadMore = () => {
    if (trackConversion) {
      trackConversion("faq_load_more", {
        current_visible: visibleItems,
        total_items: faqItems.length,
      });
    }
    setVisibleItems((prev) => Math.min(prev + loadMoreIncrement, faqItems.length));
  };

  return (
    <section
      id="FAQ"
      className={styles["faq-section"]}
      data-aos="fade-up"
      data-aos-duration="1500"
      aria-label="Preguntas frecuentes"
    >
      <div className="container">
        <h2>Preguntas Frecuentes</h2>
        <div className="section-title-divider"></div>

        <div className={styles["faq-container"]}>
          <div className={`${styles["faq-decoration"]} ${styles.left}`}></div>
          <div className={styles["faq-content"]}>
            {faqItems.slice(0, visibleItems).map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
              />
            ))}

            {hasMoreItems && (
              <div className={styles["ver-mas-container"]}>
                <button
                  className={styles["ver-mas-btn"]}
                  onClick={loadMore}
                  aria-label={`Ver ${Math.min(
                    loadMoreIncrement,
                    faqItems.length - visibleItems
                  )} preguntas más`}
                >
                  Ver más preguntas <i className="bi bi-chevron-down"></i>
                </button>
              </div>
            )}
          </div>
          <div className={`${styles["faq-decoration"]} ${styles.right}`}></div>
        </div>

        <div className={styles["faq-cta-container"]}>
          <p className={styles["faq-cta-text"]}>¿Tienes más preguntas? ¡Estamos para ayudarte!</p>
          <Link
            className={`aPages ${styles["secondary-cta"]}`}
            href="https://wa.me/573185725324?text=Hola%20JustiExpress,%20tengo%20una%20consulta%20adicional"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp para más información"
            onClick={() => {
              if (trackConversion) {
                trackConversion("whatsapp_conversion", { position: "faq_button" });
              }
              return true;
            }}
          >
            Contáctanos ahora <i className="bi bi-arrow-right"></i>
          </Link>
        </div>
      </div>
    </section>
  );
};