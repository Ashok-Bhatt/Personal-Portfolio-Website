import React from 'react'
import { FaUser } from "react-icons/fa";

function About() {
  return (
    <div className='flex flex-col h-screen w-full items-center bg-white dark:bg-black pt-15' id="about">
      <div className='flex gap-x-5 items-center'>
        <FaUser className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>About</span>
        <span className='text-purple-600 text-3xl font-bold'>Me</span>
      </div>
      <div className='flex mt-10 justify-center gap-x-30'>
        <div className="rounded-2xl overflow-hidden">
            <img src="Images/my_image.jpeg" alt="my image" style={{height:"400px"}}/>
        </div>
        <div className="flex flex-col gap-y-1 max-w-[600px]">
            <p className="text-black dark:text-white font-bold text-3xl">I'm <span className='text-blue-500'>Ashok Bhatt</span></p>
            <p className='mt-5 text-md text-black dark:text-white'>- An aspiring software developer fueled by curiosity and a passion for innovation.</p>
            <p className='text-md text-black dark:text-white'>- Specialized in building web, android and desktop apps</p>
            <p className='text-md text-black dark:text-white'>- Active on Coding Platforms like Leetcode and GFG</p>
            <p className='text-md text-black dark:text-white'>- Final year of B.Tech CSE Student at ITM (SLS) Baroda University.</p>
        </div>
      </div>
    </div>
  )
}

export default About
