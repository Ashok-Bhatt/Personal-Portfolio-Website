import { FaLaptopCode } from 'react-icons/fa';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ProjectBlock from './ProjectBlock'
import { useState } from 'react';
import { projects } from '../Constants';

function Projects() {

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
        <FaChevronCircleLeft className='absolute left-20 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer' style={{visibility: (currentPtr==0) ? "hidden": "visible"}} onClick={()=>setCurrentPointer((prev)=>Math.max(0, prev-3))}/>
        <FaChevronCircleRight className='absolute right-20 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer'  style={{visibility: (currentPtr+3==projects.length) ? "hidden": "visible"}} onClick={()=>setCurrentPointer((prev)=>Math.min(projects.length-3, prev+3))}/>
      </div>
    </div>
  )
}

export default Projects
