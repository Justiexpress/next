'use client';

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./BarraNav.module.scss";

interface BarraNavProps {
  isHome?: boolean;
}

export const BarraNav = ({ isHome = true }: BarraNavProps) => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleNavClick = () => {
    setShow(false);
  };

  const scrollToSection = (sectionId: string) => {
    handleNavClick();
    
    // Si estamos en la página de inicio, hacemos scroll suave
    if (router.pathname === "/") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Si no estamos en la página de inicio, redirigimos a la página de inicio con el fragmento
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
        <Navbar.Brand as={Link} href="/">Justiexpress</Navbar.Brand>
        
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
                  onClick={() => scrollToSection("ServiciosCard")} 
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
          // Versión simplificada para páginas TyC
          <></>
        )}
      </Container>
    </Navbar>
  );
};