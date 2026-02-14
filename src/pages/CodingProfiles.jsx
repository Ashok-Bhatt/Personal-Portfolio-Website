import React, { useState } from 'react';
import { FaLaptopCode } from "react-icons/fa";
import Leetcode from '../components/coding-platforms/leetcode/Leetcode';
import GFG from "../components/coding-platforms/gfg/GFG";
import GitHub from '../components/coding-platforms/github/GitHub';
import Code360 from '../components/coding-platforms/code360/Code360';
import ProfileOptions from '../components/coding-platforms/ProfileOptions';
import { useNavigation } from '../context/navigationContext.jsx';

function CodingProfiles() {
    const { navigationRefs } = useNavigation();
    const [codingPlatformIndex, setCodingPlatformIndex] = useState(parseInt(localStorage.getItem("codingProfileIndex")) || 0);

    const codingPlatforms = [
        {
            platformName: "Github",
            platformLogo: "/Images/Logos/github.png",
            platformView: <GitHub />
        },
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
    ];

    return (
        <div className='flex flex-col bg-black text-white min-h-screen w-full py-20 px-4 md:px-8 box-border' id="coding_profiles" ref={el => (navigationRefs.current["coding_profiles"] = el)}>
            <div className='flex gap-x-3 w-full justify-center items-center mb-10'>
                <FaLaptopCode className='text-white text-[clamp(1.5rem,4vw,3rem)] font-bold' />
                <span className='text-white text-[clamp(1.5rem,4vw,3rem)] font-bold text-center'>Coding <span className='text-yellow-300'>Profiles</span></span>
            </div>

            <div className="flex flex-col lg:flex-row flex-grow gap-6 w-full mx-auto">
                <div className="w-full lg:w-32 shrink-0 overflow-x-auto lg:overflow-x-visible no-scrollbar">
                    <ProfileOptions
                        activePlatform={codingPlatformIndex}
                        setActivePlatform={(index) => {
                            setCodingPlatformIndex(index);
                            localStorage.setItem("codingProfileIndex", index);
                        }}
                        platforms={codingPlatforms}
                    />
                </div>

                <div className="flex-grow rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                    <div className="h-full overflow-y-auto">
                        {codingPlatforms[codingPlatformIndex].platformView}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CodingProfiles;
