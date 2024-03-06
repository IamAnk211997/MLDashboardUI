import React from 'react';
import Plot from 'react-plotly.js';

const MonthlyHighandLow = ({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    // Extracting data for volume and high-low
    const months = data.slice(0, -1).map(entry => entry.Month);
    //const volumes = data.map(entry => entry.Volume);
    const highs = data.slice(0, -1).map(entry => entry.High);
    const lows = data.slice(0, -1).map(entry => entry.Low);

    return (
        <div>
            {/* Bar graph for volume */}
            {/* <Plot
                data={[
                    {
                        x: months,
                        y: volumes,
                        type: 'bar',
                        name: 'Volume'
                    }
                ]}
                layout={{
                    title: 'Monthly Volume',
                    xaxis: {
                        title: 'Month'
                    },
                    yaxis: {
                        title: 'Volume'
                    }
                }}
            /> */}

            {/* Bar graph for high-low */}
            <Plot
                data={[
                    {
                        x: months,
                        y: highs,
                        type: 'lines',
                        name: 'High'
                    },
                    {
                        x: months,
                        y: lows,
                        type: 'lines',
                        name: 'Low'
                    }
                ]}
                layout={{
                    title: 'Monthly High-Low',
                    xaxis: {
                        title: 'Month'
                    },
                    yaxis: {
                        title: 'Price'
                    }
                }}
                config={{ responsive: true }} 
                style={{ width: '100%', height: '100%' }} 
            />
        </div>
    );
};

export default MonthlyHighandLow;
