import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Contests from './Contests';
import ProblemsBlock from './ProblemsBlock';
import LeetcodeBadge from './LeetcodeBadge';
import Slider from './Slider';
import StatsBlock from './StatsBlock';
import OpenWebsite from './OpenWebsite';

function Leetcode() {

    const userName = "ashokbhatt2048";
    const apiUrl = "https://scrape-spidey.onrender.com/api/v1/leetcode";
    const scrapeSpideyApiKey = import.meta.env.VITE_SCRAPE_SPIDEY_KEY;
    const dataRefreshRateInSeconds = 3 * 60 * 60;
    const [loading, setLoading] = useState(false);
    const [badgePointer, setBadgePointer] = useState(1);

    const [userData, setUserData] = useState(null);

    const fetchUserLeetcodeDetails = async () => {
        try {
            const [profileResponse, contestResponse, badgesResponse, questionProgressResponse, sessionProgressResponse] = await Promise.all([
                axios.get(`${apiUrl}/user/profile?user=${userName}&apiKey=${scrapeSpideyApiKey}`),
                axios.get(`${apiUrl}/user/contest-ranking?user=${userName}&apiKey=${scrapeSpideyApiKey}`),
                axios.get(`${apiUrl}/user/badges?user=${userName}&apiKey=${scrapeSpideyApiKey}`),
                axios.get(`${apiUrl}/user/question-progress?user=${userName}&apiKey=${scrapeSpideyApiKey}`),
                axios.get(`${apiUrl}/user/session-progress?user=${userName}&apiKey=${scrapeSpideyApiKey}`),
            ]);

            // Store each field separately in userData
            const newData = {
                profile: profileResponse.data.matchedUser,
                contest: {
                    userContestRanking: contestResponse.data.userContestRanking,
                    userContestRankingHistory: contestResponse.data.userContestRankingHistory
                },
                badges: {
                    badges: badgesResponse.data.matchedUser.badges,
                    upcomingBadges: badgesResponse.data.matchedUser.upcomingBadges
                },
                questionProgress: questionProgressResponse.data.userProfileUserQuestionProgressV2,
                sessionProgress: {
                    allQuestionsCount: sessionProgressResponse.data.allQuestionsCount,
                    submitStats: sessionProgressResponse.data.matchedUser.submitStats
                },
                default: false,
            };

            setUserData(newData);
            localStorage.setItem("lastLeetcodeRefresh", Date.now());
        } catch (error) {
            console.log("Error Occurred while fetching user data!", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        if (localStorage.getItem("userLeetcodeData")) {
            setUserData(JSON.parse(localStorage.getItem("userLeetcodeData")));
            setLoading(false);
        }

        if (!localStorage.getItem("lastLeetcodeRefresh") || ((Number(localStorage.getItem("lastLeetcodeRefresh")) + dataRefreshRateInSeconds * 1000) < Date.now())) {
            if (!localStorage.getItem("userLeetcodeData")) setLoading(true);
            fetchUserLeetcodeDetails();
        }

    }, []);

    useEffect(() => {
        if (userData && userData?.default === false) {
            localStorage.setItem("userLeetcodeData", JSON.stringify(userData));
        }
    }, [userData]);

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
                <ProblemsBlock
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
                        cardClasses="h-full w-[130px]"
                        containerClasses="rounded-xl flex-grow bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                        scrollTrigger="card"
                        defaultPointer={1}
                        setParentPointer={setBadgePointer}
                        title="Leetcode Badges"
                    />
                </div>
                <div className="md:col-span-2 lg:col-span-1">
                    <StatsBlock
                        data={[
                            {
                                title: "Total Problems",
                                stats: `${userData.sessionProgress?.submitStats?.totalSubmissionNum?.find(q => q.difficulty === "All")?.count || 0}`
                            },
                            {
                                title: "Total Submissions",
                                stats: `${userData.sessionProgress?.submitStats?.acSubmissionNum?.find(q => q.difficulty === "All")?.count || 0}`
                            }
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

export default Leetcode
