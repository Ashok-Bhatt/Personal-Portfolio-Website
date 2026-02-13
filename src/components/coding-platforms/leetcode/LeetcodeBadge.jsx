import React from 'react'

function LeetcodeBadge(props) {

  const { badge, isMiddleBadge = false } = props;
  const badgeSizeClass = (isMiddleBadge) ? 'h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px]' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-[50px] md:w-[50px]'

  return (
    <div className="flex flex-col items-center w-24 sm:w-28 md:w-[130px]">
      <div className='flex h-20 w-20 sm:h-24 sm:w-24 md:h-[100px] md:w-[100px] justify-center items-center hover:cursor-pointer'>
        <img src={badge.icon} className={badgeSizeClass} />
      </div>
      <p className='text-[10px] sm:text-[11px] md:text-[12px] text-white text-center line-clamp-1'>{badge.displayName}</p>
      <p className='text-[8px] sm:text-[9px] md:text-[10px] text-gray-500'>{badge.creationDate}</p>
    </div>
  )
}

export default LeetcodeBadge
