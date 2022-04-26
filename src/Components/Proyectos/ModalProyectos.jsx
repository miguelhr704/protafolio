import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { RViewer, RViewerTrigger } from "react-viewerjs";
import ImgModal from "./ImgModal";

function ModalProyectos({ verP, muestraP, titulo, desc, tec, img }) {
  const [foto, setfoto] = useState(false);
  const [idm, setidm] = useState("");
  const [urlImg, setUrlImg] = useState("");
  const [verImg, setVerImg] = useState(false);
  let sourceUrl = img;
  const verFoto = (idimg, Url) => {
    if (verImg) {
      setUrlImg("");
      setVerImg(false);
    } else {
      setUrlImg(Url);
      setVerImg(true);
    }
  };
  return (
    <div className={verP ? "modalProyecto ver" : "modalProyecto"}>
      <ImgModal urlImg={urlImg} verImg={verImg} verFoto={verFoto} />
      <div className="modalProyecto__cont">
        <div className="modalProyecto__cont-Head">
          <h1 className="modalProyecto__cont-Headtitle">{titulo}</h1>
          <p className="modalProyecto__cont-HeadIcon" onClick={muestraP}>
            X
          </p>
        </div>
        <div className="modalProyecto__cont-body">
          <p className="modalProyecto__cont-bodyText">{desc}</p>
          <div className="modalProyecto__cont-tec">
            <h1 className="modalProyecto__cont-tecTitle">Tecnologias</h1>
            <p className="modalProyecto__cont-tecText">{tec}</p>
          </div>
          <div className="modalProyecto__cont-bodyImgCont">
            {sourceUrl.map((imagen, index) => {
              return (
                <img
                  key={index}
                  src={imagen}
                  alt="img"
                  srcset=""
                  className={foto ? (index == idm ? "img ver" : "img") : "img"}
                  onClick={() => {
                    verFoto(index, imagen);
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalProyectos;
