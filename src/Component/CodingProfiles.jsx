
import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import Leetcode from './Leetcode';
import GFG from "./GFG";
import GitHub from './GitHub';
import Code360 from './Code360';
import Sidebar from './Sidebar';
import { useNavigation } from '../Context/navigationContext.jsx';

function CodingProfiles() {
    const { navigationRefs } = useNavigation();
    const [codingPlatformIndex, setCodingPlatformIndex] = useState(parseInt(localStorage.getItem("codingProfileIndex")) || 0);

    const codingPlatforms = [
        {
            platformName: "Leetcode",
            platformLogo: "/Images/Logos/leetcode.png",
            platformView: <Leetcode />
        },
        {
            platformName: "GFG",
            platformLogo: "/Images/Logos/geeksforgeeks.png",
            platformView: <GFG />
        },
        {
            platformName: "Code360",
            platformLogo: "/Images/Logos/code360.png",
            platformView: <Code360 />
        },
        {
            platformName: "Github",
            platformLogo: "/Images/Logos/github.png",
            platformView: <GitHub />
        },
    ];

    return (
        <div className='flex flex-col bg-white dark:bg-black text-black dark:text-white min-h-screen w-full py-20 px-4 md:px-8 box-border' id="coding_profiles" ref={el => (navigationRefs.current["coding_profiles"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center mb-10'>
                <FaLaptopCode className='text-black dark:text-white text-xl md:text-4xl font-bold' />
                <span className='text-black dark:text-white text-xl md:text-4xl font-bold text-center'>Coding <span className='text-yellow-300'>Profiles</span></span>
            </div>

            <div className="flex flex-col lg:flex-row flex-grow gap-6 w-full max-w-7xl mx-auto">
                <div className="w-full lg:w-32 overflow-x-auto lg:overflow-x-visible no-scrollbar">
                    <Sidebar
                        activePlatform={codingPlatformIndex}
                        setActivePlatform={(index) => {
                            setCodingPlatformIndex(index);
                            localStorage.setItem("codingProfileIndex", index);
                        }}
                        platforms={codingPlatforms}
                    />
                </div>

                <div className="flex-grow rounded-lg overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
                    <div className="h-full overflow-y-auto">
                        {codingPlatforms[codingPlatformIndex].platformView}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingProfiles;
