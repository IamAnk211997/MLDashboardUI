import React, { useState } from 'react';
import Dropdown from '../components/dropdown/main';
import { stockData } from '../data';

const Header = ({stateData}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center relative text-3xl font-bold">My Dashboard</div>
            <div className="relative">
                <Dropdown data={stockData} stateData={stateData}/>
            </div>
        </div>
    </div>
  );
};

export default Header;
