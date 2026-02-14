import React from 'react'
import classNames from 'classnames';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function Contests(props) {

  const { contestAttended, contestRating, contestRanking, totalParticipants, contestTopPercentage, contestBadges, contestData, className, title } = props;
  const maxRating = contestData.reduce((accumulator, contest) => Math.max(accumulator, contest["rating"]), 0);
  const minRating = contestData.reduce((accumulator, contest) => Math.min(accumulator, contest["rating"]), 1500);

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
        max: Math.ceil(maxRating / 50) * 50,
        title: {
          display: true,
          text: 'Contest Rating',
        },
      },
    },
  };

  return (
    <div className={classNames(className, 'flex flex-col gap-2 py-2 px-5 h-full')}>
      {title && <div className="w-full text-xl md:text-2xl font-bold text-center text-blue-500">{title}</div>}
      <div className="flex flex-col gap-4 sm:gap-5 rounded">
        <div className="flex w-full justify-between flex-wrap gap-y-2">
          {contestRating && <div className='min-w-[45%] sm:min-w-0'>
            <p className='text-xs sm:text-sm text-gray-400'>Contest Rating</p>
            <p className='text-lg sm:text-xl text-white font-bold'>{Math.round(contestRating)}</p>
          </div>}
          {contestRanking && <div className='min-w-[45%] sm:min-w-0'>
            <p className='text-xs sm:text-sm text-gray-400'>Global Ranking</p>
            <p className='text-xs sm:text-sm text-white font-bold'>{contestRanking}/<span className='text-gray-500'>{totalParticipants}</span></p>
          </div>}
          {contestAttended && <div className='min-w-[45%] sm:min-w-0'>
            <p className='text-xs sm:text-sm text-gray-400'>Attended</p>
            <p className='text-xs sm:text-sm text-white font-bold'>{contestAttended}</p>
          </div>}
          {contestTopPercentage && <div className='min-w-[45%] sm:min-w-0'>
            <p className='text-xs sm:text-sm text-gray-400'> Top</p>
            <p className='text-lg sm:text-xl text-white font-bold'>{contestTopPercentage} %</p>
          </div>}
        </div>
        <div className='flex-grow w-full'>
          {contestData.length > 0 ? <Line data={data} options={options} style={{ maxHeight: '200px', width: '100%' }} /> : null}
        </div>
      </div>
    </div>
  )
}

export default Contests