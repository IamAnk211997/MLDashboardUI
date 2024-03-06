import React from 'react';
import Plot from 'react-plotly.js';

const AdvancedMAPlot = ({ data }) => {
  if (!data) {
    return null; // Return null if data is not provided
  }

  const startDate = new Date('2020-01-01'); // Adjust as needed
  const endDate = data.dates[data.dates.length - 1]; // Use the last date in the data

  return (
    <Plot
      key={JSON.stringify(data)}
      data={[
        {
          x: data.dates,
          y: data.closing_prices,
          type: 'scatter',
          mode: 'lines',
          marker: { color: '#7F7F7F' },
          fill: 'tozeroy',
          fillcolor: `rgba(127, 127, 127, 0.1)`,
          name: 'Closing Prices',
        },
        {
          x: data.dates,
          y: data.moving_average_50,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'blue' },
          name: '50-Day Moving Average',
        },
        {
          x: data.dates,
          y: data.moving_average_100,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'green' },
          name: '100-Day Moving Average',
        },
        {
          x: data.dates,
          y: data.moving_average_200,
          type: 'scatter',
          mode: 'lines',
          marker: { color: 'red' },
          name: '200-Day Moving Average',
        }
      ]}
      layout={{
        // title: {
        //   text: '<b>Stock Price</b>',
        //   x: 0.05, // Adjust the x position to move the title to the left
        //   xanchor: 'left', // Anchor the title to the left
        //   y: 0.95, // Adjust the y position if needed
        //   yanchor: 'top', // Anchor the title to the top
        //   font: {
        //       size: 36, // Adjust the font size as needed
        //       family: 'Arial, sans-serif', // Specify font family if needed
        //       color: '#000000', // Specify font color if needed
        //       weight: '900', // Specify font weight if needed
        //   }
        // },
        xaxis: {
          range: [startDate, endDate],
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
      config={{ responsive: true }} 
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

export default AdvancedMAPlot;
