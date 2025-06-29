import { FaPython, FaCuttlefish, FaJava, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAndroid, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiAppwrite, SiPostman, SiReplit, SiCplusplus, SiExpress } from 'react-icons/si';
import { DiVisualstudio  } from 'react-icons/di';
import { BsDatabase } from 'react-icons/bs';
import { GiBrain } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { ImWindows } from 'react-icons/im';
import { TbBinaryTree } from 'react-icons/tb';
import { HiLightBulb } from 'react-icons/hi';

import SkillBlock from './SkillBlock';
import CustomIcon from './CustomIcon';


function Skills() {

    const skills = {
        "Programming Languages": [
            { name: "Python", Logo: <img src="/Images/python_logo.png" alt="python logo" className='h-20 w-20 rounded-full'/> },
            { name: "C", Logo: <img src="/Images/c_logo.png" alt="c logo" className='h-20 w-20 rounded-full'/> },
            { name: "C++", Logo: <img src="/Images/cpp_logo.png" alt="c++ logo" className='h-20 w-20 rounded-full'/> },
            { name: "Java", Logo: <img src="/Images/java_logo.png" alt="java logo" className='h-20 w-20 rounded-full'/> },
            { name: "Javascript", Logo: <img src="/Images/javascript_logo.jpg" alt="javascript logo" className='h-20 w-20 rounded-full'/> }
        ],
        "Frontend": [
            { name: "HTML", Logo: <img src="/Images/html_logo.png" alt="html logo" className='h-20 w-20 rounded-full'/> },
            { name: "CSS", Logo: <img src="/Images/css_logo.png" alt="css logo" className='h-20 w-20 rounded-full'/> },
            { name: "Bootstrap", Logo: <img src="/Images/bootstrap_logo.png" alt="bootstrap logo" className='h-20 w-20 rounded-full'/> },
            { name: "Tailwind", Logo: <img src="/Images/tailwind_logo.png" alt="tailwind logo" className='h-20 w-20 rounded-full'/> },
            { name: "React", Logo: <img src="/Images/react_logo.png" alt="react logo" className='h-20 w-20 rounded-full'/> }
        ],
        "Backend and Databases": [
            { name: "Node", Logo: <img src="/Images/node_logo.png" alt="node logo" className='h-20 w-20 rounded-full'/> },
            { name: "Express", Logo: <img src="/Images/express_logo.png" alt="express logo" className='h-20 w-20 rounded-full'/> },
            { name: "MongoDB", Logo: <img src="/Images/mongodb_logo.png" alt="mongodb logo" className='h-20 w-20 rounded-full'/> },
            { name: "Firebase", Logo: <img src="/Images/firebase_logo.png" alt="firebase logo" className='h-20 w-20 rounded-full'/> },
            { name: "Appwrite", Logo: <img src="/Images/appwrite_logo.png" alt="appwrite logo" className='h-20 w-20 rounded-full'/> }
        ],
        "Tools": [
            { name: "Git", Logo: <img src="/Images/git_logo.png" alt="git logo" className='h-20 w-20 rounded-full'/> },
            { name: "Github", Logo: <img src="/Images/github_logo.png" alt="github logo" className='h-20 w-20 rounded-full'/> },
            { name: "Postman", Logo: <img src="/Images/postman_logo.png" alt="postman logo" className='h-20 w-20 rounded-full'/> },
            { name: "VS Code", Logo: <img src="/Images/vscode_logo.png" alt="vscode logo" className='h-20 w-20 rounded-full'/> },
            { name: "Android Studio", Logo: <img src="/Images/android_logo.png" alt="android logo" className='h-20 w-20 rounded-full'/> },
            { name: "Replit", Logo: <img src="/Images/replit_logo.png" alt="replit logo" className='h-20 w-20 rounded-full'/> }
        ],
        "Soft Skills": [
            { name: "Problem Solving", Logo: <img src="/Images/problem_solving_logo.png" alt="problem solving logo" className='h-20 w-20 rounded-full'/> },
            { name: "Team Work", Logo: <img src="/Images/teamwork_logo.png" alt="teamwork logo" className='h-20 w-20 rounded-full'/> }
        ],
        "Course Work": [
            { name: "DSA", Logo: <img src="/Images/dsa_logo.png" alt="dsa logo" className='h-20 w-20 rounded-full'/> },
            { name: "OS", Logo: <img src="/Images/os_logo.png" alt="os logo" className='h-20 w-20 rounded-full'/> },
            { name: "CN", Logo: <img src="/Images/cn_logo.png" alt="cn logo" className='h-20 w-20 rounded-full'/> },
            { name: "DBMS", Logo: <img src="/Images/dbms_logo.png" alt="dbms logo" className='h-20 w-20 rounded-full'/> },
            { name: "OOPS", Logo: <img src="/Images/oops_logo.png" alt="oops logo" className='h-20 w-20 rounded-full'/> }
        ]
    };

  return (
    <div className='flex flex-col w-full bg-blue-900 pt-15 z-5' id="skills">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Skills &</span>
        <span className='text-yellow-300 text-3xl font-bold'>Abilities</span>
      </div>
      <div className='flex flex-col p-10 gap-y-5'>
        {Object.entries(skills).map((skillGroup)=>(
            <div className='bg-white dark:bg-black p-5 rounded-xl' key={skillGroup[0]}>
                <div className='text-2xl text-black dark:text-white font-bold'>{skillGroup[0]}</div>
                <div className='mt-2 flex flex-wrap content-start gap-2'>
                    {skillGroup[1].map((skill)=>(
                        <SkillBlock skillName={skill.name} skillLogo={skill.Logo} key={skill.name}/>
                    ))}
                </div>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
