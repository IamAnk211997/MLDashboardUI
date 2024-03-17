import React, { useEffect, useState } from 'react'
import { useStateContext } from '../../contexts/StateContext';
import TopRibbon from './TopRibbon';
import { useDispatch, useSelector } from 'react-redux';
import * as Selector from '@selector';
import * as Actions from "../../action";
import { Spinner } from 'flowbite-react';
const Forecast = () => {
    const dispatch = useDispatch();
    const { selectedItem } = useStateContext();
    const forecastData = useSelector(Selector.widgetSelect.forecastData);
    const spinny = useSelector(Selector.commonSelect.spinnerSelect);

    useEffect(() => {
        if (forecastData.length == 0) {
            dispatch({ type: Actions.WidgetData.GET_FORECAST_DATA, data: selectedItem });
        }
    }, [dispatch])

    return (
        <>
            {forecastData.length==0 || spinny ?
                <>
                    <div className="w-full h-[75vh] flex justify-center items-center">
                        <Spinner aria-label="Default status example" />
                    </div>
                </>
                : <>
                    <div className="flex flex-1 flex-col justify-evenly gap-2">
                        <TopRibbon data={forecastData} />
                    </div>

                </>
            }
        </>

    )
}

export default Forecast