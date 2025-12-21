import { useNavigation } from "../Context/navigationContext.jsx";

function Navbar() {
  const { navigation, setNavigation, navPointer } = useNavigation();

  return (
    <nav className='fixed top-0 flex justify-center w-screen h-[60px] bg-gray-200 dark:bg-gray-800 text-black dark:text-white z-50'>
      <div className="flex justify-between items-center px-5 w-[1080px] h-full">
        <div className='text-3xl font-bold text-black dark:text-white'><span className='text-green-400'>Ashok</span> Bhatt</div>
        <div className='flex gap-x-5'>
          {navigation.map((navigationElement, index) => (
            <div
              className='hover:underline hover:cursor-pointer underline-offset-4'
              onClick={() => setNavigation(index)}
              style={{
                color : index === navPointer ? "#2B7FFF" : "",
                textDecoration: index === navPointer ? "underline" : "none",
              }}
              key={navigationElement.text}
            >
              {navigationElement.text}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
