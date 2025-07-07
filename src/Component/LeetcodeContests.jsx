  import React from 'react'
  import { Line } from 'react-chartjs-2';
  import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

  ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

  function LeetcodeContests(props) {

    const {contestAttended, contestRating, contestRanking, totalParticipants, contestTopPercentage, contestBadges, contestData} = props;

    console.log(contestData);

    const data = {
      labels: (contestData.length>0) ? contestData.map((contest, contestNo)=>(contestNo)) : [],
      datasets: [
        {
          label : "My Contests",
          data: (contestData.length>0) ? contestData.map((contest)=>(contest["rating"])) : [],
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.3,
        }
      ]
    }

    const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
      y: {
        beginAtZero: true,
      }, 
    },
  };

    return (
      <div className='flex flex-col h-full w-full bg-red-100'>
        <div className="h-[50px] w-full bg-blue-100"></div>
        <div className="flex-grow w-full bg-green-100">
          {(contestData.length>0) ? <Line data={data} options={options} style={{width:"100%", height:"50%"}}/> : null}
        </div>
      </div>
    )
  }

  export default LeetcodeContests
