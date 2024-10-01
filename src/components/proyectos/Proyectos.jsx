import "./proyectos.scss";

export const Proyectos = () => {
  const proyectos = [
    {
      title: "Mi-inmobiliaria",
      description:
        "La página de Mi Inmobiliaria permite buscar y filtrar propiedades en venta y alquiler, con imágenes y descripciones detalladas. Ofrece un diseño responsivo y un formulario de contacto para consultas. El front-end está hecho con React, el back-end con Node.js, y se utilizó MongoDB como base de datos. Si inicia session con el gmail alan@gmial.com y el password alan1452, podra entrar a la pagina como el administrados (esto le permitira hacer un CRUD completo sobre las propiedades)",
      link: "https://miinmobiliaria.netlify.app/",
      github: "https://github.com/Alan-Ribeca/inmobiliaria",
      funciones: [
        "Búsqueda de propiedades en venta y alquiler",
        "Visualización Detallada de Propiedades",
        "Formulario de Contacto",
        "Sección de servicios ofrecidos por la inmobiliaria",
        "Registro, validación de cuenta y recuperación",
      ],
      image: "./img/inmoImg.png",
      tags: [
        "HTML",
        "CSS",
        "SASS",
        "JavaScript",
        "React",
        "Node.js",
        "MongoDB",
      ],
    },
    {
      title: "Font-Family: Generator;",
      description:
        "Explora una amplia variedad de fuentes tipográficas y personaliza tu experiencia de diseño con esta herramienta de generación de fuentes.",
      link: "https://font-family.netlify.app/",
      github: "https://github.com/Alan-Ribeca/Font-Family",
      funciones: [
        "Selección de fuentes",
        "Previsualización con fuente seleccionada",
        "Personalización del tamaño del texto",
        "Integración con Google Fonts",
      ],
      image: "./img/proyecFamily.png",
      tags: ["HTML", "CSS", "SASS", "JavaScript", "React"],
    },
    {
      title: "Clon-Linkedin",
      description: "Clon de Linkedin",
      link: "https://clon-linked-ing.vercel.app/",
      github: "https://github.com/Alan-Ribeca/Clon-LinkedIng",
      image: "./img/clonImg.png",
      tags: ["HTML", "CSS", "SASS", "JavaScript", "React"],
    },
    {
      title: "Gamer-top",
      description:
        "Explora la última tecnología en electrodomésticos y dispositivos electrónicos en esta hermosa tienda en línea.",
      link: "https://gamertopp.netlify.app/",
      github: "https://github.com/Alan-Ribeca/EntregaFinal-Ribeca/tree/main",
      funciones: [
        "Previsualización de productos",
        "Acceso a detalles sobre el producto seleccionado",
        "Funcionalidad de carrito de compras",
      ],
      image: "./img/proyecTienda.png",
      tags: ["HTML", "CSS", "SASS", "JavaScript", "React", "FireBase"],
    },
    {
      title: "Apolo",
      description:
        "¡Descubre la moda que te define en nuestra tienda de ropa en línea! Explora nuestra amplia colección de prendas de vestir para todas las ocasiones.",
      link: "https://apoloo.netlify.app/",
      github: "https://github.com/Alan-Ribeca/PF-RIBECA/tree/main",
      image: "./img/proyectApolo.png",
      tags: ["HTML", "CSS", "SASS"],
    },
    {
      title: "MemoBloc",
      description:
        "Un espacio simple para tus ideas brillantes. Nuestro bloc de notas en línea ofrece una plataforma sin complicaciones para capturar tus pensamientos en cualquier momento y en cualquier lugar.",
      link: "https://memobloc.netlify.app/",
      github: "https://github.com/Alan-Ribeca/Bloc-de-nota",
      funciones: [
        "Creación de nuevas notas",
        "Edición de notas existentes",
        "Eliminación de notas",
        "Guardado automático o manual de notas",
        "Visualización de una lista de notas guardadas",
      ],
      image: "./img/proyectSecundario.png",
      tags: ["HTML", "CSS", "SASS", "JavaScript"],
    },
  ];

  return (
    <>
      <h2 className="titleProyectos">Proyectos</h2>
      {proyectos.map(
        ({ title, description, link, github, funciones, image, tags }) => (
          <section
            id="proyectos"
            key={title}
            className="proyecs"
            data-aos="fade-left"
          >
            <div className="proyectInfo">
              <h3 className="titleProyect" translate="no">
                {title}
              </h3>
              <p className="pProyects" translate="no">
                {description}
              </p>
              <ul className="funciones">
                {funciones &&
                  funciones.length > 0 &&
                  funciones.map((funcion) => (
                    <li key={funcion} className="liProyect">
                      {funcion}
                    </li>
                  ))}
              </ul>
              <h4 className="tecnologiasUsadas">
                Tencologias utilizadas{" "}
                <span className="flecha">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="flecha"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708z"
                    />
                  </svg>
                </span>
              </h4>
              <ul className="ulProyect" translate="no">
                {tags.map((tag) => (
                  <li key={tag} className="liProyect">
                    {tag}
                  </li>
                ))}
              </ul>
              <div className="enlacesPag">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aProyects"
                >
                  <button className="btnProyectos">
                    Página web
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="web"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855q-.215.403-.395.872c.705.157 1.472.257 2.282.287zM4.249 3.539q.214-.577.481-1.078a7 7 0 0 1 .597-.933A7 7 0 0 0 3.051 3.05q.544.277 1.198.49zM3.509 7.5c.036-1.07.188-2.087.436-3.008a9 9 0 0 1-1.565-.667A6.96 6.96 0 0 0 1.018 7.5zm1.4-2.741a12.3 12.3 0 0 0-.4 2.741H7.5V5.091c-.91-.03-1.783-.145-2.591-.332M8.5 5.09V7.5h2.99a12.3 12.3 0 0 0-.399-2.741c-.808.187-1.681.301-2.591.332zM4.51 8.5c.035.987.176 1.914.399 2.741A13.6 13.6 0 0 1 7.5 10.91V8.5zm3.99 0v2.409c.91.03 1.783.145 2.591.332.223-.827.364-1.754.4-2.741zm-3.282 3.696q.18.469.395.872c.552 1.035 1.218 1.65 1.887 1.855V11.91c-.81.03-1.577.13-2.282.287zm.11 2.276a7 7 0 0 1-.598-.933 9 9 0 0 1-.481-1.079 8.4 8.4 0 0 0-1.198.49 7 7 0 0 0 2.276 1.522zm-1.383-2.964A13.4 13.4 0 0 1 3.508 8.5h-2.49a6.96 6.96 0 0 0 1.362 3.675c.47-.258.995-.482 1.565-.667m6.728 2.964a7 7 0 0 0 2.275-1.521 8.4 8.4 0 0 0-1.197-.49 9 9 0 0 1-.481 1.078 7 7 0 0 1-.597.933M8.5 11.909v3.014c.67-.204 1.335-.82 1.887-1.855q.216-.403.395-.872A12.6 12.6 0 0 0 8.5 11.91zm3.555-.401c.57.185 1.095.409 1.565.667A6.96 6.96 0 0 0 14.982 8.5h-2.49a13.4 13.4 0 0 1-.437 3.008M14.982 7.5a6.96 6.96 0 0 0-1.362-3.675c-.47.258-.995.482-1.565.667.248.92.4 1.938.437 3.008zM11.27 2.461q.266.502.482 1.078a8.4 8.4 0 0 0 1.196-.49 7 7 0 0 0-2.275-1.52c.218.283.418.597.597.932m-.488 1.343a8 8 0 0 0-.395-.872C9.835 1.897 9.17 1.282 8.5 1.077V4.09c.81-.03 1.577-.13 2.282-.287z" />
                    </svg>
                  </button>
                </a>
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aProyects"
                >
                  <button className="btnProyectos">
                    GitHub
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="web"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                    </svg>
                  </button>
                </a>
              </div>
            </div>
            <img
              src={image}
              alt={`Captura de pantalla del proyecto ${image}`}
              className="imgProyect"
            />
          </section>
        )
      )}
    </>
  );
};
