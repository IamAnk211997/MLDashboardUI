import React from 'react';
import Plot from 'react-plotly.js';

const AdvancedCandlePlot = ({ data }) => {
    console.log(data)
  const range = data.dates;
  const startDate = new Date('2020-01-01');
  const endDate = range[range.length - 1];

  return (
    data && (
      <Plot
        key={JSON.stringify(data)}
        data={[
          {
            x: data.dates,
            close: data.closing_prices,
            decreasing: { line: { color: 'green' } },
            high: data.high_prices,
            increasing: { line: { color: 'red' } },
            line: { color: 'rgba(31,119,180,1)' },
            low: data.low_prices,
            open: data.opening_prices,
            type: 'candlestick',
          },
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
              visible: false,
            },
            type: 'date',
          },
        }}
        config={{ responsive: true }}
        style={{ width: '100%', height: '100%' }}
      />
    )
  );
};

export default AdvancedCandlePlot;
