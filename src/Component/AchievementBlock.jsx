import React from 'react'

function AchievementBlock(props) {

  const {achievement} = props;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const achievementDateString = `${months[achievement.achievementDate.getMonth()]} ${achievement.achievementDate.getFullYear()}`

  return (
    <div className="flex flex-col justify-start bg-[#e1e1e1] dark:bg-[#1e1e1e] border border-yellow-400 hover:cursor-pointer rounded-xl p-4 shadow-md w-[400px] h-[200px] transition duration-300 hover:shadow-yellow-400/50 hover:shadow-lg hover:border-yellow-300">
      <h3 className="text-black dark:text-white font-semibold text-lg">{achievement.achievementTitle}</h3>
      <p className="text-gray-300 text-sm mt-1">{achievement.achievementDescription}</p>
      <p className="text-yellow-400 text-xs text-right mt-auto">{achievementDateString}</p>
    </div>
  )
}

export default AchievementBlock
