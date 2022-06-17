import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import Tecnologias  from "./Components/Tecnologias/Tecnologias"
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import Cursos from "./Components/Contacto/Cursos/Cursos";
import About from "./Components/About";
import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import ModalProyectos from "./Components/Proyectos/ModalProyectos";
function App() {
  useEffect(()=>{
    document.title= `MikeHR-Portafolio`;
    
  },[])

  const [verPro, setVerpro] = useState(false);
  const [proTitulo, setProTitulo] = useState("");
  const [proDesc, setProDesc] = useState("");
  const [proTec, setProTec] = useState("");
  const [proImg, setProImg] = useState([]);
  const [rick, setrick] = useState([]);

  const muestraPro = (divn) => {
    
    if (verPro) {
      setVerpro(false);
      document.getElementById("body").style = "";
    } else {
      setVerpro(true);
      setValores(divn);
      document.getElementById("body").style =
        "overflow-y: hidden; overflow-x: scroll;";
    }
  };

  const proyectos = [
    {
      titulo: "MaxCinema",
      desc: "MaxCinema es una WebApp que desarrolle como un proyecto personal para maquetar la pagina web de un cine lo mas realista posible, con una sección principal donde se muestra una película que sea de un estreno mas reciente continuando con la sección de estrenos, cartelera, próximos estrenos y también una cartelera principal que muestre todos los horarios de las películas. También contiene la sección de compra de boletos y la aparte administrativa de la aplicación desde la cual se agregan o se quitan películas así como se manejan los horarios que cada película tiene. Las primeras 4 imagenes son el resultado final de la aplicacion y las restantes son ejemplos de como quedara finalmente. (aun en desarrollo)",
      tec: "HTML, CSSS, SASS, JavaScript, ReactJs",
      img: [
        "../../images/proye1.png",
        "../../images/estreno.png",
        "../../images/cartelera.png",
        "../../images/proxima.png",
        "../../images/ejemplocartelera.jpeg",
        "../../images/sala.jpeg",
      ],
    },
    {
      titulo: "InnasDeliogarApp",
      desc: "Esta webApp se desarrollo para una empresa de banquetes para llevar un control tanto de las ventas como el consumo que se tenia por parte de los trabajadores de las empresas a las cuales se les da servicio, registrando el numero de empleado, el platillo que consumió, las cantidad el precio y el tipo de pago, también se muestran listas de los platillos y de el consumo total de los empleados. ",
      tec: "HTML, CSSS, SASS, JavaScript, ReactJs, NodeJs, Express FireBase",
      img: [
        "../../images/screen1.png",
        "../../images/screen2.png",
        "../../images/screen3.png",
        "../../images/screen4.png",
        "../../images/screen5.png",
        "../../images/screen6.png",
        "../../images/screen7.png",
        "../../images/screen8.png",
        "../../images/screen9.png",
        "../../images/screen10.png",
        "../../images/screen11.png",
      ],
    },
    {
      titulo: "Apuntes",
      desc: "Esta es una web app de uso personal la cual permite llevar apuntes de los distintos cursos que estoy tomando así como notas importantes sobre distintas tecnologías. y se hizo uso de una fake API para poder guardar y repurear la informacion de la aplicacion.",
      tec: "HTML, CSSS, SASS, JavaScript, ReactJs",
      img: [
        "../../images/apuntes1.png",
        "../../images/apuntes2.png",
        "../../images/apuntes3.png",
        "../../images/apuntes4.png",
        "../../images/apuntes5.png",
      ],
    },
    {
      titulo: "Personal Expenses",
      desc: "Esta webApp es de uso personal para llevar un control de finanzas personales, en la cual se registran gastos, ingresos, gastos fijos, y los ahorros acumulados, y se muestran todos los gastos del mes que se seleccione.(aun en desarrollo)",
      tec: "HTML, CSSS, SASS, JavaScript, ReactJs",
      img: ["../../images/expenses1.png", "../../images/expenses2.png"],
    },
  ];

  const setValores = (divNum) => {
    if (divNum == "div1") {
      setProTitulo(proyectos[0].titulo);
      setProDesc(proyectos[0].desc);
      setProTec(proyectos[0].tec);
      setProImg(proyectos[0].img);
    } else if (divNum == "div2") {
      setProTitulo(proyectos[1].titulo);
      setProDesc(proyectos[1].desc);
      setProTec(proyectos[1].tec);
      setProImg(proyectos[1].img);
    } else if (divNum == "div3") {
      setProTitulo(proyectos[2].titulo);
      setProDesc(proyectos[2].desc);
      setProTec(proyectos[2].tec);
      setProImg(proyectos[2].img);
    } else if (divNum == "div4") {
      setProTitulo(proyectos[3].titulo);
      setProDesc(proyectos[3].desc);
      setProTec(proyectos[3].tec);
      setProImg(proyectos[3].img);
    } else if (divNum == "div5") {
      setProTitulo(proyectos[4].titulo);
      setProDesc(proyectos[4].desc);
      setProTec(proyectos[4].tec);
      setProImg(proyectos[4].img);
    } else {
      setProTitulo("");
      setProDesc("");
      setProTec("");
      setProImg("");
    }
  };
 const url = 'https://rickandmortyapi.com/api/character';
  const api = async (url) =>{
    const info = await fetch(url)
    .then(response => response.json())
    .then(data =>setrick(data));
  } 

  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <ModalProyectos
        verP={verPro}
        muestraP={muestraPro}
        titulo={proTitulo}
        desc={proDesc}
        tec={proTec}
        img={proImg}
      />
      <Hero/>
      <About/>
      <Tecnologias/>
      <Proyectos
      muestraPro={muestraPro}
      />
      <Cursos/>
      <Contacto/>
    </div>
    </BrowserRouter>
  );
}

export default App;
