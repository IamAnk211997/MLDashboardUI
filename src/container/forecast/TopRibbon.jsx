import React from 'react'
import { Card } from "flowbite-react"
import AdvancedMAPlot from '../../components/chart/AdvancedMAPlot'


const TopRibbon = ({data}) => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-4">

            <Card className="p-4">
                <AdvancedMAPlot data={data}/>
            </Card>

        </div>
    )
}

export default TopRibbon