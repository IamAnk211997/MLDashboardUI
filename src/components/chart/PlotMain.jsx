import React from 'react';
import Plot from 'react-plotly.js';

const PlotMain = ({ data }) => {
  return (
    <div>
      {data ? (
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
          layout={{ width: 800, height: 400,  }}
        />
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default PlotMain;