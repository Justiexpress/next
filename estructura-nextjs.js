// estructura-nextjs.js

const fs = require('fs');
const path = require('path');

// Directorio raíz del proyecto (ajusta según sea necesario)
const projectRoot = '.'; // Asumiendo que estás en la raíz del proyecto

// Función para crear un directorio si no existe
const createDirectoryIfNotExists = (dir) => {
  const fullPath = path.join(projectRoot, dir);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`Creado directorio: ${dir}`);
  }
};

// Función para crear un archivo con contenido predeterminado
const createFileWithContent = (filePath, content = '') => {
  const fullPath = path.join(projectRoot, filePath);
  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`Creado archivo: ${filePath}`);
  }
};

// Define la estructura de carpetas y archivos
const structure = [
  // public
  { type: 'dir', path: 'public' },
  { type: 'file', path: 'public/robots.txt', content: 'User-agent: *\nAllow: /' },
  { type: 'file', path: 'public/manifest.json', content: '{\n  "short_name": "App",\n  "name": "Next.js App",\n  "start_url": ".",\n  "display": "standalone",\n  "theme_color": "#000000",\n  "background_color": "#ffffff"\n}' },
  
  // src/assets
  { type: 'dir', path: 'src/assets/img' },
  { type: 'file', path: 'src/assets/img/logo.png', content: '' },
  { type: 'file', path: 'src/assets/img/banner.jpg', content: '' },
  { type: 'file', path: 'src/assets/img/icon.svg', content: '' },
  { type: 'dir', path: 'src/assets/fonts' },
  { type: 'file', path: 'src/assets/fonts/custom-font.ttf', content: '' },
  
  // src/components
  { type: 'dir', path: 'src/components/BarraNav' },
  { type: 'file', path: 'src/components/BarraNav/BarraNav.tsx', content: 'import React from "react";\nimport "./BarraNav.scss";\n\nconst BarraNav = () => {\n  return <div>BarraNav Component</div>;\n};\n\nexport default BarraNav;' },
  { type: 'file', path: 'src/components/BarraNav/BarraNav.scss', content: '// Estilos para BarraNav' },
  
  { type: 'dir', path: 'src/components/Footer' },
  { type: 'file', path: 'src/components/Footer/Footer.tsx', content: 'import React from "react";\nimport "./Footer.scss";\n\nconst Footer = () => {\n  return <footer>Footer Component</footer>;\n};\n\nexport default Footer;' },
  { type: 'file', path: 'src/components/Footer/Footer.scss', content: '// Estilos para Footer' },
  
  { type: 'dir', path: 'src/components/ServiciosCard' },
  { type: 'file', path: 'src/components/ServiciosCard/ServiciosCard.tsx', content: 'import React from "react";\nimport "./ServiciosCard.scss";\n\nconst ServiciosCard = () => {\n  return <div>ServiciosCard Component</div>;\n};\n\nexport default ServiciosCard;' },
  { type: 'file', path: 'src/components/ServiciosCard/ServiciosCard.scss', content: '// Estilos para ServiciosCard' },
  
  { type: 'dir', path: 'src/components/Testimonios' },
  { type: 'file', path: 'src/components/Testimonios/Testimonios.tsx', content: 'import React from "react";\nimport "./Testimonios.scss";\n\nconst Testimonios = () => {\n  return <div>Testimonios Component</div>;\n};\n\nexport default Testimonios;' },
  { type: 'file', path: 'src/components/Testimonios/Testimonios.scss', content: '// Estilos para Testimonios' },
  
  // src/helper
  { type: 'dir', path: 'src/helper' },
  { type: 'file', path: 'src/helper/formatDate.ts', content: 'export const formatDate = (date: Date): string => {\n  return date.toLocaleDateString();\n};' },
  { type: 'file', path: 'src/helper/validateForm.ts', content: 'export const validateForm = (formData: any): boolean => {\n  // Lógica de validación de formulario\n  return true;\n};' },
  { type: 'file', path: 'src/helper/apiClient.ts', content: 'export const apiClient = {\n  get: async (url: string) => {\n    const response = await fetch(url);\n    return response.json();\n  },\n  // Otros métodos HTTP\n};' },
  
  // src/pages (atención: en Next.js este directorio tiene un significado especial)
  { type: 'dir', path: 'src/pages' },
  { type: 'file', path: 'src/pages/index.tsx', content: 'import type { NextPage } from "next";\nimport Head from "next/head";\nimport Home from "../components/Home/Home";\n\nconst HomePage: NextPage = () => {\n  return (\n    <div>\n      <Head>\n        <title>Mi Aplicación Next.js</title>\n        <meta name="description" content="Mi aplicación con Next.js" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <Home />\n    </div>\n  );\n};\n\nexport default HomePage;' },
  
  { type: 'file', path: 'src/pages/tyc.tsx', content: 'import type { NextPage } from "next";\nimport Head from "next/head";\nimport TyC from "../components/TyC/TyC";\n\nconst TerminosPage: NextPage = () => {\n  return (\n    <div>\n      <Head>\n        <title>Términos y Condiciones</title>\n        <meta name="description" content="Términos y condiciones" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <TyC />\n    </div>\n  );\n};\n\nexport default TerminosPage;' },
  
  { type: 'file', path: 'src/pages/privacidad.tsx', content: 'import type { NextPage } from "next";\nimport Head from "next/head";\nimport Privacidad from "../components/Privacidad/Privacidad";\n\nconst PrivacidadPage: NextPage = () => {\n  return (\n    <div>\n      <Head>\n        <title>Política de Privacidad</title>\n        <meta name="description" content="Política de privacidad" />\n        <link rel="icon" href="/favicon.ico" />\n      </Head>\n      <Privacidad />\n    </div>\n  );\n};\n\nexport default PrivacidadPage;' },
  
  { type: 'file', path: 'src/pages/_app.tsx', content: 'import type { AppProps } from "next/app";\nimport "../styles/globals.scss";\n\nfunction MyApp({ Component, pageProps }: AppProps) {\n  return <Component {...pageProps} />;\n}\n\nexport default MyApp;' },
  
  // Componentes de páginas (que en tu estructura original estaban en /pages)
  { type: 'dir', path: 'src/components/Home' },
  { type: 'file', path: 'src/components/Home/Home.tsx', content: 'import React from "react";\nimport "./Home.scss";\nimport BarraNav from "../BarraNav/BarraNav";\nimport Footer from "../Footer/Footer";\nimport ServiciosCard from "../ServiciosCard/ServiciosCard";\nimport Testimonios from "../Testimonios/Testimonios";\n\nconst Home = () => {\n  return (\n    <div className="home">\n      <BarraNav />\n      <main>\n        <h1>Bienvenido a nuestra página</h1>\n        <ServiciosCard />\n        <Testimonios />\n      </main>\n      <Footer />\n    </div>\n  );\n};\n\nexport default Home;' },
  { type: 'file', path: 'src/components/Home/Home.scss', content: '.home {\n  // Estilos para Home\n}' },
  
  { type: 'dir', path: 'src/components/TyC' },
  { type: 'file', path: 'src/components/TyC/TyC.tsx', content: 'import React from "react";\nimport "./TyC.scss";\nimport BarraNav from "../BarraNav/BarraNav";\nimport Footer from "../Footer/Footer";\n\nconst TyC = () => {\n  return (\n    <div className="tyc">\n      <BarraNav />\n      <main>\n        <h1>Términos y Condiciones</h1>\n        <p>Contenido de los términos y condiciones...</p>\n      </main>\n      <Footer />\n    </div>\n  );\n};\n\nexport default TyC;' },
  { type: 'file', path: 'src/components/TyC/TyC.scss', content: '.tyc {\n  // Estilos para TyC\n}' },
  
  { type: 'dir', path: 'src/components/Privacidad' },
  { type: 'file', path: 'src/components/Privacidad/Privacidad.tsx', content: 'import React from "react";\nimport "./Privacidad.scss";\nimport BarraNav from "../BarraNav/BarraNav";\nimport Footer from "../Footer/Footer";\n\nconst Privacidad = () => {\n  return (\n    <div className="privacidad">\n      <BarraNav />\n      <main>\n        <h1>Política de Privacidad</h1>\n        <p>Contenido de la política de privacidad...</p>\n      </main>\n      <Footer />\n    </div>\n  );\n};\n\nexport default Privacidad;' },
  { type: 'file', path: 'src/components/Privacidad/Privacidad.scss', content: '.privacidad {\n  // Estilos para Privacidad\n}' },
  
  // src/styles
  { type: 'dir', path: 'src/styles' },
  { type: 'file', path: 'src/styles/variables.scss', content: '// Variables globales\n$primary-color: #3498db;\n$secondary-color: #2ecc71;\n$text-color: #333;\n$background-color: #f9f9f9;' },
  { type: 'file', path: 'src/styles/mixins.scss', content: '// Mixins reutilizables\n@mixin flex-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n@mixin responsive($breakpoint) {\n  @if $breakpoint == mobile {\n    @media (max-width: 767px) { @content; }\n  } @else if $breakpoint == tablet {\n    @media (min-width: 768px) and (max-width: 1023px) { @content; }\n  } @else if $breakpoint == desktop {\n    @media (min-width: 1024px) { @content; }\n  }\n}' },
  { type: 'file', path: 'src/styles/globals.scss', content: '@import "./variables.scss";\n@import "./mixins.scss";\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nhtml, body {\n  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,\n    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;\n  background-color: $background-color;\n  color: $text-color;\n}\n\na {\n  color: inherit;\n  text-decoration: none;\n}\n' },
];

// Crear la estructura
structure.forEach((item) => {
  if (item.type === 'dir') {
    createDirectoryIfNotExists(item.path);
  } else if (item.type === 'file') {
    createFileWithContent(item.path, item.content);
  }
});

console.log('Estructura de archivos creada exitosamente.');