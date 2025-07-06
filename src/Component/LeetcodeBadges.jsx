import React, { useState } from 'react'
import {FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";

function LeetcodeBadges(props) {

    const {badgesCount, badges} = props;
    const [badgePointer, setBadgePointer] = useState(0);

    console.log(badgesCount, badges)

  return (
    <div className='flex relative justify-between items-center w-full h-full bg-gray-100 dark:bg-gray-900 p-2'>
        <div className="flex flex-col items-center w-[130px]" onClick={()=>setBadgePointer((prev)=>Math.max(prev-1, 0))}>
            {(badgesCount>0 && badgePointer>=1) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center'>
                    <img src={badges[badgePointer-1].icon} className='h-[70px] w-[70px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer-1].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer-1].creationDate}</p>
            </> : <></>}
        </div>
        <div className="flex flex-col items-center w-[130px]" onClick={()=>setBadgePointer((prev)=>Math.max(prev-1, 0))}>
            {(badgesCount>0) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center'>
                    <img src={badges[badgePointer].icon} className='h-[100px] w-[100px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer].creationDate}</p>
            </> : <></>}
        </div>
        <div className="flex flex-col items-center w-[130px]" onClick={()=>setBadgePointer((prev)=>Math.max(prev-1, 0))}>
            {(badgesCount>0 && badgePointer+1<=badgesCount-1) ? <>
                <div className='flex h-[100px] w-[100px] justify-center items-center'>
                    <img src={badges[badgePointer+1].icon} className='h-[70px] w-[70px]'/>
                </div>
                <p className='text-[12px] text-black dark:text-white'>{badges[badgePointer+1].displayName}</p>
                <p className='text-[10px] text-gray-500'>{badges[badgePointer+1].creationDate}</p>
            </> : <></>}
        </div>

        <FaChevronCircleLeft className='absolute left-2 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer' style={{visibility: (badgePointer==0) ? "hidden": "visible"}} onClick={()=>setBadgePointer((prev)=>Math.max(0, prev-1))}/>
        <FaChevronCircleRight className='absolute right-2 top-1/2 -translate-y-1/2 text-black dark:text-white bg-white dark:bg-black text-3xl rounded-full hover:cursor-pointer'  style={{visibility: (badgePointer==badgesCount-1) ? "hidden": "visible"}} onClick={()=>setBadgePointer((prev)=>Math.min(badgesCount-1, prev+1))}/>
    </div>
  )
}

export default LeetcodeBadges
