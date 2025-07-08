import React, {useEffect, useState} from 'react'
import axios from "axios"
import ProblemsBlock from './ProblemsBlock';

function GFG() {

    const userName = "ashokbhacjou";
    const instituteRankMedals = ["🥇", "🥈", "🥉"];
    const dataRefreshRateInSeconds = 6 * 60 * 60;
    const baseUrl = import.meta.env.VITE_APP_ENV=="development" ? "/api" : "https://geeks-for-geeks-api.vercel.app";

    console.log(`${baseUrl}/${userName}`)

    const [userData, setUserData] = useState({
        "Profile Name" : "",
        "Full Name" : "",
        "Profile Image" : "",
        "Institute Rank" : 0,
        "Coding Score" : 0,
        "Basic Problems Solved" : 0,
        "Easy Problems Solved" : 0,
        "Medium Problems Solved" : 0,
        "Hard Problems Solved" : 0,
        "Total Basic Problems" : 769,
        "Total Easy Problems" : 1383,
        "Total Medium Problems" : 1141,
        "Total Hard Problems" : 211,
    });

    useEffect(()=>{
        
        if (localStorage.getItem("userGfgData") && localStorage.getItem("lastGfgRefresh") && ((Number(localStorage.getItem("lastGfgRefresh")) + dataRefreshRateInSeconds*1000) >= Date.now())){
            setUserData(JSON.parse(localStorage.getItem("userGfgData")));
            console.log("cached!");
        } else {
            console.log("required");
            axios
            .get(`${baseUrl}/${userName}`)
            .then((res)=>{
                const data = res.data;
                setUserData({
                    ...userData,
                    ["Profile Name"] : data["info"]["userName"],
                    ["Full Name"] : data["info"]["fullName"],
                    ["Profile Image"] : data["info"]["profilePicture"],
                    ["Institute Rank"] : data["info"]["instituteRank"],
                    ["Coding Score"] : data["info"]["codingScore"],
                    ["Basic Problems Solved"] : data["solvedStats"]["basic"]["count"] + data["solvedStats"]["school"]["count"],
                    ["Easy Problems Solved"] : data["solvedStats"]["easy"]["count"],
                    ["Medium Problems Solved"] : data["solvedStats"]["medium"]["count"],
                    ["Hard Problems Solved"] : data["solvedStats"]["hard"]["count"],
                });
                localStorage.setItem("lastGfgRefresh", Date.now());
            })
            .catch((error)=>{
                console.log(`Couldn't load user data : ${error}`)
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
        <div className="flex flex-col w-1/3 h-full items-center justify-center gap-y-5 p-2">
            <div className='w-50 h-50 rounded-full overflow-hidden border-4 border-blue-400'>
                <img src={userData["Profile Image"] || "/Images/coder_logo.png"} className='h-full w-full' alt="Leetcode Profile Image" />
            </div>
            <div className="flex flex-col w-full items-center">
                <p className='text-black dark:text-white text-3xl'>{userData["Full Name"]}</p>
                <p className='text-yellow-600'>{userData["Profile Name"]}</p>
            </div>
        </div>
        <div className="flex flex-col w-2/3 h-full p-2">
            <div className='flex items-center p-2 justify-between bg-gray-100 dark:bg-gray-900'>
                <ProblemsBlock problemsCount={[
                    {"problemsTag" : "Basic", "setColor" : "lightgreen", "solvedProblems" : userData["Basic Problems Solved"], "totalProblems" : userData["Total Basic Problems"]},
                    {"problemsTag" : "Easy", "setColor" : "green", "solvedProblems" : userData["Easy Problems Solved"], "totalProblems" : userData["Total Easy Problems"]},
                    {"problemsTag" : "Medium", "setColor" : "yellow", "solvedProblems" : userData["Medium Problems Solved"], "totalProblems" : userData["Total Medium Problems"]},
                    {"problemsTag" : "Hard", "setColor" : "red", "solvedProblems" : userData["Hard Problems Solved"], "totalProblems" : userData["Total Hard Problems"]}
                ]}/>
                <div className='flex flex-col justify-center rounded p-2 w-[200px]'>
                    <div className='text-blue-500 text-center text-2xl'>Total Problems</div>
                    <div className='text-center text-lg'>{userData["Basic Problems Solved"] + userData["Easy Problems Solved"] + userData["Medium Problems Solved"] + userData["Hard Problems Solved"]} / {userData["Total Basic Problems"] + userData["Total Easy Problems"] + userData["Total Medium Problems"] + userData["Total Hard Problems"]}</div>
                </div>
            </div>
            <div className="flex w-full justify-between p-5 text-xl">
                <div className='bg-gray-100 dark:bg-gray-900 rounded p-2 w-[200px]'>
                    <div className='text-yellow-400 text-center'>Institute Rank</div>
                    <div className='text-center'>{(userData["Institute Rank"]>=1 && userData["Institute Rank"]<=3) ? instituteRankMedals[userData["Institute Rank"]-1] : ""} {userData["Institute Rank"]}</div>
                </div>
                <div className='bg-gray-100 dark:bg-gray-900 rounded p-2 w-[200px]'>
                    <div className='text-yellow-400 text-center'>Coding Score</div>
                    <div className='text-center'>{userData["Coding Score"]}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GFG
