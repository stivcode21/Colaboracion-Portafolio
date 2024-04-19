import "./tecnologias.scss";

export const Tecnologias = () => {
  return (
    <section className="tecnologias">
      <div className="img">
        <h2>Tecnologias y habilidades</h2>
        <img src="../public/img/html.svg" alt="logoCss" />
        <img src="../public/img/css.svg" alt="" />
        <img src="../public/img/sass.svg" alt="" />
        <img src="../public/img/javascript.svg" alt="" />
        <img src="../public/img/react.svg" alt="" />
        <img src="../public/img/git.svg" alt="" />
        <img src="../public/img/github.svg" alt="" />
      </div>

      <div className="habilidadesBlanda">
        <h2 className="habilidadBlanda">
          Habilidades blandas
        </h2>
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
