import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CheckIcon from "@mui/icons-material/Check";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contacto() {
  return (
    <section className="contacto" id="contactos">
      <div className="tecnologias__text">
        <p>Contacto</p>
      </div>
      <div className="contacto__cont">
        <ul>
          <li>
            <EmailIcon sx={{ fontSize: 40 }} />
            <p>mikehr704@gmail.com</p>
          </li>
          <li>
            <LocalPhoneIcon sx={{ fontSize: 40 }} />
            <p>352-146-1660</p>
          </li>
          <li>
            <LinkedInIcon sx={{ fontSize: 40 }} />
            <p>
              {" "}
              <a
                href="http://www.linkedin.com/in/miguelagustinhernandezreyes"
                target="_blank"
              >
                Linkedin
              </a>{" "}
            </p>
          </li>
          <li>
            <GitHubIcon sx={{ fontSize: 40 }} />
            <p>
              {" "}
              <a href="https://github.com/miguelhr704" target="_blank">
                GitHub
              </a>{" "}
            </p>
          </li>
          <li>
            <LocationOnIcon sx={{ fontSize: 40 }} />
            <p>La Piedad Michoacan</p>
          </li>
          <li>
            <CheckIcon sx={{ fontSize: 40 }} />
            <p>DISPONOBILIDAD PARA MUDARSE</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacto;
