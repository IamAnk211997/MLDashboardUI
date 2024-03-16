import React from 'react';
import { Table } from 'flowbite-react';
import ProgressBar from '../chart/ProgressBar';

const FlowTableData = ({ data }) => {

    return (
        <>
            <Table striped>
                <Table.Head>
                    {Object.keys(data[0]).map((key, index) => (
                        <Table.HeadCell key={index}>
                            <div style={{ width: '100%', overflow: 'hidden' }}>{key}</div>
                        </Table.HeadCell>
                    ))}
                </Table.Head>
                <Table.Body>
                    {data.map((row, rowIndex) => (
                        <Table.Row key={rowIndex}>
                            {Object.entries(row).map(([colName, value], colIndex) => (
                                <Table.Cell key={colIndex}>
                                    {colName === 'Returns' && typeof value === 'number' ? (
                                        <ProgressBar value={value} />
                                    ) : 
                                    
                                        colName === 'Close'? value.toFixed(2).toLocaleString(): value
                                    
                                    }
                                </Table.Cell>
                            ))}
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </>
    );
};

export default FlowTableData;