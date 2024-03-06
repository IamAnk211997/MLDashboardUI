import React from 'react'
import { Card } from "flowbite-react"
import MonthlyBarVolume from '../../components/chart/MonthlyBarVolume'
import MonthlyHighandLow from '../../components/chart/MonthlyHighandLow'

const TopRibbon = ({bar}) => {
    return (
        <div className="flex flex-row justify-evenly gap-2 ">
            <Card className=" w-2/4">
                <MonthlyBarVolume data={bar}/>
            </Card>
            <Card className=" w-2/4">
                <MonthlyHighandLow data={bar}/>
            </Card>
        </div>
    )
}

export default TopRibbon