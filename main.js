var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    delay: 60,
});

typewriter
    .typeString('Pasante de Ingeniería en Sistemas Computacionales')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Prácticas Profesionales')
    .pauseFor(2000)
    .deleteAll()
    .typeString('Me apasiona investigar, analizar información y comprender cómo funcionan las cosas')
    .pauseFor(2000)
    .start();


/* ==========================================
   Sistema bilingüe ES / EN
   ========================================== */

const translations = {
  es: {
    "nav.about": "Sobre mí",
    "nav.skills": "Habilidades",
    "nav.projects": "Proyectos",
    "nav.testimonials": "Testimonios",
    "nav.contact": "Contacto",

    "hero.photo": "Foto de perfil de Alejandra González Madrid",
    "hero.available": "Disponible para Prácticas Profesionales",
    "hero.role": "Pasante de Ingeniería en Sistemas Computacionales",
    "hero.subtitle": "Prácticas Profesionales",

    "hero.intro": `Soy estudiante del último cuatrimestre de <strong>Ingeniería en Sistemas Computacionales</strong> en la Universidad Virtual del Estado de Guanajuato (UVEG). Actualmente busco una oportunidad para realizar mis <strong>Prácticas Profesionales</strong>, donde pueda aplicar mis conocimientos, adquirir experiencia en proyectos tecnológicos y continuar desarrollándome en el sector de tecnologías de la información.`,

    "hero.experience": `Cuento con experiencia profesional en atención al cliente, gestión de información comercial, procesos administrativos y elaboración de reportes e indicadores de desempeño (KPIs), utilizando herramientas como <strong>Excel Avanzado, Power Query, sistemas CRM y ERP</strong>. Durante mi formación académica también he adquirido conocimientos en programación, bases de datos, desarrollo web y análisis de datos, utilizando tecnologías como <strong>Python, SQL, MongoDB, HTML, CSS y JavaScript</strong>.`,

    "hero.interests": `Tengo especial interés en proyectos relacionados con la gestión, transformación y análisis de datos, aunque estoy abierta a desarrollarme en otras áreas de tecnología. Además, soy <strong>Licenciada en Ciencias Nutricionales</strong> y tengo una <strong>Maestría en Nutrición Clínica</strong>, formación que complementa mi perfil tecnológico con experiencia en investigación, análisis de información y resolución de problemas desde una perspectiva interdisciplinaria.`,

    "hero.projects": "Ver proyectos",
    "hero.cv": "Descargar CV",
    
    "skills.title": "Habilidades y Herramientas",
    "skills.subtitle": "Conocimientos en programación, desarrollo web, bases de datos y gestión de información, complementados con experiencia profesional y habilidades para resolver problemas tecnológicos.",
    "skills.programming": "Programación y desarrollo web",
    "skills.databases": "Bases de datos",
    "skills.analysis": "Análisis y gestión de datos",
    "skills.tools": "Herramientas y plataformas",
    "skills.methods": "Metodologías y procesos",
    "skills.soft": "Competencias profesionales",

    "skills.python_js": "Python y JavaScript",
    "skills.html_css": "HTML5, CSS3 y Bootstrap",
    "skills.frontend": "Desarrollo frontend",
    "skills.rest": "Integración de APIs REST",
    "skills.dom": "Manipulación del DOM",
    "skills.json": "JSON y Fetch API",

    "skills.sql": "SQL y consultas relacionales",
    "skills.db_engines": "PostgreSQL, MySQL y MariaDB",
    "skills.mongodb": "MongoDB (NoSQL)",
    "skills.modeling": "Modelado de datos",
    "skills.joins": "JOINs y subconsultas",
    "skills.filtering": "Filtrado y agregaciones",

    "skills.pandas": "Python: Pandas, NumPy y Matplotlib",
    "skills.cleaning": "Limpieza y transformación de datos",
    "skills.eda": "Análisis exploratorio (EDA)",
    "skills.etl": "Procesos ETL",
    "skills.excel": "Excel avanzado y Power Query",
    "skills.kpis": "Reportes e indicadores (KPIs)",

    "skills.git": "Git y GitHub",
    "skills.vscode": "Visual Studio Code",
    "skills.notebooks": "Google Colab y Jupyter Notebook",
    "skills.deploy": "Vercel y GitHub Pages",
    "skills.crm": "Sistemas CRM y ERP",
    "skills.storage": "LocalStorage",

    "skills.scrum": "Fundamentos de Scrum",
    "skills.project": "Gestión de proyectos",
    "skills.documentation": "Documentación técnica",
    "skills.testing": "Pruebas funcionales de software",
    "skills.versioning": "Control de versiones",
    "skills.improvement": "Mejora de procesos",

    "skills.thinking": "Pensamiento analítico",
    "skills.solving": "Resolución de problemas",
    "skills.communication": "Comunicación efectiva",
    "skills.learning": "Aprendizaje continuo",
    "skills.detail": "Atención al detalle",
    "skills.customer": "Atención y orientación al cliente",
  },

  en: {
    "nav.about": "About me",
    "nav.skills": "Skills",
    "nav.projects": "Projects",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",

    "hero.photo": "Profile photo of Alejandra González Madrid",
    "hero.available": "Available for Professional Internships",
    "hero.role": "Computer Systems Engineering Student",
    "hero.subtitle": "Seeking Professional Internship Opportunities",

    "hero.intro": `I am a final-term <strong>Computer Systems Engineering student</strong> at Universidad Virtual del Estado de Guanajuato (UVEG). I am currently seeking a <strong>professional internship opportunity</strong> where I can apply my technical knowledge, gain hands-on experience in technology projects, and continue developing my skills in the IT industry.`,

    "hero.experience": `I have professional experience in customer service, commercial information management, administrative processes, and performance reporting (KPIs), using tools such as <strong>Advanced Excel, Power Query, CRM and ERP systems</strong>. Through my academic studies, I have also developed skills in programming, databases, web development, and data analysis, working with technologies including <strong>Python, SQL, MongoDB, HTML, CSS, and JavaScript</strong>.`,

    "hero.interests": `I am particularly interested in projects involving data management, transformation, and analysis, while remaining open to opportunities across other areas of technology. I also hold a <strong>Bachelor's degree in Nutritional Sciences</strong> and a <strong>Master's degree in Clinical Nutrition</strong>, which complement my technical background with experience in research, information analysis, and interdisciplinary problem-solving.`,

    "hero.projects": "View Projects",
    "hero.cv": "Download Resume",

    "skills.title": "Skills and Tools",
    "skills.subtitle": "Knowledge of programming, web development, databases, and information management, complemented by professional experience and problem-solving skills in technology.",
    "skills.programming": "Programming and Web Development",
    "skills.databases": "Databases",
    "skills.analysis": "Data Analysis and Management",
    "skills.tools": "Tools and Platforms",
    "skills.methods": "Methodologies and Processes",
    "skills.soft": "Professional Competencies",

    "skills.python_js": "Python and JavaScript",
    "skills.html_css": "HTML5, CSS3, and Bootstrap",
    "skills.frontend": "Frontend Development",
    "skills.rest": "REST API Integration",
    "skills.dom": "DOM Manipulation",
    "skills.json": "JSON and Fetch API",

    "skills.sql": "SQL and Relational Queries",
    "skills.db_engines": "PostgreSQL, MySQL, and MariaDB",
    "skills.mongodb": "MongoDB (NoSQL)",
    "skills.modeling": "Data Modeling",
    "skills.joins": "JOINs and Subqueries",
    "skills.filtering": "Filtering and Aggregations",

    "skills.pandas": "Python: Pandas, NumPy, and Matplotlib",
    "skills.cleaning": "Data Cleaning and Transformation",
    "skills.eda": "Exploratory Data Analysis (EDA)",
    "skills.etl": "ETL Processes",
    "skills.excel": "Advanced Excel and Power Query",
    "skills.kpis": "Reporting and Key Performance Indicators (KPIs)",

    "skills.git": "Git and GitHub",
    "skills.vscode": "Visual Studio Code",
    "skills.notebooks": "Google Colab and Jupyter Notebook",
    "skills.deploy": "Vercel and GitHub Pages",
    "skills.crm": "CRM and ERP Systems",
    "skills.storage": "LocalStorage",

    "skills.scrum": "Scrum Fundamentals",
    "skills.project": "Project Management",
    "skills.documentation": "Technical Documentation",
    "skills.testing": "Functional Software Testing",
    "skills.versioning": "Version Control",
    "skills.improvement": "Process Improvement",

    "skills.thinking": "Analytical Thinking",
    "skills.solving": "Problem-Solving",
    "skills.communication": "Effective Communication",
    "skills.learning": "Continuous Learning",
    "skills.detail": "Attention to Detail",
    "skills.customer": "Customer Service and Customer-Centric Approach",
  }
};

const langEs = document.getElementById("lang-es");
const langEn = document.getElementById("lang-en");


function changeLanguage(language) {
  const dictionary = translations[language];
  if (!dictionary) return;

  // Traducir textos
  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.getAttribute("data-i18n");

    if (Object.hasOwn(dictionary, key)) {
      if (key.startsWith("hero.") &&
          ["hero.intro", "hero.experience", "hero.interests"].includes(key)) {
        // HTML fijo y controlado por el desarrollador
        element.innerHTML = dictionary[key];
      } else {
        element.textContent = dictionary[key];
      }
    }
  });

  // Traducir texto alternativo de imágenes
  document.querySelectorAll("[data-i18n-alt]").forEach(element => {
    const key = element.getAttribute("data-i18n-alt");

    if (Object.hasOwn(dictionary, key)) {
      element.setAttribute("alt", dictionary[key]);
    }
  });

  // Actualizar idioma del documento
  document.documentElement.lang = language;

  // Actualizar botones
  langEs.classList.toggle("active", language === "es");
  langEn.classList.toggle("active", language === "en");

  langEs.setAttribute("aria-pressed", String(language === "es"));
  langEn.setAttribute("aria-pressed", String(language === "en"));

  // Recordar idioma
  localStorage.setItem("portfolioLanguage", language);
}

langEs.addEventListener("click", () => changeLanguage("es"));
langEn.addEventListener("click", () => changeLanguage("en"));

const savedLanguage = localStorage.getItem("portfolioLanguage");
changeLanguage(savedLanguage === "en" ? "en" : "es");