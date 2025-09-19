
import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import Leetcode from './Leetcode';
import GFG from "./GFG";
import GitHub from './GitHub';
import Code360 from './Code360';
import { useNavigation } from '../Context/navigationContext.jsx';

function CodingProfiles() {
    const { navigationRefs } = useNavigation();
    const [codingPlatformIndex, setCodingPlatformIndex] = useState(localStorage.getItem("codingProfileIndex") || 0);

    const codingPlatforms = [
        {
            platformName: "Leetcode",
            platformView: <Leetcode />
        },
        {
            platformName: "GFG",
            platformView: <GFG />
        },
        {
            platformName: "Code360",
            platformView: <Code360 />
        },
        {
            platformName: "Github",
            platformView: <GitHub />
        },
    ];

    return (
        <div className='flex flex-col gap-y-3 bg-white dark:bg-black text-black dark:text-white min-h-screen w-full p-15' id="coding_profiles" ref={el => (navigationRefs.current["coding_profiles"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center'>
                <FaLaptopCode className='text-black dark:text-white text-3xl font-bold' />
                <span className='text-black dark:text-white text-3xl font-bold'>Coding</span>
                <span className='text-yellow-300 text-3xl font-bold'>Profiles</span>
            </div>
            <div className="flex p-2 gap-5 w-max overflow-hidden">
                {codingPlatforms.map((platform, index) => (
                    <div className="text-2xl text-center min-w-40 py-1 px-3 rounded-full font-semibold hover:cursor-pointer border border-black dark:border-white" style={{ background: index == codingPlatformIndex ? 'green' : 'black' }} onClick={() => { setCodingPlatformIndex(index); localStorage.setItem("codingProfileIndex", index); }} key={platform.platformName}>
                        {platform.platformName}
                    </div>
                ))}
            </div>
            {codingPlatforms[codingPlatformIndex].platformView}
        </div>
    );
}

export default CodingProfiles;
