import React, { useState, useEffect } from 'react'
import Contests from '../Contests';
import ProblemsCard from '../../cards/ProblemsCard';
import LeetcodeBadge from './LeetcodeBadge';
import Slider from '../../Slider';
import ContributionCard from '../../cards/ContributionCard';
import OpenWebsite from '../../OpenWebsite';
import { useLeetcodeData } from '../../../hooks/useCodingProfiles.js';
import MessageBox from '../../MessageBox.jsx';
import SubmissionHeatmap from '../SubmissionHeatmap.jsx';
import { getStreaksAndActiveDays } from '../../../utils/calendar.js';
import { REFRESH_INTERVAL } from '../../../constants/index.js';

function Leetcode() {

    const userName = "ashokbhatt2048";
    const cachedData = JSON.parse(localStorage.getItem("leetcodeData"));
    const { data: refreshedData, isLoading: loading, refetch: refetchData } = useLeetcodeData(userName);
    const [badgePointer, setBadgePointer] = useState(1);

    // Issue 1 Fix: Move refetch into useEffect
    useEffect(() => {
        const isMissing = !localStorage.getItem("leetcodeData");
        const isStale = (Date.now() - Number(localStorage.getItem("leetcodeLastRefresh"))) > REFRESH_INTERVAL.LEETCODE;

        if (isMissing || isStale) {
            refetchData();
        }
    }, []);

    // Issue 3 Fix: Save fresh data to localStorage
    useEffect(() => {
        if (refreshedData) {
            localStorage.setItem("leetcodeData", JSON.stringify(refreshedData));
            localStorage.setItem("leetcodeLastRefresh", Date.now().toString());
        }
    }, [refreshedData]);

    if (!cachedData) {
        if (loading) return <MessageBox text="Loading..." textClassname="text-gray-600 dark:text-gray-300" />;
        else if (!refreshedData) return <MessageBox text="Data not available" textClassname="text-red-500" />;
    }

    const userData = refreshedData || cachedData;

    const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData.submissions);

    return (
        <div className="flex flex-col lg:flex-row h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col w-full lg:w-1/4 h-full items-center justify-center gap-y-5 p-6 bg-gray-300 dark:bg-gray-700/30">
                <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
                    <img src={userData.profile?.profile?.userAvatar || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="Leetcode Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center text-center">
                    <p className='text-black dark:text-white text-2xl md:text-3xl font-bold'>{userData.profile?.profile?.realName}</p>
                    <p className='text-yellow-600 font-semibold'>@{userData.profile?.username}</p>
                </div>
                <div className="flex flex-col min-w-[200px] w-max rounded p-2 items-center bg-white/5 border border-white/5">
                    <p className='text-green-600 text-xl font-bold'>Global Rank</p>
                    <p className='text-lg font-mono'>{userData.profile?.profile?.ranking?.toLocaleString()} / 5M</p>
                </div>
                <OpenWebsite text={"Open Website"} link={`https://leetcode.com/u/${userData.profile?.username}/`} />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow h-full p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
                <ProblemsCard
                    problemsCount={[
                        {
                            problemsTag: "Easy",
                            setColor: "#28C244",
                            solvedProblems: userData.questionProgress?.numAcceptedQuestions?.find(q => q.difficulty === "EASY")?.count || 0,
                            totalProblems: userData.sessionProgress?.allQuestionsCount?.find(q => q.difficulty === "Easy")?.count || 0
                        },
                        {
                            problemsTag: "Medium",
                            setColor: "#FFB700",
                            solvedProblems: userData.questionProgress?.numAcceptedQuestions?.find(q => q.difficulty === "MEDIUM")?.count || 0,
                            totalProblems: userData.sessionProgress?.allQuestionsCount?.find(q => q.difficulty === "Medium")?.count || 0
                        },
                        {
                            problemsTag: "Hard",
                            setColor: "#F63737",
                            solvedProblems: userData.questionProgress?.numAcceptedQuestions?.find(q => q.difficulty === "HARD")?.count || 0,
                            totalProblems: userData.sessionProgress?.allQuestionsCount?.find(q => q.difficulty === "Hard")?.count || 0
                        }
                    ]}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                    progressBodyClassName="bg-gray-100 dark:bg-gray-900"
                    progressBarClassName="bg-gray-200 dark:bg-gray-800"
                    title="Problems Solved"
                />
                <Contests
                    contestAttended={userData.contest?.userContestRanking?.attendedContestsCount}
                    contestRating={userData.contest?.userContestRanking?.rating}
                    contestRanking={userData.contest?.userContestRanking?.globalRanking}
                    totalParticipants={userData.contest?.userContestRanking?.totalParticipants}
                    contestTopPercentage={userData.contest?.userContestRanking?.topPercentage}
                    contestBadges={userData.contest?.userContestRanking?.badge}
                    contestData={userData.contest?.userContestRankingHistory?.filter((contest) => contest["attended"] == true)}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl"
                    title="Contest Stats"
                />
                <div className="md:col-span-2 lg:col-span-1">
                    <Slider
                        cards={
                            (userData.badges?.badges || []).map((badge, index) => (
                                <LeetcodeBadge badge={badge} isMiddleBadge={index === badgePointer} key={badge.id} />
                            ))
                        }
                        cardClasses="h-full w-24 sm:w-28 md:w-[130px]"
                        containerClasses="rounded-xl flex-grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        scrollTrigger="card"
                        defaultPointer={badgePointer}
                        setParentPointer={setBadgePointer}
                        title="Leetcode Badges"
                    />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
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
                <SubmissionHeatmap
                    calendar={userData.submissions}
                    className="md:col-span-2"
                />
            </div>
        </div>
    )
}

export default Leetcode
