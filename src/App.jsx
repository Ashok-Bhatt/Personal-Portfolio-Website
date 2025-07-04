import './App.css'
import Intro from "./Component/Intro";
import Navbar from './Component/Navbar';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from "./Component/Contact";
import CodingProfiles from "./Component/CodingProfiles";

function App() {

  return (
    <div>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <CodingProfiles/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
