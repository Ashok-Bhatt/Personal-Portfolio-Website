import {FaLaptopCode} from 'react-icons/fa';

import SkillBlock from './SkillBlock';
import { useEffect, useState } from 'react';


function Skills() {

    const skills = {
        "Programming Languages": [
            { name: "Python", logoSrc: "/Images/python_logo.png" },
            { name: "C", logoSrc: "/Images/c_logo.png" },
            { name: "C++", logoSrc: "/Images/cpp_logo.png" },
            { name: "Java", logoSrc: "/Images/java_logo.png" },
            { name: "Javascript", logoSrc: "/Images/javascript_logo.jpg" }
        ],
        "Frontend": [
            { name: "HTML", logoSrc: "/Images/html_logo.png" },
            { name: "CSS", logoSrc: "/Images/css_logo.png" },
            { name: "Bootstrap", logoSrc: "/Images/bootstrap_logo.png" },
            { name: "Tailwind", logoSrc: "/Images/tailwind_logo.png" },
            { name: "React", logoSrc: "/Images/react_logo.png" }
        ],
        "Backend and Databases": [
            { name: "Node", logoSrc: "/Images/node_logo.png" },
            { name: "Express", logoSrc: "/Images/express_logo.png" },
            { name: "MongoDB", logoSrc: "/Images/mongodb_logo.png" },
            { name: "Firebase", logoSrc: "/Images/firebase_logo.png" },
            { name: "Appwrite", logoSrc: "/Images/appwrite_logo.png" }
        ],
        "Tools": [
            { name: "Git", logoSrc: "/Images/git_logo.png" },
            { name: "Github", logoSrc: "/Images/github_logo.png" },
            { name: "Postman", logoSrc: "/Images/postman_logo.png" },
            { name: "VS Code", logoSrc: "/Images/vscode_logo.png" },
            { name: "Android Studio", logoSrc: "/Images/android_logo.png" },
            { name: "Replit", logoSrc: "/Images/replit_logo.png" }
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
    <div className='flex flex-col w-full bg-gray-100 dark:bg-gray-900 pt-15 z-5' id="skills">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Skills &</span>
        <span className='text-yellow-300 text-3xl font-bold'>Abilities</span>
      </div>
      <div className='relative min-h-[600px] flex flex-col p-10 gap-y-5'>
        {Object.entries(skills).map((skillGroup, groupNo)=>(
            <div className='absolute border border-dashed border-blue-500 left-1/2 top-1/2 -translate-1/2 rounded-full' key={skillGroup} style={{height:innerRadius+groupNo*outerRadius, width:innerRadius+groupNo*outerRadius, zIndex:10-groupNo}}>
                {skillGroup[1].map((skill, skillNo)=>(
                    <SkillBlock
                        skillName = {skill.name}
                        xPos = {innerRadius/2 + groupNo*outerRadius/2 + (Math.cos(2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))).toFixed(6)*(innerRadius/2+groupNo*outerRadius/2) + Math.ceil(Math.random()*2*shockLevel-shockLevel)}
                        yPos = {innerRadius/2 + groupNo*outerRadius/2 + (Math.sin(2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))).toFixed(6)*(innerRadius/2+groupNo*outerRadius/2) + Math.ceil(Math.random()*2*shockLevel-shockLevel)}
                        skillLogo = {<img src={skill.logoSrc} className='h-10 w-10 rounded-full'/>}
                        labelPos = {(((360-Math.ceil((2*Math.PI*skillNo/skillGroup[1].length + angleBuffer*(groupNo%2==0?1:-1))*(180/Math.PI))%360)%360 + 90)%360)<=180 ? 75 : -100}
                        key = {skill.name}
                    />
                ))}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
