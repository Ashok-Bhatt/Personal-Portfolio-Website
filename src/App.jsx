import './App.css'
import Intro from "./Component/Intro";
import Navbar from './Component/Navbar';
import About from './Component/About';
import Skills from './Component/Skills';
import Projects from './Component/Projects';
import Contact from "./Component/Contact";
import CodingProfiles from "./Component/CodingProfiles";
import Certificates from "./Component/Certificates"
import Achievements from './Component/Achievements';

function App() {

  return (
    <div className='w-screen'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <CodingProfiles/>
      <Projects/>
      <Certificates/>
      <Achievements/>
      <Contact/>
    </div>
  )
}

export default App
