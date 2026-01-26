
import { FaLaptopCode } from 'react-icons/fa';
import ProjectBlock from './ProjectBlock';
import { projects } from '../Constants';
import Slider from './Slider';
import { useNavigation } from '../Context/navigationContext.jsx';

function Projects() {
    const { navigationRefs } = useNavigation();
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
                            <ProjectBlock project={projects[index]} key={index} />
                        ))
                    }
                    cardClasses="w-full max-w-[400px]"
                    scrollTrigger="button"
                    defaultPointer={1}
                />
            </div>
        </div>
    );
}

export default Projects;
