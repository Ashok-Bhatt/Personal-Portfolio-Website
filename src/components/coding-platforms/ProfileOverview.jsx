import React from 'react';
import OpenWebsite from '../OpenWebsite';
import { FaChartBar } from "react-icons/fa";

function ProfileOverview({ profileImage, profileName, profileUsername, websiteLink, stats }) {
    return (
        <div className="flex flex-col sm:flex-row lg:flex-col w-full lg:w-[25%] shrink-0 gap-4 md:gap-6 p-4 md:p-6 bg-gray-700/30 lg:h-full lg:overflow-y-auto no-scrollbar">
            {/* Left Section: Image, Name, Username, Link */}
            <div className="flex flex-col items-center text-center gap-y-3 md:w-1/3 lg:w-full shrink-0">
                <div className='h-[100px] w-[100px] sm:h-[150px] sm:w-[150px] md:h-[200px] md:w-[200px] lg:w-full lg:h-full aspect-square rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
                    <img src={profileImage || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="Profile" />
                </div>
                <div className="flex flex-col items-center">
                    <p className='text-white text-xl md:text-2xl lg:text-[clamp(1.1rem,2vw,1.5rem)] font-bold whitespace-nowrap'>{profileName}</p>
                    <p className='text-yellow-600 text-sm md:text-base font-semibold'>@{profileUsername}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={websiteLink} />
            </div>

            {/* Right Section: Stats */}
            {stats && stats.length > 0 && (
                <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 w-full md:w-2/3 lg:w-full content-center">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon || FaChartBar;
                        return (
                            <div key={index} className="flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-xl bg-white/5 border border-white/5 shadow-md backdrop-blur-sm hover:bg-white/10 transition-colors">
                                <div className="p-1.5 md:p-2 rounded-lg bg-gray-800 text-blue-400">
                                    <Icon className="text-sm md:text-xl" />
                                </div>
                                <div className="flex flex-col min-w-0">
                                    <p className='text-gray-400 text-[9px] md:text-xs font-semibold uppercase tracking-wider truncate'>{stat.stat}</p>
                                    <p className='text-white text-sm md:text-lg lg:text-[clamp(0.9rem,1.5vw,1.2rem)] font-mono font-bold truncate'>{stat.value}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default ProfileOverview;
