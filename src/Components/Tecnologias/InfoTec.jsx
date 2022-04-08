import React from "react";

function InfoTec(props) {
  return (
    <div className={props.ver ? "infoTec ver" : "infoTec"}>
      <p>{props.exp}</p>
      <p>
        Utilizando <span>{props.tec}</span>
      </p>
    </div>
  );
}

export default InfoTec;
