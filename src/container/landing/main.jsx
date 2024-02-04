import React from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';

const Landing = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    console.log(widgy);
    return (
        <div>
            <TopRibbon data={widgy}/>
            <BottomRibbon/>
        </div>
    )
}

export default Landing