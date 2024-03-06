import React from 'react'
import { useStateContext } from '../../contexts/StateContext';


const Forecast = () => {
    const { selectedItem } = useStateContext();

    return (
        <>
        {selectedItem!=''?
        <><div>Devlopment in progress</div></>
        :<><div>Forecast</div></>
        }
        </>
        
    )
}

export default Forecast