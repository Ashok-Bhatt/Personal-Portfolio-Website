import './App.css'
import Intro from "./pages/Intro";
import Navbar from './components/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from "./pages/Contact";
import CodingProfiles from "./pages/CodingProfiles";
import Certificates from "./pages/Certificates"
import Achievements from './pages/Achievements';
import Chatbot from './components/Chatbot';

function App() {

  return (
    <div className='relative w-full flex flex-col'>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <CodingProfiles />
      <Projects />
      <Certificates />
      <Achievements />
      <Contact />
      <Chatbot />
    </div>
  )
}

export default App
