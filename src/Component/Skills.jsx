import { FaPython, FaCuttlefish, FaJava, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaGitAlt, FaGithub, FaAndroid, FaLaptopCode, FaNetworkWired } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiFirebase, SiAppwrite, SiPostman, SiReplit, SiCplusplus, SiExpress, SiKoa } from 'react-icons/si';
import { DiVisualstudio  } from 'react-icons/di';
import { BsDatabase } from 'react-icons/bs';
import { GiBrain } from 'react-icons/gi';
import { RiTeamFill } from 'react-icons/ri';
import { ImWindows } from 'react-icons/im';
import { TbBinaryTree } from 'react-icons/tb';
import { HiLightBulb } from 'react-icons/hi';

import SkillBlock from './SkillBlock';
import { useEffect, useState } from 'react';


function Skills() {

    const skills = {
        "Programming Languages": [
            { name: "Python", Logo: <img src="/Images/python_logo.png" alt="python logo" className='h-10 w-10 rounded-full'/> },
            { name: "C", Logo: <img src="/Images/c_logo.png" alt="c logo" className='h-10 w-10 rounded-full'/> },
            { name: "C++", Logo: <img src="/Images/cpp_logo.png" alt="c++ logo" className='h-10 w-10 rounded-full'/> },
            { name: "Java", Logo: <img src="/Images/java_logo.png" alt="java logo" className='h-10 w-10 rounded-full'/> },
            { name: "Javascript", Logo: <img src="/Images/javascript_logo.jpg" alt="javascript logo" className='h-10 w-10 rounded-full'/> }
        ],
        "Frontend": [
            { name: "HTML", Logo: <img src="/Images/html_logo.png" alt="html logo" className='h-10 w-10 rounded-full'/> },
            { name: "CSS", Logo: <img src="/Images/css_logo.png" alt="css logo" className='h-10 w-10 rounded-full'/> },
            { name: "Bootstrap", Logo: <img src="/Images/bootstrap_logo.png" alt="bootstrap logo" className='h-10 w-10 rounded-full'/> },
            { name: "Tailwind", Logo: <img src="/Images/tailwind_logo.png" alt="tailwind logo" className='h-10 w-10 rounded-full'/> },
            { name: "React", Logo: <img src="/Images/react_logo.png" alt="react logo" className='h-10 w-10 rounded-full'/> }
        ],
        "Backend and Databases": [
            { name: "Node", Logo: <img src="/Images/node_logo.png" alt="node logo" className='h-10 w-10 rounded-full'/> },
            { name: "Express", Logo: <img src="/Images/express_logo.png" alt="express logo" className='h-10 w-10 rounded-full'/> },
            { name: "MongoDB", Logo: <img src="/Images/mongodb_logo.png" alt="mongodb logo" className='h-10 w-10 rounded-full'/> },
            { name: "Firebase", Logo: <img src="/Images/firebase_logo.png" alt="firebase logo" className='h-10 w-10 rounded-full'/> },
            { name: "Appwrite", Logo: <img src="/Images/appwrite_logo.png" alt="appwrite logo" className='h-10 w-10 rounded-full'/> }
        ],
        "Tools": [
            { name: "Git", Logo: <img src="/Images/git_logo.png" alt="git logo" className='h-10 w-10 rounded-full'/> },
            { name: "Github", Logo: <img src="/Images/github_logo.png" alt="github logo" className='h-10 w-10 rounded-full'/> },
            { name: "Postman", Logo: <img src="/Images/postman_logo.png" alt="postman logo" className='h-10 w-10 rounded-full'/> },
            { name: "VS Code", Logo: <img src="/Images/vscode_logo.png" alt="vscode logo" className='h-10 w-10 rounded-full'/> },
            { name: "Android Studio", Logo: <img src="/Images/android_logo.png" alt="android logo" className='h-10 w-10 rounded-full'/> },
            { name: "Replit", Logo: <img src="/Images/replit_logo.png" alt="replit logo" className='h-10 w-10 rounded-full'/> }
        ],
    };

    const innerRadius = 150;
    const outerRadius = 125;
    const shockLevel = 0;
    const [rotationDelay, setRotationDelay] = useState(50);

    const [angleBuffer, setAngleBuffer] = useState(0);      // Radian Value

    useEffect(()=>{
        const timer = setInterval(()=>{
            setAngleBuffer((prev)=>{
                prev = prev + Math.PI/180;
                if (prev>=Math.PI*2){
                    prev = 0;
                }
                return prev;
            });
        }, rotationDelay);
        return ()=>clearInterval(timer);
    }, [rotationDelay])

  return (
    <div className='flex flex-col w-full bg-gray-200 dark:bg-gray-800 pt-15 z-5' id="skills">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Skills &</span>
        <span className='text-yellow-300 text-3xl font-bold'>Abilities</span>
      </div>
      <div className='relative min-h-[600px] flex flex-col p-10 gap-y-5'>
        {Object.entries(skills).map((skillGroup, groupNo)=>(
            <div className='absolute border border-dashed border-blue-500 left-1/2 top-1/2 -translate-1/2 rounded-full' key={skillGroup} style={{height:innerRadius+groupNo*outerRadius, width:innerRadius+groupNo*outerRadius, zIndex:10-groupNo}}>
                {skillGroup[1].map((skill, skillNo)=>(
                    // <SkillBlock skillName={skill.name} skillLogo={skill.Logo} key={skill.name}/>
                    <div className='absolute group flex gap-2 rounded-full p-2 items-center border border-purple-600 min-w-15 bg-gray-100 dark:bg-gray-900 -translate-1/2 hover:cursor-pointer hover:border-green-500 hover:border-3' key={skill.name} style={{
                        top: `${ innerRadius/2 + groupNo*outerRadius/2 + (Math.sin(2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))).toFixed(6)*(innerRadius/2+groupNo*outerRadius/2) + Math.ceil(Math.random()*2*shockLevel-shockLevel)}px`, 
                        left:`${ innerRadius/2 + groupNo*outerRadius/2 + (Math.cos(2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))).toFixed(6)*(innerRadius/2+groupNo*outerRadius/2) + Math.ceil(Math.random()*2*shockLevel-shockLevel)}px`,
                        }}>
                        {skill.Logo}
                        <div className='absolute bg-white dark:bg-black min-w-20 w-auto p-2 rounded-lg hidden group-hover:block' style={{left: (((360-Math.ceil((2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))*(180/Math.PI))%360)%360 + 90)%360)<=180 ? '75px' : '-100px'}}>
                            <p className='text-center text-lg text-black dark:text-white w-max'>{skill.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
