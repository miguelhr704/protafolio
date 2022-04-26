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
    <section className="tecnologias" id="tecnologias">
      <div className="tecnologias__text">
        <p>Tecnologias</p>
      </div>

      <InfoTec ver={verExp} exp={exp} tec={tec} />
      <div className="tecnologias__cont">
        <div className="tecnologias__cont-flex">
          <TecItem
            imgSrc="../../images/html.png"
            exp1="2 años de Experiencia"
            tec1="HTML"
            muestraExp={muestraExp}
          />

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
    </section>
  );
}

export default Tecnologias;
