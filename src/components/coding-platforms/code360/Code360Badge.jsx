import React from 'react'

function Code360Badge(props) {

  const { badge, isMiddleBadge = false } = props;
  const badgeSizeClass = (isMiddleBadge) ? 'h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px]' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-[50px] md:w-[50px]'

  return (
    <div className="flex flex-col items-center w-24 sm:w-28 md:w-[130px]">
      <div className='flex h-20 w-20 sm:h-24 sm:w-24 md:h-[100px] md:w-[100px] justify-center items-center hover:cursor-pointer'>
        <img src={badge.image} className={badgeSizeClass} />
      </div>
      <p className='text-[10px] sm:text-[11px] md:text-base text-black dark:text-white text-center line-clamp-1'>{badge.title}</p>
      <p className='text-[8px] sm:text-[9px] md:text-sm text-gray-500'>{badge.type}</p>
    </div>
  )
}

export default Code360Badge
