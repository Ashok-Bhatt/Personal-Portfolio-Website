import { IoEyeSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

function ProjectBlock(props) {

  const { project } = props;

  return (
    <div className='relative h-[250px] md:h-[300px] lg:h-[350px] w-full max-w-[400px] rounded-lg border border-gray-500 hover:cursor-pointer overflow-hidden group transition duration-300 shadow-md'>
      <img src={project.projectImage} className='h-[200px] md:h-3/4 w-full object-cover transition-transform duration-500 group-hover:scale-105' alt={project.projectName} />
      <div className='flex flex-col absolute bottom-0 w-full'>
        <div className='flex w-full h-[50px] md:h-16 bg-yellow-300 text-black text-lg md:text-xl font-bold justify-center items-center'>{project.projectName}</div>
        <div className='opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 p-4 md:p-6 bg-black/90 dark:bg-white/95 text-white dark:text-black'>
          <div className="text-sm md:text-base leading-relaxed line-clamp-3 mb-4">
            {project.description}
          </div>
          <div className='flex justify-between items-center gap-x-4'>
            <div className="flex flex-1 items-center justify-center gap-x-2 bg-blue-500 text-white py-2 px-4 hover:cursor-pointer rounded-lg font-semibold transition-colors" onClick={() => window.location.href = project.liveLink} style={{ display: project.liveLink == "" ? 'none' : 'flex' }}>
              <IoEyeSharp />
              <span>Live</span>
            </div>
            <div className="flex flex-1 items-center justify-center gap-x-2 bg-gray-800 dark:bg-gray-200 text-white dark:text-black py-2 px-4 hover:cursor-pointer rounded-lg font-semibold transition-colors" onClick={() => window.location.href = project.repoLink}>
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
