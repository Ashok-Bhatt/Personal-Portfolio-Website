import React, { useEffect, useState } from 'react';
import ProblemsCard from '../../cards/ProblemsCard';
import OpenWebsite from '../../OpenWebsite.jsx';
import ContributionCard from '../../cards/ContributionCard.jsx';
import MessageBox from '../../MessageBox.jsx';
import { useGfgData } from '../../../hooks/useCodingProfiles.js';
import SubmissionHeatmap from '../SubmissionHeatmap.jsx';
import { getStreaksAndActiveDays } from '../../../utils/calendar.js';
import { REFRESH_INTERVAL } from '../../../constants/index.js';

function GFG() {

    const userName = "ashokbhacjou";
    const fullName = "Ashok Bhatt";
    const cachedData = JSON.parse(localStorage.getItem("gfgData"));
    const { data: refreshedData, isLoading: loading, refetch: refetchData } = useGfgData(userName);

    // Persistence Logic
    useEffect(() => {
        const isMissing = !localStorage.getItem("gfgData");
        const isStale = (Date.now() - Number(localStorage.getItem("gfgLastRefresh"))) > REFRESH_INTERVAL.GFG;

        if (isMissing || isStale) {
            refetchData();
        }
    }, []);

    useEffect(() => {
        if (refreshedData) {
            localStorage.setItem("gfgData", JSON.stringify(refreshedData));
            localStorage.setItem("gfgLastRefresh", Date.now().toString());
        }
    }, [refreshedData]);

    const userData = refreshedData || cachedData;

    if (loading && !userData) return <MessageBox text="Loading..." textClassname="text-gray-600 dark:text-gray-300" />;
    if (!userData || !userData.profile) return <MessageBox text="Data not available" textClassname="text-red-500" />;

    const gfgUserData = userData.profile;
    const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData.submissions);

    const getSolvedCount = (difficulty) => {
        return gfgUserData.problemsSolved ? (gfgUserData.problemsSolved[difficulty] || 0) : 0;
    }

    return (
        <div className="flex flex-col lg:flex-row flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden ">
            <div className="flex flex-col w-full lg:w-1/4 items-center justify-center gap-y-5 p-6 bg-gray-300 dark:bg-gray-700/30">
                <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
                    <img src={gfgUserData.avatar || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="GFG Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center text-center">
                    <p className='text-black dark:text-white text-2xl md:text-3xl font-bold'>{fullName}</p>
                    <p className='text-yellow-600 font-semibold'>@{gfgUserData.username}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://www.geeksforgeeks.org/user/${userName}/`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
                <div className="col-span-1">
                    <ProblemsCard className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
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
                    <ContributionCard currentStreak={{
                        count: currentStreak,
                        text: "Current Streak",
                    }} maxStreak={{
                        count: maxStreak,
                        text: "Max Streak",
                    }} totalContributions={{
                        count: totalContributions,
                        text: "Total Submissions",
                    }} />
                </div>

                <SubmissionHeatmap calendar={userData.submissions} className="col-span-2" />
            </div>
        </div>
    )
}

export default GFG
