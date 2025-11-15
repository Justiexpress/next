import React, { useState, useEffect } from 'react';

const SocialMediaSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Aquí agregarás tus videos de YouTube (IDs de los videos)
  const videos = [
    { id: 'Ls6kI-jiDcA', title: '¡Pilas! Si trabajas en una casa en Colombia, la ley cambió y el contrato verbal ya no es excusa.' },
    { id: '51Po7NEGzfA', title: 'Usted y su expareja vivieron de forma permanente y singular por un lapso no inferior a dos años?' },
    { id: 'wiyEbWDBcFM', title: 'La VERDAD de la PRESCRIPCIÓN de DEUDAS en Colombia: ¿Desaparece sola? ' },
    { id: 'X-LUOHPSYKo', title: 'Nueva ley de divorcio en Colombia: separación unilateral y cómo defender tus derechos.' },
    { id: 'njoVgALV9pw', title: 'CÓMO ELIMINAR REPORTES NEGATIVOS VIEJOS: La ley de los 8 años que no te cuentan 🤫' },
    { id: '4u7OzJJ8hlg', title: 'Embargo de salario y restricción de salida del país por incumplir cuota alimentaria en Colombia.' },
    { id: 'B-SE77MnWPo', title: 'Tienes solo 5 días para devolver lo que compraste por Internet. ¡Aplica el Retracto!' },
    { id: 'w8wRLskbR7A', title: 'Prueba de embarazo laboral: protección legal contra discriminación en contratación en Colombia.' },
    { id: 'NGOg_5oLbuA', title: '¿Carro USADO sin GARANTÍA? ¡Es un mito! (3 meses por ley)' },
];

  const socialLinks = [
        { 
      name: 'TikTok', 
      icon: 'bi-tiktok',
      url: 'https://www.tiktok.com/@tucasolegal',
      color: '#000000',

    },
        { 
      name: 'Instagram', 
      icon: 'bi-instagram',
      url: 'https://www.instagram.com/justiexpress.legal',
      color: '#E1306C',
    },
    { 
      name: 'YouTube', 
      icon: 'bi-youtube',
      url: 'https://www.youtube.com/channel/UCSQYCc0FrL8CrdIAySmNX0w',
      color: '#FF0000',
    },
    { 
      name: 'Facebook', 
      icon: 'bi-facebook',
      url: 'https://www.facebook.com/justiexpress',
      color: '#1877F2',
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, videos.length]);

  const nextSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + videos.length) % videos.length);
  };

  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0 4rem',
      overflow: 'hidden',
      background: 'white',
      fontFamily: '"Open Sans", sans-serif',
      marginBottom: '3rem',
    }}>
      {/* Decoración sutil superior */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, transparent, #03c4eb, transparent)',
      }}></div>

      {/* Efectos de fondo sutiles */}
      <div style={{
        position: 'absolute',
        inset: 0,
        opacity: 0.03,
      }}>
        <div style={{
          position: 'absolute',
          top: '10%',
          left: '10%',
          width: '20rem',
          height: '20rem',
          background: '#03c4eb',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          width: '20rem',
          height: '20rem',
          background: '#04171b',
          borderRadius: '50%',
          filter: 'blur(80px)',
        }}></div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        {/* Header de la sección */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: '#04171b',
            color: '#c2f4fe',
            padding: '0.75rem 1.5rem',
            borderRadius: '20px',
            fontSize: '1.25rem',
            fontWeight: '500',
            marginBottom: '1.5rem',
            border: '2px solid #03c4eb',
            boxShadow: '0 4px 6px rgba(3, 196, 235, 0.2)',
            transition: 'all 0.5s',
            cursor: 'pointer',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05)';
            e.currentTarget.style.boxShadow = '0 10px 15px rgba(3, 196, 235, 0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = '0 4px 6px rgba(3, 196, 235, 0.2)';
          }}>
            <i className="bi bi-graph-up-arrow" style={{
              fontSize: '1.5rem',
              animation: 'bounce 1s infinite',
            }}></i>
            <span>🎯 Sígueme | Dato Legal Diario</span>
          </div>
          
          <h2 style={{
            fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
            fontWeight: '600',
            color: '#04171b',
            marginBottom: '1rem',
            marginLeft: '0',
          }}>
            Aprende un{' '}
            <span style={{
              color: '#03c4eb',
            }}>
              Dato Legal Cada Día
            </span>
          </h2>

          {/* Divisor con estilo de marca */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            maxWidth: '500px',
            margin: '1.5rem auto',
          }}>
            <div style={{
              height: '3px',
              background: 'linear-gradient(to right, transparent, #03c4eb)',
              flex: 1,
            }}></div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              backgroundColor: '#04171b',
              color: '#03c4eb',
              borderRadius: '50%',
              margin: '0 15px',
              fontSize: '1.2rem',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            }}>
              <i className="bi bi-book"></i>
            </div>
            <div style={{
              height: '3px',
              background: 'linear-gradient(to left, transparent, #03c4eb)',
              flex: 1,
            }}></div>
          </div>
          
          <p style={{
            color: '#333',
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            maxWidth: '42rem',
            margin: '0 auto',
            padding: '0 1rem',
            textAlign: 'center',
            lineHeight: '1.6',
          }}>
            Conocimiento legal al alcance de todos. Sígueme en redes sociales para tips diarios 
            que te ayudarán a entender y proteger tus derechos
          </p>
        </div>

        {/* Carrusel de videos */}
        <div style={{ maxWidth: '56rem', margin: '0 auto 3rem' }}>
          <div style={{
            position: 'relative',
            background: 'white',
            borderRadius: '25px',
            padding: '1.5rem',
            boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
            border: '3px solid #03c4eb',
          }}>
            {/* Video actual */}
            <div style={{
              position: 'relative',
              paddingBottom: '56.25%',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              background: '#000000',
            }}>
              <iframe
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                }}
                src={`https://www.youtube.com/embed/${videos[currentSlide].id}?rel=0`}
                title={videos[currentSlide].title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Título del video */}
            <div style={{ marginTop: '1rem', textAlign: 'center' }}>
              <h3 style={{ 
                color: '#04171b', 
                fontSize: '1.125rem', 
                fontWeight: '600',
                marginLeft: '0',
                margin: '0',
              }}>
                {videos[currentSlide].title}
              </h3>
            </div>

            {/* Controles del carrusel */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
              marginTop: '1.5rem',
            }}>
              <button
                onClick={prevSlide}
                style={{
                  background: '#04171b',
                  color: '#03c4eb',
                  padding: '0.6rem',
                  borderRadius: '50%',
                  border: '2px solid #03c4eb',
                  cursor: 'pointer',
                  transition: 'all 0.5s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#03c4eb';
                  e.currentTarget.style.color = '#04171b';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#04171b';
                  e.currentTarget.style.color = '#03c4eb';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Video anterior"
              >
                <i className="bi bi-chevron-left" style={{ fontSize: '1.25rem' }}></i>
              </button>

              {/* Indicadores */}
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                {videos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentSlide(index);
                      setIsAutoPlaying(false);
                    }}
                    style={{
                      height: '8px',
                      width: index === currentSlide ? '32px' : '8px',
                      borderRadius: '9999px',
                      background: index === currentSlide ? '#03c4eb' : '#04171b',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.5s',
                      opacity: index === currentSlide ? 1 : 0.3,
                    }}
                    onMouseEnter={(e) => {
                      if (index !== currentSlide) {
                        e.currentTarget.style.opacity = '0.6';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (index !== currentSlide) {
                        e.currentTarget.style.opacity = '0.3';
                      }
                    }}
                    aria-label={`Ir al video ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                style={{
                  background: '#04171b',
                  color: '#03c4eb',
                  padding: '0.6rem',
                  borderRadius: '50%',
                  border: '2px solid #03c4eb',
                  cursor: 'pointer',
                  transition: 'all 0.5s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#03c4eb';
                  e.currentTarget.style.color = '#04171b';
                  e.currentTarget.style.transform = 'scale(1.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#04171b';
                  e.currentTarget.style.color = '#03c4eb';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
                aria-label="Siguiente video"
              >
                <i className="bi bi-chevron-right" style={{ fontSize: '1.25rem' }}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Botones de redes sociales */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '1.5rem',
          marginBottom: '2rem',
        }}>
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <div
                style={{
                  position: 'relative',
                  background: 'white',
                  borderRadius: '15px',
                  padding: '1rem',
                  transition: 'all 0.5s',
                  border: '2px solid #e5e7eb',
                  cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  width: '120px',
                  height: '120px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = '#03c4eb';
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(3, 196, 235, 0.2)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#e5e7eb';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
                }}
              >
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <div style={{
                    padding: '0.75rem',
                    borderRadius: '50%',
                    background: `${social.color}10`,
                    transition: 'all 0.5s',
                    border: `2px solid ${social.color}30`,
                  }}>
                    <i 
                      className={social.icon}
                      style={{
                        fontSize: '1.75rem',
                        color: social.color,
                      }}
                    ></i>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <p className="social-name" style={{
                      color: '#04171b',
                      fontWeight: '600',
                      fontSize: '0.875rem',
                      margin: '0',
                      transition: 'color 0.5s',
                    }}>
                      {social.name}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

{/* Call to action final */}
        <div style={{ 
          textAlign: 'center',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <p style={{ 
            color: '#04171b', 
            fontSize: '1rem',
            fontWeight: '400',
            margin: 0,
            padding: '0 1rem',
          }}>
            ✨ Únete a nuestra comunidad y mantente informado sobre tus derechos ✨
          </p>
        </div>
      </div>

      {/* Decoración sutil inferior */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '4px',
        background: 'linear-gradient(to right, transparent, #03c4eb, transparent)',
      }}></div>

      {/* CSS para animaciones */}
      <style jsx>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(-25%);
            animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
          }
          50% {
            transform: translateY(0);
            animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default SocialMediaSection;