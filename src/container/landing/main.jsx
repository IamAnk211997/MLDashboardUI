import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';
import { Spinner } from 'flowbite-react';


const Landing = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const ticker = useSelector(Selector.widgetSelect.tickerData);
    const charty = useSelector(Selector.graphSelect.graphData);
    const spinny = useSelector(Selector.commonSelect.spinnerSelect);
    const tableData = useSelector(Selector.dataSelect.dataSelect);

    return (
        <div>
            {spinny?
            <div className="w-full h-[75vh] flex justify-center items-center">
                <Spinner aria-label="Default status example" />
            </div>:
            <>
                <TopRibbon widger={widgy} ticker={ticker}/>
                <BottomRibbon data={charty} tableData={tableData}/>
            </>           
        }
        </div>
    )
}

export default Landing