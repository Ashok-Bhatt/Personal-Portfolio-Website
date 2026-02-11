import React from 'react'
import OpenWebsite from './OpenWebsite';
import { useGithubData } from '../Hooks/useCodingProfiles.js';
import MessageBox from './MessageBox.jsx';

function GitHub() {

  const userName = "Ashok-Bhatt";
  const { data: userData, isLoading: loading } = useGithubData(userName);

  if (loading) return <MessageBox text="Loading..." textClassname="text-gray-600 dark:text-gray-300" />;
  if (!userData) return <MessageBox text="Data not available" textClassname="text-red-500" />;

  return (
    <div className='flex flex-col lg:flex-row flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden '>
      <div className="flex flex-col w-full lg:w-1/4 h-full items-center justify-center gap-y-5 p-6 bg-gray-300 dark:bg-gray-700/30">
        <div className='w-40 h-40 md:w-50 md:h-50 rounded-full overflow-hidden border-4 border-blue-400 shadow-md'>
          <img src={userData["Profile Image"] || "/Images/coder_logo.png"} className='h-full w-full object-cover' alt="Github Profile Image" />
        </div>
        <div className="flex flex-col w-full items-center text-center">
          <p className='text-black dark:text-white text-2xl md:text-3xl font-bold'>{userData["Full Name"]}</p>
          <p className='text-yellow-600 font-semibold'>@{userData["Profile Name"]}</p>
        </div>
        <div className="flex w-full justify-around bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="flex flex-col items-center">
            <p className='text-green-600 text-lg font-bold'>Followers</p>
            <p className='text-black dark:text-white font-mono'>{userData["Followers"]}</p>
          </div>
          <div className="flex flex-col items-center">
            <p className='text-green-600 text-lg font-bold'>Following</p>
            <p className='text-black dark:text-white font-mono'>{userData["Followings"]}</p>
          </div>
        </div>
        <OpenWebsite text={"Open Website"} link={"https://github.com/Ashok-Bhatt"} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow h-full p-4 md:p-6 bg-gray-100 dark:bg-gray-900 overflow-y-auto">
        <a href={`https://github-readme-stats.vercel.app/api?username=${userName}&theme=onedark`} className='w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md'>
          <img className="w-full h-auto" src={`https://github-readme-stats.vercel.app/api?username=${userName}&theme=onedark`} />
        </a>
        <a href={`https://github-readme-streak-stats.herokuapp.com?user=${userName}&theme=onedark`} className='w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md'>
          <img className='w-full h-auto' src={`https://github-readme-streak-stats.herokuapp.com?user=${userName}&theme=onedark`} />
        </a>
        <a href={`https://github-contributor-stats.vercel.app/api?username=${userName}&limit=4&theme=onedark&combine_all_yearly_contributions=true`} className='w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md'>
          <img className='w-full h-auto' src={`https://github-contributor-stats.vercel.app/api?username=${userName}&limit=4&theme=onedark&combine_all_yearly_contributions=true`} />
        </a>
        <a href={`https://github-readme-stats.vercel.app/api/top-langs?langs_count=6&layout=compact?username=${userName}&theme=onedark`} className='w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md'>
          <img className="w-full h-auto" src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${userName}&langs_count=6&theme=onedark&layout=compact`} />
        </a>
        <div className="col-span-1 md:col-span-2 w-full overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 shadow-md">
          <a href={`https://github-profile-trophy.vercel.app/?username=${userName}&theme=onedark`} className='w-full'>
            <img className='w-full h-auto' src={`https://github-profile-trophy.vercel.app/?username=${userName}&theme=onedark`} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default GitHub
