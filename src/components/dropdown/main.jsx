import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as Actions from "../../action";

const Dropdown = ({ data }) => {
  const stockData = data;
  const dispatch = useDispatch();
  const [selectedOption, setSelectedOption] = useState('');

  const dropChange = (evt) => {
    const selectedValue = evt.target.value;
    console.log(selectedValue);
    setSelectedOption(selectedValue);
    dispatch({ type: Actions.WidgetData.GET_WIDGET_DATA });
  }

  return (
    <div className="relative text-black">
      <select
        className="block appearance-none w-full bg-white-100 border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        id="grid-state"
        onChange={(e) => dropChange(e)}
        value={selectedOption}
      >
        {selectedOption ? null : <option value="">Select</option>}
        {stockData.map((stock, index) => (
          <option key={index} value={stock.name}>
            {stock.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
