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
            { name: "Python", Logo: <CustomIcon Logo={FaPython} /> },
            { name: "C", Logo: <CustomIcon Logo={FaCuttlefish} /> },
            { name: "C++", Logo: <CustomIcon Logo={SiCplusplus} /> },
            { name: "Java", Logo: <CustomIcon Logo={FaJava} /> },
            { name: "Javascript", Logo: <CustomIcon Logo={FaJs} /> }
        ],
        "Frontend": [
            { name: "HTML", Logo: <CustomIcon Logo={FaHtml5} /> },
            { name: "CSS", Logo: <CustomIcon Logo={FaCss3Alt} /> },
            { name: "Bootstrap", Logo: <CustomIcon Logo={FaBootstrap} /> },
            { name: "Tailwind", Logo: <CustomIcon Logo={SiTailwindcss} /> },
            { name: "React", Logo: <CustomIcon Logo={FaReact} /> }
        ],
        "Backend and Databases": [
            { name: "Node", Logo: <CustomIcon Logo={FaNodeJs} /> },
            { name: "Express", Logo: <CustomIcon Logo={SiExpress} /> },
            { name: "MongoDB", Logo: <CustomIcon Logo={SiMongodb} /> },
            { name: "Firebase", Logo: <CustomIcon Logo={SiFirebase} /> },
            { name: "Appwrite", Logo: <CustomIcon Logo={SiAppwrite} /> }
        ],
        "Tools": [
            { name: "Git", Logo: <CustomIcon Logo={FaGitAlt} /> },
            { name: "Github", Logo: <CustomIcon Logo={FaGithub} /> },
            { name: "Postman", Logo: <CustomIcon Logo={SiPostman} /> },
            { name: "VS Code", Logo: <CustomIcon Logo={DiVisualstudio} /> },
            { name: "Android Studio", Logo: <CustomIcon Logo={FaAndroid} /> },
            { name: "Replit", Logo: <CustomIcon Logo={SiReplit} /> }
        ],
        "Soft Skills": [
            { name: "Problem Solving", Logo: <CustomIcon Logo={GiBrain} /> },
            { name: "Team Work", Logo: <CustomIcon Logo={RiTeamFill} /> }
        ],
        "Course Work": [
            { name: "Data Structures and Algorithms", Logo: <CustomIcon Logo={TbBinaryTree} /> },
            { name: "Operating System", Logo: <CustomIcon Logo={ImWindows} /> },
            { name: "Computer Network", Logo: <CustomIcon Logo={FaNetworkWired} /> },
            { name: "Database Management System", Logo: <CustomIcon Logo={BsDatabase} /> },
            { name: "Object Oriented Programming", Logo: <CustomIcon Logo={HiLightBulb} /> }
        ]
    };

  return (
    <div className='flex flex-col w-full bg-blue-900 pt-15' id="skills">
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
