import React from "react";

function ProyectoItem({ title, imgSrc, posisicion, muestraP, setV }) {
  return (
    <div className={"proyecto__item " + posisicion}>
      <h1 className="proyecto__item-title">{title}</h1>
      <button
        className="proyecto__item-btn"
        onClick={() => {
          muestraP(posisicion);
        }}
      >
        Ver Proyecto
      </button>
    </div>
  );
}

export default ProyectoItem;
