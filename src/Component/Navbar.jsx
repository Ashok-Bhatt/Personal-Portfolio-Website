import React, { useState } from "react";

function Navbar() {

  const navigation = [
    {
      text : "Home",
      link: "#home",
    },
    {
      text : "About",
      link: "#about",
    },
    {
      text : "Skills",
      link: "#skills",
    },
    {
      text : "Coding Profiles",
      link: "#coding_profiles",
    },
    {
      text : "Projects",
      link: "#projects",
    },
    {
      text : "Contact",
      link: "#contact",
    },
  ]
  const [navPointer, setNavPointer] = useState(0);

  const setNavigation = (index) => {
    setNavPointer(index);
    window.location.href = navigation[index].link;
  }

  return (
    <nav className='fixed top-0 flex justify-center w-full h-[60px] bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50'>
      <div className="flex justify-between items-center px-5 w-[1080px] h-full">
        <div className='text-3xl font-bold text-black dark:text-white'><span className='text-green-400'>Ashok</span> Bhatt</div>
        <div className='flex gap-x-5'>
          {navigation.map((navigationElement, index)=>(
            <div className='hover:underline hover:cursor-pointer underline-offset-4' onClick={()=>setNavigation(index)} style={{textDecoration: (index==navPointer) ? "underline" : "none", textDecorationColor: (index==navPointer) ? "#3333FF": "white"}} key={navigationElement.text}>{navigationElement.text}</div>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
