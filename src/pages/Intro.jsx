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

    const iconStyle = "text-2xl text-black group-hover:text-blue-400"
    const iconDivStyle = "rounded-full bg-white p-2 hover:cursor-pointer hover:bg-gray-900 group"

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
        <div className='flex flex-col md:flex-row min-h-screen w-full bg-black text-gray-100 py-24 px-6 md:px-12 items-center justify-center gap-10' id={"home"} ref={el => (navigationRefs.current["home"] = el)}>
            <div className="flex flex-col justify-center items-center md:items-start gap-y-4 w-full md:w-2/3 text-center md:text-left order-2 md:order-1 md:pl-4 pl-6 md:pr-8 pr-12">
                <p className='text-white text-[clamp(1.5rem,4vw,3rem)] tracking-widest font-bold leading-tight'>Hi There</p>
                <p className='text-white text-[clamp(1.5rem,4vw,3rem)] tracking-widest font-bold leading-tight'>I'm <span className='text-orange-400'>Ashok Bhatt</span></p>
                <div className='flex gap-x-2 text-xl md:text-2xl lg:text-3xl h-10'>
                    <p className='text-white font-semibold'>I am </p>
                    <p className='text-blue-500 font-semibold'>{description && descriptionPointer ? description[descriptionPointer[0]].slice(0, descriptionPointer[1] + 1) + " |" : ""}</p>
                </div>
                <div className='text-md md:text-lg text-gray-300 mt-4 leading-relaxed'>
                    I am a <span className='text-green-400 font-semibold'>final-year B.Tech Computer Science student</span> at ITM(SLS) Baroda University and an aspiring software developer. I specialize in building modern web applications using <span className='text-green-400 font-semibold'>React</span> and <span className='text-green-400 font-semibold'>Express</span>. Beyond that, I have hands-on experience in <span className='text-green-400 font-semibold'>mobile and desktop development</span>, backed by a strong foundation in <span className='text-green-400 font-semibold'>Python</span>, <span className='text-green-400 font-semibold'>C++</span>, <span className='text-green-400 font-semibold'>DSA</span>, <span className='text-green-400 font-semibold'>Generative AI</span>, and <span className='text-green-400 font-semibold'>Databases</span>.
                </div>
                <div className='flex gap-x-4 mt-6 flex-wrap justify-center md:justify-start'>
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
                <div className='bg-green-400 text-gray-900 mt-8 py-3 px-10 hover:cursor-pointer rounded-xl text-lg font-bold hover:bg-green-300 transition-colors shadow-lg hover:shadow-xl' onClick={() => window.open("https://drive.google.com/file/d/1K3UYAB9CjsQTzWY60D-TTFwos34uE3qW/view?usp=drive_link", "_blank")}>Resume</div>
            </div>
            <div className="flex justify-center items-center w-full md:w-1/3 order-1 md:order-2">
                <img
                    src="/Images/my_image.jpeg"
                    alt="coder image"
                    className='rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] border-4 border-blue-500/10 object-cover shadow-2xl transition-all duration-300 hover:scale-105'
                />
            </div>
        </div>
    )
}

export default Intro