import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Contests from './Contests';
import ProblemsBlock from './ProblemsBlock';
import StatsBlock from './StatsBlock';
import OpenWebsite from './OpenWebsite';
import Code360Badge from './Code360Badge';
import Slider from './Slider';

function Code360() {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [badgePointer, setBadgePointer] = useState(1);
    const [badges, setBadges] = useState([]);

    const userName = "AshokBhatt";
    const apiUrl = `https://scrape-spidey.onrender.com/api/v1/code360/user/profile?user=${userName}&apiKey=${import.meta.env.VITE_SCRAPE_SPIDEY_KEY}&includeContests=true&includeAchievements=true`;
    const dataRefreshRateInSeconds = 24 * 60 * 60;

    useEffect(() => {
        const fetchData = async () => {
            const cachedData = localStorage.getItem("userCode360Data");
            const lastRefresh = localStorage.getItem("lastCode360Refresh");
            const isStale = !lastRefresh || (Number(lastRefresh) + dataRefreshRateInSeconds * 1000 < Date.now());

            if (cachedData) {
                setUserData(JSON.parse(cachedData));
                setLoading(false);
            }

            if (!cachedData || isStale) {
                if (!cachedData) setLoading(true);
                try {
                    const response = await axios.get(apiUrl);
                    setUserData(response.data);
                    localStorage.setItem("userCode360Data", JSON.stringify(response.data));
                    localStorage.setItem("lastCode360Refresh", Date.now());
                } catch (error) {
                    console.error("Error fetching Code360 data:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchData();
    }, []);

    const getProblemCount = (level) => {
        return userData.dsa_domain_data?.problem_count_data?.difficulty_data?.find(d => d.level === level)?.count || 0;
    };

    const getCode360Badges = (badgesData, badgePointer) => {
        const badges = [];
        let badgeIndex = 0;
        const categories = {
            "gp": "Guided Path",
            "ptm": "Practice",
            "sgp": "Special Guided Path"
        };
        const levels = ["achiever", "specialist", "master"];

        if (!badgesData) return badges;

        levels.forEach(level => {
            if (badgesData[level]) {
                Object.keys(categories).forEach(catKey => {
                    if (badgesData[level][catKey] && badgesData[level][catKey].length > 0) {
                        badgesData[level][catKey].forEach((badgeTitle) => {
                            badges.push(
                                <Code360Badge
                                    key={`${level}-${catKey}-${badgeTitle}`}
                                    badge={{
                                        image: `/Images/Badges/Code360 Badges/${categories[catKey]}/${level}.svg`,
                                        title: badgeTitle.split("(")[0],
                                        type: level.charAt(0).toUpperCase() + level.slice(1)
                                    }}
                                    isMiddleBadge={badgeIndex === badgePointer}
                                />
                            );
                            badgeIndex++;
                        });
                    }
                });
            }
        });

        setBadges(badges);
    };

    useEffect(() => {
        if (userData?.dsa_domain_data?.badges_hash) getCode360Badges(userData?.dsa_domain_data?.badges_hash, badgePointer);
    }, [badgePointer, userData]);

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="flex min-h-screen items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="text-xl font-semibold text-red-500">Data not available</div>
            </div>
        );
    }



    // Contests logic based on new data structure
    const contestDetails = userData.contests || {};
    const attendedContests = contestDetails.user_rating_data ? contestDetails.user_rating_data.length : 0;
    const currentRating = contestDetails.current_user_rating ? Math.round(contestDetails.current_user_rating) : 0;

    // Attempt to map contest badges from rating_group
    const contestBadge = contestDetails.rating_group?.icon ? [contestDetails.rating_group.icon] : [];


    return (
        <div className="flex flex-col lg:flex-row h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col w-full lg:w-1/4 h-full items-center justify-center gap-y-5 p-6 bg-gray-300 dark:bg-gray-700/30">
                <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
                    <img src={userData.image || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="Code360 Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center text-center">
                    <p className='text-black dark:text-white text-2xl md:text-3xl font-bold'>{userData.profile?.name}</p>
                    <p className='text-yellow-600 font-semibold'>@{userData.name}</p>
                </div>
                <div className="flex flex-col min-w-[200px] w-max rounded p-2 items-center bg-white/5 border border-white/5">
                    <p className='text-green-600 text-xl font-bold'>Longest Streak</p>
                    <p className='text-lg font-mono'>{userData.streaks?.longest_streak || 0}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://www.naukri.com/code360/profile/${userName}}`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow h-full p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
                <ProblemsBlock
                    problemsCount={[
                        { "problemsTag": "Easy", "setColor": "#28C244", "solvedProblems": getProblemCount("Easy"), "totalProblems": 0 },
                        { "problemsTag": "Moderate", "setColor": "#FFB700", "solvedProblems": getProblemCount("Moderate"), "totalProblems": 0 },
                        { "problemsTag": "Hard", "setColor": "#F63737", "solvedProblems": getProblemCount("Hard"), "totalProblems": 0 },
                        { "problemsTag": "Ninja", "setColor": "#5341A0", "solvedProblems": getProblemCount("Ninja"), "totalProblems": 0 }
                    ]}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                    progressBodyClassName="bg-gray-100 dark:bg-gray-900"
                    progressBarClassName="bg-gray-200 dark:bg-gray-800"
                    title="Problems Solved"
                />

                <Contests
                    contestAttended={attendedContests}
                    contestRating={currentRating}
                    contestBadges={contestBadge}
                    contestData={contestDetails.user_rating_data || []}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                    title="Contest Stats"
                />

                <div className="md:col-span-2 lg:col-span-1">
                    <Slider
                        cards={badges}
                        cardClasses="h-full w-[130px]"
                        containerClasses="rounded-xl flex-grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        scrollTrigger="card"
                        defaultPointer={badgePointer}
                        setParentPointer={setBadgePointer}
                        title="Code360 Badges"
                    />
                </div>

                <div className="md:col-span-2 lg:col-span-1">
                    <StatsBlock
                        data={[
                            { title: "Total Problems", stats: `${userData.dsa_domain_data?.problem_count_data?.total_count || 0}` },
                            { title: "Level", stats: `${userData.user_level} (${userData.user_level_name})` },
                        ]}
                        containerClasses="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl h-full"
                        titleClasses="text-blue-500 font-bold"
                        statsClasses="text-black dark:text-white"
                    />
                </div>
            </div>
        </div>
    )
}

export default Code360