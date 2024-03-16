import React from 'react';
import Plot from 'react-plotly.js';

const SimpleLineChart = () => {
    // Generate random data for the next days
    const generateRandomData = () => {
        const numDays = 30; // Number of days to display
        const startDate = new Date();
        const dates = [];
        const closingPrices = [];

        for (let i = 0; i < numDays; i++) {
            const currentDate = new Date(startDate);
            currentDate.setDate(startDate.getDate() + i);
            dates.push(currentDate.toISOString().slice(0, 10)); // Format date as YYYY-MM-DD

            // Generate random closing price between 4500 and 4900
            const closingPrice = Math.floor(Math.random() * (4900 - 4500 + 1)) + 4500;
            closingPrices.push(closingPrice);
        }

        return { dates, closingPrices };
    };

    const { dates, closingPrices } = generateRandomData();

    return (
        <Plot
            data={[
                {
                    x: dates,
                    y: closingPrices,
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
                    title: 'Date',
                    type: 'category',
                },
                yaxis: {
                    title: 'Closing Price',
                    range: [4400, 5000], // Adjust range if needed
                },
            }}
            config={{ responsive: true }}
            style={{ width: '100%', height: '100%' }}
        />
    );
};

export default SimpleLineChart;
