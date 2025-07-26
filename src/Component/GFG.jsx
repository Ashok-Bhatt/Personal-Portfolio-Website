import React, {useEffect, useState} from 'react'
import axios from "axios"
import ProblemsBlock from './ProblemsBlock';
import StatsBlock from './StatsBlock.jsx';
import {gfgContestData} from '../Constants/index.js'
import LeetcodeContests from './LeetcodeContests';

function GFG() {

    const userName = "ashokbhacjou";
    const fullName = "Ashok Bhatt";
    const instituteRankMedals = ["🥇", "🥈", "🥉"];
    const dataRefreshRateInSeconds = 6 * 60 * 60;
    const baseUrl = "https://scrape-spidey.onrender.com/api/v1/gfg/user"

    const [userData, setUserData] = useState({
        "Profile Name" : "",
        "Full Name" : "",
        "Profile Image" : "",
        "Institution Rank" : 0,
        "Coding Score" : 0,
        "Basic Problems Solved" : 0,
        "Easy Problems Solved" : 0,
        "Medium Problems Solved" : 0,
        "Hard Problems Solved" : 0,
        "Total Basic Problems" : 769,
        "Total Easy Problems" : 1383,
        "Total Medium Problems" : 1141,
        "Total Hard Problems" : 211,
        "Contests Attended" : 0,
        "Contest Rating": 1754,
        "Contest Ranking" : 5152,
        "Total Participants" : 36062,
        "Contest Top Percentage" : 14.29,
        "Contest Level" : "",
        // Temporary static data setup for gfg contests
        "Contest Badges" : [],
        "Contests Data" : gfgContestData,
        "Global Rank" : 21288
    });

    useEffect(()=>{

        if (localStorage.getItem("userGfgData")){
            setUserData(JSON.parse(localStorage.getItem("userGfgData")));
        }
        
        if (!localStorage.getItem("lastGfgRefresh") || ((Number(localStorage.getItem("lastGfgRefresh")) + dataRefreshRateInSeconds*1000) < Date.now())) {
            axios
            .get(`${baseUrl}/${userName}`)
            .then((res)=>{
                const data = res.data;
                setUserData({
                    ...userData,
                    ["Full Name"] : fullName,
                    ["Profile Name"] : data["username"],
                    ["Profile Image"] : data["avatar"],
                    ["Institution Rank"] : Number.parseInt(data["institutionRank"]),
                    ["Coding Score"] : Number.parseInt(data["codingScore"]),
                    ["Basic Problems Solved"] : Number.parseInt(data["problemsSolved"]["school"]) + Number.parseInt(data["problemsSolved"]["basic"]),
                    ["Easy Problems Solved"] : Number.parseInt(data["problemsSolved"]["easy"]),
                    ["Medium Problems Solved"] : Number.parseInt(data["problemsSolved"]["medium"]),
                    ["Hard Problems Solved"] : Number.parseInt(data["problemsSolved"]["hard"]),
                    ["Contests Attended"] : Number.parseInt(data["contestAttended"]),
                    ["Contest Rating"] : Number.parseInt(data["contestRating"]),
                    ["Contest Ranking"] : Number.parseInt(data["contestRanking"]),
                    ["Total Participants"] : Number.parseInt(data["contestTotalParticipants"]),
                    ["Contest Top Percentage"] : Number.parseFloat(data["contestTopPercentage"]),
                    ["Contest Level"] : Number.parseInt(data["contestLevel"]),
                    // Temporary static data setup for gfg contests
                    ["Contest Badges"] : [],
                    ["Contests Data"] : gfgContestData,
                    ["Global Rank"] : 21288
                });
                localStorage.setItem("lastGfgRefresh", Date.now());
            })
            .catch((error)=>{
                console.log(`Couldn't load user data : ${error}`)
                setUserData(JSON.parse(localStorage.getItem("userGfgData")));
            })
        }
    }, []);

    useEffect(()=>{
        if (userData["Profile Name"]){
            localStorage.setItem("userGfgData", JSON.stringify(userData));
        }
    }, [userData]);

  return (
    <div className="flex flex-grow rounded-lg bg-gray-200 dark:bg-gray-800 overflow-hidden">
        <div className="flex flex-col w-1/4 h-full items-center justify-center gap-y-5 p-2">
            <div className='w-50 h-50 rounded-full overflow-hidden border-4 border-blue-400'>
                <img src={userData["Profile Image"] || "/Images/coder_logo.png"} className='h-full w-full' alt="Leetcode Profile Image" />
            </div>
            <div className="flex flex-col w-full items-center">
                <p className='text-black dark:text-white text-3xl'>{userData["Full Name"]}</p>
                <p className='text-yellow-600'>{userData["Profile Name"]}</p>
            </div>
            <div className="flex flex-col min-w-[200px] w-max rounded p-2 items-center">
                <p className='text-green-600 text-2xl'>Global Rank</p>
                <p className='text-lg'>{userData["Global Rank"]} / 2M</p>
            </div>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-grow h-full p-2">
            <ProblemsBlock className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" problemsCount={[
                {"problemsTag" : "Basic", "setColor" : "lightgreen", "solvedProblems" : userData["Basic Problems Solved"], "totalProblems" : userData["Total Basic Problems"]},
                {"problemsTag" : "Easy", "setColor" : "green", "solvedProblems" : userData["Easy Problems Solved"], "totalProblems" : userData["Total Easy Problems"]},
                {"problemsTag" : "Medium", "setColor" : "yellow", "solvedProblems" : userData["Medium Problems Solved"], "totalProblems" : userData["Total Medium Problems"]},
                {"problemsTag" : "Hard", "setColor" : "red", "solvedProblems" : userData["Hard Problems Solved"], "totalProblems" : userData["Total Hard Problems"]}
            ]}/>
            <LeetcodeContests
                contestAttended={userData["Contests Attended"]}
                contestRating={userData["Contest Rating"]}
                contestRanking={userData["Contest Ranking"]}
                totalParticipants={userData["Total Participants"]}
                contestTopPercentage={userData["Contest Top Percentage"]}
                contestBadges={userData["Contest Badges"]}
                contestData={userData["Contests Data"]}
                className = "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
            />
            <StatsBlock 
                data={[
                    {title:"Total Problems", stats:`${userData["Basic Problems Solved"] + userData["Easy Problems Solved"] + userData["Medium Problems Solved"] + userData["Hard Problems Solved"]} / ${userData["Total Basic Problems"] + userData["Total Easy Problems"] + userData["Total Medium Problems"] + userData["Total Hard Problems"]}`},
                    {title:"Institution Rank", stats:`${(userData["Institution Rank"]>=1 && userData["Institution Rank"]<=3) ? instituteRankMedals[userData["Institution Rank"]-1] : ""} ${userData["Institution Rank"]}`},
                    {title:"Coding Score", stats:`${userData["Coding Score"]}`},
                ]}
                containerClasses = "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                titleClasses = "text-blue-500"
                statsClasses = "text-black dark:text-white"
            />
        </div>
    </div>
  )
}

export default GFG
