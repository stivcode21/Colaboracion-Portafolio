import { Botones } from "./Botones";
import { Iconos } from "./Iconos";
import "./presentacion.scss";

export const Presentacion = () => {
  return (
    <>
      <section className="presentacion">
        <div className="cuadrado"></div>
        <div className="foto"></div>

        <article className="info">
          <h1 className="titulo">Alan Ribeca</h1>
          <p className="profesion">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            tenetur
          </p>
          <p className="direccion">Rosario - Santa Fe - Argentina</p>
          <strong className="contacto">500+ conexiones</strong>
        </article>

        <Botones />

        <section className="navegacion">
            <ul className="ulMarcado">
                <li className="liMarcado"> <strong className="lineaMarcadora">-</strong> Inicio</li>
                <li className="liMarcado"> <strong className="lineaMarcadora">-</strong> Proyectos</li>
                <li className="liMarcado"> <strong className="lineaMarcadora">-</strong> Habilidades</li>
                <li className="liMarcado"> <strong className="lineaMarcadora">-</strong> Sobre mi</li>
                <li className="liMarcado"> <strong className="lineaMarcadora">-</strong> Contacto</li>
            </ul>
        </section>

        <Iconos />

      </section>
    </>
  );
};
