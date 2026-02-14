import React, { useEffect } from 'react';
import { FaCode, FaUniversity, FaCalendarCheck, FaFire } from "react-icons/fa";
import ProfileOverview from '../ProfileOverview';
import ProblemsCard from '../../cards/ProblemsCard';
import ContributionCard from '../../cards/ContributionCard.jsx';
import MessageBox from '../../MessageBox.jsx';
import { useGfgData } from '../../../hooks/useCodingProfiles.js';
import SubmissionHeatmap from '../SubmissionHeatmap.jsx';
import { getStreaksAndActiveDays } from '../../../utils/calendar.js';
import { REFRESH_INTERVAL } from '../../../constants/index.js';

function GFG() {

    const userName = "ashokbhacjou";
    const fullName = "Ashok Bhatt";
    const cachedData = React.useMemo(() => JSON.parse(localStorage.getItem("gfgData")), []);
    const { data: refreshedData, isLoading: loading, refetch: refetchData } = useGfgData(userName);

    const getSolvedCount = (difficulty) => {
        return userData?.profile?.problemsSolved?.[difficulty] || 0;
    }

    // Persistence Logic
    useEffect(() => {
        const isMissing = !localStorage.getItem("gfgData");
        const isStale = (Date.now() - Number(localStorage.getItem("gfgLastRefresh"))) > REFRESH_INTERVAL.GFG;

        if (isMissing || isStale) {
            refetchData();
        }
    }, []);

    // Update cached data
    useEffect(() => {
        if (refreshedData) {
            localStorage.setItem("gfgData", JSON.stringify(refreshedData));
            localStorage.setItem("gfgLastRefresh", Date.now().toString());
        }
    }, [refreshedData]);

    const userData = refreshedData || cachedData;
    const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData?.submissions);

    if (loading && !userData) return <MessageBox text="Loading..." textClassname="text-gray-300" />;
    if (!userData || !userData.profile) return <MessageBox text="Data not available" textClassname="text-red-500" />;

    return (
        <div className="flex flex-col h-full lg:flex-row flex-grow rounded-lg bg-gray-800 overflow-hidden">
            <ProfileOverview
                profileImage={userData?.profile.avatar}
                profileName={fullName}
                profileUsername={userData?.profile.username}
                websiteLink={`https://www.geeksforgeeks.org/user/${userName}/`}
                stats={[
                    { stat: "Coding Score", value: userData?.profile.codingScore?.toLocaleString() || "0", icon: FaCode },
                    { stat: "Institute Rank", value: userData?.profile.instituteRank?.toLocaleString() || "NA", icon: FaUniversity },
                    { stat: "POTD Solved", value: userData?.profile.potdsSolved?.toLocaleString() || "0", icon: FaCalendarCheck },
                    { stat: "Active Days", value: activeDays || "0", icon: FaFire }
                ]}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow min-w-0 h-full p-4 md:p-6 bg-gray-900 overflow-y-auto w-full">
                <ProblemsCard className="bg-gray-800 border border-gray-700 rounded-xl"
                    problemsCount={[
                        { "problemsTag": "School", "setColor": "#C8FE5E", "solvedProblems": getSolvedCount("School") + getSolvedCount("Basic"), "totalProblems": 0 },
                        { "problemsTag": "Easy", "setColor": "#28C244", "solvedProblems": getSolvedCount("Easy"), "totalProblems": 0 },
                        { "problemsTag": "Medium", "setColor": "#FFB700", "solvedProblems": getSolvedCount("Medium"), "totalProblems": 0 },
                        { "problemsTag": "Hard", "setColor": "#F63737", "solvedProblems": getSolvedCount("Hard"), "totalProblems": 0 }
                    ]}
                    progressBodyClassName="bg-gray-900"
                    progressBarClassName="bg-gray-800"
                    title="Problems Solved"
                />

                <ContributionCard
                    currentStreak={{
                        count: currentStreak,
                        text: "Current Streak",
                    }}
                    maxStreak={{
                        count: maxStreak,
                        text: "Max Streak",
                    }}
                    totalContributions={{
                        count: totalContributions,
                        text: "Total Submissions",
                    }}
                    className="bg-gray-800 border border-gray-700 rounded-xl"
                />

                <SubmissionHeatmap calendar={userData.submissions} className="sm:col-span-2" />
            </div>
        </div>
    )
}

export default GFG
