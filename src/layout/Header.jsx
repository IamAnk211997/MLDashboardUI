import React, { useState } from 'react';
import Dropdown from '../components/dropdown/main';
import { stockData } from '../data';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../contexts/StateContext';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { selectedItem, setSelectedItem } = useStateContext();
  const stateData = {selectedItem,setSelectedItem};

  let navigateTo = useNavigate()

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex justify-between gap-5">
              <div className="flex items-center relative text-3xl font-bold" onClick={() => navigateTo('/Landing')}>My Dashboard</div>
              <div className="flex items-center relative text-2xl font-bold" onClick={() => navigateTo('/Analysis')}>Analysis</div>
              <div className="flex items-center relative text-2xl font-bold" onClick={() => navigateTo('/Forecast')}>Forecast</div>
            </div>
            <div className="relative">
                <Dropdown data={stockData} stateData={stateData} homeAction={() => navigateTo('/Landing')}/>
            </div>
        </div>
    </div>
  );
};

export default Header;
