import axios from 'axios';
import React, {useState, useEffect} from 'react'
import LeetcodeContests from './LeetcodeContests';
import ProblemsBlock from './ProblemsBlock';
import LeetcodeBadge from './LeetcodeBadge';
import Slider from './Slider';
import StatsBlock from './StatsBlock';
import OpenWebsite from './OpenWebsite';

function Leetcode() {

    const userName = "ashokbhatt2048";
    const apiUrl = "https://alfa-leetcode-api.onrender.com";
    const dataRefreshRateInSeconds = 1*24*60*60;
    const [loading, setLoading] = useState(false);
    const [badgePointer, setBadgePointer] = useState(1);

    const [userData, setUserData] = useState({
        "Full Name" : "Ashok Bhatt",
        "Profile Name" : userName,
        "Global Rank" : 0,
        "Profile Image": "",
        "Contribution Points" : 0,
        "Problems" : {
            "Easy" : {
                "Total" : 0,
                "Solved" : 0,
            },
            "Medium" : {
                "Total" : 0,
                "Solved" : 0,
            },
            "Hard" : {
                "Total" : 0,
                "Solved" : 0,
            },
            "All" : {
                "Total" : 0,
                "Solved" : 0,
            }
        },
        "Submissions" : {
            "Easy" : 0,
            "Medium" : 0,
            "Hard" : 0,
            "All" : 0,
        },
        "Badge Count" : 0,
        "Badges" : [],
        "Active Badge" : null,
        "userSessionBeatsPercentage" : {
            "Easy" : 0,
            "Medium" : 0,
            "Hard" : 0,
        },
        "Contests Attended" : 0,
        "Contest Rating": 0,
        "Contest Ranking" : 0,
        "Total Participants" : 0,
        "Contest Top Percentage" : 0,
        "Contest Badges" : [],
        "Contests Data" : [],
    });

    const fetchUserLeetcodeDetails = async ()=>{

        try{
            
            // 1️⃣ API Call to get user avatar
            const userInfoResponse = await axios.get(`${apiUrl}/${userName}`);
            const userInfoData = userInfoResponse.data;
            setUserData((prev)=>({
                ...prev,
                ["Profile Image"] : userInfoData["avatar"]
            }))
            localStorage.setItem("lastLeetcodeRefresh", Date.now());
            

            // 2️⃣ API Call to get contest data
            const contestResponse = await axios.get(`${apiUrl}/${userName}/contest`);
            const contestData = contestResponse.data;

            setUserData((prev) => ({
                ...prev,
                ["Contests Attended"]: contestData["contestAttend"],
                ["Contest Rating"]: contestData["contestRating"],
                ["Contest Ranking"]: contestData["contestGlobalRanking"],
                ["Total Participants"]: contestData["totalParticipants"],
                ["Contest Top Percentage"]: contestData["contestTopPercentage"],
                ["Contest Badges"]: contestData["contestBadges"],
                ["Contests Data"]: contestData["contestParticipation"],
            }));

            // 3️⃣ API Call to get badges data
            const badgesResponse = await axios.get(`${apiUrl}/${userName}/badges`);
            const badgesData = badgesResponse.data;

            setUserData((prev) => ({
                ...prev,
                ["Badge Count"]: badgesData["badgesCount"],
                ["Badges"]: badgesData["badges"],
                ["Active Badge"]: badgesData["activeBadge"],
            }));

            // 4️⃣ API Call to get user problem & submission data
            const profileResponse = await axios.get(`${apiUrl}/userProfile/${userName}`);
            const profileData = profileResponse.data;

            setUserData((prev) => ({
                ...prev,
                ["Global Rank"]: profileData["ranking"],
                ["Contribution Points"]: profileData["contributionPoint"],
                "Problems": {
                    ...prev["Problems"],
                    "Easy": {
                        ...prev["Problems"]["Easy"],
                        "Total": profileData["totalEasy"],
                        "Solved": profileData["easySolved"],
                    },
                    "Medium": {
                        ...prev["Problems"]["Medium"],
                        "Total": profileData["totalMedium"],
                        "Solved": profileData["mediumSolved"],
                    },
                    "Hard": {
                        ...prev["Problems"]["Hard"],
                        "Total": profileData["totalHard"],
                        "Solved": profileData["hardSolved"],
                    },
                    "All": {
                        ...prev["Problems"]["All"],
                        "Total": profileData["totalQuestions"],
                        "Solved": profileData["totalSolved"],
                    },
                },
                "Submissions": {
                    ...prev["Submissions"],
                    "All": profileData["totalSubmissions"][0]["submissions"],
                    "Easy": profileData["totalSubmissions"][1]["submissions"],
                    "Medium": profileData["totalSubmissions"][2]["submissions"],
                    "Hard": profileData["totalSubmissions"][3]["submissions"],
                },
            }))

            // 5️⃣ API Call to get data about percentage of users beaten per each difficulty level
            const userSessionBeatsResponse = await axios.get(`${apiUrl}/userProfileUserQuestionProgressV2/${userName}`);
            const userSessionBeatsData = userSessionBeatsResponse.data;

            setUserData((prev) => ({
                ...prev,
                ["userSessionBeatsPercentage"] : {
                    ...prev["userSessionBeatsPercentage"],
                    ["Easy"] : userSessionBeatsData["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][0],
                    ["Medium"] : userSessionBeatsData["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][1],
                    ["Hard"] : userSessionBeatsData["data"]["userProfileUserQuestionProgressV2"]["userSessionBeatsPercentage"][2],
                }
            }));
        } catch (error){
            log("Error Occurred while fetching user data!", error.message);
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
        // We are checking for global rank of user to ensure userData isn't assigned to empty object and at least one api call is resolved
        if (userData["Global Rank"]){
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
                    {"problemsTag" : "Easy", "setColor" : "green", "solvedProblems" : userData["Problems"]["Easy"]["Solved"], "totalProblems" : userData["Problems"]["Easy"]["Total"]},
                    {"problemsTag" : "Medium", "setColor" : "yellow", "solvedProblems" : userData["Problems"]["Medium"]["Solved"], "totalProblems" : userData["Problems"]["Medium"]["Total"]},
                    {"problemsTag" : "Hard", "setColor" : "red", "solvedProblems" : userData["Problems"]["Hard"]["Solved"], "totalProblems" : userData["Problems"]["Hard"]["Total"]}
                ]}
                className="bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800" 
                title = "Problems Solved"
            />
            <LeetcodeContests
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
