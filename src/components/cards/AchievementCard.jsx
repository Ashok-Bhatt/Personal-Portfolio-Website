function AchievementCard(props) {

  const { achievement, isMiddle } = props;
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const achievementDateString = `${months[achievement.date.getMonth()]} ${achievement.date.getFullYear()}`

  return (
    <div className='relative flex flex-col justify-between bg-gray-900 border-2 border-yellow-400 hover:border-blue-500 rounded-2xl p-4 md:p-6 shadow-md transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer group w-full max-w-[90vw] md:max-w-[400px] min-h-[230px] mx-auto'>
      <img
        src={achievement.logo || "/Images/badge.png"}
        alt="Achievement Badge"
        className="absolute top-4 right-4 w-10 h-10 md:w-15 md:h-15 object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-300"
      />
      <div className="pr-10">
        <h3 className='font-extrabold text-[clamp(1.1rem,2vw,1.25rem)] text-white group-hover:text-blue-500 transition-colors mb-2'>{achievement.title}</h3>
        <p className='text-[clamp(0.85rem,1.5vw,1rem)] text-white/70 leading-relaxed font-medium'>{achievement.description}</p>
      </div>
      <p className="text-yellow-500 text-[clamp(0.7rem,1.2vw,0.875rem)] font-bold text-right mt-6 tracking-wide">{achievementDateString}</p>
    </div>
  )
}

export default AchievementCard
