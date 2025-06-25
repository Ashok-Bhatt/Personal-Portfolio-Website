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
        <div className="flex flex-col gap-y-3 max-w-[600px]">
            <p className="text-black dark:text-white font-bold text-3xl">I'm <span className='text-blue-500'>Ashok Bhatt</span></p>
            <p className='mt-5 text-md text-black dark:text-white'>I'm Ashok Bhatt, an aspiring software developer fueled by curiosity and a passion for innovation.</p>
            <p className='text-md text-black dark:text-white'>I have experience building responsive, user-friendly web and mobile applications, with a strong focus on clean, efficient code.</p>
            <p className='text-md text-black dark:text-white'>I specialize in developing robust, scalable solutions using technologies like React, Node.js, MongoDB, Firebase, and more.</p>
            <p className='text-md text-black dark:text-white'>Beyond development, I enjoy problem-solving and regularly sharpen my skills on platforms like LeetCode and GeeksforGeeks.</p>
            <p className='text-md text-black dark:text-white'>Currently, I am in my final year of B.Tech in Computer Science Engineering at ITM (SLS) Baroda University.</p>
        </div>
      </div>
    </div>
  )
}

export default About
