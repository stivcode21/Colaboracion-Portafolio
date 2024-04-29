import { Botones } from "./Botones";
import { Iconos } from "./Iconos";
import "./presentacion.scss";

export const Presentacion = () => {

  // Función para verificar qué sección está visible en la pantalla
  function detectarSeccionVisible() {
    const secciones = document.querySelectorAll('section');
    const enlaceSecciones = document.querySelectorAll('.ulMarcado strong');
    
    secciones.forEach((seccion, index) => {
      const seccionRect = seccion.getBoundingClientRect();
      if (seccionRect.top >= 0 && seccionRect.top <= window.innerHeight) {
        // Si la sección está en la pantalla, agregamos la clase active al enlace correspondiente
        enlaceSecciones[index].classList.add('active');
      } else {
        // Si la sección no está en la pantalla, eliminamos la clase active del enlace correspondiente
        enlaceSecciones[index].classList.remove('active');
      }
    });
  }

  // Detectar cambios en el desplazamiento de la página
  window.addEventListener('scroll', detectarSeccionVisible);

  return (
    <>
      <section className="presentacion">
        <div className="foto">
          <img
            className="fotoMia"
            src="./img/imgPortafolio.jpg"
            alt="foto de alan"
          />
        </div>

        <article className="info">
          <h1 className="titulo">Alan Ribeca</h1>
          <p className="profesion">
            <strong className="colorTexto">Developer Front-end</strong>{" "}
            apasionado y comprometido. Me encanta transformar ideas y diseños en
            páginas web mediante{" "}
            <strong className="colorTexto">código limpio y mantenible</strong>.
          </p>
          <p className="direccion">Rosario - Santa Fe - Argentina</p>
          <strong className="contacto">500+ Conexiones</strong>
        </article>

        <Botones />

        <section className="navegacion">
          <ul className="ulMarcado">
            <li className="liMarcado">
              <strong
                className="lineaMarcadora active"
                id="inicioLink"
              ></strong>{" "}
              Inicio
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora" id="proyectos"></strong>{" "}
              Proyectos
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora" id="habilidadesLink"></strong>{" "}
              Habilidades
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora" id="sobreMiLink"></strong> Sobre mi
            </li>
          </ul>
        </section>

        <Iconos />
      </section>
    </>
  );
};
