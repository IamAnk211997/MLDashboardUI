import React from "react";
import { Table } from "flowbite-react";
import { Progress } from "flowbite-react";

const PredictionTable = ({ data }) => {
    return (
        <>
            <div className='overflow-x-auto'>
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Duration</Table.HeadCell>
                        <Table.HeadCell>Close</Table.HeadCell>
                        <Table.HeadCell>Returns</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className='divide-y'>
                        {data.map((value, index) => (
                            <Table.Row key={value.sl}>
                                <Table.Cell> {value.Duration}</Table.Cell>
                                <Table.Cell> {Math.floor(value.Close).toPrecision(6)}</Table.Cell>
                                <Table.Cell>
                                    <div className="flex-1 flex flex-row">
                                        {/* take fraction only two decimal value */}
                                        <div className="flex-1">{Math.floor(value.Returns).toPrecision(3)}</div>
                                        <div className="flex-1">
                                            <Progress
                                                progress={Math.floor(Math.abs(value.Returns))}
                                                color={Math.floor(value.Returns) >= 0 ? "green" : "red"}
                                            />
                                        </div>
                                    </div>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};

export default PredictionTable;
