import React from 'react'

function SkillBlock(props) {

  const { skillName, skillLogo, xPos, yPos, labelPos } = props;

  return (
    <div className='absolute group flex rounded-full items-center justify-center border bg-gray-100 dark:bg-gray-900 -translate-1/2 hover:cursor-pointer hover:border-3 aspect-square' style={{
      top: `${yPos}px`,
      left: `${xPos}px`,
      borderColor: (labelPos == 'left') ? 'green' : 'blue',
    }}>
      <div className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
        {skillLogo}
      </div>
      {
        labelPos == 'left' ? (
          <div className='absolute bg-blue-500 min-w-30 w-auto p-2 rounded-lg hidden group-hover:block -left-[20px] -translate-x-1/1'>
            <p className='text-center text-lg text-white dark:text-black min-w-max w-full font-bold'>{skillName}</p>
          </div>) : (
          <div className='absolute bg-green-500 min-w-30 w-auto p-2 rounded-lg hidden group-hover:block -right-[20px] translate-x-1/1'>
            <p className='text-center text-lg text-white dark:text-black min-w-max w-full font-bold'>{skillName}</p>
          </div>
        )
      }
    </div>
  )
}

export default SkillBlock