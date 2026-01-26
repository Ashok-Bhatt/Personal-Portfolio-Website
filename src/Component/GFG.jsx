import React, { useEffect, useState } from 'react'
import axios from "axios"
import ProblemsBlock from './ProblemsBlock';
import StatsBlock from './StatsBlock.jsx';
import Contests from './Contests';
import OpenWebsite from './OpenWebsite.jsx';

function GFG() {

    const userName = "ashokbhacjou";
    const fullName = "Ashok Bhatt";
    const instituteRankMedals = ["🥇", "🥈", "🥉"];
    const dataRefreshRateInSeconds = 6 * 60 * 60;
    const baseUrl = "https://scrape-spidey.onrender.com/api/v1/gfg/user/profile"

    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        if (localStorage.getItem("userGfgData")) {
            setUserData(JSON.parse(localStorage.getItem("userGfgData")));
            setLoading(false);
        }

        if (!localStorage.getItem("lastGfgRefresh") || ((Number(localStorage.getItem("lastGfgRefresh")) + dataRefreshRateInSeconds * 1000) < Date.now())) {
            if (!localStorage.getItem("userGfgData")) setLoading(true);

            try {
                axios
                    .get(`${baseUrl}?user=${userName}&apiKey=${import.meta.env.VITE_SCRAPE_SPIDEY_KEY}`)
                    .then((res) => {
                        const data = res.data;
                        setUserData(data);
                        localStorage.setItem("userGfgData", JSON.stringify(data));
                        localStorage.setItem("lastGfgRefresh", Date.now());
                        setLoading(false);
                    })
                    .catch((error) => {
                        console.error("GFG Fetch Error", error);
                        setLoading(false);
                    })
            } catch (error) {
                console.error(error);
                console.log(error.response.data.message);
                setLoading(false);
            }
        }
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!userData) return <div>Failed to load data</div>;

    const getSolvedCount = (difficulty) => {
        return userData.problemsSolved ? (userData.problemsSolved[difficulty] || 0) : 0;
    }

    return (
        <div className="flex flex-col lg:flex-row flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden ">
            <div className="flex flex-col w-full lg:w-1/4 items-center justify-center gap-y-5 p-6 bg-gray-300 dark:bg-gray-700/30">
                <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
                    <img src={userData.avatar || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="GFG Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center text-center">
                    <p className='text-black dark:text-white text-2xl md:text-3xl font-bold'>{fullName}</p>
                    <p className='text-yellow-600 font-semibold'>@{userData.username}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://www.geeksforgeeks.org/user/${userName}/`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
                <div className="col-span-1">
                    <ProblemsBlock className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                        problemsCount={[
                            { "problemsTag": "School", "setColor": "#C8FE5E", "solvedProblems": getSolvedCount("School") + getSolvedCount("Basic"), "totalProblems": 0 },
                            { "problemsTag": "Easy", "setColor": "#28C244", "solvedProblems": getSolvedCount("Easy"), "totalProblems": 0 },
                            { "problemsTag": "Medium", "setColor": "#FFB700", "solvedProblems": getSolvedCount("Medium"), "totalProblems": 0 },
                            { "problemsTag": "Hard", "setColor": "#F63737", "solvedProblems": getSolvedCount("Hard"), "totalProblems": 0 }
                        ]}
                        progressBodyClassName="bg-gray-100 dark:bg-gray-900"
                        progressBarClassName="bg-gray-200 dark:bg-gray-800"
                        title="Problems Solved"
                    />
                </div>

                <div className="col-span-1">
                    <StatsBlock
                        data={[
                            { title: "Current Streak", stats: `${userData.currentStreak || 0}` },
                            { title: "Max Streak", stats: `${userData.maxStreak || 0}` },
                        ]}
                        containerClasses="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                        blockClasses="w-full"
                        titleClasses="text-blue-500 font-bold"
                        statsClasses="text-black dark:text-white"
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <StatsBlock
                        data={[
                            { title: "Total Problems", stats: `${getSolvedCount("School") + getSolvedCount("Basic") + getSolvedCount("Easy") + getSolvedCount("Medium") + getSolvedCount("Hard")}` },
                            { title: "Coding Score", stats: `${userData.codingScore || 0}` },
                            { title: "Institution Rank", stats: `${(userData.instituteRank >= 1 && userData.instituteRank <= 3) ? instituteRankMedals[userData.instituteRank - 1] : ""} ${userData.instituteRank || "NA"}` },
                            { title: "Articles Published", stats: `${userData.articlesPublished || 0}` },
                        ]}
                        containerClasses="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                        blockClasses="min-w-[120px] sm:min-w-[150px]"
                        titleClasses="text-blue-500 font-bold text-sm md:text-lg"
                        statsClasses="text-black dark:text-white text-xl md:text-3xl"
                    />
                </div>
            </div>
        </div>
    )
}

export default GFG
