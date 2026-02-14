import React from 'react'

function LeetcodeBadge(props) {

  const { badge, isMiddleBadge = false } = props;
  return (
    <div className="flex flex-col items-center w-full">
      <div className='flex aspect-square w-[70%] sm:w-[80%] justify-center items-center hover:cursor-pointer'>
        <img src={badge.icon} className="w-full h-full object-contain" />
      </div>
      <p className='text-[10px] sm:text-[11px] md:text-[12px] text-white text-center line-clamp-1 mt-1'>{badge.displayName}</p>
      <p className='text-[8px] sm:text-[9px] md:text-[10px] text-gray-500'>{badge.creationDate}</p>
    </div>
  )
}

export default LeetcodeBadge
