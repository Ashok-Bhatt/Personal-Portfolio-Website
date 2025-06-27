import { FaLaptopCode } from 'react-icons/fa';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ProjectBlock from './ProjectBlock'
import { useState } from 'react';

function Projects() {

  const projects = [
    {
      projectName : "Flavour Fusion",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1750856554/IMG_20250625_183147_qto7fl.jpg",
      description : "A feature-rich recipe app providing an extensive collection of easy-to-follow and diverse recipes for every taste.",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Flavour-Fusion---Recipe-App",
    },
    {
      projectName : "Kaun Banega Crorepati",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1749817985/Screenshot_2025-06-13_174237_szh9ff.png",
      description : "An interactive quiz game inspired by Kaun Banega Crorepati, testing knowledge with progressive difficulty levels",
      liveLink : "https://ashok-bhatt.github.io/Kaun-Banega-Crorepati/",
      repoLink : "https://github.com/Ashok-Bhatt/Kaun-Banega-Crorepati",
    },
    {
      projectName : "Listify",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1750855886/Screenshot_2025-06-25_182030_wgbuup.png",
      description : "A list managing web app built to help users create and manage lists",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Listify",
    },
    {
      projectName : "Path Finding Visualizer",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1748866201/path_finding_visualizer_a_star_algo_jqzlgj.png",
      description : "A visualizing tool built to visualize a set of path finding algorithms.",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Path-Finding-Visualizer",
    },
    {
      projectName : "Collab Horizon",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751033790/Screenshot_2025-06-27_194322_qywfl0.png",
      description : "A team project management system where teammates can collaborate on a project",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/Collab-Horizon",
    },
    {
      projectName : "TechSagers",
      projectImage: "https://res.cloudinary.com/dvjkkh0tf/image/upload/v1751034682/Screenshot_2025-06-27_200009_njhu1w.png",
      description : "A blog website where user can read, create and manage blogs",
      liveLink : "",
      repoLink : "https://github.com/Ashok-Bhatt/TechSagers---Blog-Website",
    },

  ]

  const [currentPtr, setCurrentPointer] = useState(0);

  return (
    <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 pt-15 pb-30 z-5' id="projects">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Projects</span>
        <span className='text-yellow-300 text-3xl font-bold'>Made</span>
      </div>
      <div className='flex relative gap-x-2 w-full justify-center'>
        <ProjectBlock project={projects[currentPtr]}/>
        <ProjectBlock project={projects[currentPtr+1]}/>
        <ProjectBlock project={projects[currentPtr+2]}/>
        <FaChevronCircleLeft className='absolute left-20 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer' style={{visibility: (currentPtr==0) ? "false": "true"}} onClick={()=>setCurrentPointer((prev)=>Math.max(0, prev-1))}/>
        <FaChevronCircleRight className='absolute right-20 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer'  style={{visibility: (currentPtr+3==projects.length) ? "false": "true"}} onClick={()=>setCurrentPointer((prev)=>Math.min(projects.length-3, prev+1))}/>
      </div>
    </div>
  )
}

export default Projects
