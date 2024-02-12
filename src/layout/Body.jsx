import React from 'react'
import Landing from '../container/landing/main'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';

const Body = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const charty = useSelector(Selector.graphSelect.graphData);
    const tableData = useSelector(Selector.dataSelect.dataSelect);

    return (
        <div>
            {widgy.length != 0 && charty.length != 0 && tableData.length!=0?
                <Landing /> :
                <div className="w-full h-[75vh] flex justify-center items-center">
                    <div className="flex items-center relative text-3xl font-bold">Please select a Value from DropDown</div>
                </div>
            }
        </div>
    )
}

export default Body