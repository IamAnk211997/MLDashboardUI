import React from 'react';
import UpArrow from '@assets/triangle-up.svg';
import DownArrow from '@assets/triangle-down.svg';

const Ticker = ({ data }) => {
    const isPositiveDifference = data.difference_from_yesterday > 0;
console.log(data.difference_from_yesterday,isPositiveDifference);
    const arrowStyle = {
        height: '20px', // Adjust the height of the arrow image
        marginRight: '5px' // Add margin to the right of the arrow
    };

    const textStyle = {
        color: isPositiveDifference ? '#228B22':'#d12345' ,
        fontSize: '16px', // Adjust the font size of the text
        marginLeft: '5px' // Add margin to the left of the text
    };

    const formatDate = (dateTimeString) => {
        const dateTime = new Date(dateTimeString);
        const dateOptions = {
            year: 'numeric',
            month: 'short',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        };
        const formattedDate = dateTime.toLocaleString('en-US', dateOptions);
        return formattedDate;
    }
    

    return (
        <div className='sm:hidden md:hidden lg:scale-95 xl:scale-110 px-5'>
            <div className="text-2xl font-bold">{data.stock_name}</div>
            <div className="text-3xl font-bold">{data.price.toFixed(2).toLocaleString()}</div>
            <div className="flex flex-row items-center text-1xl font-bold">
                {isPositiveDifference ? (
                    <img src={UpArrow} alt="Up Arrow" style={arrowStyle} />
                ) : (
                    <img src={DownArrow} alt="Down Arrow" style={arrowStyle} />
                )}
                <span style={textStyle}>
                    {data.difference_from_yesterday.toFixed(4).toLocaleString()} ({data.percentage_difference.toFixed(2)+ ' %'})
                </span>
            </div>
            <div className="text-xs font-bold text-gray-500">
                As on {formatDate(data.time_fetched_on)}
            </div>
        </div>
    );
};

export default Ticker;
