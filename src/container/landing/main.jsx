import React from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';
import { Spinner } from 'flowbite-react';

const Landing = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const charty = useSelector(Selector.graphSelect.graphData);
    const spinny = useSelector(Selector.commonSelect.spinnerSelect);
    console.log('spinner state',spinny);
    return (
        <div>
            {spinny?
            <div className="w-full h-[75vh] flex justify-center items-center">
                <Spinner aria-label="Default status example" />
            </div>:
            <>
                <TopRibbon data={widgy}/>
                <BottomRibbon data={charty}/>
            </>           
        }
        </div>
    )
}

export default Landing