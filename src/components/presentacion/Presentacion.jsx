import { useEffect } from "react";
import { Botones } from "./Botones";
import { Iconos } from "./Iconos";
import "./presentacion.scss";
import { FlechaMovil } from "./FlechaMovil";

export const Presentacion = () => {
  useEffect(() => {
    function detectarSeccionVisible() {
      const secciones = document.querySelectorAll("section");
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.body.clientHeight;

      // Si el scroll está en la parte superior de la página, marca el enlace "Inicio"
      if (scrollTop === 0) {
        const activeLink = document.querySelector(".ulMarcado strong.active");
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        const link = document.querySelector("#inicioLink");
        if (link) {
          link.classList.add("active");
        }
        return;
      }

      // Si el scroll está en el final de la página, marca el enlace "Sobre mí"
      if (scrollTop + windowHeight === documentHeight) {
        const activeLink = document.querySelector(".ulMarcado strong.active");
        if (activeLink) {
          activeLink.classList.remove("active");
        }
        const link = document.querySelector("#sobreMiLink");
        if (link) {
          link.classList.add("active");
        }
        return;
      }

      secciones.forEach((seccion) => {
        const seccionRect = seccion.getBoundingClientRect();
        if (seccionRect.top >= 0 && seccionRect.top <= windowHeight) {
          const activeLink = document.querySelector(".ulMarcado strong.active");
          if (activeLink) {
            activeLink.classList.remove("active");
          }
          const link = document.querySelector(`#${seccion.id}Link`);
          if (link) {
            link.classList.add("active");
          }
        }
      });
    }

    window.addEventListener("scroll", detectarSeccionVisible);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("scroll", detectarSeccionVisible);
    };
  }, []);

  return (
    <>
      <section className="presentacion">
        <div className="foto">
          <img className="fotoMia" src="./img/fotoCV.jpg" alt="foto de Alan" />
        </div>

        <article className="info">
          <h1 className="titulo">Alan Ribeca</h1>
          <p className="profesion">
            <strong className="colorTexto">Desarrollador Front-end</strong>{" "}
            Apasionado y comprometido. Me encanta transformar ideas y diseños en
            páginas web mediante{" "}
            <strong className="colorTexto">código limpio y mantenible.</strong>
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
              <strong className="lineaMarcadora" id="proyectosLink"></strong>{" "}
              Proyectos
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora" id="habilidadesLink"></strong>{" "}
              Habilidades
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora" id="sobreMiLink"></strong>{" "}
              Sobre mí
            </li>
          </ul>
        </section>

        <Iconos />

        <FlechaMovil />
      </section>
    </>
  );
};
