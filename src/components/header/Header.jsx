import "./header.scss";

export const Header = () => {
  return (
    <>
      <header className="header">
        <nav>
          <ul className="ulHeader">
            <li className="liHeader">Inicio</li>
            <li className="liHeader">Proyectos</li>
            <li className="liHeader">Habilidades</li>
            <li className="liHeader">Sobre mi</li>
            <li className="liHeader">Contacto</li>
          </ul>
        </nav>
      </header>
    </>
  );
};
