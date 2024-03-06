import React, { useState } from 'react'
import { Card, Spinner } from "flowbite-react"

// import AdvancedPlot from '../../components/chart/AdvancedPlot';
import FlowTable from '../../components/table/FlowTable';
// import FlowModal from '../../components/modal/FlowModal';
// import { useDispatch, useSelector } from 'react-redux';
// import * as Selector from '@selector';
// import * as Actions from '@action';
import AdvancedCandlePlot from '../../components/chart/AdvancedCandlePlot';

const BottomRibbon = ({data,tableData,stateData}) => {
    // console.log(data)
    // const dispatch = useDispatch();
    // const [modal, setModal] = useState(0);
    // const tableDataModal = useSelector(Selector.dataSelect.dataModalSelect);

    // const HandleModal = (state,modaltype) =>{
    //     console.log('Modal ',state,modaltype)
    //     if(state=='open')
    //     {
    //         if(modaltype==1)
    //         {
    //             dispatch({ type: Actions.TableData.GET_MODAL_WIDGET_DATA, data:stateData.selectedItem });
    //         }
    //         setModal(modaltype)
    //     }
    //     else
    //     {
    //         if(modaltype==1)
    //         {
    //             dispatch({ type: Actions.TableData.CLEAR_MODAL_WIDGET_DATA });
    //         }
    //         setModal(modaltype)
    //     }
    // }
    // const ShowTable = (modal) => {
    //     if(modal==1)
    //     {
    //         if(tableDataModal.length!=0)
    //         {
    //             return <FlowTable columns={tableDataModal.columns} data={tableDataModal.data} format={false}/>
    //         }
    //         else
    //         {
    //         return <div className="flex overflow-x-auto sm:justify-center">
    //                 <Spinner aria-label="Default status example" />
    //         </div>
    //         }           
    //     }
    //     else 
    //     return <h1>Forecasted Data is in roadmap for EndSem</h1>
    // }

    return (
        <div className="flex flex-1 flex-col justify-evenly gap-2 mt-4">
            <Card className="h-full w-full self-center">
                {/* <AdvancedPlot data={data.stock_data}/> */}
                <AdvancedCandlePlot data={data}/>
            </Card>
            <div className="h-full w-full flex flex-col gap-2.5">
                <Card className="h-1/5 w-full p-4 self-center">
                    {tableData && <FlowTable columns={tableData.columns} data={tableData.data} format={true}/>}
                </Card>
                {/* <div className="h-full w-full flex flex-row gap-2.5">
                    <Card className="h-1/5 w-full p-3 self-center">
                        <div className="flex items-center relative text-2xl font-bold" onClick={() => HandleModal('open',1)}>Show Full Data</div>
                    </Card>
                    <Card className="h-1/5 w-full p-3 self-center">
                        <div className="flex items-center relative text-2xl font-bold" onClick={() => HandleModal('open',2)}>Show Forecast</div>
                    </Card>
                </div> */}
            </div>

{/* 
            <FlowModal  
            openModal={modal!=0}
            setOpenModal={() => HandleModal('close',0)}
            modalSize={modal==1?'7xl':'2xl'}
            bodyItem={ShowTable(modal)}
            HeaderName={modal==1?'Historical Data':'Forecasted Data'}
            /> */}
        </div>
    )
}

export default BottomRibbon