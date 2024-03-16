import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const options = {
  indexAxis: 'y',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Volume analysis',
      font: {
        size: 16, 
        weight: 'bold'
      }
    },
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        display: false 
      }
    },
    x: {
      grid: {
        display: false
      },
      ticks: {
        display: false 
      }
    }
  }
};

const HorizontalChart = ({ data }) => {
  const xValues = Object.values(data);
  const yValues = Object.keys(data); 
  
  const labels = yValues;

  const dataset = {
    labels,
    datasets: [
      {
        data: xValues,
        borderColor: 'rgba(53, 162, 235, 0.5)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  return <Bar options={options} data={dataset} />;
}

export default HorizontalChart;