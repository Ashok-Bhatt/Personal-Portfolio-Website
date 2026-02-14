import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { GITHUB_API_QUERIES } from '../constants/github.js';
import { getPolishedGithubHeatmap } from '../utils/calendar.js';
import { githubGraphQlQuery, githubRestApiQuery } from '../utils/githubApi.js';
import { ENV } from '../config/env.js';
import { REFRESH_INTERVAL } from '../constants/index.js';

const SCRAPE_SPIDEY_URL_V1 = "https://scrape-spidey.onrender.com/api/v1";
const SCRAPE_SPIDEY_URL_V2 = "https://scrape-spidey.onrender.com/api/v2";
const SCRAPE_SPIDEY_KEY = ENV.SCRAPE_SPIDEY_KEY;
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
        staleTime: REFRESH_INTERVAL.GFG
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
        staleTime: REFRESH_INTERVAL.LEETCODE
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
        staleTime: REFRESH_INTERVAL.CODE360
    });
};

// Hook for GitHub data
export const useGithubData = (userName) => {
    return useQuery({
        queryKey: ['githubData', userName],
        queryFn: async () => {

            // 1. Fetch Basic Profile
            const profile = await githubRestApiQuery(`users/${userName}`);
            if (!profile) throw new Error("GitHub profile not found");

            // 2. Fetch Badges from ScrapeSpidey
            const badgesRes = await axios.get(`${SCRAPE_SPIDEY_URL_V1}/github/user/badges?user=${userName}&apiKey=${SCRAPE_SPIDEY_KEY}`).catch(() => ({ data: [] }));
            const badges = badgesRes.data;

            // 3. Fetch All Repos (Handle Pagination)
            let repos = [];
            let page = 1;
            while (true) {
                const reposData = await githubRestApiQuery(`users/${userName}/repos?per_page=100&page=${page}`);
                if (!reposData || reposData.length === 0) break;
                repos = [...repos, ...reposData];
                if (reposData.length < 100) break;
                page++;
            }

            // 4. Calculate Stars and Forks
            const totalStarsAndForks = repos.reduce((acc, repo) => ({
                stars: acc.stars + repo.stargazers_count,
                forks: acc.forks + repo.forks_count
            }), { stars: 0, forks: 0 });

            // 5. Language Stats
            const languageStats = {};
            const repoLanguages = await Promise.all(
                repos.map(async (repo) => {
                    const endpoint = repo.languages_url.replace("https://api.github.com/", "");
                    return await githubRestApiQuery(endpoint).then(data => data || {}).catch(() => ({}));
                })
            );

            repoLanguages.forEach(stats => {
                Object.entries(stats).forEach(([lang, bytes]) => {
                    languageStats[lang] = (languageStats[lang] || 0) + bytes;
                });
            });

            // 6. Multi-year Contributions and Submissions (GraphQL)
            const startYear = new Date(profile.created_at).getFullYear();
            const currentYear = new Date().getFullYear();
            const years = Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);

            const contributions = { pullRequestsCount: 0, issuesCount: 0, commitsCount: 0, pullRequestReviewsCount: 0, repositoriesCount: 0, restrictedContributionsCount: 0 };
            const submissions = {};

            const contributionPromises = years.map(async (year) => {
                const from = `${year}-01-01T00:00:00Z`;
                const to = `${year}-12-31T23:59:59Z`;

                const [countData, submissionData] = await Promise.all([
                    githubGraphQlQuery(GITHUB_API_QUERIES.GITHUB_CONTRIBUTION_COUNT_QUERY, { username: userName, from, to }),
                    githubGraphQlQuery(GITHUB_API_QUERIES.GITHUB_YEARLY_CONTRIBUTION_CALENDAR_QUERY, { username: userName, from, to })
                ]);

                if (countData?.data?.user?.contributionsCollection) {
                    const collection = countData.data.user.contributionsCollection;
                    contributions.pullRequestsCount += collection.pullRequestContributions.totalCount;
                    contributions.issuesCount += collection.issueContributions.totalCount;
                    contributions.commitsCount += collection.totalCommitContributions;
                    contributions.pullRequestReviewsCount += collection.pullRequestReviewContributions.totalCount;
                    contributions.repositoriesCount += collection.repositoryContributions.totalCount;
                    contributions.restrictedContributionsCount += collection.restrictedContributionsCount;
                }

                if (submissionData?.data?.user?.contributionsCollection?.contributionCalendar) {
                    submissions[year] = getPolishedGithubHeatmap(submissionData.data.user.contributionsCollection.contributionCalendar.weeks);
                }
            });

            await Promise.all(contributionPromises);

            return {
                profile,
                badges,
                repos,
                languageStats,
                contributions,
                submissions,
                totalStarsAndForks
            };
        },
        staleTime: REFRESH_INTERVAL.GITHUB,
    });
};
