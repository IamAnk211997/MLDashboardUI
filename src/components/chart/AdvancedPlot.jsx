import React from 'react';
import Plot from 'react-plotly.js';

const AdvancedPlot = ({ data }) => {
  return (
    data && (
      <Plot
        data={[
          {
            x: data.dates,
            y: data.closing_prices,
            type: 'scatter',
            mode: 'lines+markers',
            marker: { color: 'red' },
            name: 'Closing Prices',
          }
        ]}
        layout={{
          width: 800,
          height: 400,
          title: {
            text: 'Stock Price',
            x: 0.05, // Adjust the x position to move the title to the left
            xanchor: 'left', // Anchor the title to the left
            y: 0.95, // Adjust the y position if needed
            yanchor: 'top', // Anchor the title to the top
            font: {
                size: 24, // Adjust the font size as needed
                family: 'Arial, sans-serif', // Specify font family if needed
                color: '#333', // Specify font color if needed
                weight: '900', // Specify font weight if needed
            }
          },
          titlefont: {
            size: 24, // Adjust the font size as needed
            family: 'Arial, sans-serif', // Specify font family if needed
            color: '#333', // Specify font color if needed
            weight: 'bold', // Specify font weight if needed
          },
          xaxis: {
            rangeselector: {
              buttons: [
                {
                  count: 1,
                  label: '1m',
                  step: 'month',
                  stepmode: 'backward',
                },
                {
                  count: 6,
                  label: '6m',
                  step: 'month',
                  stepmode: 'backward',
                },
                {
                  count: 1,
                  label: 'YTD',
                  step: 'year',
                  stepmode: 'todate',
                },
                {
                  count: 1,
                  label: '1y',
                  step: 'year',
                  stepmode: 'backward',
                },
                {
                  step: 'all',
                },
              ],
            },
            rangeslider: {
              visible: true,
            },
            type: 'date',
          },
        }}
      />
    )
  );
};

export default AdvancedPlot;
