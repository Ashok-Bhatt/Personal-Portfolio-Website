import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

function LeetcodeContests(props) {

  const {contestAttended, contestRating, contestRanking, totalParticipants, contestTopPercentage, contestBadges, contestData} = props;
  const maxRating = contestData.reduce((accumulator, contest)=>Math.max(accumulator,contest["rating"]), 0);
  const minRating = contestData.reduce((accumulator, contest)=>Math.min(accumulator,contest["rating"]), 1500);

  const data = {
    labels: contestData.map(contest => " "),
    datasets: [
      {
        label: "Contest Ratings",
        data: contestData.map(contest => contest["rating"]),
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
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
      max: maxRating,
      title: {
        display: true,
        text: 'Contest Rating',
      },
    },
    },
  };

  return (
    <div className='bg-gray-100 dark:bg-gray-900'>
      {contestData.length > 0 ? <Line data={data} options={options} /> : null}
    </div>
  )
}

export default LeetcodeContests
