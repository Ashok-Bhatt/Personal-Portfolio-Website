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
    <div>
      <div>
        {contestData.length > 0 ? <Line data={data} options={options} /> : null}
      </div>
    </div>
  )
}

export default LeetcodeContests