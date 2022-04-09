import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import Tecnologias  from "./Components/Tecnologias/Tecnologias"
import Proyectos from "./Components/Proyectos/Proyectos";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Tecnologias/>
      <Proyectos/>
    </div>
  );
}

export default App;
