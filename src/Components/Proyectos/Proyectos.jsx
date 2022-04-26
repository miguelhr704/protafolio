import React, { useState } from "react";
import ProyectoItem from "./ProyectoItem";
import ModalProyectos from "./ModalProyectos";

function Proyectos({ muestraPro }) {
  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos__text">
        <p>Proyectos</p>
      </div>
      <div className="proyectos__cont">
        <div className="proyectos__cont-flex">
          <ProyectoItem
            title="MaxCinema"
            imgSrc="../../images/proye1.png"
            posisicion="div1"
            muestraP={() => {
              muestraPro("div1");
            }}
          />
          <ProyectoItem
            title="Innas Deliogar"
            imgSrc="../../images/innas1.png"
            posisicion="div2"
            muestraP={() => {
              muestraPro("div2");
            }}
          />
          <ProyectoItem
            title="Apuntes Personales"
            imgSrc="../../images/apuntes1.png"
            posisicion="div3"
            muestraP={() => {
              muestraPro("div3");
            }}
          />
          <ProyectoItem
            title="Personal Expenses"
            imgSrc="../../images/expenses1.png"
            posisicion="div4"
            muestraP={() => {
              muestraPro("div4");
            }}
          />
        </div>
      </div>
    </section>
  );
}

export default Proyectos;
