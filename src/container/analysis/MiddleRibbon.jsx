import React from 'react'
import { Card } from "flowbite-react"
import HorizontalChart from '../../components/chart/HorizontalChart'
import PredictionTable from '../../components/table/PredictionTable'

const MiddleRibbon = ({data}) => {

    let ndata = { 
        "Today": data.volume_analysis["Today"], 
        "Yesterday": data.volume_analysis["Yesterday"],
        "Day Before Yesterday": data.volume_analysis["Day Before Yesterday"], 
        "1Wk Avg": data.volume_analysis["1Wk Avg"],
        "1M Avg": data.volume_analysis["1M Avg"], 
        "3M Avg": data.volume_analysis["3M Avg"], 
 }
    return (
        <div className="flex flex-row justify-evenly gap-2 ">
            <Card className="w-2/4">
                <PredictionTable data={data.performance_data}/>
            </Card>
            <Card className="w-2/4">
                <HorizontalChart data={ndata}/>
            </Card>
        </div>
    )
}

export default MiddleRibbon