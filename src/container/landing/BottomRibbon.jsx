import React from 'react'
import { Card } from "flowbite-react"
// import PlotMain from '../../components/chart/PlotMain';
import AdvancedPlot from '../../components/chart/AdvancedPlot';

const BottomRibbon = ({data}) => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-2 mt-4">
            <Card className="h-full w-4/6 self-center">
                {/* <PlotMain data={data.stock_data}/> */}
                <AdvancedPlot data={data.stock_data}/>
            </Card>
            <div className="h-full w-full flex flex-col">
                <Card className="h-1/5 w-full p-4 self-center">
                        Table
                </Card>
                <div className="h-full w-full flex flex-row">
                    <Card className="h-1/5 w-full p-4 self-center">
                        Show Full Data
                    </Card>
                    <Card className="h-1/5 w-full p-4 self-center">
                        Show Forecast
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default BottomRibbon