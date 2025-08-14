import React, { useState } from 'react'
import Contests from './Contests';
import ProblemsBlock from './ProblemsBlock';
import Slider from './Slider';
import StatsBlock from './StatsBlock';
import OpenWebsite from './OpenWebsite';
import Code360Badge from './Code360Badge';
import { code360Data } from '../Constants';

function Code360() {
    const [badgePointer, setBadgePointer] = useState(0);

    return (
        <>
        <div className="flex h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
            <div className="flex flex-col w-1/4 h-full items-center justify-center gap-y-5 p-2">
                <div className='w-50 h-50 rounded-full overflow-hidden border-4 border-blue-400'>
                    <img src={code360Data["Profile Image"] || "/Images/coder_logo.png"} className='h-full w-full' alt="Code360 Profile Image" />
                </div>
                <div className="flex flex-col w-full items-center">
                    <p className='text-black dark:text-white text-3xl'>{code360Data["Full Name"]}</p>
                    <p className='text-yellow-600'>{code360Data["Profile Name"]}</p>
                </div>
                <div className="flex flex-col min-w-[200px] w-max rounded p-2 items-center">
                    <p className='text-green-600 text-2xl'>Longest Streak</p>
                    <p className='text-lg'>{code360Data["Longest Streak"]}</p>
                </div>
                <OpenWebsite text={"Open Website"} link={"https://www.naukri.com/code360/profile/AshokBhatt"}/>
            </div>
            <div className="grid grid-cols-2 gap-2 flex-grow h-full p-2">
                <ProblemsBlock 
                    problemsCount={[
                        {"problemsTag" : "Easy", "setColor" : "green", "solvedProblems" : code360Data["Problems"]["Easy"]["Solved"], "totalProblems" : code360Data["Problems"]["Easy"]["Total"]},
                        {"problemsTag" : "Moderate", "setColor" : "yellow", "solvedProblems" : code360Data["Problems"]["Moderate"]["Solved"], "totalProblems" : code360Data["Problems"]["Moderate"]["Total"]},
                        {"problemsTag" : "Hard", "setColor" : "red", "solvedProblems" : code360Data["Problems"]["Hard"]["Solved"], "totalProblems" : code360Data["Problems"]["Hard"]["Total"]},
                        {"problemsTag" : "Ninja", "setColor" : "purple", "solvedProblems" : code360Data["Problems"]["Ninja"]["Solved"], "totalProblems" : code360Data["Problems"]["Ninja"]["Total"]}
                    ]}
                    className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" 
                    title = "Problems Solved"
                />
                <Contests
                    contestAttended={code360Data["Contests Attended"]}
                    contestRating={code360Data["Current Rating"]}
                    totalParticipants={10000}
                    contestTopPercentage={code360Data["Contest Top Percentage"]}
                    contestBadges={[code360Data["Contest Badge"]]}
                    contestData={code360Data["Contests Data"]}
                    className = "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    title = "Contest Stats"
                />
                <Slider 
                    cards={
                        code360Data["Badges"].map((badge, index) => (
                            <Code360Badge badge={code360Data["Badges"][index]} isMiddleBadge={index==badgePointer}/>
                        ))
                    }
                    cardClasses = "h-full w-[130px]"
                    containerClasses = "rounded flex-grow rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    scrollTrigger="card"
                    defaultPointer = {0}
                    setParentPointer = {setBadgePointer}
                    title = "Code360 Badges"
                />
                <StatsBlock 
                    data={[
                        {title:"Total Problems", stats:`${code360Data["Problems"]["All"]["Solved"]} / ${code360Data["Problems"]["All"]["Total"]}`},
                        {title:"Total Exp", stats:`${code360Data["Total Exp"]}`},
                    ]}
                    containerClasses = "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                    titleClasses = "text-blue-500"
                    statsClasses = "text-black dark:text-white"
                />
            </div>
        </div>
        </>
    )
}

export default Code360