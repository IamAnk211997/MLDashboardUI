import React from 'react';
import Plot from 'react-plotly.js';

const MonthlyBarVolume = ({ data }) => {
    if (!data || data.length === 0) {
        return null;
    }

    // Extracting data for volume and high-low
    const months = data.slice(0, -1).map(entry => entry.Month);
    const volumes = data.slice(0, -1).map(entry => entry.Volume);
    // const highs = data.map(entry => entry.High);
    // const lows = data.map(entry => entry.Low);

    return (
        <div>
            {/* Bar graph for volume */}
            <Plot
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
                config={{ responsive: true }} 
                style={{ width: '100%', height: '100%' }} 
            />

            {/* Bar graph for high-low */}
            {/* <Plot
                data={[
                    {
                        x: months,
                        y: highs,
                        type: 'bar',
                        name: 'High'
                    },
                    {
                        x: months,
                        y: lows,
                        type: 'bar',
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
            /> */}
        </div>
    );
};

export default MonthlyBarVolume;
