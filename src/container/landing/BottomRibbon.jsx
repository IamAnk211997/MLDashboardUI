import React from 'react'
import { Card } from "flowbite-react"

import FlowTable from '../../components/table/FlowTable';
import MainComponent from '../../components/chart/MainComponent';

const BottomRibbon = ({data}) => {

    return (
        <div className="flex flex-1 flex-col justify-evenly gap-2 mt-4">
            <Card className="h-full w-full self-center">
                <MainComponent data={data}/>
            </Card>
        </div>
    )
}

export default BottomRibbon