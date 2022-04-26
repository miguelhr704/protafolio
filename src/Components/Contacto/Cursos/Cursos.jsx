import React from "react";
import CardMembershipIcon from "@mui/icons-material/CardMembership";

function Cursos() {
  return (
    <section className="cursos" id="Cursoss">
      <div className="tecnologias__text">
        <p>Cursos y Certifiaciones</p>
      </div>
      <div className="cursos__cont">
        <ul>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">The Complete 2022 Web Developer BootCamp</p>
              <p className="by">By Dr. Angela Yu</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso Práctico de HTML y CSS</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso Básico de JavaScript</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso Práctico de JavaScript</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso de Frontend Developer</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso Práctico de Frontend Developer</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso de ECMAScript 6+</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso de Asincronismo con JavaScript</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso de Preprocesadores CSS</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">Curso de Diseño para Developers</p>
              <p className="by">Platzi</p>
            </div>
          </li>
          <li>
            <CardMembershipIcon sx={{ fontSize: 40 }} />
            <div className="text">
              <p className="what">
                Curso de Responsive Design: Maquetación Mobile First
              </p>
              <p className="by">Platzi</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Cursos;
