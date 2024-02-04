import React from 'react'
import Landing from '../container/landing/main'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';

const Body = () => {
    const widgy = useSelector(Selector.widgetSelect.widgetData);
    console.log(widgy);
    return (
        <div>
            {widgy.length != 0 ?
                <Landing /> :
                <div class="w-full h-[75vh] flex justify-center items-center">
                    Please select a Value from DropDown
                </div>
            }
        </div>
    )
}

export default Body