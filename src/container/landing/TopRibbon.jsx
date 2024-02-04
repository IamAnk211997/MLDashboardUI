import React from 'react'
import { Card } from "flowbite-react"

const TopRibbon = ({data}) => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-4">
            <Card className="h-full w-1/3 p-4 self-center">
                {data.tickerData!=undefined?data.tickerData.stock_name:"Ticker"}
            </Card>
            <Card className="h-full w-2/3 p-4 self-center">
                data
            </Card>
        </div>
    )
}

export default TopRibbon