import React, { useEffect, useState } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import { BsTwitterX } from "react-icons/bs";
import { useNavigation } from '../context/navigationContext.jsx';

function Intro() {

    const description = ["Final Year B.Tech CSE Student", "Software Development Enthusiast", "Hardcore Leetcoder", "MERN Stack Developer"];
    const [descriptionPointer, setDescriptionPointer] = useState([0, 0]);

    const iconStyle = "text-2xl text-white dark:text-black group-hover:text-blue-600 group-hover:dark:text-blue-400"
    const iconDivStyle = "rounded-full bg-black dark:bg-white p-2 hover:cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-900 group"

    const { navigationRefs } = useNavigation();

    useEffect(() => {

        const timer = setInterval(() => {
            setDescriptionPointer((prev) => {
                let wordNo = prev[0];
                let letterNo = prev[1];
                let direction = prev[2];
                if (direction == 0) {
                    if (letterNo === description[wordNo].length - 1) {
                        return [wordNo, letterNo, 1];
                    } else {
                        return [wordNo, letterNo + 1, 0];
                    }
                } else {
                    if (letterNo === 0) {
                        return [(wordNo + 1) % description.length, 0, 0];
                    } else {
                        return [wordNo, letterNo - 1, 1];
                    }
                }
            });
        }, 100);

        return () => { clearInterval(timer); }
    }, [])

    return (
        <div className='flex flex-col md:flex-row min-h-screen w-full bg-gray-100 text-gray-900 dark:bg-gray-900 dark:text-gray-100 py-20 px-6 md:px-0 items-center justify-center' id={"home"} ref={el => (navigationRefs.current["home"] = el)}>
            <div className="flex flex-col justify-center items-center md:items-start gap-y-3 w-full md:w-1/2 md:pl-20 2xl:pl-40 text-center md:text-left order-2 md:order-1">
                <p className='text-black dark:text-white text-xl md:text-4xl lg:text-5xl tracking-widest font-bold'>Hi There</p>
                <p className='text-black dark:text-white text-xl md:text-4xl lg:text-5xl tracking-widest font-bold'>I'm <span className='text-orange-400'>Ashok Bhatt</span></p>
                <div className='flex gap-x-2 text-xl md:text-2xl'>
                    <p className='text-black dark:text-white font-semibold'>I am </p>
                    <p className='text-blue-500 font-semibold'>{description && descriptionPointer ? description[descriptionPointer[0]].slice(0, descriptionPointer[1] + 1) + " |" : ""}</p>
                </div>
                <div className='flex gap-x-4 mt-5'>
                    <div className={`${iconDivStyle}`} onClick={() => window.open("https://www.linkedin.com/in/ashokbhatt2048/", "_blank")}>
                        <FaLinkedin className={`${iconStyle}`} />
                    </div>
                    <div className={`${iconDivStyle}`} onClick={() => window.open("https://github.com/Ashok-Bhatt/", "_blank")}>
                        <FaGithub className={`${iconStyle}`} />
                    </div>
                    <div className={`${iconDivStyle}`} onClick={() => window.open("https://www.geeksforgeeks.org/user/ashokbhacjou/", "_blank")}>
                        <SiGeeksforgeeks className={`${iconStyle}`} />
                    </div>
                    <div className={`${iconDivStyle}`} onClick={() => window.open("https://leetcode.com/u/ashokbhatt2048/", "_blank")}>
                        <SiLeetcode className={`${iconStyle}`} />
                    </div>
                    <div className={`${iconDivStyle}`} onClick={() => window.open("https://x.com/AshokBhatt619", "_blank")}>
                        <BsTwitterX className={`${iconStyle}`} />
                    </div>
                </div>
                <div className='bg-green-400 text-gray-900 mt-8 py-3 px-10 hover:cursor-pointer rounded-xl text-lg font-bold hover:bg-green-300 transition-colors' onClick={() => window.open("https://drive.google.com/file/d/1K3UYAB9CjsQTzWY60D-TTFwos34uE3qW/view?usp=drive_link", "_blank")}>Resume</div>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/2 order-1 md:order-2 mb-10 md:mb-0">
                <img src="/Images/my_image.jpeg" alt="coder image" className='rounded-full w-48 h-48 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] border-4 border-blue-500/10 object-cover shadow-2xl' />
            </div>
        </div>
    )
}

export default Intro