import { FaUser } from "react-icons/fa";
import { useNavigation } from "../Context/navigationContext.jsx"

function About() {

  const { navigationRefs } = useNavigation();

  return (
    <div className='flex flex-col min-h-screen w-full items-center bg-white dark:bg-black py-20 px-6 box-border' id={"about"} ref={el => (navigationRefs.current["about"] = el)}>
      <div className='flex gap-x-3 items-center mb-10'>
        <FaUser className='text-black dark:text-white text-xl md:text-4xl font-bold' />
        <span className='text-black dark:text-white text-xl md:text-4xl font-bold'>About <span className='text-yellow-300'>Me</span></span>
      </div>
      <div className='flex flex-col md:flex-row justify-center items-center md:items-start gap-10 w-full max-w-5xl'>
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img src="Images/my_image.jpeg"
            alt="my image"
            className="w-full max-w-[280px] md:max-w-xs h-auto rounded-2xl object-cover"
            style={{ height: "auto" }} />
        </div>
        <div className="flex flex-col gap-y-4 max-w-[600px] text-center md:text-left">
          <p className="text-black dark:text-white font-bold text-3xl">I'm <span className='text-blue-500'>Ashok Bhatt</span></p>
          <p className='mt-5 text-black dark:text-white text-lg leading-relaxed'>
            I am a <span className='text-green-300 font-semibold'>final-year B.Tech Computer Science student</span> and an aspiring software developer driven by curiosity, creativity, and a passion for building impactful solutions.
          </p>
          <p className="text-black dark:text-white text-lg leading-relaxed">
            I specialize in building modern <span className='text-green-300 font-semibold'>web applications,</span> along with hands-on experience developing <span className='text-green-300 font-semibold'>Android and desktop applications.</span> I actively enhance my problem-solving abilities through platforms like <span className='text-green-300 font-semibold'>LeetCode </span>and <span className='text-green-300 font-semibold'>GeeksforGeeks.</span>
          </p>
          <p className='text-black dark:text-white text-lg'>
            <span className='text-blue-400 font-bold'>Institute : </span> ITM(SLS) Baroda University
          </p>
          <p className='text-black dark:text-white text-lg'>
            <span className='text-blue-400 font-bold'>Top Skills :</span> Web Development, Python, C++, Data Structures and Algorithms, Problem Solving
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
