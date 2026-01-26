
import React, { useState } from 'react';
import { GrAchievement } from "react-icons/gr";
import AchievementBlock from './AchievementBlock';
import { achievements } from '../Constants';
import Slider from './Slider';
import { useNavigation } from '../Context/navigationContext.jsx';

function Achievements() {
    const { navigationRefs } = useNavigation();
    const [achievementPointer, setAchievementPointer] = useState(1);

    return (
        <div className='flex flex-col min-h-screen w-full gap-y-10 bg-gray-100 dark:bg-gray-900 py-20 px-6 box-border z-5' id="achievements" ref={el => (navigationRefs.current["achievements"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <GrAchievement className='text-black dark:text-white text-xl md:text-4xl font-bold' />
                <span className='text-black dark:text-white text-xl md:text-4xl font-bold text-center'>Achievements <span className='text-yellow-300'>Unlocked</span></span>
            </div>

            <div className="flex relative w-full justify-center overflow-x-hidden">
                <Slider
                    cards={
                        achievements.sort((x, y) => (x["achievementDate"] - y["achievementDate"])).map((_, index) => (
                            <AchievementBlock achievement={achievements[index]} key={`ach-${index}`} isMiddle={achievementPointer == index ? true : false} />
                        ))
                    }
                    cardClasses="w-full max-w-sm"
                    scrollTrigger="card"
                    defaultPointer={1}
                    setParentPointer={setAchievementPointer}
                />
            </div>
        </div>
    );
}

export default Achievements;
