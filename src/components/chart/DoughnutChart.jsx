import React from 'react';
import Plot from 'react-plotly.js';

const DoughnutChart = () => {
    const errorValue = 2178;
    const percentage = 55;

    return (
        <Plot
            data={[
                {
                    values: [percentage, 100 - percentage],
                    labels: [`Error: ${errorValue}`, ''],
                    type: 'pie',
                    hole: 0.7,
                    marker: {
                        colors: ['#228B22', 'rgba(0,0,0,0)'], // Error color and transparent color
                        line: {
                            color: 'grey', // Border color
                            width: 2, // Border width
                        },
                    },
                    hoverinfo: 'none',
                },
            ]}
            layout={{
                title: {
                    text: '<b>Error Chart</b>',
                    x: 0.5,
                    xanchor: 'center',
                    y: 0.9,
                    yanchor: 'top',
                    font: {
                        size: 24,
                        family: 'Arial, sans-serif',
                        color: '#000000',
                        weight: 'bold',
                    },
                },
                annotations: [
                    {
                        font: {
                            size: 36,
                            color: '#000000',
                        },
                        showarrow: false,
                        text: `${percentage}%`,
                        x: 0.5,
                        y: 0.5,
                    },
                ],
                showlegend: false,
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default DoughnutChart;
