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
import Chatbot from './Component/Chatbot';

function App() {

  return (
    <div className='relative w-full flex flex-col'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <CodingProfiles/>
      <Projects/>
      <Certificates/>
      <Achievements/>
      <Contact/>
      <Chatbot/>
    </div>
  )
}

export default App
