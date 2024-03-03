import React from 'react'
import { Card } from "flowbite-react"
import Ticker from '../../components/ticker/Ticker';
import DataWidget from '../../components/datawidget/DataWidget';

const TopRibbon = ({widger, ticker}) => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-4">
            {/* <Ticker data={data.tickerData}/> */}
            <Card className=" w-2/6 p-4">
                <Ticker data={ticker}/>
            </Card>
            <Card className="w-4/6">
                <DataWidget data={widger}/>
            </Card>
        </div>
    )
}

export default TopRibbon