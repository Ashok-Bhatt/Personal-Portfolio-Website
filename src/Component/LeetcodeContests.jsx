import React from 'react'
import classNames from 'classnames';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function LeetcodeContests(props) {

  const {contestAttended, contestRating, contestRanking, totalParticipants, contestTopPercentage, contestBadges, contestData, className, title} = props;
  const maxRating = contestData.reduce((accumulator, contest)=>Math.max(accumulator, contest["rating"]), 0);
  const minRating = contestData.reduce((accumulator, contest)=>Math.min(accumulator, contest["rating"]), 1500);

  const data = {
    labels: contestData.map(contest => " "),
    datasets: [
      {
        label: "Contest Ratings",
        data: contestData.map(contest => contest["rating"]),
        fill: false,
        borderColor: 'rgb(80, 200, 80)',
        tension: 0.6,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: { enabled: true },
    },
    scales: {
     y: {
      beginAtZero: true,
      min: minRating,
      max: Math.ceil(maxRating/50)*50,
      title: {
        display: true,
        text: 'Contest Rating',
      },
    },
    },
  };

  return (
    <div className={classNames(className, 'flex flex-col gap-2 py-2 px-5 h-full')}>
      {title && <div className="w-full text-2xl text-center text-blue-500">{title}</div>}
      <div className="flex flex-col gap-5 rounded">
        <div className="flex w-full justify-between">
          <div>
            <p className='text-sm text-gray-500'>Contest Rating</p>
            <p className='text-xl text-black dark:text-white'>{Math.round(contestRating)}</p>
          </div>
          {contestRanking && <div>
            <p className='text-sm text-gray-500'>Global Ranking</p>
            <p className='text-sm text-black dark:text-white'>{contestRanking}/<span className='text-gray-300 dark:text-gray-600'>{totalParticipants}</span></p>
          </div>}
          <div>
            <p className='text-sm text-gray-500'>Attended</p>
            <p className='text-sm text-black dark:text-white'>{contestAttended}</p>
          </div>
          <div>
            <p className='text-sm text-gray-500'> Top</p>
            <p className='text-xl text-black dark:text-white'>{contestTopPercentage} %</p>
          </div>
        </div>
        <div className='flex-grow w-full'>
          {contestData.length > 0 ? <Line data={data} options={options} style={{maxHeight:'200px', width:'100%'}}/> : null}
        </div>
      </div>
    </div>
  )
}

export default LeetcodeContests