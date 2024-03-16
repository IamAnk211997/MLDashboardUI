import React from 'react';

const ProgressBar = ({ value }) => {
  const percentage = Math.min(Math.max(value, -100), 100); // Ensure value is between -100 and 100
  const barColor = value >= 0 ? 'green' : 'red'; // Determine color based on value
  return (
    <div style={{ width: '100px', height: '10px', border: '1px solid #ccc' }}>
      <div
        style={{
          width: `${Math.abs(percentage)}%`,
          height: '100%',
          backgroundColor: barColor,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
