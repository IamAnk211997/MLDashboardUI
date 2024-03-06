import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import * as Selector from '@selector';
import TopRibbon from './TopRibbon';
import BottomRibbon from './BottomRibbon';
import { Spinner } from 'flowbite-react';
// import socketIOClient from 'socket.io-client';

// const ENDPOINT = 'http://localhost:5000'; 

const Landing = () => {

    // const [stockData, setStockData] = useState([]);

    // useEffect(() => {
    //     const socket = socketIOClient(ENDPOINT);
    
    //     socket.emit('stock_name', 'AAPL');
        
    //     // Listen for real-time data updates from the server
    //     socket.on('stock_data', (data) => {
    //       setStockData(data);
    //     });
    
    //     return () => socket.disconnect();
    //   }, []);

    //   useEffect(() => {
    //     console.log("This: ",stockData);
    //   }, [stockData]);


    const widgy = useSelector(Selector.widgetSelect.widgetData);
    const ticker = useSelector(Selector.widgetSelect.tickerData);
    const charty = useSelector(Selector.graphSelect.graphData);
    const spinny = useSelector(Selector.commonSelect.spinnerSelect);
    const tableData = useSelector(Selector.dataSelect.dataSelect);

    return (
        <div>
            {spinny?
            <div className="w-full h-[75vh] flex justify-center items-center">
                <Spinner aria-label="Default status example" />
            </div>:
            <>
                <TopRibbon widger={widgy} ticker={ticker}/>
                <BottomRibbon data={charty} tableData={tableData}/>
            </>           
        }
        </div>
    )
}

export default Landing