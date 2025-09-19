import { FaUser } from "react-icons/fa";
import {useNavigation} from "../Context/navigationContext.jsx"

function About() {

  const {navigationRefs} = useNavigation();

  return (
    <div className='flex flex-col h-screen w-full items-center bg-white dark:bg-black pt-15' id={ "about"} ref={el => (navigationRefs.current["about"] = el)}>
      <div className='flex gap-x-3 items-center'>
        <FaUser className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>About</span>
        <span className='text-yellow-300 text-3xl font-bold'>Me</span>
      </div>
      <div className='flex mt-10 justify-center gap-10 w-full'>
        <div className="rounded-2xl overflow-hidden">
            <img src="Images/my_image.jpeg" 
              alt="my image" 
              className="max-w-full h-auto rounded-2xl" 
              style={{height:"400px"}}/>
        </div>
        <div className="flex flex-col gap-y-4 max-w-[600px]">
            <p className="text-black dark:text-white font-bold text-3xl">I'm <span className='text-blue-500'>Ashok Bhatt</span></p>
            <p className='mt-5 text-black dark:text-white text-lg '>
              I am a <span className='text-green-300'>final-year B.Tech Computer Science student</span> and an aspiring software developer driven by curiosity, creativity, and a passion for building impactful solutions.
            </p>
            <p className="text-black dark:text-white text-lg">
              I specialize in building modern <span className='text-green-300'>web applications,</span> along with hands-on experience developing <span className='text-green-300'>Android and desktop applications.</span> I actively enhance my problem-solving abilities through platforms like <span className='text-green-300'>LeetCode </span>and <span className='text-green-300'>GeeksforGeeks.</span>
            </p>
            <p className='text-black dark:text-white text-lg  '>
              <span className='text-blue-400'>Institute : </span> ITM(SLS) Baroda University
            </p>
            <p className='text-black dark:text-white text-lg  '>
              <span className='text-blue-400'>Top Skills :</span> Web Development, Python, C++, Data Structures and Algorithms, Problem Solving
            </p>
            {/* <p className='text-black dark:text-white text-lg  '>
              <span className='text-blue-400'>Relevant Coursework :</span> Data Structures And Algorithms, Computer Networks, Operating System, Database Management System, Object Oriented Programming, Machine Learning
            </p> */}
            {/* <p className='text-black dark:text-white text-lg  '>
              <span className='text-blue-400'>Relevant Coursework :</span> DSA, CN, OS, DBMS, OOPS, ML
            </p> */}
        </div>
      </div>
    </div>
  )
}

export default About
