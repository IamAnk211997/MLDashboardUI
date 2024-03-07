import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const AdvancedPlot = ({ data }) => {
  const [selectedOption, setSelectedOption] = useState('closing_prices');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  if (!data) return null;

  const range = data.dates;
  const startDate = range[0];
  const endDate = range[range.length-1];

  let yData;
  let graphName;

  switch(selectedOption) {
    case 'high_prices':
      yData = data.high_prices;
      graphName = 'High Prices';
      break;
    case 'low_prices':
      yData = data.low_prices;
      graphName = 'Low Prices';
      break;
    default:
      yData = data.closing_prices;
      graphName = 'Closing Prices';
  }

  return (
    <Plot
      key={JSON.stringify(data)}
      data={[
        {
          x: data.dates,
          y: yData,
          type: 'scatter',
          mode: 'lines',
          marker: { color: '#7F7F7F' },
          fill: 'tozeroy',
          fillcolor: `rgba(127, 127, 127, 0.1)`,
          name: graphName,
        }
      ]}
      layout={{
        title: {
          text: '<b>Stock Price</b>',
          x: 0.05,
          xanchor: 'left',
          y: 0.95,
          yanchor: 'top',
          font: {
            size: 36,
            family: 'Arial, sans-serif',
            color: '#000000',
            weight: '900',
          },
        },
        xaxis: {
          range: [startDate, endDate],
          type: 'date',
          rangeslider: {
            visible: true,
          },
        },
        updatemenus: [
          {
            buttons: [
              { 
                method: 'relayout',
                args: ['yaxis.range', [Math.min(...yData), Math.max(...yData)]],
                label: graphName
              },
              { 
                method: 'relayout',
                args: ['yaxis.range', [Math.min(...data.high_prices), Math.max(...data.high_prices)]],
                label: 'High Prices'
              },
              { 
                method: 'relayout',
                args: ['yaxis.range', [Math.min(...data.low_prices), Math.max(...data.low_prices)]],
                label: 'Low Prices'
              },
            ],
            direction: 'down',
            showactive: true,
            x: 0, // Moved to the extreme left
            xanchor: 'left', // Anchored to the left
            y: 1.2,
            yanchor: 'top'
          }
        ]
      }}
      config={{ responsive: true }} 
      style={{ width: '100%', height: '100%' }} 
    />
  );
};

export default AdvancedPlot;



