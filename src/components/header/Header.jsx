import "./header.scss";

export const Header = () => {
  const handleInicioClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <header className="header">
        <nav>
          <ul className="ulHeader">
            <li className="liHeader">
              <a href="#" onClick={handleInicioClick}>
                Inicio
              </a>
            </li>
            <li className="liHeader">
              <a href="#proyectos"> Proyectos </a>
            </li>
            <li className="liHeader">
              <a href="#habilidades"> Habilidades </a>
            </li>
            <li className="liHeader">
              <a href="#sobreMi"> Sobre mí </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
