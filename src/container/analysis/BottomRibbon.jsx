import React from 'react'
import { Card } from "flowbite-react"
import AdvancedMAPlot from '../../components/chart/AdvancedMAPlot'


const BottomRibbon = ({data}) => {

    return (
        <div className="flex flex-col justify-center">
            <Card>
                <AdvancedMAPlot data={data}/>
            </Card>
            
        </div>
    )
}

export default BottomRibbon