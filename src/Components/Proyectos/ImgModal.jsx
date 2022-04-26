import React from "react";

function ImgModal({ urlImg, verImg, verFoto }) {
  return (
    <div
      className={verImg ? "modalProyecto__imagen ver" : "modalProyecto__imagen"}
    >
      <p className="modalProyecto__cont-HeadIcon" onClick={verFoto}>
        Ocultar Imagen
      </p>
      <img src={urlImg} alt="Imagen" srcset="" />
    </div>
  );
}

export default ImgModal;
