import { Botones } from "./Botones";
import { Iconos } from "./Iconos";
import "./presentacion.scss";
// import Spline from '@splinetool/react-spline';

export const Presentacion = () => {
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
              <strong className="lineaMarcadora"></strong> Inicio
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora"></strong> Proyectos
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora"></strong> Habilidades
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora"></strong> Sobre mi
            </li>
            <li className="liMarcado">
              <strong className="lineaMarcadora"></strong> Contacto
            </li>
          </ul>
        </section>

        <Iconos />
      </section>
    </>
  );
};
