import React from 'react';
import Plot from 'react-plotly.js';

const HorizontalBarChart = ({ data }) => {
  const xValues = Object.values(data); // Store data values in xValues
  const yValues = Object.keys(data); // Store data keys (labels) in yValues

  const trace = {
    x: xValues,
    y: yValues,
    type: 'bar',
    orientation: 'h',
    marker: {
      color: 'rgb(0, 128, 0)' // Green color for bars
    }
  };

  const layout = {
    title: 'Volume Analysis',
    xaxis: {
      title: 'Volume'
    },
    yaxis: {
      automargin: true,
      showgrid: false, // Hide gridlines
      type: 'category', // Set y-axis type to category
      categoryorder: 'initial' // Maintain the order of categories
    }
  };

  return <Plot data={[trace]} layout={layout} />;
};

export default HorizontalBarChart;
