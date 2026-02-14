import React from 'react'

function GithubBadge(props) {
    const { badge, isMiddleBadge = false } = props;
    return (
        <div className="flex flex-col items-center w-full">
            <div className='flex aspect-square w-[70%] sm:w-[80%] justify-center items-center hover:cursor-pointer relative'>
                <img src={badge.icon} className="w-full h-full object-contain" alt={badge.name} />
                {badge.count > 1 && (
                    <div className="absolute bottom-0 right-0 bg-gray-800 text-gray-200 rounded-full px-1.5 py-0.5 text-[8px] sm:text-[10px] font-black shadow-md border border-gray-600">
                        x{badge.count}
                    </div>
                )}
            </div>
            <p className='text-[10px] sm:text-[11px] md:text-[12px] text-white text-center line-clamp-1 font-bold mt-1'>{badge.name}</p>
        </div>
    )
}

export default GithubBadge
