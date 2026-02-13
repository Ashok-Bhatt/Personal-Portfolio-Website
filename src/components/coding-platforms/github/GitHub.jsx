import React from 'react'
import OpenWebsite from '../../OpenWebsite';
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
import { GoStar, GoGitCommit, GoGitPullRequest, GoIssueOpened } from "react-icons/go";
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
    <div className='flex flex-col lg:flex-row flex-grow rounded-lg bg-gray-800 overflow-hidden '>
      <div className="flex flex-col w-full lg:w-1/4 h-full items-center justify-center gap-y-5 p-6 bg-gray-700/30">
        <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
          <img src={userData.profile?.avatar_url || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="Github Profile Image" />
        </div>
        <div className="flex flex-col w-full items-center text-center">
          <p className='text-white text-2xl md:text-3xl font-bold'>{userData.profile?.name}</p>
          <p className='text-yellow-600 font-semibold'>@{userData.profile?.login}</p>
        </div>
        <div className="flex w-full justify-around bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="flex flex-col items-center">
            <p className='text-green-600 text-lg font-bold'>Followers</p>
            <p className='text-white font-mono'>{userData.profile?.followers}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className='text-green-600 text-lg font-bold'>Following</p>
            <p className='text-white font-mono'>{userData.profile?.following}</p>
          </div>
        </div>
        <OpenWebsite text={"Open Website"} link={"https://github.com/Ashok-Bhatt"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow h-full p-4 md:p-6 bg-gray-900 overflow-y-auto">
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
          cardClasses="h-full w-24 sm:w-28 md:w-[130px]"
          containerClasses="rounded-xl flex-grow bg-gray-800 border border-gray-700"
          scrollTrigger="card"
          defaultPointer={badgePointer}
          setParentPointer={setBadgePointer}
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
          className="col-span-1 md:col-span-1 sm:col-span-2"
        />
        <LanguageStatsCard
          languageStats={userData.languageStats}
          className="col-span-1 md:col-span-1 sm:col-span-2"
        />
        <SubmissionHeatmap
          calendar={userData.submissions}
          className="col-span-2"
        />
      </div>
    </div>
  )
}

export default GitHub
