import React from 'react'
import { Card } from "flowbite-react"
import SimpleLineChart from '../../components/chart/SimpleLineChart'
import DoughnutChart from '../../components/chart/DoughnutChart'

const TopRibbon = ({data}) => {
    return (
        <div className="flex flex-row justify-evenly gap-2 ">
            <Card className="p-4 w-2/6">
                <DoughnutChart data={data.error_percentage}/>
            </Card>
            <Card className="p-4 w-4/6">
                <SimpleLineChart data={data}/>
            </Card>
        </div>
    )
}

export default TopRibbon