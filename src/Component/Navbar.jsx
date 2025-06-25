

function Navbar() {
  return (
    <nav className='fixed top-0 flex justify-center w-full h-[60px] bg-white dark:bg-black text-black dark:text-white'>
      <div className="flex justify-between items-center px-5 w-[1080px] h-full">
        <div className='text-3xl font-bold text-black dark:text-white'><span className='text-green-400'>Ashok</span> Bhatt</div>
        <div className='flex gap-x-5'>
          <div className='hover:underline hover:cursor-pointer decoration-blue-700 underline-offset-4' onClick={()=>window.location.href="#home"}>
            Home
          </div>
          <div className='hover:underline hover:cursor-pointer decoration-blue-700 underline-offset-4' onClick={()=>window.location.href="#about"}>
              About
          </div>
          <div className='hover:underline hover:cursor-pointer decoration-blue-700 underline-offset-4' onClick={()=>window.location.href="#skills"}>
              Skills
          </div>
          <div className='hover:underline hover:cursor-pointer decoration-blue-700 underline-offset-4' onClick={()=>window.location.href="#projects"}>
              Projects
          </div>
          <div className='hover:underline hover:cursor-pointer decoration-blue-700 underline-offset-4' onClick={()=>window.location.href="#contact"}>
              Contact
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
