import React, { useState } from 'react';
import { GrAchievement } from "react-icons/gr";
import AchievementCard from '../components/cards/AchievementCard';
import { achievements } from '../constants/index.js';
import Slider from '../components/Slider';
import { useNavigation } from '../context/navigationContext.jsx';

function Achievements() {
    const { navigationRefs } = useNavigation();
    const [achievementPointer, setAchievementPointer] = useState(1);

    return (
        <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 py-20 px-6 box-border z-5' id="achievements" ref={el => (navigationRefs.current["achievements"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <GrAchievement className='text-black dark:text-white text-xl md:text-4xl font-bold' />
                <span className='text-black dark:text-white text-xl md:text-4xl font-bold text-center'>Achievements <span className='text-yellow-300'>Unlocked</span></span>
            </div>

            <div className="flex relative w-full justify-center overflow-x-hidden">
                <Slider
                    cards={
                        achievements.sort((x, y) => (x.date - y.date)).map((_, index) => (
                            <AchievementCard achievement={achievements[index]} key={`ach-${index}`} isMiddle={achievementPointer == index ? true : false} />
                        ))
                    }
                    cardClasses="w-full max-w-[280px] md:max-w-sm p-1 sm:p-2 md:p-4"
                    scrollTrigger="card"
                    defaultPointer={achievementPointer}
                    setParentPointer={setAchievementPointer}
                />
            </div>
        </div>
    );
}

export default Achievements;
