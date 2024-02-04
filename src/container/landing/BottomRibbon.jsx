import React from 'react'
import { Card } from "flowbite-react"
import PlotMain from '../../components/chart/PlotMain';

const BottomRibbon = () => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-2 mt-4">
            <Card className="h-full w-4/6 p-4 self-center">
                <PlotMain />
            </Card>
            <div className="h-full w-full p-4 self-center">
                <Card className="h-1/5 w-full p-4 self-center">
                    Table
                </Card>
                <Card className="h-1/5 w-full p-4 self-center">
                    Open Table
                </Card>
            </div>
        </div>
    )
}

export default BottomRibbon