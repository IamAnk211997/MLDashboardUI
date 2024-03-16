import React, { useEffect } from 'react'
import { useStateContext } from '../../contexts/StateContext';
import TopRibbon from './TopRibbon';
import { useSelector } from 'react-redux'
import * as Selector from '@selector';
import BottomRibbon from './BottomRibbon';
import MiddleRibbon from './MiddleRibbon';

const Analysis = () => {
    const { selectedItem } = useStateContext();
    const charty = useSelector(Selector.graphSelect.graphData);
    const macharty = useSelector(Selector.graphSelect.graphMaData);
    const maBar = useSelector(Selector.graphSelect.barData);
    const performanceData = useSelector(Selector.dataSelect.perfSelect);

    return (
        <>
        {selectedItem!=''?
        <div className="flex flex-1 flex-col justify-evenly gap-2">
            <BottomRibbon data={macharty} charty={charty}/>
            <MiddleRibbon  data={performanceData} />
            <TopRibbon bar={maBar}/>
            
        </div>
        :<><div>Analysis</div></>
        }
        </>
        
    )
}

export default Analysis