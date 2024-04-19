import "./tecnologias.scss";

export const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <div className="img">
        <h3>Tecnologias y habilidades</h3>
        <img src="..//img/html.svg" alt="logoCss" />
        <img src="..//img/css.svg" alt="" />
        <img src="..//img/sass.svg" alt="" />
        <img src="..//img/javascript.svg" alt="" />
        <img src="..//img/react.svg" alt="" />
        <img src="..//img/git.svg" alt="" />
        <img src="..//img/github.svg" alt="" />
      </div>

      <div className="habilidadesBlanda">
        <h3 className="habilidadBlanda">
          Habilidades blandas
        </h3>
        <p className="pBlanda">Comunicación efectiva</p>
        <p className="pBlanda">Trabajo en equipo</p>
        <p className="pBlanda">Resolución de problemas</p>
        <p className="pBlanda">Creatividad</p>
        <p className="pBlanda">Flexibilidad y adaptabilidad</p>
        <p className="pBlanda">Aprendizaje continuo</p>  
      </div>
    </section>
  );
};
