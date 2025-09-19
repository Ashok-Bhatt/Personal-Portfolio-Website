import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Contests from './Contests';
import ProblemsBlock from './ProblemsBlock';
import LeetcodeBadge from './LeetcodeBadge';
import Slider from './Slider';
import StatsBlock from './StatsBlock';
import OpenWebsite from './OpenWebsite';
import {LeetCodeData} from '../Constants/index.js';

function Leetcode() {

    const userName = "ashokbhatt2048";
    const apiUrl = "https://alfa-leetcode-api.onrender.com";
    const dataRefreshRateInSeconds = 1*24*60*60;
    const [loading, setLoading] = useState(false);
    const [badgePointer, setBadgePointer] = useState(1);

    const [userData, setUserData] = useState(LeetCodeData);

    const handleUserInfoResponse = (data) => {
        setUserData((prev) => ({
            ...prev,
            ["Profile Image"]: data["avatar"],
            ["default"]: false,
        }));
        localStorage.setItem("lastLeetcodeRefresh", Date.now());
    };

    const handleContestResponse = (data) => {
        setUserData((prev) => ({
            ...prev,
            ["Contests Attended"]: data["contestAttend"],
            ["Contest Rating"]: data["contestRating"],
            ["Contest Ranking"]: data["contestGlobalRanking"],
            ["Total Participants"]: data["totalParticipants"],
            ["Contest Top Percentage"]: data["contestTopPercentage"],
            ["Contest Badges"]: data["contestBadges"],
            ["Contests Data"]: data["contestParticipation"],
        }));
    }

    const handleBadgesResponse = (data) => {
        setUserData((prev) => ({
            ...prev,
            ["Badge Count"]: data["badgesCount"],
            ["Badges"]: data["badges"],
            ["Active Badge"]: data["activeBadge"],
        }));
    }

    const handleProfileResponse = (data) => {
        setUserData((prev) => ({
            ...prev,
            ["Global Rank"]: data["ranking"],
            ["Contribution Points"]: data["contributionPoint"],
            "Problems": {
                ...prev["Problems"],
                "Easy": {
                    ...prev["Problems"]["Easy"],
                    "Total": data["totalEasy"],
                    "Solved": data["easySolved"],
                },
                "Medium": {
                    ...prev["Problems"]["Medium"],
                    "Total": data["totalMedium"],
                    "Solved": data["mediumSolved"],
                },
                "Hard": {
                    ...prev["Problems"]["Hard"],
                    "Total": data["totalHard"],
                    "Solved": data["hardSolved"],
                },
                "All": {
                    ...prev["Problems"]["All"],
                    "Total": data["totalQuestions"],
                    "Solved": data["totalSolved"],
                },
            },
            "Submissions": {
                ...prev["Submissions"],
                "All": data["totalSubmissions"][0]["submissions"],
                "Easy": data["totalSubmissions"][1]["submissions"],
                "Medium": data["totalSubmissions"][2]["submissions"],
                "Hard": data["totalSubmissions"][3]["submissions"],
            },
        }));
    }

    const handleUserSessionBeatsResponse = (data) => {
        setUserData((prev) => ({
            ...prev,
            ["userSessionBeatsPercentage"]: {
                ...prev["userSessionBeatsPercentage"],
                ["Easy"]: data["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][0],
                ["Medium"]: data["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][1],
                ["Hard"]: data["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][2],
            }
        }));
    }

    const fetchUserLeetcodeDetails = async ()=>{

        try{
            const [userInfoResponse, contestResponse, badgesResponse, profileResponse, userSessionBeatsResponse] = await Promise.all([
                axios.get(`${apiUrl}/${userName}`),
                axios.get(`${apiUrl}/${userName}/contest`),
                axios.get(`${apiUrl}/${userName}/badges`),
                axios.get(`${apiUrl}/userProfile/${userName}`),
                axios.get(`${apiUrl}/userProfileUserQuestionProgressV2/${userName}`)
            ]);

            handleUserInfoResponse(userInfoResponse.data);
            handleContestResponse(contestResponse.data);
            handleBadgesResponse(badgesResponse.data);
            handleProfileResponse(profileResponse.data);
            handleUserSessionBeatsResponse(userSessionBeatsResponse.data);

        } catch (error){
            console.log("Error Occurred while fetching user data!", error.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(()=>{

        if (localStorage.getItem("userLeetcodeData")){
            setUserData(JSON.parse(localStorage.getItem("userLeetcodeData")));
        }
        
        if (!localStorage.getItem("lastGfgRefresh") || ((Number(localStorage.getItem("lastGfgRefresh")) + dataRefreshRateInSeconds*1000) < Date.now())) {
            setLoading(true);
            fetchUserLeetcodeDetails();
            setLoading(false);
        }

    }, []);

    useEffect(()=>{
        if (userData["default"]===false) {
            localStorage.setItem("userLeetcodeData", JSON.stringify(userData));
        }
    }, [userData]);

  return (
    loading ? <>Loading</> :
    <>
    <div className="flex h-full rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-800">
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
                <p className='text-lg'>{userData["Global Rank"]} / 5M</p>
            </div>
            <OpenWebsite text={"Open Website"} link={"https://leetcode.com/u/ashokbhatt2048/"}/>
        </div>
        <div className="grid grid-cols-2 gap-2 flex-grow h-full p-2">
            <ProblemsBlock 
                problemsCount={[
                    {"problemsTag" : "Easy", "setColor" : "#28C244", "solvedProblems" : userData["Problems"]["Easy"]["Solved"], "totalProblems" : userData["Problems"]["Easy"]["Total"]},
                    {"problemsTag" : "Medium", "setColor" : "#FFB700", "solvedProblems" : userData["Problems"]["Medium"]["Solved"], "totalProblems" : userData["Problems"]["Medium"]["Total"]},
                    {"problemsTag" : "Hard", "setColor" : "#F63737", "solvedProblems" : userData["Problems"]["Hard"]["Solved"], "totalProblems" : userData["Problems"]["Hard"]["Total"]}
                ]}
                className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" 
                progressBodyClassName="bg-gray-100 dark:bg-gray-900"
                progressBarClassName="bg-gray-200 dark:bg-gray-800"
                title = "Problems Solved"
            />
            <Contests
                contestAttended={userData["Contests Attended"]}
                contestRating={userData["Contest Rating"]}
                contestRanking={userData["Contest Ranking"]}
                totalParticipants={userData["Total Participants"]}
                contestTopPercentage={userData["Contest Top Percentage"]}
                contestBadges={userData["Contest Badges"]}
                contestData={userData["Contests Data"]}
                className = "bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                title = "Contest Stats"
            />
            <Slider 
                cards={
                    userData["Badges"].map((_, index)=>(
                        <LeetcodeBadge badge={userData["Badges"][index]} isMiddleBadge={index==badgePointer}/>
                    ))
                }
                cardClasses = "h-full w-[130px]"
                containerClasses = "rounded flex-grow rounded bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800"
                scrollTrigger="card"
                defaultPointer = {1}
                setParentPointer = {setBadgePointer}
                title = "Leetcode Badges"
            />
            <StatsBlock 
                data={[
                    {title:"Total Problems", stats:`${userData["Problems"]["All"]["Solved"]} / ${userData["Problems"]["All"]["Total"]}`},
                    {title:"Total Submissions", stats:`${userData["Submissions"]["All"]}`},
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

export default Leetcode
