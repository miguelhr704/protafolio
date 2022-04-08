import React, { useState } from "react";
import InfoTec from "./InfoTec";

function TecItem(props) {
  const { imgSrc, tec1, exp1, muestraExp } = props;

  return (
    <div className="tecnologias__cont-item">
      <img
        src={imgSrc}
        alt="tec"
        srcset=""
        className="tecnologias__img"
        title="Ver experiencia"
        onClick={() => {
          muestraExp(tec1, exp1);
        }}
      />
    </div>
  );
}

export default TecItem;
