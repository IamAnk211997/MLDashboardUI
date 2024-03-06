import React, { useEffect } from 'react'
import { useStateContext } from '../../contexts/StateContext';
import TopRibbon from './TopRibbon';
import { useSelector } from 'react-redux'
import * as Selector from '@selector';
import BottomRibbon from './BottomRibbon';

const Analysis = () => {
    const { selectedItem } = useStateContext();
    const charty = useSelector(Selector.graphSelect.graphData);
    const macharty = useSelector(Selector.graphSelect.graphMaData);
    const maBar = useSelector(Selector.graphSelect.barData);

    return (
        <>
        {selectedItem!=''?
        <div className="flex flex-1 flex-col justify-evenly gap-2">
            <TopRibbon bar={maBar}/>
            <BottomRibbon data={macharty} charty={charty}/>
        </div>
        :<><div>Analysis</div></>
        }
        </>
        
    )
}

export default Analysis