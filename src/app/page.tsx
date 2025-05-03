'use client';

import React, { useRef } from "react";
import Head from "next/head";
import { trackConversion } from '@/lib/tracking';

// Componentes
import { Contador } from "@/components/Contador/Contador";
import { Quote } from "@/components/Quote/Quote";
import { ServiciosText } from "@/components/Servicios/ServiciosText";
import { ServiciosCard } from "@/components/Servicios/ServiciosCard";
import { Testimonios } from "@/components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "@/components/Testimonios/TestimoniosCarusel";
import { Form } from "@/components/Form/Form";
import { QuienesSomos } from "@/components/QuienesSomos/QuienesSomos";
import { BarraNav } from "@/components/BarraNav/BarraNav";
import { FAQ } from "@/components/FAQ/FAQ";
import { Footer } from '@/components/Footer/Footer';
import { SocialBar } from '@/components/SocialBar/SocialBar';
import { FloatingWhatsApp } from 'react-floating-whatsapp';

// Imágenes
import logo from '../assets/img/logo.png';

// Datos estructurados para servicios
const serviciosData = [
  {
    id: "tutelas",
    title: "Acciones de Tutela",
    description: "Protege tus derechos fundamentales con nuestras acciones de tutela elaboradas por abogados expertos",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fceef3" },
    buttonVariant: "outline-secondary",
    ctaText: "Solicitar asesoría",
    whatsappMsg: "Hola JustiExpress, necesito información sobre acciones de tutela."
  },
  {
    id: "derechos-de-peticion",
    title: "Derechos de Petición",
    description: "Solicita información o reclama tus derechos ante entidades públicas y privadas con la redacción adecuada",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fff0da" },
    buttonVariant: "outline-primary",
    ctaText: "Consultar ahora",
    whatsappMsg: "Hola JustiExpress, necesito ayuda con un derecho de petición."
  },
  {
    id: "reclamaciones",
    title: "Reclamaciones",
    description: "Presenta reclamaciones efectivas ante entidades para hacer valer tus derechos como usuario o consumidor",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#ebf8ee" },
    buttonVariant: "outline-success",
    ctaText: "Iniciar reclamación",
    whatsappMsg: "Hola JustiExpress, necesito ayuda para hacer una reclamación."
  },
  {
    id: "desacatos",
    title: "Desacatos",
    description: "¿No han cumplido con tu tutela? Presenta un desacato para exigir el cumplimiento de la sentencia",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fceef3" },
    buttonVariant: "outline-secondary",
    ctaText: "Solicitar desacato",
    whatsappMsg: "Hola JustiExpress, necesito presentar un desacato."
  },
  {
    id: "impugnaciones",
    title: "Impugnaciones",
    description: "¿No estás de acuerdo con la decisión de tu tutela? Impugna la decisión dentro del término legal",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fff0da" },
    buttonVariant: "outline-primary",
    ctaText: "Iniciar impugnación",
    whatsappMsg: "Hola JustiExpress, necesito impugnar una decisión de tutela."
  },
  {
    id: "consultoria-juridica",
    title: "Consultoría Jurídica",
    description: "Recibe asesoría personalizada de abogados expertos para resolver tus dudas legales",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#ebf8ee" },
    buttonVariant: "outline-success",
    ctaText: "Solicitar consultoría",
    whatsappMsg: "Hola JustiExpress, me gustaría una consultoría jurídica."
  },
  {
    id: "contratos",
    title: "Contratos",
    description: "Elaboramos contratos personalizados para tus necesidades legales y comerciales",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fceef3" },
    buttonVariant: "outline-secondary",
    ctaText: "Solicitar contrato",
    whatsappMsg: "Hola JustiExpress, necesito elaborar un contrato."
  },
  {
    id: "documentos-legales",
    title: "Documentos Legales",
    description: "Redactamos documentos legales con precisión técnica y adaptados a tus necesidades específicas",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#fff0da" },
    buttonVariant: "outline-primary",
    ctaText: "Solicitar documento",
    whatsappMsg: "Hola JustiExpress, necesito redactar un documento legal."
  },
  {
    id: "revision-documentos",
    title: "Revisión de Documentos",
    description: "Nuestros abogados revisan tus documentos legales para garantizar su validez y efectividad",
    icon: "bi bi-circle-fill text-center",
    style: { color: "#ebf8ee" }, 
    buttonVariant: "outline-success",
    ctaText: "Solicitar revisión",
    whatsappMsg: "Hola JustiExpress, necesito revisar un documento legal."
  }
];

// FAQs para el Schema
const faqItems = [
  {
    question: "¿Qué es una acción de tutela?",
    answer: "La acción de tutela es un mecanismo de protección de los derechos fundamentales en Colombia. Cualquier persona puede presentarla cuando considere que sus derechos fundamentales están siendo vulnerados o amenazados."
  },
  {
    question: "¿Cuánto tiempo toma elaborar una acción de tutela?",
    answer: "En Justiexpress elaboramos acciones de tutela en menos de 24 horas, garantizando calidad y efectividad."
  },
  {
    question: "¿Qué es un derecho de petición?",
    answer: "El derecho de petición es un derecho fundamental que permite a los ciudadanos presentar solicitudes respetuosas ante entidades públicas o privadas y obtener una respuesta oportuna y de fondo."
  },
  {
    question: "¿Cómo puedo contactar a Justiexpress?",
    answer: "Puedes contactarnos a través de WhatsApp al +573185725324, completando el formulario en nuestra página web, o por correo electrónico a justiexpress@gmail.com."
  },
  {
    question: "¿Qué documentos necesito para presentar una tutela?",
    answer: "Para presentar una tutela necesitas tu documento de identidad y las pruebas que demuestren la vulneración de tus derechos fundamentales. En Justiexpress te asesoramos sobre los documentos específicos según tu caso."
  },
  {
    question: "¿Cuánto cuestan los servicios de Justiexpress?",
    answer: "Nuestros servicios tienen precios justos y accesibles. El costo varía según el tipo de documento o asesoría que necesites. Contáctanos para recibir una cotización personalizada."
  },
  {
    question: "¿Cuánto tiempo tiene un juez para resolver una acción de tutela?",
    answer: "Una de las grandes ventajas de la acción de tutela es su rapidez. Por ley, el juez debe resolver la tutela dentro de los 10 días siguientes a la presentación de la solicitud. Este plazo hace de la tutela uno de los mecanismos más ágiles para proteger tus derechos fundamentales."
  },
  {
    question: "¿Contra quién puedo presentar una acción de tutela?",
    answer: "Puedes presentar una tutela contra autoridades públicas que vulneren tus derechos fundamentales. También procede contra particulares cuando prestan servicios públicos (educación, salud, domiciliarios), cuando existe una relación de subordinación o indefensión, cuando vulneran tu derecho a la intimidad (habeas data), o cuando está en riesgo tu vida o integridad personal."
  },
  {
    question: "¿Necesito un abogado para presentar una tutela?",
    answer: "No. La tutela fue diseñada para que cualquier persona pueda presentarla sin necesidad de abogado. Sin embargo, contar con asesoría profesional como la de Justiexpress aumenta significativamente las probabilidades de éxito, ya que sabemos cómo estructurar adecuadamente los argumentos jurídicos y fundamentar correctamente la vulneración de tus derechos."
  },
  {
    question: "¿Qué ocurre si la tutela es negada?",
    answer: "Si tu tutela es negada en primera instancia, tienes derecho a impugnar la decisión dentro de los tres días siguientes a la notificación del fallo. La impugnación será resuelta por el superior jerárquico del juez que tomó la decisión inicial en un plazo máximo de 20 días. Adicionalmente, todas las tutelas son enviadas a la Corte Constitucional, que podría seleccionarla para revisión."
  },
  {
    question: "¿Qué es un hecho superado en una tutela?",
    answer: "Se habla de hecho superado cuando la situación que generaba la vulneración del derecho fundamental se resuelve antes de que el juez emita su fallo. En estos casos, aunque la tutela ya no tendría un efecto práctico inmediato, el juez puede emitir órdenes para prevenir que la situación se repita en el futuro."
  },
  {
    question: "¿Cuáles son los derechos fundamentales protegidos por la tutela?",
    answer: "La tutela protege derechos fundamentales como la salud, la vida, la dignidad humana, la igualdad, la seguridad social, el libre desarrollo de la personalidad, la libertad de conciencia y de cultos, la libertad de expresión, el derecho a la honra, el derecho de petición, el derecho al trabajo, el debido proceso, entre otros. También protege derechos económicos, sociales y culturales cuando están en conexidad con derechos fundamentales."
  },
  {
    question: "¿Qué es un incidente de desacato?",
    answer: "El incidente de desacato es un mecanismo para hacer cumplir el fallo de tutela cuando la autoridad o el particular obligado no lo acata. Puede resultar en sanciones como arresto hasta de seis meses y multas hasta de 20 salarios mínimos mensuales para quien incumpla la orden del juez."
  },
  {
    question: "¿En qué casos NO procede la acción de tutela?",
    answer: "La tutela no procede cuando existen otros recursos o medios de defensa judiciales efectivos (salvo como mecanismo transitorio), cuando se trata de proteger derechos colectivos (excepto si hay conexidad con un derecho fundamental individual), cuando el daño está consumado y no continúa la violación del derecho, o cuando se dirige contra actos de carácter general, impersonal y abstracto."
  },
  {
    question: "¿Qué son las medidas provisionales en una tutela?",
    answer: "Son órdenes que el juez puede dictar desde la presentación de la tutela para proteger el derecho de manera inmediata mientras se resuelve el caso. Por ejemplo, ordenar la suspensión de un acto que amenace el derecho o tomar medidas de conservación para evitar daños irreparables."
  },
  {
    question: "¿Qué significa que la tutela sea un mecanismo subsidiario?",
    answer: "Significa que la tutela solo procede cuando no existen otros mecanismos de defensa judicial o cuando, existiendo, no son lo suficientemente eficaces para proteger el derecho fundamental. También puede proceder como mecanismo transitorio para evitar un perjuicio irremediable, incluso si existen otros recursos."
  },
  {
    question: "¿Puedo presentar varias tutelas por el mismo hecho?",
    answer: "No. Presentar la misma tutela ante diversos jueces sin justificación se considera una actuación temeraria y puede llevar al rechazo de todas las solicitudes. Al presentar una tutela debes declarar bajo juramento que no has presentado otra por los mismos hechos y derechos."
  },
  {
    question: "¿Qué significa un 'perjuicio irremediable' en el contexto de una tutela?",
    answer: "Un perjuicio irremediable es aquel que de ocurrir no podría ser reparado o restituido en su integridad. Debe ser inminente, grave, urgente y de imperiosa necesidad. Este concepto es importante porque permite usar la tutela como mecanismo transitorio incluso cuando existen otros recursos judiciales."
  },
  {
    question: "¿Qué son los mecanismos de cumplimiento de una tutela?",
    answer: "Si la autoridad o particular no cumple el fallo de tutela dentro de las 48 horas siguientes, el juez puede requerir al superior del responsable, abrir procesos disciplinarios, imponer sanciones por desacato e incluso adoptar directamente medidas para el cumplimiento. El juez mantiene su competencia hasta que el derecho esté completamente restablecido."
  },
  {
    question: "¿Se puede presentar una tutela durante los fines de semana o días festivos?",
    answer: "Sí, la acción de tutela puede interponerse en cualquier momento, incluso en días no hábiles. El decreto 2591 de 1991 establece que todos los días y horas son hábiles para interponer la acción de tutela, lo que refuerza su carácter de mecanismo inmediato de protección."
  },
  {
    question: "¿Cuál es el plazo para responder un derecho de petición?",
    answer: "Las autoridades tienen hasta 15 días hábiles para responder peticiones de interés general o particular, 10 días para solicitudes de información y documentos, y 30 días para consultas. Durante la emergencia sanitaria por COVID-19 estos plazos fueron ampliados temporalmente."
  },
  {
    question: "¿Qué debe contener la respuesta a un derecho de petición?",
    answer: "La respuesta debe ser clara, precisa, congruente con lo solicitado y notificarse oportunamente al interesado. Debe resolver de fondo la petición, no limitarse a evasivas o respuestas formales sin contenido sustancial."
  },
  {
    question: "¿Qué hago si no responden mi derecho de petición?",
    answer: "Si no recibe respuesta dentro del plazo legal, puede presentar una acción de tutela por violación al derecho fundamental de petición. En Justiexpress podemos ayudarte tanto con la elaboración del derecho de petición como con la tutela si este no es respondido."
  },
  {
    question: "¿Puedo presentar un derecho de petición de forma anónima?",
    answer: "Sí, la ley permite presentar peticiones anónimas siempre que se trate de asuntos de interés general. Sin embargo, si la petición involucra información reservada o documentos privados, deberá identificarse adecuadamente."
  },
  {
    question: "¿Qué información puedo solicitar mediante un derecho de petición?",
    answer: "Puedes solicitar cualquier información que no sea reservada por ley. Esto incluye documentos públicos, información sobre servicios, procedimientos, decisiones administrativas, o solicitar el reconocimiento de derechos."
  },
  {
    question: "¿Las empresas privadas están obligadas a responder derechos de petición?",
    answer: "Sí, las empresas privadas que prestan servicios públicos, las instituciones financieras y las empresas que manejan datos personales están obligadas a responder derechos de petición. El incumplimiento puede dar lugar a la presentación de una tutela."
  },
  {
    question: "¿Qué hace diferente a Justiexpress de otros servicios jurídicos online?",
    answer: "Combinamos tecnología avanzada con la experiencia de abogados especializados. Esto nos permite ofrecer documentos jurídicos de alta calidad a precios accesibles, con tiempos de respuesta mucho más rápidos que los servicios jurídicos tradicionales."
  },
  {
    question: "¿Justiexpress atiende casos en todo Colombia?",
    answer: "Sí, nuestro servicio está disponible en todo el territorio nacional. Gracias a la digitalización de muchos trámites judiciales, podemos presentar tutelas y derechos de petición en cualquier ciudad del país."
  },
  {
    question: "¿Qué necesito para empezar mi trámite con Justiexpress?",
    answer: "Solo necesitas proporcionarnos tu información personal básica, los hechos de tu caso y la documentación que sustente tu solicitud. Nosotros nos encargamos del resto, elaborando el documento jurídico adecuado a tus necesidades."
  },
];

// FAQ Schema para SEO optimizado
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};

// Cambiamos la interfaz para eliminar la prop trackConversion
interface HomeProps {
  // Dejamos la interfaz vacía ya que no hay más props
}

const Home: React.FC<HomeProps> = () => {
  // Referencias para scroll
  const serviciosRef = useRef<HTMLElement>(null);
  const contactoRef = useRef<HTMLElement>(null);
  
  // Función para manejar el click en servicios
  const handleServiceClick = (serviceId: string, whatsappMsg: string) => {
    // Usamos directamente trackConversion sin verificar existencia
    trackConversion('service_click', { 
      service: serviceId,
      position: 'service_card'
    });
    
    // Redireccionar a WhatsApp con mensaje personalizado
    const encodedMsg = encodeURIComponent(whatsappMsg);
    window.open(`https://wa.me/573185725324?text=${encodedMsg}`, '_blank');
  };

  return (
    <>
      <Head>
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      
      <header>
        <BarraNav />
      </header>
      
      <main id="Home">
        <section 
          id="hero" 
          aria-label="Banner principal"
          className="hero-section"
        >
          <div id="Quote" data-aos="fade-up" data-aos-duration="1500">
            <h1 className="main-heading">Servicios Legales Profesionales en Colombia</h1>
              <p style={{ fontSize: "25px", textAlign: "center", padding: "25px" }}>
                <i>"Innovación legal respaldada por abogados expertos"</i>
              </p>
          </div>
          
          <p
            className="text-center cta-container"
            data-aos="flip-left"
            data-aos-duration="1500"
          >
            <a
              className="aPages primary-cta"
              href="https://wa.me/573185725324?text=Hola%20JustiExpress,%20necesito%20información%20sobre%20servicios%20legales"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp para asistencia inmediata"
              onClick={() => {
                // Llamamos directamente a trackConversion
                trackConversion('whatsapp_conversion', {position: 'hero_button'});
                return true;
              }}
            >
              Click aquí para asistencia inmediata
            </a>
          </p>
        </section>

        <section 
          id="Contador" 
          className="container stats-section" 
          data-aos="fade-up" 
          data-aos-duration="1500"
          aria-label="Estadísticas de la empresa"
        >
          <p className="section-title text-center">Resultados en tutelas, derechos de petición, contratos y otros servicios:</p>
          <div className="row">
            <article className="col-sm-4 text-center">
              <Contador
                title={"clientes satisfechos"}
                end={1000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#c4c2f9" }}
                iconStyle={{ color: "#c4c2f9" }}
                icon={"bi bi-person-check-fill"}
                cardColor={{ background: "white" }}
              />
            </article>
            <article className="col-sm-4 text-center">
              <Contador
                title={"documentos entregados"}
                end={2000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#80cac4" }}
                iconStyle={{ color: "#80cac4" }}
                icon={"bi bi-file-earmark-text"}
                cardColor={{ background: "white" }}
              />
            </article>
            <article className="col-sm-4 text-center">
              <Contador
                title={"asesorías realizadas"}
                end={4000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#c4c2f9" }}
                iconStyle={{ color: "#c4c2f9" }}
                icon={"bi bi-chat-text"}
                cardColor={{ background: "white" }}
              />
            </article>
          </div>
        </section>

        <section 
          id="servicios" 
          aria-label="Nuestros servicios legales"
          ref={serviciosRef as React.RefObject<HTMLElement>}
          className="services-section"
        >
          <ServiciosText />
          <div
            className="container"
            id="ServiciosCard"
            data-aos="fade-up"
            data-aos-duration="1500"
          >
            <div className="row">
              {serviciosData.slice(0, 3).map((servicio) => (
                <article className="col-sm-4" key={servicio.id}>
                  <ServiciosCard
                    id={servicio.id}
                    title={servicio.title}
                    description={servicio.description}
                    icon={servicio.icon}
                    style={servicio.style}
                    buttonVariant={servicio.buttonVariant}
                    buttonText={servicio.ctaText}
                    onLearnMore={() => handleServiceClick(servicio.id, servicio.whatsappMsg)}
                  />
                </article>
              ))}
            </div>
            
            <div className="row">
              {serviciosData.slice(3, 6).map((servicio) => (
                <article className="col-sm-4" key={servicio.id}>
                  <ServiciosCard
                    id={servicio.id}
                    title={servicio.title}
                    description={servicio.description}
                    icon={servicio.icon}
                    style={servicio.style}
                    buttonVariant={servicio.buttonVariant}
                    buttonText={servicio.ctaText}
                    onLearnMore={() => handleServiceClick(servicio.id, servicio.whatsappMsg)}
                  />
                </article>
              ))}
            </div>
            
            <div className="row">
              {serviciosData.slice(6).map((servicio) => (
                <article className="col-sm-4" key={servicio.id}>
                  <ServiciosCard
                    id={servicio.id}
                    title={servicio.title}
                    description={servicio.description}
                    icon={servicio.icon}
                    style={servicio.style}
                    buttonVariant={servicio.buttonVariant}
                    buttonText={servicio.ctaText}
                    onLearnMore={() => handleServiceClick(servicio.id, servicio.whatsappMsg)}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section 
          id="testimonios" 
          aria-label="Testimonios de clientes satisfechos"
          className="testimonials-section"
        >
          <Testimonios />
          <TestimoniosCarusel />
        </section>

        <section 
          id="contacto" 
          aria-label="Formulario de contacto"
          ref={contactoRef as React.RefObject<HTMLElement>}
          className="contact-section"
        >
          <Form 
            onSubmit={(data) => {
              // Llamamos directamente a trackConversion
              trackConversion('form_submission', { 
                formType: 'contact',
                formLocation: 'homepage'
              });
            }} 
          />
        </section>

        <section 
          id="quienes-somos" 
          aria-label="Información sobre nuestra firma legal"
          className="about-section"
        >
          <QuienesSomos />
        </section>

        <FAQ faqItems={faqItems} />
        
        <aside 
          id="cita-final"
          className="final-quote-section"
        >
          <Quote />
          <Footer />
          <SocialBar />
          <FloatingWhatsApp
              phoneNumber={"573185725324"}
              accountName={"Justiexpress"}
              avatar={logo.src}
              statusMessage={"En línea | Respuesta inmediata"}
              chatMessage={"Hola, ¿en qué podemos ayudarte con tu caso legal?"}
              placeholder={"Escribe tu consulta..."}
              darkMode={true}
              allowClickAway={true}
              aria-label="Chat de WhatsApp para consultas legales"
              onClick={() => trackConversion('whatsapp_click', {position: 'floating_button'})}
            />
        </aside>
      </main>
    </>
  );
};

export default Home;