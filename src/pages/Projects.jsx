import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import ProjectCard from '../components/cards/ProjectCard';
import { projects } from '../constants/index.js';
import Slider from '../components/Slider';
import { useNavigation } from '../context/navigationContext.jsx';

function Projects() {
    const { navigationRefs } = useNavigation();
    const [projectPointer, setProjectPointer] = useState(1);

    return (
        <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 py-20 px-6 box-border z-5' id="projects" ref={el => (navigationRefs.current["projects"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <FaLaptopCode className='text-black dark:text-white text-[clamp(1.5rem,4vw,3rem)] font-bold' />
                <span className='text-black dark:text-white text-[clamp(1.5rem,4vw,3rem)] font-bold text-center'>Projects <span className="text-yellow-300">Made</span></span>
            </div>
            <div className="flex relative w-full justify-center overflow-x-hidden">
                <Slider
                    cards={
                        projects.map((_, index) => (
                            <ProjectCard project={projects[index]} key={index} isActive={index === projectPointer} />
                        ))
                    }
                    cardClasses="w-full max-w-[320px] md:max-w-[400px] lg:max-w-[500px] p-1 sm:p-2 md:p-4"
                    scrollTrigger="card"
                    defaultPointer={projectPointer}
                    setParentPointer={setProjectPointer}
                />
            </div>
        </div>
    );
}

export default Projects;
