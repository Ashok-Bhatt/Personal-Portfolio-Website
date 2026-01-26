const Sidebar = ({ activePlatform, setActivePlatform, platforms }) => {

    return (
        <div className="flex flex-row lg:flex-col lg:h-full bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-2 lg:p-4 gap-2 lg:gap-y-4 rounded-xl lg:rounded-none w-full lg:w-auto overflow-x-auto no-scrollbar">
            {platforms.map((item, index) => (
                <button
                    key={item.platformName}
                    onClick={() => setActivePlatform(index)}
                    className={`flex items-center justify-center p-3 lg:p-5 rounded-xl transition-all duration-300 font-medium ${activePlatform === index
                        ? "bg-blue-500 text-white shadow-xl scale-105"
                        : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800"
                        }`}
                >
                    <img src={item.platformLogo} className="h-8 w-8 lg:h-10 lg:w-10" alt={item.platformName} />
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
