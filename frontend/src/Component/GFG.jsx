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
        <div className="flex flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden ">
            <div className="flex flex-col w-1/4 h-full items-center justify-center gap-y-5 p-2">
                <div className='w-50 h-50 rounded-full overflow-hidden border-4 border-blue-400'>
                    <img src={userData.avatar || "/Images/coder_logo.png"} className='h-full w-full' alt="GFG Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center">
                    <p className='text-black dark:text-white text-3xl'>{fullName}</p>
                    <p className='text-yellow-600'>{userData.username}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://www.geeksforgeeks.org/user/${userName}/`} />
            </div>
            <div className="grid grid-cols-2 gap-2 flex-grow h-full p-2">
                <ProblemsBlock className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
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

                <StatsBlock
                    data={[
                        { title: "Current Streak", stats: `${userData.currentStreak || 0}` },
                        { title: "Max Streak", stats: `${userData.maxStreak || 0}` },
                    ]}
                    containerClasses="flex-col bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    blockClasses="w-full h-max"
                    titleClasses="text-blue-500"
                    statsClasses="text-black dark:text-white"
                />

                <StatsBlock
                    data={[
                        { title: "Total Problems", stats: `${getSolvedCount("School") + getSolvedCount("Basic") + getSolvedCount("Easy") + getSolvedCount("Medium") + getSolvedCount("Hard")}` },
                        { title: "Coding Score", stats: `${userData.codingScore || 0}` },
                        { title: "Institution Rank", stats: `${(userData.instituteRank >= 1 && userData.instituteRank <= 3) ? instituteRankMedals[userData.instituteRank - 1] : ""} ${userData.instituteRank || "NA"}` },
                        { title: "Articles Published", stats: `${userData.articlesPublished || 0}` },
                    ]}
                    containerClasses="col-span-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    titleClasses="text-blue-500"
                    statsClasses="text-black dark:text-white"
                />
            </div>
        </div>
    )
}

export default GFG
