import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const SCRAPE_SPIDEY_URL_V1 = "https://scrape-spidey.onrender.com/api/v1";
const SCRAPE_SPIDEY_URL_V2 = "https://scrape-spidey.onrender.com/api/v2";
const SCRAPE_SPIDEY_KEY = import.meta.env.VITE_SCRAPE_SPIDEY_KEY;
const CODING_PROFILES_START_YEAR = 2022;

// Hook for GFG data
export const useGfgData = (userName) => {
    return useQuery({
        queryKey: ['gfgData', userName],
        queryFn: async () => {
            const currentYear = new Date().getFullYear();
            const years = Array.from({ length: currentYear - CODING_PROFILES_START_YEAR + 1 }, (_, i) => CODING_PROFILES_START_YEAR + i);

            const [profile, ...submissions] = await Promise.all([
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/gfg/user/profile?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                ...years.map(year => axios.get(`${SCRAPE_SPIDEY_URL_V2}/gfg/user/submissions?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}&year=${year}`))
            ]);

            const submissionData = {};
            years.forEach((year, index) => {
                submissionData[year] = submissions[index].data;
            });

            return {
                profile: profile.data,
                submissions: submissionData
            };
        },
        staleTime: 6 * 60 * 60 * 1000, // 6 hours
    });
};

// Hook for LeetCode data
export const useLeetcodeData = (userName) => {
    return useQuery({
        queryKey: ['leetcodeData', userName],
        queryFn: async () => {
            const currentYear = new Date().getFullYear();
            const years = Array.from({ length: currentYear - CODING_PROFILES_START_YEAR + 1 }, (_, i) => CODING_PROFILES_START_YEAR + i);

            const [profile, contest, badges, questionProgress, sessionProgress, ...submissions] = await Promise.all([
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/profile?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/contest-ranking?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/badges?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/question-progress?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/session-progress?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`),
                ...years.map(year => axios.get(`${SCRAPE_SPIDEY_URL_V1}/leetcode/user/calendar?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}&year=${year}`))
            ]);

            const submissionData = {};
            years.forEach((year, index) => {
                submissionData[year] = submissions[index].data?.matchedUser?.userCalendar?.submissionCalendar;
            });

            return {
                profile: profile.data.matchedUser,
                contest: {
                    userContestRanking: contest.data.userContestRanking,
                    userContestRankingHistory: contest.data.userContestRankingHistory
                },
                badges: {
                    badges: badges.data.matchedUser.badges,
                    upcomingBadges: badges.data.matchedUser.upcomingBadges
                },
                questionProgress: questionProgress.data.userProfileUserQuestionProgressV2,
                sessionProgress: {
                    allQuestionsCount: sessionProgress.data.allQuestionsCount,
                    submitStats: sessionProgress.data.matchedUser.submitStats
                },
                submissions: submissionData,
                default: false,
            };
        },
        staleTime: 3 * 60 * 60 * 1000, // 3 hours
    });
};

// Hook for Code360 data
export const useCode360Data = (userName) => {
    return useQuery({
        queryKey: ['code360Data', userName],
        queryFn: async () => {
            const currentYear = new Date().getFullYear();
            const years = Array.from({ length: currentYear - CODING_PROFILES_START_YEAR + 1 }, (_, i) => CODING_PROFILES_START_YEAR + i);

            const [profile, ...submissions] = await Promise.all([
                axios.get(`${SCRAPE_SPIDEY_URL_V1}/code360/user/profile?user=${userName}&includeContests=true&apiKey=${SCRAPE_SPIDEY_KEY}`),
                ...years.map(year => axios.get(`${SCRAPE_SPIDEY_URL_V1}/code360/user/submission?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}&year=${year}`))
            ]);

            const submissionData = {};
            years.forEach((year, index) => {
                submissionData[year] = submissions[index].data;
            });

            return {
                profile: profile.data,
                submissions: submissionData
            };
        },
        staleTime: 6 * 60 * 60 * 1000, // 6 hours
    });
};

// Hook for GitHub data
export const useGithubData = (userName) => {
    return useQuery({
        queryKey: ['githubData', userName],
        queryFn: async () => {
            const res = await axios.get(`https://api.github.com/users/${userName}`);
            const data = res.data;
            return {
                ["Full Name"]: data.name,
                ["Profile Image"]: data.avatar_url,
                ["Public Repos"]: data.public_repos,
                ["Followers"]: data.followers,
                ["Followings"]: data.following,
                ["Profile Name"]: userName
            };
        },
        staleTime: 24 * 60 * 60 * 1000, // 24 hours
    });
};
