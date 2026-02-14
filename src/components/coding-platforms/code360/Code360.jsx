import React, { useState, useEffect } from 'react'
import { FaFire, FaTrophy, FaEye, FaAward } from "react-icons/fa";
import ProfileOverview from '../ProfileOverview';
import Contests from '../Contests';
import ContributionCard from '../../cards/ContributionCard';
import ProblemsCard from '../../cards/ProblemsCard';
import Code360Badge from './Code360Badge';
import Slider from '../../Slider';
import MessageBox from '../../MessageBox.jsx';
import { useCode360Data } from '../../../hooks/useCodingProfiles.js';
import SubmissionHeatmap from '../SubmissionHeatmap.jsx';
import { getStreaksAndActiveDays } from '../../../utils/calendar.js';
import { REFRESH_INTERVAL } from '../../../constants/index.js';

function Code360() {
    const userName = "AshokBhatt";
    const cachedData = React.useMemo(() => JSON.parse(localStorage.getItem("code360Data")), []);
    const { data: refreshedData, isLoading: loading, refetch: refetchData } = useCode360Data(userName);
    const [badgePointer, setBadgePointer] = useState(1);
    const [badges, setBadges] = useState([]);

    const getCode360Badges = (badgesData) => {
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

    const getProblemCount = (level) => {
        return userData?.profile?.dsa_domain_data?.problem_count_data?.difficulty_data?.find(d => d.level === level)?.count || 0;
    };

    // Persistence Logic
    useEffect(() => {
        const isMissing = !localStorage.getItem("code360Data");
        const isStale = (Date.now() - Number(localStorage.getItem("code360LastRefresh"))) > REFRESH_INTERVAL.CODE360;

        if (isMissing || isStale) {
            refetchData();
        }
    }, []);

    // Update cached data
    useEffect(() => {
        if (refreshedData) {
            localStorage.setItem("code360Data", JSON.stringify(refreshedData));
            localStorage.setItem("code360LastRefresh", Date.now().toString());
        }
    }, [refreshedData]);

    const userData = refreshedData || cachedData;
    const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData?.submissions);

    useEffect(() => {
        if (userData?.profile?.dsa_domain_data?.badges_hash) getCode360Badges(userData?.profile?.dsa_domain_data?.badges_hash);
    }, [badgePointer, userData]);

    if (loading && !userData) return <MessageBox text="Loading..." textClassname="text-gray-300" />;
    if (!userData || !userData.profile) return <MessageBox text="Data not available" textClassname="text-red-500" />;

    return (
        <div className="flex flex-col h-full lg:flex-row flex-grow rounded-lg bg-gray-800 overflow-hidden">
            <ProfileOverview
                profileImage={"/Images/my_image.jpeg"}
                profileName={userData?.profile?.profile?.name}
                profileUsername={userData?.profile?.name}
                websiteLink={`https://www.naukri.com/code360/profile/${userName}`}
                stats={[
                    { stat: "Profile Views", value: userData?.profile?.profile_view_count || 0, icon: FaEye },
                    { stat: "Active Days", value: activeDays || 0, icon: FaFire },
                    { stat: "User Level", value: `${userData?.profile?.user_level_name} (L${userData?.profile?.user_level})` || 0, icon: FaTrophy },
                    { stat: "Rank Points", value: userData?.profile?.user_exp || 0, icon: FaAward },
                ]}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow min-w-0 h-full p-4 md:p-6 bg-gray-900 overflow-y-auto w-full">
                <ProblemsCard
                    problemsCount={[
                        { "problemsTag": "Easy", "setColor": "#28C244", "solvedProblems": getProblemCount("Easy"), "totalProblems": 0 },
                        { "problemsTag": "Moderate", "setColor": "#FFB700", "solvedProblems": getProblemCount("Moderate"), "totalProblems": 0 },
                        { "problemsTag": "Hard", "setColor": "#F63737", "solvedProblems": getProblemCount("Hard"), "totalProblems": 0 },
                        { "problemsTag": "Ninja", "setColor": "#5341A0", "solvedProblems": getProblemCount("Ninja"), "totalProblems": 0 }
                    ]}
                    className="bg-gray-800 border border-gray-700 rounded-xl"
                    progressBodyClassName="bg-gray-900"
                    progressBarClassName="bg-gray-800"
                    title="Problems Solved"
                />

                <Contests
                    contestAttended={userData?.profile?.contests?.user_rating_data?.length || 0}
                    contestRating={Math.round(userData?.profile?.contests?.current_user_rating) || 0}
                    contestBadges={userData?.profile?.contests?.rating_group?.icon ? [userData?.profile?.contests?.rating_group?.icon] : []}
                    contestData={userData?.profile?.contests?.user_rating_data || []}
                    className="bg-gray-800 border border-gray-700 rounded-xl"
                    title="Contest Stats"
                />

                <Slider
                    cards={badges}
                    cardClasses="h-full w-[30%] sm:w-[32%]"
                    containerClasses="rounded-xl flex-grow bg-gray-800 border border-gray-700"
                    scrollTrigger="card"
                    defaultPointer={badgePointer}
                    setParentPointer={setBadgePointer}
                    showSideCardsOnMobile={true}
                    title="Code360 Badges"
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
                <SubmissionHeatmap
                    calendar={userData.submissions}
                    className="sm:col-span-2"
                />
            </div>
        </div>
    )
}

export default Code360
