import React from "react";

function ProyectoItem({ title, imgSrc, posisicion }) {
  return (
    <div className={"proyecto__item " + posisicion}>
      <h1 className="proyecto__item-title">{title}</h1>
      <img
        src={imgSrc}
        alt="proyecto"
        srcset=""
        className="proyecto__item-img"
      />
      <button className="proyecto__item-btn">Ver Proyecto</button>
    </div>
  );
}

export default ProyectoItem;
