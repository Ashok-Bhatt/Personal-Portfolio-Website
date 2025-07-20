import { LiaCertificateSolid } from "react-icons/lia";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import { useState } from 'react';
import { certificates } from "../Constants/index.js"
import CertificateBlock from "./CertificateBlock.jsx";
import Slider from "./Slider.jsx";

function Projects() {

  const [certificatePointer, setCertificatePointer] = useState(1);

  return (
    <div className='flex flex-col w-full hover:cursor-pointer gap-y-10 bg-white dark:bg-black pt-15 pb-30 z-5' id="certificates">
      <div className='flex gap-x-3 w-full justify-center items-center'>
        <LiaCertificateSolid className='text-black dark:text-white text-3xl font-bold'/>
        <span className='text-black dark:text-white text-3xl font-bold'>Certificates</span>
        <span className='text-yellow-300 text-3xl font-bold'>Obtained</span>
      </div>
      <div className="flex relative gap-x-2 w-full justify-center">
        <Slider 
          cards={
            certificates.map((_, index)=>(
              <CertificateBlock certificate={certificates[index]} eventListeners={index==certificatePointer} className={index==certificatePointer ? "w-[400px] h-[250px] hover:shadow-white/50 hover:shadow-lg" : "w-[300px] h-[200px]"}/>
            ))
          }
          cardClasses = "h-full w-[400px]"
          scrollTrigger="card"
          defaultPointer = {1}
          setParentPointer = {setCertificatePointer}
        />
      </div>
    </div>
  )
}

export default Projects
