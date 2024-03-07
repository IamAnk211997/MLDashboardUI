import React, { useState } from 'react';
import AdvancedCandlePlot from './AdvancedCandlePlot';
import AdvancedChart from './AdvancedChart';

const MainComponent = ({ data }) => {
    const [selectedPlotType, setSelectedPlotType] = useState('line'); 

    const handlePlotTypeChange = (event) => {
        setSelectedPlotType(event.target.value);
    };

    return (
        <div>
            {/* Dropdown to select plot type */}
            <select value={selectedPlotType} onChange={handlePlotTypeChange} style={{borderRadius:"8px", position: "absolute", zIndex:"1", marginTop: "1%", marginLeft: "18%", outline:"none"}}>
                <option value="line">Line Plot</option>
                <option value="candlestick">Candlestick Plot</option>
            </select>

            {/* Render the selected plot component */}
            {selectedPlotType === 'line' && <AdvancedChart data={data} />}
            {selectedPlotType === 'candlestick' && <AdvancedCandlePlot data={data} />}
        </div>
    );
};

export default MainComponent;
