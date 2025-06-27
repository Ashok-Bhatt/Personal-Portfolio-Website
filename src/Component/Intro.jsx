import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";

function Intro() {

    const description = ["Final Year B.Tech CSE Student", "Software Development Enthusiast", "Leetcoder", "Hardcore DSA Lover"];
    const [descriptionPointer, setDescriptionPointer] = useState([0, 0]);

    useEffect(()=>{
        
        const timer = setInterval(()=>{
            setDescriptionPointer((prev)=>{
                let wordNo = prev[0];
                let letterNo = prev[1];
                let direction = prev[2];
                if (direction == 0){
                    if (letterNo === description[wordNo].length-1){
                        return [wordNo, letterNo, 1];
                    } else {
                        return [wordNo, letterNo+1, 0];
                    }
                } else {
                    if (letterNo === 0){
                        return [(wordNo+1)%description.length, 0, 0];
                    } else {
                        return [wordNo, letterNo-1, 1];
                    }
                }
            });
        }, 200);

        return () => {clearInterval(timer);}
    }, [])

  return (
    <div className='flex h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:gray-100' id="home">
      <div className="flex flex-col justify-center items-start gap-y-3 h-full w-1/2 px-30">
        <p className='text-black dark:text-white text-5xl tracking-widest font-bold'>Hi There</p>
        <p className='text-black dark:text-white text-5xl tracking-widest font-bold'>I'm <span className='text-orange-400'>Ashok Bhatt</span></p>
        <div className='flex gap-x-2'>
            <p className='text-black dark:text-white text-2xl font-semibold'>I am </p>
            <p className='text-blue-500 text-2xl font-semibold'>{description && descriptionPointer ? description[descriptionPointer[0]].slice(0, descriptionPointer[1]+1) + " |" : ""}</p>
        </div>
        <div className='flex gap-x-5 mt-5'>
            <div className='rounded-full bg-black dark:bg-white p-2 hover:cursor-pointer group' onClick={()=>window.location.href="https://www.linkedin.com/in/ashokbhatt2048/"}>
                <FaLinkedin className='text-2xl text-white dark:text-black group-hover:text-blue-600'/>
            </div>
            <div className='rounded-full bg-black dark:bg-white p-2 hover:cursor-pointer group' onClick={()=>window.location.href="https://github.com/Ashok-Bhatt/"}>
                <FaGithub className='text-2xl text-white dark:text-black'/>
            </div>
            <div className='rounded-full bg-black dark:bg-white p-2 hover:cursor-pointer group' onClick={()=>window.location.href="https://www.geeksforgeeks.org/user/ashokbhacjou/"}>
                <SiGeeksforgeeks className='text-2xl text-white dark:text-black group-hover:text-green-600'/>
            </div>
            <div className='rounded-full bg-black dark:bg-white p-2 hover:cursor-pointer group' onClick={()=>window.location.href="https://leetcode.com/u/ashokbhatt2048/"}>
                <SiLeetcode className='text-2xl text-white dark:text-black group-hover:text-orange-400'/>
            </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-1/2">
        <img src="/Images/coder_image.png" alt="coder image" className='rounded-full' style={{width: "300px"}}/>
      </div>
    </div>
  )
}

export default Intro
