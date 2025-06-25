import './App.css'
import Intro from "./Component/Intro";
import Navbar from './Component/Navbar';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from "./Component/Contact";

function App() {

  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
