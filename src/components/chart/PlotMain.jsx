import React from 'react';
import Plot from 'react-plotly.js';

const PlotMain = ({data}) => {
  console.log(data);
  return (
    <Plot
    data={[
      {
        x: data.dates,
        y: data.closing_prices,
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



