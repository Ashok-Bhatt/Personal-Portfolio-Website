import React from 'react'

function SkillBlock(props) {

    const {skillName, skillLogo, xPos, yPos, labelPos} = props;

  return (
    <div className='absolute group flex gap-2 rounded-full p-2 items-center border border-green-500 min-w-15 bg-gray-100 dark:bg-gray-900 -translate-1/2 hover:cursor-pointer hover:border-3' style={{
        top: `${yPos}px`, 
        left:`${xPos}px`,
        }}>
        {skillLogo}
        {
          labelPos=='left' ? (
            <div className='absolute bg-black dark:bg-white min-w-20 w-auto p-2 rounded-lg hidden group-hover:block -left-[20px] -translate-x-1/1'>
              <p className='text-center text-lg text-white dark:text-black w-max font-bold'>{skillName}</p>
            </div>) : (
            <div className='absolute bg-black dark:bg-white min-w-20 w-auto p-2 rounded-lg hidden group-hover:block -right-[20px] translate-x-1/1'>
              <p className='text-center text-lg text-white dark:text-black w-max font-bold'>{skillName}</p>
            </div>
          )
        }
    </div>
  )
}

export default SkillBlock