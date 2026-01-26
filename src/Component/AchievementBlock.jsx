import React from 'react'
import classNames from 'classnames';

function AchievementBlock(props) {

  const { achievement, isMiddle } = props;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const achievementDateString = `${months[achievement.achievementDate.getMonth() - 1]} ${achievement.achievementDate.getFullYear()}`

  return (
    <div className='flex flex-col justify-between bg-gray-50 dark:bg-gray-900 border-2 border-yellow-400 hover:border-blue-500 rounded-2xl p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group w-full max-w-sm md:min-h-[220px]'>
      <div>
        <h3 className='font-extrabold text-xl text-black dark:text-white group-hover:text-blue-500 transition-colors mb-2'>{achievement.achievementTitle}</h3>
        <p className='text-base text-black/70 dark:text-white/70 leading-relaxed font-medium'>{achievement.achievementDescription}</p>
      </div>
      <p className="text-yellow-500 text-sm font-bold text-right mt-6 tracking-wide">{achievementDateString}</p>
    </div>
  )
}

export default AchievementBlock
