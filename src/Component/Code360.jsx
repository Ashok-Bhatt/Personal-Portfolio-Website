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
            <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-300">Loading...</div>
            </div>
        );
    }

    if (!userData) {
        return (
            <div className="flex h-full items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-lg">
                <div className="text-xl font-semibold text-gray-600 dark:text-gray-300 text-red-500">Failed to load data</div>
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
        <div className="flex h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col w-1/4 h-full items-center justify-center gap-y-5 p-2">
                <div className='w-50 h-50 rounded-full overflow-hidden border-4 border-blue-400'>
                    <img src={userData.image || "/Images/coder_logo.png"} className='h-full w-full' alt="Code360 Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center">
                    <p className='text-black dark:text-white text-3xl text-center'>{userData.profile?.name}</p>
                    <p className='text-yellow-600'>{userData.name}</p>
                </div>
                <div className="flex flex-col min-w-[200px] w-max rounded p-2 items-center">
                    <p className='text-green-600 text-2xl'>Longest Streak</p>
                    <p className='text-lg'>{userData.streaks?.longest_streak || 0}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://www.naukri.com/code360/profile/${userName}}`} />
            </div>
            <div className="grid grid-cols-2 gap-2 flex-grow h-full p-2">
                <ProblemsBlock
                    problemsCount={[
                        { "problemsTag": "Easy", "setColor": "#28C244", "solvedProblems": getProblemCount("Easy"), "totalProblems": 0 },
                        { "problemsTag": "Moderate", "setColor": "#FFB700", "solvedProblems": getProblemCount("Moderate"), "totalProblems": 0 },
                        { "problemsTag": "Hard", "setColor": "#F63737", "solvedProblems": getProblemCount("Hard"), "totalProblems": 0 },
                        { "problemsTag": "Ninja", "setColor": "#5341A0", "solvedProblems": getProblemCount("Ninja"), "totalProblems": 0 }
                    ]}
                    className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    progressBodyClassName="bg-gray-100 dark:bg-gray-900"
                    progressBarClassName="bg-gray-200 dark:bg-gray-800"
                    title="Problems Solved"
                />

                <Contests
                    contestAttended={attendedContests}
                    contestRating={currentRating}
                    contestBadges={contestBadge}
                    contestData={contestDetails.user_rating_data || []}
                    className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    title="Contest Stats"
                />

                <Slider
                    cards={badges}
                    cardClasses="h-full w-[130px]"
                    containerClasses="rounded flex-grow rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    scrollTrigger="card"
                    defaultPointer={badgePointer}
                    setParentPointer={setBadgePointer}
                    title="Code360 Badges"
                />

                <StatsBlock
                    data={[
                        { title: "Total Problems", stats: `${userData.dsa_domain_data?.problem_count_data?.total_count || 0}` },
                        { title: "Level", stats: `${userData.user_level} (${userData.user_level_name})` },
                    ]}
                    containerClasses="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    titleClasses="text-blue-500"
                    statsClasses="text-black dark:text-white"
                />
            </div>
        </div>
    )
}

export default Code360