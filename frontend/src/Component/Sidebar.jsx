const Sidebar = ({ activePlatform, setActivePlatform, platforms }) => {

    return (
        <div className="flex flex-col h-full bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800 p-4 gap-y-2">
            {platforms.map((item, index) => (
                <button
                    key={item.platformName}
                    title={item.platformName}
                    onClick={() => setActivePlatform(index)}
                    className={`flex items-center justify-center py-3 rounded-xl transition-all duration-200 font-medium p-5 ${activePlatform === index
                        ? "bg-blue-200 text-white shadow-lg shadow-blue-200/30"
                        : "text-gray-600 dark:text-gray-400 bg-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                >
                    <img src={item.platformLogo} className="h-10 w-10" alt={item.platformName} />
                </button>
            ))}
        </div>
    );
};

export default Sidebar;
