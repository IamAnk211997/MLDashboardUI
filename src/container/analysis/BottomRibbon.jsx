import React from 'react'
import { Card } from "flowbite-react"
import AdvancedMAPlot from '../../components/chart/AdvancedMAPlot'
import AdvancedPlot from '../../components/chart/AdvancedPlot'


const BottomRibbon = ({data,charty}) => {

    return (
        <div className="flex flex-row justify-evenly gap-2 ">

            <Card className=" w-2/4">
                <AdvancedPlot data={charty}/>
            </Card>
            <Card className=" w-2/4">
                <AdvancedMAPlot data={data}/>
            </Card>

        </div>
    )
}

export default BottomRibbon