import React from 'react'
import { GrAchievement } from "react-icons/gr";
import AchievementBlock from './AchievementBlock';
import { achievements } from '../Constants';
import Slider from './Slider';

function Achievements() {

  return (
    <div className='flex flex-col w-full gap-y-10 bg-gray-100 dark:bg-gray-900 pt-15 pb-30 z-5' id="achievements">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <GrAchievement className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Achievements</span>
        <span className='text-yellow-300 text-3xl font-bold'>Unlocked</span>
      </div>

      <div className="flex relative gap-x-2 w-full justify-center">
        <Slider 
          cards={
            achievements.sort((x, y)=>(x["achievementDate"] - y["achievementDate"])).map((_, index)=>(
              <AchievementBlock achievement={achievements[index]}/>
            ))
          }
          cardClasses = "h-full w-[400px]"
          scrollTrigger="button"
          defaultPointer = {1}
        />
      </div>
    </div>
  )
}

export default Achievements
