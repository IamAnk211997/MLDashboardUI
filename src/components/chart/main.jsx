import React from 'react';
import { Line } from 'react-chartjs-2';

import 'chart.js/auto';

const generateRandomData = () => {
  const data = [];
  for (let i = 0; i < 10; i++) {
    const value = Math.random() * (7500 - 7000) + 7000; // Random value between 7000 and 7500
    data.push(value.toFixed(2)); // Round to 2 decimal places
  }
  return data;
};

const generateNext10DaysLabels = () => {
  const today = new Date();
  const labels = [];
  for (let i = 0; i < 10; i++) {
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate() + i);
    labels.push(nextDay.toDateString().slice(4, 10)); // Extract only the month and day (e.g., Jan 26)
  }
  return labels;
};

const data = {
  labels: generateNext10DaysLabels(),
  datasets: [
    {
      label: 'Value',
      data: generateRandomData(),
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1,
    }
  ]
};



const Chart = () => (
  <div>
    <h2>Next 10 Days Forecast</h2>
    <Line data={data}  />
  </div>
);

export default Chart;
