import { FaLaptopCode } from 'react-icons/fa';
import SkillCard from '../components/cards/SkillCard';
import { skills } from '../constants/index.js';
import { useNavigation } from '../context/navigationContext.jsx';

function Skills() {
  const { navigationRefs } = useNavigation();

  // 1. Flatten all skills
  const allSkills = (Object.values(skills).flat()).sort((x, y) => Math.random() - 0.5);

  // 2. Distribute into 3 rows
  const rows = [[], [], []];
  allSkills.forEach((skill, index) => {
    rows[index % 3].push(skill);
  });

  // Internal component for the Marquee logic
  const MarqueeRow = ({ skillsList, direction }) => {
    const animationClass = direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right';

    return (
      <div className="flex overflow-hidden w-full">
        {/* The animation container: 
           - flex whitespace-nowrap ensures items stay in one line.
           - We duplicate the list once ([...list, ...list]) so that when 
             it hits -50% (translateX), it loops seamlessly.
        */}
        <div className={`flex gap-x-3 md:gap-x-6 py-2 px-4 whitespace-nowrap w-max flex-none ${animationClass} pause-on-hover`}>
          {[...skillsList, ...skillsList].map((skill, index) => (
            <SkillCard
              key={`${skill.name}-${index}`}
              skillName={skill.name}
              skillLogo={
                <img
                  src={skill.logoSrc}
                  className="h-full w-full"
                  alt={skill.name}
                  draggable="false"
                />
              }
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      className="flex flex-col w-full bg-gray-900 py-20 px-4 md:px-6 z-5 box-border overflow-hidden"
      id="skills"
      ref={el => (navigationRefs.current["skills"] = el)}
    >
      {/* Title Section */}
      <div className="flex gap-x-3 w-full justify-center items-center mb-16">
        <FaLaptopCode className="text-white text-[clamp(1.5rem,4vw,3rem)]" />
        <h2 className="text-white text-[clamp(1.5rem,4vw,3rem)] font-bold text-center">
          Skills & <span className="text-yellow-400">Abilities</span>
        </h2>
      </div>

      <div className="flex flex-col gap-y-3 md:gap-y-6 w-full my-6 md:my-12">
        <MarqueeRow skillsList={rows[0]} direction="left" />
        <MarqueeRow skillsList={rows[1]} direction="right" />
        <MarqueeRow skillsList={rows[2]} direction="left" />
      </div>
    </div>
  );
}

export default Skills;