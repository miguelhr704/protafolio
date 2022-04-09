import React from "react";
import ProyectoItem from "./ProyectoItem";

function Proyectos() {
  return (
    <div className="proyectos">
      <div className="proyectos__text">
        <p>Proyectos</p>
      </div>
      <div className="proyectos__cont">
        <ProyectoItem
          title="MaxCinema"
          imgSrc="../../images/proye1.png"
          posisicion="div1"
        />
        <ProyectoItem
          title="MaxCinema"
          imgSrc="../../images/proye1.png"
          posisicion="div2"
        />
        <ProyectoItem
          title="MaxCinema"
          imgSrc="../../images/proye1.png"
          posisicion="div3"
        />
        <ProyectoItem
          title="MaxCinema"
          imgSrc="../../images/proye1.png"
          posisicion="div4"
        />
        <ProyectoItem
          title="MaxCinema"
          imgSrc="../../images/proye1.png"
          posisicion="div5"
        />
      </div>
    </div>
  );
}

export default Proyectos;
