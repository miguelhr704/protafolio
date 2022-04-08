import Navbar from "./Components/Navbar/Navbar"
import Hero from "./Components/Hero/Hero";
import Tecnologias  from "./Components/Tecnologias/Tecnologias"

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <Hero/>
      <Tecnologias key="tecnologias"/>
    </div>
  );
}

export default App;
