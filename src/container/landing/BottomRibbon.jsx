import React from 'react'
import { Card } from "flowbite-react"
// import PlotMain from '../../components/chart/PlotMain';
import AdvancedPlot from '../../components/chart/AdvancedPlot';
import FlowTable from '../../components/table/FlowTable';

const BottomRibbon = ({data,tableData}) => {
    return (
        <div className="flex flex-1 flex-row justify-evenly gap-2 mt-4">
            <Card className="h-full w-4/6 self-center">
                {/* <PlotMain data={data.stock_data}/> */}
                <AdvancedPlot data={data.stock_data}/>
            </Card>
            <div className="h-full w-full flex flex-col gap-2.5">
                <Card className="h-1/5 w-full p-4 self-center">
                    {tableData && <FlowTable columns={tableData.columns} data={tableData.data} format={true}/>}
                </Card>
                <div className="h-full w-full flex flex-row gap-2.5">
                    <Card className="h-1/5 w-full p-3 self-center">
                        <div className="flex items-center relative text-2xl font-bold">Show Full Data</div>
                    </Card>
                    <Card className="h-1/5 w-full p-3 self-center">
                        <div className="flex items-center relative text-2xl font-bold">Show Forecast</div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default BottomRibbon