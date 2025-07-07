import React from 'react'

function SkillBlock(props) {

    const {skillName, skillLogo, xPos, yPos, labelPos} = props;

  return (
    <div className='absolute group flex gap-2 rounded-full p-2 items-center border border-purple-600 min-w-15 bg-gray-100 dark:bg-gray-900 -translate-1/2 hover:cursor-pointer hover:border-green-500 hover:border-3' style={{
        top: `${yPos}px`, 
        left:`${xPos}px`,
        }}>
        {skillLogo}
        <div className='absolute bg-white dark:bg-black min-w-20 w-auto p-2 rounded-lg hidden group-hover:block' style={{left:`${labelPos}px`}}>
            <p className='text-center text-lg text-black dark:text-white w-max'>{skillName}</p>
        </div>
    </div>
  )
}

export default SkillBlock