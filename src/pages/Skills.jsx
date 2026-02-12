import { FaLaptopCode } from 'react-icons/fa';
import SkillCard from '../components/cards/SkillCard';
import { useEffect, useState } from 'react';
import { skills } from '../constants/index.js';
import { useNavigation } from '../context/navigationContext.jsx';

function Skills() {
  const { navigationRefs } = useNavigation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Responsive Radius Calculation
  const innerRadius = windowWidth < 640 ? 60 : windowWidth < 1024 ? 100 : 125;
  const outerRadius = windowWidth < 640 ? 60 : windowWidth < 1024 ? 100 : 125;

  const shockLevel = 0;
  const [rotationDelay, setRotationDelay] = useState(50);
  const [angleBuffer, setAngleBuffer] = useState(0);      // Radian Value

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    <div className='flex flex-col min-h-screen w-full bg-gray-100 dark:bg-gray-900 py-20 px-4 z-5 box-border overflow-hidden' id="skills" ref={el => (navigationRefs.current["skills"] = el)}>
      <div className='flex gap-x-3 w-full justify-center items-center mb-16'>
        <FaLaptopCode className='text-black dark:text-white text-xl md:text-4xl font-bold' />
        <span className='text-black dark:text-white text-xl md:text-4xl font-bold text-center'>Skills & <span className='text-yellow-300'>Abilities</span></span>
      </div>
      <div className='relative flex-grow flex items-center justify-center p-4'>
        {Object.entries(skills).sort((a, b) => a[1].length - b[1].length).map((skillGroup, groupNo) => {
          const size = innerRadius + groupNo * outerRadius;
          return (
            <div
              className='absolute border border-dashed border-blue-500 rounded-full flex-shrink-0 flex items-center justify-center'
              key={skillGroup[0]}
              style={{
                height: `${size}px`,
                width: `${size}px`,
                zIndex: 10 - groupNo
              }}
            >
              {skillGroup[1].map((skill, skillNo) => (
                <SkillCard
                  skillName={skill.name}
                  xPos={size / 2 + (Math.cos(2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1))).toFixed(6) * size / 2}
                  yPos={size / 2 + (Math.sin(2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1))).toFixed(6) * size / 2}
                  skillLogo={<img src={skill.logoSrc} className='h-6 w-6 sm:h-8 sm:w-8 md:h-10 md:w-10 rounded-full' alt={skill.name} />}
                  labelPos={(((360 - Math.ceil((2 * Math.PI * skillNo / skillGroup[1].length + angleBuffer * (groupNo % 2 == 0 ? 1 : -1)) * (180 / Math.PI)) % 360) % 360 + 90) % 360) <= 180 ? 'right' : 'left'}
                  key={skill.name}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
