import React, { useState } from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function LeetcodeBadges(props) {

    const {badgesCount, badges} = props;
    const [badgePointer, setBadgePointer] = useState(0);

  return (
    <div className='flex relative justify-between items-center w-full h-full p-2'>
        <div className="flex flex-col items-center w-[130px]" onClick={()=>setBadgePointer((prev)=>Math.max(prev-1, 0))}>
            {(badgesCount>0 && badgePointer>=1) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center hover:cursor-pointer'>
                    <img src={badges[badgePointer-1].icon} className='h-[50px] w-[50px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer-1].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer-1].creationDate}</p>
            </> : <></>}
        </div>
        <div className="flex flex-col items-center w-[130px]">
            {(badgesCount>0) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center hover:cursor-pointer'>
                    <img src={badges[badgePointer].icon} className='h-[100px] w-[100px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer].creationDate}</p>
            </> : <></>}
        </div>
        <div className="flex flex-col items-center w-[130px]" onClick={()=>setBadgePointer((prev)=>Math.min(badgesCount-1, prev+1))}>
            {(badgesCount>0 && badgePointer+1<=badgesCount-1) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center hover:cursor-pointer'>
                    <img src={badges[badgePointer+1].icon} className='h-[50px] w-[50px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer+1].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer+1].creationDate}</p>
            </> : <></>}
        </div>
    </div>
  )
}

export default LeetcodeBadges
