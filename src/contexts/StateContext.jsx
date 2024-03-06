import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState('');

  return (
    <StateContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);