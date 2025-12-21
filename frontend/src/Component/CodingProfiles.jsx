
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
        <div className='flex flex-col bg-white dark:bg-black text-black dark:text-white min-h-screen w-full p-4' id="coding_profiles" ref={el => (navigationRefs.current["coding_profiles"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center mb-6 min-h-[50px]'>
                <FaLaptopCode className='text-black dark:text-white text-3xl font-bold' />
                <span className='text-black dark:text-white text-3xl font-bold'>Coding</span>
                <span className='text-yellow-300 text-3xl font-bold'>Profiles</span>
            </div>

            <div className="flex flex-grow gap-x-4 overflow-hidden h-[calc(100vh-120px)]">
                <div className="h-full">
                    <Sidebar
                        activePlatform={codingPlatformIndex}
                        setActivePlatform={(index) => {
                            setCodingPlatformIndex(index);
                            localStorage.setItem("codingProfileIndex", index);
                        }}
                        platforms={codingPlatforms}
                    />
                </div>

                <div className="flex-grow overflow-y-auto rounded-lg">
                    {codingPlatforms[codingPlatformIndex].platformView}
                </div>
            </div>
        </div>
    );
}

export default CodingProfiles;
