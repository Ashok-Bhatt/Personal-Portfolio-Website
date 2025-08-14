import React from 'react'

function Code360Badge(props) {

  const {badge, isMiddleBadge=false} = props;
  const badgeSizeClass = (isMiddleBadge) ? 'h-[100px] w-[100px]' : 'h-[50px] w-[50px]'

  const getLevelText = (type) => {
    switch(type) {
      case 'Achiever':
        return 'Level 1';
      case 'Specialist':
        return 'Level 2';
      case 'Master':
        return 'Level 3';
      default:
        return '';
    }
  }

  return (
    <div className="flex flex-col items-center w-[130px]">
        <div className='flex h-[100px] w-[100px] justify-center items-center hover:cursor-pointer'>
            <img src={badge.image} className={badgeSizeClass}/>
        </div>
        <p className='text-black dark:text-white'>{badge.title}</p>
        <p className='text-sm text-gray-500'>{badge.type}</p>
    </div>
  )
}

export default Code360Badge
