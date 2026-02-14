import React from 'react'

function Code360Badge(props) {

  const { badge, isMiddleBadge = false } = props;
  return (
    <div className="flex flex-col items-center w-full">
      <div className='flex aspect-square w-[70%] sm:w-[80%] justify-center items-center hover:cursor-pointer'>
        <img src={badge.image} className="w-full h-full object-contain" />
      </div>
      <p className='text-[10px] sm:text-[11px] md:text-base text-white text-center line-clamp-1 mt-1'>{badge.title}</p>
      <p className='text-[8px] sm:text-[9px] md:text-sm text-gray-500'>{badge.type}</p>
    </div>
  )
}

export default Code360Badge
