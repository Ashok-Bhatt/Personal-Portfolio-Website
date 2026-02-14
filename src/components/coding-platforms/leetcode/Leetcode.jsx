import React, { useState, useEffect } from 'react'
import { FaTrophy, FaStar, FaCheckCircle, FaFire } from "react-icons/fa";
import ProfileOverview from '../ProfileOverview.jsx';
import Contests from '../Contests';
import ProblemsCard from '../../cards/ProblemsCard';
import LeetcodeBadge from './LeetcodeBadge';
import Slider from '../../Slider';
import ContributionCard from '../../cards/ContributionCard';
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
        if (loading) return <MessageBox text="Loading..." textClassname="text-gray-300" />;
        else if (!refreshedData) return <MessageBox text="Data not available" textClassname="text-red-500" />;
    }

    const userData = refreshedData || cachedData;

    const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData.submissions);

    return (
        <div className="flex flex-col h-full lg:flex-row flex-grow rounded-lg bg-gray-800 overflow-hidden">
            <ProfileOverview
                profileImage={userData.profile?.profile?.userAvatar}
                profileName={userData.profile?.profile?.realName}
                profileUsername={userData.profile?.username}
                websiteLink={`https://leetcode.com/u/${userData.profile?.username}/`}
                stats={[
                    { stat: "Global Rank", value: userData.profile?.profile?.ranking || "N/A", icon: FaTrophy },
                    { stat: "Reputation", value: userData.profile?.profile?.reputation || "0", icon: FaStar },
                    { stat: "Active Days", value: activeDays || 0, icon: FaFire },
                    { stat: "Solutions", value: userData.profile?.profile?.solutionCount || "0", icon: FaCheckCircle },
                ]}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow min-w-0 h-full p-4 md:p-6 bg-gray-900 overflow-y-auto w-full">
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
                    className="bg-gray-800 border border-gray-700 rounded-xl"
                    progressBodyClassName="bg-gray-900"
                    progressBarClassName="bg-gray-800"
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
                    className="bg-gray-800 border border-gray-700 rounded-xl"
                    title="Contest Stats"
                />
                <div className="">
                    <Slider
                        cards={
                            (userData.badges?.badges || []).map((badge, index) => (
                                <LeetcodeBadge badge={badge} isMiddleBadge={index === badgePointer} key={badge.id} />
                            ))
                        }
                        cardClasses="h-full w-[30%] sm:w-[32%]"
                        containerClasses="rounded-xl flex-grow bg-gray-800 border border-gray-700"
                        scrollTrigger="card"
                        defaultPointer={badgePointer}
                        setParentPointer={setBadgePointer}
                        showSideCardsOnMobile={true}
                        title="Leetcode Badges"
                    />
                </div>
                <div className="">
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
                    className="sm:col-span-2"
                />
            </div>
        </div>
    )
}

export default Leetcode
