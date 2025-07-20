import React from 'react'

function LeetcodeBadge(props) {

  const {badge} = props;

  return (
    <div className="flex flex-col items-center w-[130px]">
        <div className='flex h-[100px] w-[100px] justify-center items-center hover:cursor-pointer'>
            <img src={badge.icon} className='h-[50px] w-[50px]'/>
        </div>
        <p className='text-[12px] text-black dark:text-white'>{badge.displayName}</p>
        <p className='text-[10px] text-gray-500'>{badge.creationDate}</p>
    </div>
  )
}

export default LeetcodeBadge
