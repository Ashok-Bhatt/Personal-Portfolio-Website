import React from 'react'

function SkillBlock(props) {

    const {skillName, skillLogo} = props;

  return (
    <div className='flex flex-col gap-2 rounded p-2 items-center border border-purple-600 min-w-30 bg-gray-100 dark:bg-gray-900'>
      {skillLogo}
      <p className='text-md text-black dark:text-white'>{skillName}</p>
    </div>
  )
}

export default SkillBlock
