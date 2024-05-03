import "./tecnologias.scss";

export const Tecnologias = () => {
  return (
    <section className="tecnologias" id="habilidades">
      <div className="img">
        <h3 className="h3">Tecnologías y habilidades</h3>
        <div className="logosImg">
          <img src="..//img/html.svg" alt="logoHTML" />
          <img src="..//img/css.svg" alt="logoCss" />
          <img src="..//img/sass.svg" alt="logoSASS" />
          <img src="..//img/javascript.svg" alt="logoJavaScript" />
          <img src="..//img/react.svg" alt="logoReact" />
          <img src="..//img/git.svg" alt="logoGit" />
          <img src="..//img/githubb.svg" alt="logoGitHub" />
        </div>
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
