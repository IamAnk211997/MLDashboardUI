import React from "react";
import { Table } from "flowbite-react";

const DataWidget = ({ data }) => {
	return (
		<div className='overflow-x-auto'>
			<Table>
				<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='text-left font-bold'>Open</Table.Cell>
						<Table.Cell className='text-right font-bold'>{data.open.toFixed(2).toLocaleString()}</Table.Cell>
						<Table.Cell className='text-left font-bold'>High</Table.Cell>

						<Table.Cell className='text-right font-bold'>{data.high.toFixed(2).toLocaleString()}</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='text-left font-bold'>Low</Table.Cell>
						<Table.Cell className='text-right font-bold'>{data.low.toFixed(2).toLocaleString()}</Table.Cell>
						<Table.Cell className='text-left font-bold'>Previous Close</Table.Cell>
						<Table.Cell className='text-right font-bold'>
							{data.previous_close.toFixed(2).toLocaleString()}
						</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='text-left font-bold'>All Time Low</Table.Cell>
						<Table.Cell className='text-right font-bold'>
							{data.all_time_low.toFixed(2).toLocaleString()}
						</Table.Cell>
						<Table.Cell className='text-left font-bold'>52 Week Low</Table.Cell>
						<Table.Cell className='text-right font-bold'>
							{data.fiftytwo_week_low.toFixed(2).toLocaleString()}
						</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='text-left font-bold'>All Time High</Table.Cell>
						<Table.Cell className='text-right font-bold'>
							{data.all_time_low.toFixed(2).toLocaleString()}
						</Table.Cell>
						<Table.Cell className='text-left font-bold'>52 Week Low</Table.Cell>
						<Table.Cell className='text-right font-bold'>
							{data.fiftytwo_week_low.toFixed(2).toLocaleString()}
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
};

export default DataWidget;

