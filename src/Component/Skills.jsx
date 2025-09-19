
import { FaLaptopCode } from 'react-icons/fa';
import SkillBlock from './SkillBlock';
import { useEffect, useState } from 'react';
import { skills } from '../Constants';
import { useNavigation } from '../Context/navigationContext.jsx';

function Skills() {
  const { navigationRefs } = useNavigation();
  const innerRadius = 125;
  const outerRadius = 125;
  const shockLevel = 0;
  const [rotationDelay, setRotationDelay] = useState(50);
  const [angleBuffer, setAngleBuffer] = useState(0);      // Radian Value

  useEffect(() => {
    const timer = setInterval(() => {
      setAngleBuffer((prev) => {
        prev = prev + Math.PI / 180;
        if (prev >= Math.PI * 2) {
          prev = 0;
        }
        return prev;
      });
    }, rotationDelay);
    return () => clearInterval(timer);
  }, [rotationDelay]);

  return (
    <div className='flex flex-col h-screen w-full bg-gray-100 dark:bg-gray-900 pt-15 z-5 box-border' id="skills" ref={el => (navigationRefs.current["skills"] = el)}>
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <FaLaptopCode className='text-black dark:text-white text-3xl font-bold' />
        <span className='text-black dark:text-white text-3xl font-bold'>Skills &</span>
        <span className='text-yellow-300 text-3xl font-bold'>Abilities</span>
      </div>
      <div className='relative h-full min-h-[550px] flex flex-col gap-y-5'>
        {Object.entries(skills).sort((a, b) => a[1].length - b[1].length).map((skillGroup, groupNo) => (
          <div className='absolute border border-dashed border-blue-500 left-1/2 top-1/2 -translate-1/2 rounded-full' key={skillGroup} style={{ height: innerRadius + groupNo * outerRadius, width: innerRadius + groupNo * outerRadius, zIndex: 10 - groupNo }}>
            {skillGroup[1].map((skill, skillNo) => (
              <SkillBlock
                skillName={skill.name}
                xPos={innerRadius / 2 + groupNo * outerRadius / 2 + (Math.cos(2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1))).toFixed(6) * (innerRadius / 2 + groupNo * outerRadius / 2) + Math.ceil(Math.random() * 2 * shockLevel - shockLevel)}
                yPos={innerRadius / 2 + groupNo * outerRadius / 2 + (Math.sin(2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1))).toFixed(6) * (innerRadius / 2 + groupNo * outerRadius / 2) + Math.ceil(Math.random() * 2 * shockLevel - shockLevel)}
                skillLogo={<img src={skill.logoSrc} className='h-10 w-10 rounded-full' />}
                labelPos={(((360 - Math.ceil((2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1)) * (180 / Math.PI)) % 360) % 360 + 90) % 360) <= 180 ? 'right' : 'left'}
                key={skill.name}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
