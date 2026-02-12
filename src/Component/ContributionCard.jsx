import React from 'react';
import { HiFire } from 'react-icons/hi';
import classNames from 'classnames';

const ContributionCard = ({
    currentStreak,
    maxStreak,
    totalContributions,
    containerClasses,
    titleClasses = "text-blue-500 font-bold",
    statsClasses = "text-black dark:text-white"
}) => {

    const pinkText = "text-[#f85149]";
    const separatorColor = "border-gray-300 dark:border-gray-600";

    const StatItem = ({ data, isMiddle = false }) => {
        if (!data) return null;
        const { count, text, date } = data;

        if (isMiddle) {
            return (
                <div className="flex-1 flex flex-col items-center justify-center min-w-0 px-1">
                    <div className="relative flex items-center justify-center">
                        <div className="absolute -top-3 sm:-top-4 text-orange-500 text-base sm:text-lg md:text-2xl">
                            <HiFire />
                        </div>
                        <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full border-2 sm:border-[3px] border-orange-500/50 flex items-center justify-center overflow-hidden">
                            <span className={classNames(statsClasses, "text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold truncate px-1")}>
                                {count}
                            </span>
                        </div>
                    </div>
                    <p className={classNames(titleClasses, "mt-1 sm:mt-2 text-center text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-semibold leading-tight")}>
                        {text}
                    </p>
                    {date && <p className={`mt-0.5 text-[7px] sm:text-[9px] md:text-[10px] ${pinkText} truncate w-full text-center`}>{date}</p>}
                </div>
            );
        }

        return (
            <div className="flex-1 flex flex-col items-center justify-center min-w-0 px-1 text-center">
                <p className={classNames(statsClasses, "text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold truncate w-full")}>
                    {count}
                </p>
                <p className={classNames(titleClasses, "mt-1 text-[9px] sm:text-[11px] md:text-xs lg:text-sm font-semibold leading-tight")}>
                    {text}
                </p>
                {date && <p className={`mt-1 text-[7px] sm:text-[9px] md:text-[10px] ${pinkText} truncate w-full text-center`}>{date}</p>}
            </div>
        );
    };

    return (
        <div className={classNames(
            containerClasses,
            "w-full flex items-center justify-between py-2 sm:py-4 px-1 sm:px-2 shadow-sm transition-all h-full overflow-hidden bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
        )}>
            {/* Total Contributions */}
            <StatItem data={totalContributions} />

            {/* Separator */}
            <div className={`h-8 sm:h-12 md:h-16 shrink-0 border-l ${separatorColor}`}></div>

            {/* Current Streak */}
            <StatItem data={currentStreak} isMiddle={true} />

            {/* Separator */}
            <div className={`h-8 sm:h-12 md:h-16 shrink-0 border-l ${separatorColor}`}></div>

            {/* Max Streak */}
            <StatItem data={maxStreak} />
        </div>
    );
};

export default ContributionCard;
