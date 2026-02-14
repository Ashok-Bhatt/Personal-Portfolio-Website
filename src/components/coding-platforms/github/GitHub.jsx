import React from 'react'
import ProfileOverview from '../ProfileOverview.jsx';
import { useGithubData } from '../../../hooks/useCodingProfiles.js';
import MessageBox from '../../MessageBox.jsx';
import SubmissionHeatmap from '../SubmissionHeatmap.jsx';
import { REFRESH_INTERVAL } from '../../../constants/index.js';
import { useEffect } from 'react';
import { getStreaksAndActiveDays } from '../../../utils/calendar.js';
import ContributionCard from '../../cards/ContributionCard.jsx';
import LanguageStatsCard from '../../cards/LanguageStatsCard.jsx';
import PlatformStatsCard from '../../cards/PlatformStatsCard.jsx';
import Slider from '../../Slider.jsx';
import GithubBadge from './GithubBadge.jsx';
import { GoStar, GoGitCommit, GoGitPullRequest, GoIssueOpened, GoPeople, GoPerson } from "react-icons/go";
import { FaFire } from "react-icons/fa";
import { useState } from 'react';

function GitHub() {
  const [badgePointer, setBadgePointer] = useState(1);

  const userName = "Ashok-Bhatt";
  const cachedData = JSON.parse(localStorage.getItem("githubData"));
  const { data: refreshedData, isLoading: loading, refetch: refetchData } = useGithubData(userName);

  // Persistence Logic
  useEffect(() => {
    const isMissing = !localStorage.getItem("githubData");
    const isStale = (Date.now() - Number(localStorage.getItem("githubLastRefresh"))) > REFRESH_INTERVAL.GITHUB;

    if (isMissing || isStale) {
      refetchData();
    }
  }, []);

  useEffect(() => {
    if (refreshedData) {
      localStorage.setItem("githubData", JSON.stringify(refreshedData));
      localStorage.setItem("githubLastRefresh", Date.now().toString());
    }
  }, [refreshedData]);

  const userData = refreshedData || cachedData;

  const { currentStreak, maxStreak, activeDays, totalContributions } = getStreaksAndActiveDays(userData.submissions)

  if (loading && !userData) return <MessageBox text="Loading..." textClassname="text-gray-300" />;
  if (!userData) return <MessageBox text="Data not available" textClassname="text-red-500" />;

  return (
    <div className='flex flex-col h-full lg:flex-row flex-grow rounded-lg bg-gray-800 overflow-hidden '>
      <ProfileOverview
        profileImage={userData.profile?.avatar_url}
        profileName={userData.profile?.name}
        profileUsername={userData.profile?.login}
        websiteLink={"https://github.com/Ashok-Bhatt"}
        stats={[
          { stat: "Followers", value: userData.profile?.followers || 0, icon: GoPeople },
          { stat: "Following", value: userData.profile?.following || 0, icon: GoPerson },
          { stat: "Active Days", value: activeDays || 0, icon: FaFire },
          { stat: "Repositories", value: userData.profile?.public_repos || 0, icon: GoStar }
        ]}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-grow min-w-0 h-full p-4 md:p-6 bg-gray-900 overflow-y-auto w-full">
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
            text: "Total Contributions",
          }}
          containerClasses="bg-gray-800 border border-gray-700 rounded-xl"
        />
        <Slider
          cards={
            (userData.badges || []).map((badge, index) => (
              <GithubBadge badge={badge} isMiddleBadge={index === badgePointer} key={index} />
            ))
          }
          cardClasses="h-full w-[30%] sm:w-[32%]"
          containerClasses="rounded-xl flex-grow bg-gray-800 border border-gray-700"
          scrollTrigger="card"
          defaultPointer={badgePointer}
          setParentPointer={setBadgePointer}
          showSideCardsOnMobile={true}
          title="Github Badges"
        />
        <PlatformStatsCard
          title="Stats"
          items={[
            { Icon: GoStar, name: "Stars", count: userData.totalStarsAndForks?.stars || 0, colorClass: "text-yellow-500" },
            { Icon: GoGitCommit, name: "Commits", count: userData.contributions?.commitsCount || 0, colorClass: "text-orange-600" },
            { Icon: GoGitPullRequest, name: "PRs", count: userData.contributions?.pullRequestsCount || 0, colorClass: "text-green-500" },
            { Icon: GoIssueOpened, name: "Issues", count: userData.contributions?.issuesCount || 0, colorClass: "text-red-500" },
          ]}
        />
        <LanguageStatsCard
          languageStats={userData.languageStats}
        />
        <SubmissionHeatmap
          calendar={userData.submissions}
          className="col-span-1 sm:col-span-2"
        />
      </div>
    </div>
  )
}

export default GitHub
