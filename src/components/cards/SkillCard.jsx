import React from 'react'

function SkillCard({ skillName, skillLogo }) {
  return (
    <div className='flex items-center gap-x-2 md:gap-x-3 bg-gray-800 border border-gray-700 px-3 py-2 md:px-4 md:py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow w-max min-w-36 md:min-w-50'>
      <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full overflow-hidden flex-shrink-0">
        {skillLogo}
      </div>
      <div className="flex items-center justify-center flex-grow">
        <p className='text-white font-bold text-xs sm:text-sm md:text-base whitespace-nowrap'>{skillName}</p>
      </div>
    </div>
  )
}

export default SkillCard