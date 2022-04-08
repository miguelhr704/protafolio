import React from "react";

function Navbar() {
  return (
    <div className="navBar">
      <p className="navBar__logo">
        <a href="http://">Portafolio</a>
      </p>
      <div className="navBar__cont">
        <ul className="navBar__cont-menu">
          <li>
            <a href="/">Inicio</a>
          </li>
          <li>
            <a href="/tecnologias">Tecnologias</a>
          </li>
          <li>
            <a href="/">Proyectos</a>
          </li>
          <li>
            <a href="/">Diplomas y Certificaciones</a>
          </li>
        </ul>
      </div>
      <p className="navBar__contacto">
        <a href="http://">Contacto</a>
      </p>
    </div>
  );
}

export default Navbar;
