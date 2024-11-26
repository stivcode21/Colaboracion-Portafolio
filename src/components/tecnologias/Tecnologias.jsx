import "./tecnologias.scss";

export const Tecnologias = () => {
  return (
    <div className="box">
      <section className="tecnologias" id="habilidades">
        <div className="img">
          <h2 className="h3">Tecnologías y habilidades</h2>
          <div className="logosImg">
            <img src="..//img/html.svg" alt="logoHTML" />
            <img src="..//img/css.svg" alt="logoCss" />
            <img src="..//img/sass.svg" alt="logoSASS" />
            <img src="..//img/javascript.svg" alt="logoJavaScript" />
            <img src="..//img/react.svg" alt="logoReact" />
            <img src="..//img/node.svg" alt="logoNode.js" />
            <img src="..//img/git.svg" alt="logoGit" />
            <img src="..//img/githubb.svg" alt="logoGitHub" />
            <img
              src="../img/firebase.svg"
              alt="logoFirebase"
              className="logoFirebase"
            />
            <img src="..//img/mongodb.svg" alt="logoMongoDB" />
          </div>
        </div>

        <div className="habilidadesBlanda">
          <h2 className="h3">Habilidades blandas</h2>
          <ul className="ulBlanda">
            <li className="liBlanda">- Comunicación efectiva </li>
            <li className="liBlanda">- Trabajo en equipo </li>
            <li className="liBlanda">- Resolución de problemas </li>
            <li className="liBlanda" translate="no">
              - Creatividad -
            </li>
            <li className="liBlanda">- Flexibilidad y adaptabilidad </li>
            <li className="liBlanda">- Aprendizaje continuo </li>
          </ul>
        </div>
      </section>
    </div>
  );
};
