import React from 'react'
import { useStateContext } from '../../contexts/StateContext';
import TopRibbon from './TopRibbon';


const Forecast = () => {
    const { selectedItem } = useStateContext();

    return (
        <>
        {selectedItem!=''?
            <div className="flex flex-1 flex-col justify-evenly gap-2">
                <TopRibbon/>   
            </div>
        :<><div>Forecast</div></>
        }
        </>
        
    )
}

export default Forecast