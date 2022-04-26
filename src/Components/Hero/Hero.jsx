import React from "react";

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__text">
        <div className="hero__text-cont">
          <h1 className="hero__text-contTitle">
            Miguel Agustin Hernandez Reyes
          </h1>
          <h2 className="hero__text-contText">
            Jr. <span>Front End</span> Developer
          </h2>
        </div>
      </div>
      <div className="hero__img">
        <div className="hero__circle"></div>
        <div className="hero__circle2"></div>
        <img src="../../images/fotoPort.png" alt="" srcset="" />
      </div>
    </section>
  );
}

export default Hero;
