import React, { useState } from 'react'
import {FaLaptopCode} from "react-icons/fa"
import Leetcode from './Leetcode';
import GFG from "./GFG"

function CodingProfiles() {

    const [codingPlatformIndex, setCodingPlatformIndex] = useState(0);

    const codingPlatforms = [
        {
            platformName: "Leetcode",
            platformView: <Leetcode/>
        },
        {
            platformName: "GFG",
            platformView: <GFG/>
        }
    ];

  return (
    <div className='flex flex-col gap-y-3 bg-white dark:bg-black text-black dark:text-white min-h-screen w-full p-15' id="coding_profiles">
        <div className='flex gap-x-3 w-full justify-center items-center'>
            <FaLaptopCode className='text-black dark:text-white text-3xl font-bold'/>
            <span className='text-black dark:text-white text-3xl font-bold'>Coding</span>
            <span className='text-yellow-300 text-3xl font-bold'>Profiles</span>
        </div>
        <div className="flex border border-black dark:border-white w-max rounded-lg overflow-hidden">
            {codingPlatforms.map((platform, index)=>(
                <div className="text-2xl min-w-20 py-1 px-3 font-semibold hover:cursor-pointer" style={{background:index==codingPlatformIndex?'green':'black'}} onClick={()=>setCodingPlatformIndex(index)} key={platform.platformName}>
                    {platform.platformName}
                </div>
            ))}
        </div>
        {codingPlatforms[codingPlatformIndex].platformView}
    </div>
  )
}

export default CodingProfiles
