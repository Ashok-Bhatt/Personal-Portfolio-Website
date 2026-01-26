import { useState } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import ProjectBlock from './ProjectBlock';
import { projects } from '../Constants';
import Slider from './Slider';
import { useNavigation } from '../Context/navigationContext.jsx';

function Projects() {
    const { navigationRefs } = useNavigation();
    const [projectPointer, setProjectPointer] = useState(1);

    return (
        <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 py-20 px-6 box-border z-5' id="projects" ref={el => (navigationRefs.current["projects"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <FaLaptopCode className='text-black dark:text-white text-xl md:text-4xl font-bold' />
                <span className='text-black dark:text-white text-xl md:text-4xl font-bold'>Projects <span className="text-yellow-300">Made</span></span>
            </div>
            <div className="flex relative w-full justify-center overflow-x-hidden">
                <Slider
                    cards={
                        projects.map((_, index) => (
                            <ProjectBlock project={projects[index]} key={index} isActive={index === projectPointer} />
                        ))
                    }
                    cardClasses="max-w-[500px]"
                    scrollTrigger="card"
                    defaultPointer={1}
                    setParentPointer={setProjectPointer}
                />
            </div>
        </div>
    );
}

export default Projects;
