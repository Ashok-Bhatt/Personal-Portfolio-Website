import { useState } from "react";
import { useNavigation } from "../context/navigationContext.jsx";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const { navigation, setNavigation, navPointer } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (index) => {
    setNavigation(index);
    setIsOpen(false);
  };

  return (
    <nav className='fixed top-0 flex justify-center w-full h-[60px] bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50 shadow-md'>
      <div className="flex justify-between items-center px-5 w-full max-w-screen-xl h-full">
        <div className='text-2xl md:text-3xl font-bold text-black dark:text-white'>
          <span className='text-green-400'>Ashok</span> Bhatt
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <div className='hidden md:flex gap-x-5'>
          {navigation.map((navigationElement, index) => (
            <div
              className='hover:underline hover:cursor-pointer underline-offset-4 transition-colors'
              onClick={() => setNavigation(index)}
              style={{
                color: index === navPointer ? "#2B7FFF" : "",
                textDecoration: index === navPointer ? "underline" : "none",
              }}
              key={navigationElement.text}
            >
              {navigationElement.text}
            </div>
          ))}
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`md:hidden fixed top-[60px] left-0 w-full bg-gray-200 dark:bg-gray-800 transition-all duration-300 ease-in-out border-t border-gray-300 dark:border-gray-700 box-border ${isOpen ? "opacity-100 visible h-auto py-5" : "opacity-0 invisible h-0 overflow-hidden"
            }`}
        >
          <div className="flex flex-col items-center gap-y-4">
            {navigation.map((navigationElement, index) => (
              <div
                className="text-lg font-medium hover:text-blue-500"
                onClick={() => handleNavClick(index)}
                style={{
                  color: index === navPointer ? "#2B7FFF" : "",
                  textDecoration: index === navPointer ? "underline" : "none",
                }}
                key={`mobile-${navigationElement.text}`}
              >
                {navigationElement.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
