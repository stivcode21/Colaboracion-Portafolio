export const Proyectos = () => {
  const proyectos = [
    {
      title: "Font-Family: Generator;",
      description:
        "Explora una amplia variedad de fuentes tipográficas y personaliza tu experiencia de diseño con nuestra herramienta de generación de fuentes.",
      link: "https://font-family.netlify.app/",
      github: "https://github.com/Alan-Ribeca/Font-Family",
      image: "./img/proyecFamily.png",
      tags: ["html", "css", "sass", "js", "react"],
    },
    {
      title: "Apolo",
      description:
        "¡Descubre la moda que te define en nuestra tienda de ropa en línea! Explora nuestra amplia colección de prendas de vestir para todas las ocasiones.",
      link: "https://apoloo.netlify.app/",
      github: "https://github.com/Alan-Ribeca/PF-RIBECA/tree/main",
      image: "./img/proyectApolo.png",
      tags: ["html", "css", "sass"],
    },
    {
      title: "Gamer-top",
      description:
        "Explora la última tecnología en electrodomésticos y dispositivos electrónicos en nuestra tienda en línea.",
      link: "https://gamertopp.netlify.app/",
      github: "https://github.com/Alan-Ribeca/EntregaFinal-Ribeca/tree/main",
      image: "./img/proyecTienda.png",
      tags: ["html", "css", "sass", "js", "react", "firebase"],
    },
    {
      title: "MemoBloc",
      description:
        "Un espacio simple para tus ideas brillantes. Nuestro bloc de notas en línea ofrece una plataforma sin complicaciones para capturar tus pensamientos en cualquier momento y en cualquier lugar. ",
      link: "https://memobloc.netlify.app/",
      github: "https://github.com/Alan-Ribeca/Bloc-de-nota",
      image: "./img/proyectSecundario.png",
      tags: ["html", "css", "sass", "js"],
    },
  ];

  return (
    <>
      {proyectos.map(({ title, description, link, github, image, tags }) => (
        <article key={title} className="proyecs">
          <h3 className="titleProyect">{title}</h3>
          <p className="pProyects">{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer" className="aProyects">
            Link
          </a>
          <a href={github} target="_blank" rel="noopener noreferrer" className="aProyects">
            Github
          </a>  
          <ul className="ulProyect">
            {tags.map((tag) => (
              <li key={tag} className="liProyect">{tag}</li>
            ))}
          </ul>
          <img src={image} alt={`Captura de pantalla del proyecto ${image}`} className="imgProyect"/>
        </article>
      ))}
    </>
  );
};
