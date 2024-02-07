import React from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';

const Landing = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const charty = useSelector(Selector.graphSelect.graphData);
    console.log(widgy);
    console.log(charty);
    return (
        <div>
            <TopRibbon data={widgy}/>
            <BottomRibbon data={charty}/>
        </div>
    )
}

export default Landing