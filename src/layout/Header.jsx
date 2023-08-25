import { Link } from "react-router-dom";

function Header() {
  return (

    <header className="Main">

      <div className="Container">
        <div className="Header-logo">
          
        </div>

        <nav className="Menu">
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="project">Projetos</Link>
            </li>
            <li>
              <Link to="skills">Habilidades</Link>
            </li>
            <li>
             
            </li>
          </ul>
        </nav>

      </div>

    </header>

  )
}

export default Header;
