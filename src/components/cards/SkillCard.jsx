import React from 'react'

function SkillCard({ skillName, skillLogo }) {
  return (
    <div className='flex items-center gap-x-3 bg-gray-800 border border-gray-700 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition-shadow min-w-50 w-max'>
      <div className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full overflow-hidden flex-shrink-0">
        {skillLogo}
      </div>
      <div className="flex items-center justify-center flex-grow">
        <p className='text-white font-bold text-sm sm:text-base whitespace-nowrap'>{skillName}</p>
      </div>
    </div>
  )
}

export default SkillCard