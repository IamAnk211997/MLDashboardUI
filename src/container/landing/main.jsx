import React from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';
import { Spinner } from 'flowbite-react';

const Landing = ({stateData}) => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const charty = useSelector(Selector.graphSelect.graphData);
    const spinny = useSelector(Selector.commonSelect.spinnerSelect);
    const tableData = useSelector(Selector.dataSelect.dataSelect);
    console.log('spinner state',tableData);
    return (
        <div>
            {spinny?
            <div className="w-full h-[75vh] flex justify-center items-center">
                <Spinner aria-label="Default status example" />
            </div>:
            <>
                <TopRibbon data={widgy}/>
                <BottomRibbon data={charty} tableData={tableData} stateData={stateData}/>
            </>           
        }
        </div>
    )
}

export default Landing