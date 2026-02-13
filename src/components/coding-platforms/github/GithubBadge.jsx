import React from 'react'

function GithubBadge(props) {
    const { badge, isMiddleBadge = false } = props;
    const badgeSizeClass = (isMiddleBadge) ? 'h-16 w-16 sm:h-20 sm:w-20 md:h-[100px] md:w-[100px]' : 'h-10 w-10 sm:h-12 sm:w-12 md:h-[50px] md:w-[50px]'

    return (
        <div className="flex flex-col items-center w-24 sm:w-28 md:w-[130px]">
            <div className='flex h-20 w-20 sm:h-24 sm:w-24 md:h-[100px] md:w-[100px] justify-center items-center hover:cursor-pointer relative'>
                <img src={badge.icon} className={badgeSizeClass} alt={badge.name} />
                {badge.count > 1 && (
                    <div className="absolute bottom-1 right-1 sm:bottom-0 sm:right-0 bg-gray-800 text-gray-200 rounded-full px-1.5 py-0.5 text-[8px] sm:text-[10px] font-black shadow-md border border-gray-600">
                        x{badge.count}
                    </div>
                )}
            </div>
            <p className='text-[10px] sm:text-[11px] md:text-[12px] text-white text-center line-clamp-1 font-bold'>{badge.name}</p>
        </div>
    )
}

export default GithubBadge
