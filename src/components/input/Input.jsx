import React, { useState } from 'react';

const Input = () => {
  const [inputValue, setInputValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState('');
  let timeout;

  // Function to update the state with debounced value
  const updateDebouncedValue = (value) => {
    setDebouncedValue(value);
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Clear the timeout if it exists
    clearTimeout(timeout);

    // Set a timeout to update the debounced value after 2000ms (2 seconds)
    timeout = setTimeout(() => {
      updateDebouncedValue(value);
    }, 2000);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <p>Input value: {inputValue}</p>
      <p>Debounced value: {debouncedValue}</p>
    </div>
  );
};

export default Input;
