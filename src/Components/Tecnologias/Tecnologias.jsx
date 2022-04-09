import React, { useState } from "react";
import InfoTec from "./InfoTec";
import TecItem from "./TecItem";

function Tecnologias() {
  const [verExp, setVerExp] = useState(false);
  const [tec, setTec] = useState("");
  const [exp, setExp] = useState("");

  const muestraExp = (rTec, rExp) => {
    if (verExp === false) {
      setVerExp(true);
      setTec(rTec);
      setExp(rExp);
    } else {
      if (rTec != tec) {
        setTec(rTec);
        setExp(rExp);
        setVerExp(true);
      } else {
        setVerExp(false);
      }
    }
  };
  return (
    <div className="tecnologias">
      <div className="tecnologias__text">
        <p>Tecnologias</p>
      </div>
      <div className="tecnologias__circ"></div>
      <div className="tecnologias__circ2"></div>
      <div className="tecnologias__circ3"></div>
      <div className="tecnologias__cont">
        <TecItem
          imgSrc="../../images/html.png"
          exp1="2 años de Experiencia"
          tec1="HTML"
          muestraExp={muestraExp}
        />
        <InfoTec ver={verExp} exp={exp} tec={tec} />
        <TecItem
          imgSrc="../../images/css.png"
          exp1="2 años de Experiencia"
          tec1="CSS"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/js.png"
          exp1="2 años de Experiencia"
          tec1="JavaScript"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/sql.png"
          exp1="2 años de Experiencia"
          tec1="MySQL"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/react.png"
          exp1="1 años de Experiencia"
          tec1="React"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/sass.png"
          exp1="1 años de Experiencia"
          tec1="SASS"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/git.png"
          exp1="1 años de Experiencia"
          tec1="GIT"
          muestraExp={muestraExp}
        />
        <TecItem
          imgSrc="../../images/github.png"
          exp1="1 años de Experiencia"
          tec1="GitHub"
          muestraExp={muestraExp}
        />
      </div>
    </div>
  );
}

export default Tecnologias;
