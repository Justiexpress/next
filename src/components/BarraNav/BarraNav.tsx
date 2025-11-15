'use client';

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import styles from "./BarraNav.module.scss";

interface BarraNavProps {
  isHome?: boolean;
}

export const BarraNav = ({ isHome = true }: BarraNavProps) => {
  const [show, setShow] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = () => {
    setShow(false);
  };

  const scrollToSection = (sectionId: string) => {
    handleNavClick();
    
    if (pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        // Calcular la altura del navbar
        const navbarHeight = document.getElementById('nav-bar')?.offsetHeight || 100;
        
        // Ajustar offset según la sección
        let extraOffset = 20; // Offset por defecto
        if (sectionId === "FAQ") {
          extraOffset = -30; // Para FAQ, subir un poco más (valor negativo baja más)
        }
        
        // Obtener la posición del elemento
        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
        
        // Scroll con offset para que no quede tapado por el navbar
        window.scrollTo({
          top: elementPosition - navbarHeight - extraOffset,
          behavior: "smooth"
        });
      }
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  return (
    <Navbar
      collapseOnSelect
      expand="xl"
      bg="dark"
      variant="dark"
      id="nav-bar"
      className={styles["nav-bar"]}
    >
      <Container>
        <Navbar.Brand as={Link} href="/" className={styles["brand-with-logo"]}>
          <Image
            src="/logo.png"
            alt="Justiexpress Logo"
            width={100}
            height={100}
            className={styles.logo}
            priority
          />
          <span>Justiexpress</span>
        </Navbar.Brand>
        
        {isHome ? (
          <>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setShow(!show)}
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className={`collapse navbar-collapse ${show ? "show" : ""}`}
              id="navbarCollapse"
            >
              <Nav className={`${styles["nav-container"]} mx-auto`}>
                <Nav.Link
                  onClick={() => scrollToSection("ServiciosText")}
                  className={styles["nav-item"]}
                >
                  Servicios
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection("Testimonios")}
                  className={styles["nav-item"]}
                >
                  Testimonios
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection("Contáctanos")}
                  className={styles["nav-item"]}
                >
                  Contáctanos
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection("Quiénes-Somos")}
                  className={styles["nav-item"]}
                >
                  Quiénes somos
                </Nav.Link>
                <Nav.Link
                  onClick={() => scrollToSection("FAQ")}
                  className={styles["nav-item"]}
                >
                  Preguntas Frecuentes
                </Nav.Link>
              </Nav>
            </div>
          </>
        ) : (
          <></>
        )}
      </Container>
    </Navbar>
  );
};