import React from 'react';

const DataWidget = ({ data }) => {
    return (
        <table className="table-auto w-full">
            <tbody>
                <tr>
                    <td className="text-left font-bold">Open</td>
                    <td className="text-right font-bold">{data.open.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">High</td>
                    <td className="text-right font-bold">{data.high.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">Low</td>
                    <td className="text-right font-bold">{data.low.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">Previous Close</td>
                    <td className="text-right font-bold">{data.previous_close.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">All Time High</td>
                    <td className="text-right font-bold">{data.all_time_high.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">52 Week High</td>
                    <td className="text-right font-bold">{data.fiftytwo_week_high.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">All Time Low</td>
                    <td className="text-right font-bold">{data.all_time_low.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">52 Week Low</td>
                    <td className="text-right font-bold">{data.fiftytwo_week_low.toFixed(2).toLocaleString()}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default DataWidget;
