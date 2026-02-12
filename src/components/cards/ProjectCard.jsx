import { IoEyeSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

function ProjectBlock(props) {

  const { project, isActive } = props;

  return (
    <div className='relative aspect-[7/4] w-full max-w-[90vw] md:max-w-[500px] rounded-lg border border-gray-500 hover:cursor-pointer overflow-hidden group transition duration-300 shadow-md mx-auto'>
      <img src={project.projectImage} className={`h-full w-full object-cover transition-transform duration-500 ${isActive ? 'group-hover:scale-105' : ''}`} alt={project.projectName} />
      <div className={`absolute bottom-0 w-full translate-y-full ${isActive ? 'group-hover:translate-y-0' : ''} transition-transform duration-500`}>
        <div className='flex absolute bottom-full w-full h-[50px] md:h-16 bg-yellow-300/90 text-black text-lg md:text-xl font-bold justify-center items-center shadow-inner z-10'>{project.projectName}</div>
        <div className='p-4 md:p-6 bg-black/90 dark:bg-white/95 text-white dark:text-black'>
          <div className="text-sm md:text-base leading-relaxed line-clamp-2 md:line-clamp-3 mb-4">
            {project.description}
          </div>
          <div className='flex justify-between items-center gap-x-4'>
            <div className="flex flex-1 items-center justify-center gap-x-2 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-lg font-semibold transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.liveLink, "_blank") }} style={{ display: project.liveLink == "" ? 'none' : 'flex' }}>
              <IoEyeSharp />
              <span>Live</span>
            </div>
            <div className="flex flex-1 items-center justify-center gap-x-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black py-2 px-4 hover:cursor-pointer rounded-lg font-semibold transition-colors" onClick={(e) => { e.stopPropagation(); window.open(project.repoLink, "_blank") }}>
              <FaCode />
              <span>Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBlock
