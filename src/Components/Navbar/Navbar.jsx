import React, { useEffect, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [transp, setTransp] = useState(false);

  useEffect(() => {
    window.onscroll = function () {
      var y = window.scrollY;
      if (y > 120) {
        setTransp(true);
      } else {
        setTransp(false);
      }
    };
  }, []);

  return (
    <div className={transp ? "navBar ver" : "navBar"}>
      <p className="navBar__logo">
        <Link to="#hero" smooth>
          Portafolio
        </Link>
      </p>
      <div className="navBar__cont">
        <ul className="navBar__cont-menu">
          <li>
            <Link to="#hero" smooth>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="#tecnologias" smooth>
              Tecnologias
            </Link>
          </li>
          <li>
            <Link to="#proyectos" smooth>
              Proyectos
            </Link>
          </li>
          <li>
            <Link to="#Cursoss" smooth>
              Cursos y Certificaciones
            </Link>
          </li>
        </ul>
      </div>
      <p className="navBar__contacto">
        <Link to="#contactos" smooth>
          Contacto
        </Link>
      </p>
    </div>
  );
}

export default Navbar;
