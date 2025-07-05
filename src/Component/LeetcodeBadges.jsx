import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function LeetcodeBadges(props) {

    const {badgesCount, badges} = props;
    const [badgePointer, setBadgePointer] = useState(0);

  return (
    <div className='flex relative w-full h-full bg-gray-100 dark:bg-gray-900'>
        {(badgePointer>=1) ? <div className="" onClick={()=>setBadgePointer((prev)=>Math.max(prev-1, 0))}>
            <img src={badges[badgePointer-1].icon}/>
            <p>{badges[badgePointer-1].displayName}</p>
            <p>{badges[badgePointer-1].creationDate}</p>
        </div> : null}
        {(badgesCount>0) ? <div className="">
            <img src={badges[badgePointer].icon}/>
            <p>{badges[badgePointer].displayName}</p>
            <p>{badges[badgePointer].creationDate}</p>
        </div> : null}
        {(badgePointer>=badgesCount-1) ? <div className="" onClick={()=>setBadgePointer((prev)=>Math.min(prev+1, badgesCount-1))}>
            <img src={badges[badgePointer+1].icon}/>
            <p>{badges[badgePointer+1].displayName}</p>
            <p>{badges[badgePointer+1].creationDate}</p>
        </div> : null}
    </div>
  )
}

export default LeetcodeBadges
