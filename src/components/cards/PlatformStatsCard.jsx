const StatItem = ({ Icon, name, count, colorClass }) => (
    <div className="flex items-center justify-between py-1">
        <div className="flex items-center space-x-2 md:space-x-3">
            <Icon className={`text-xl md:text-2xl ${colorClass}`} />
            <span className="text-gray-100 font-semibold text-base md:text-lg">{name}</span>
        </div>
        <span className="text-gray-100 font-bold text-lg md:text-xl font-mono">{count}</span>
    </div>
);

const PlatformStatsCard = ({ title, items, className }) => {
    return (
        <div className={`${className} bg-gray-800 p-4 md:p-6 rounded-2xl shadow-xl border border-gray-700/50`}>
            <h3 className="text-xl md:text-2xl font-bold text-blue-500 mb-4 md:mb-6">{title}</h3>
            <div className="flex flex-col space-y-1">
                {items?.map((item, index) => (
                    <StatItem
                        key={index}
                        Icon={item.Icon}
                        name={item.name}
                        count={item.count}
                        colorClass={item.colorClass}
                    />
                ))}
            </div>
        </div>
    );
};

export default PlatformStatsCard;
