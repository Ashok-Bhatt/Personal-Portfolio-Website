import { FaLaptopCode } from 'react-icons/fa';
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import ProjectBlock from './ProjectBlock'
import { useState } from 'react';
import { projects } from '../Constants';
import Slider from './Slider';

function Projects() {

  const [currentPtr, setCurrentPointer] = useState(0);

  return (
    <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 pt-15 pb-30 z-5' id="projects">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Projects</span>
        <span className='text-yellow-300 text-3xl font-bold'>Made</span>
      </div>
      <div className="flex relative gap-x-2 w-full justify-center">
        <Slider 
          cards={
            projects.map((_, index)=>(
              <ProjectBlock project={projects[index]}/>
            ))
          }
          cardClasses = "h-full w-[400px]"
          scrollTrigger="button"
          defaultPointer = {1}
        />
      </div>
    </div>
  )
}

export default Projects
