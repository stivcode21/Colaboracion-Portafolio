import "./tecnologias.scss";

export const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <div className="img">
        <h3 className="h3">Tecnologias y habilidades</h3>
        <img src="..//img/html.svg" alt="logoCss" />
        <img src="..//img/css.svg" alt="" />
        <img src="..//img/sass.svg" alt="" />
        <img src="..//img/javascript.svg" alt="" />
        <img src="..//img/react.svg" alt="" />
        <img src="..//img/git.svg" alt="" />
        <img src="..//img/githubb.svg" alt="" />
      </div>

      <div className="habilidadesBlanda">
        <h3 className="h3">Habilidades blandas</h3>
        <ul className="ulBlanda">
          <li className="liBlanda">- Comunicación efectiva -</li>
          <li className="liBlanda">- Trabajo en equipo -</li>
          <li className="liBlanda">- Resolución de problemas -</li>
          <li className="liBlanda">- Creatividad -</li>
          <li className="liBlanda">- Flexibilidad y adaptabilidad -</li>
          <li className="liBlanda">- Aprendizaje continuo -</li>
        </ul>
      </div>
    </section>
  );
};
