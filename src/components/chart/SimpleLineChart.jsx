import React from 'react';
import Plot from 'react-plotly.js';

const SimpleLineChart = ({data}) => {

    return (
        <Plot
            data={[
                {
                    x: data.days,
                    y: data.predictedValue,
                    type: 'scatter',
                    mode: 'lines',
                    line: { color: 'rgba(172,225,175, 1)' },
                },
            ]}
            layout={{
                title: {
                    text: '<b>Price Prediction for 30 days</b>',
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
                    title: 'Days',
                    type: 'category',
                },
                yaxis: {
                    title: 'Closing Price',
                },
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default SimpleLineChart;
