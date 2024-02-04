import React from 'react';
import Plot from 'react-plotly.js';

const PlotMain = () => {
  return (
    <Plot
    data={[
      {
        x: [1, 2, 3, 4],
        y: [10, 11, 12, 13],
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
    ]}
    layout={{ width: 800, height: 400, title: 'A Simple Plot' }}
  />
  )
}

export default PlotMain



