import React from 'react';
import Plot from 'react-plotly.js';

const DoughnutChart = ({ data }) => {
    const errPercentage = data;
    const accPercentage = 100-data;

    const colors = ['#228B22', '#FF0000'];
    
    return (
        <Plot
            data={[
                {
                    values: [accPercentage, errPercentage],
                    type: 'pie',
                    hole: 0.7,
                    marker: {
                        colors: colors,
                        line: {
                            color: 'grey',
                            width: 2,
                        },
                    },
                    hoverinfo: 'none',
                },
            ]}
            layout={{
                title: {
                    text: '<b>Error Percentage</b>',
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
                        text: `${errPercentage}%`,
                        x: 0.5,
                        y: 0.5,
                    },
                ],
                showlegend: false,
            }}
            config={{ responsive: true, staticPlot: true }}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default DoughnutChart;