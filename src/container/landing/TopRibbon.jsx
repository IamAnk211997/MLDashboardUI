import React from 'react'
import { Card } from "flowbite-react"
import Ticker from '../../components/ticker/Ticker';
import DataWidget from '../../components/datawidget/DataWidget';

const TopRibbon = ({data}) => {
    console.log(data);
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-4">
            {/* <Ticker data={data.tickerData}/> */}
            <Card className=" w-1/4 p-4">
                <Ticker data={data.tickerData}/>
            </Card>
            <Card className="w-3/4">
                <DataWidget data={data.widgetData}/>
            </Card>
        </div>
    )
}

export default TopRibbon