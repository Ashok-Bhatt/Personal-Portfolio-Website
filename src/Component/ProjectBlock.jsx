import { IoEyeSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

function ProjectBlock(props) {

  const {project} = props;

  return (
    <div className='relative h-[250px] w-[400px] rounded-lg border border-gray-500 overflow-hidden group transition-all duration-300'>
      <img src={project.projectImage} className='h-[200px] w-full'/>
      <div className='flex flex-col absolute bottom-0 w-full'>
        <div className='flex w-full h-[50px] bg-yellow-300 text-black text-lg font-bold justify-center items-center'>{project.projectName}</div>
        <div className='hidden group-hover:block p-5 bg-black dark:bg-white text-white dark:text-black'>
            <div>
                {project.description}
            </div>
            <div className='flex justify-between mt-2'>
                <div className="flex items-center gap-x-2 bg-white dark:bg-black text-black dark:text-white py-2 px-5 hover:cursor-pointer rounded" onClick={()=>window.location.href=project.liveLink} style={{visibility: project.liveLink=="" ? 'hidden' : 'visible'}}>
                    <IoEyeSharp/>
                    <p>View</p>
                </div>
                <div className="flex items-center gap-x-2 bg-white dark:bg-black text-black dark:text-white py-2 px-5 hover:cursor-pointer rounded" onClick={()=>window.location.href=project.repoLink}>
                    <FaCode/>
                    <p>Code</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectBlock
