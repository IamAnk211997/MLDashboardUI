import React from "react";
////////////////////////////////////////////////////////////////////////////////

import { Table } from "flowbite-react";

export function TableComp() {
	return (
		<div className='overflow-x-auto'>
			<Table>
				{/* <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head> */}
				<Table.Body className='divide-y'>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='text-left font-bold'>Open</Table.Cell>
						<Table.Cell className='text-right font-bold'>{data.open.toFixed(2).toLocaleString()}</Table.Cell>
						<Table.Cell className='text-left font-bold'>High</Table.Cell>

						<Table.Cell className='text-right font-bold'>{data.high.toFixed(2).toLocaleString()}</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							Microsoft Surface Pro
						</Table.Cell>
						<Table.Cell>White</Table.Cell>
						<Table.Cell>Laptop PC</Table.Cell>
						<Table.Cell>$1999</Table.Cell>
						<Table.Cell>
							<a
								href='#'
								className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
					<Table.Row className='bg-white dark:border-gray-700 dark:bg-gray-800'>
						<Table.Cell className='whitespace-nowrap font-medium text-gray-900 dark:text-white'>
							Magic Mouse 2
						</Table.Cell>
						<Table.Cell>Black</Table.Cell>
						<Table.Cell>Accessories</Table.Cell>
						<Table.Cell>$99</Table.Cell>
						<Table.Cell>
							<a
								href='#'
								className='font-medium text-cyan-600 hover:underline dark:text-cyan-500'
							>
								Edit
							</a>
						</Table.Cell>
					</Table.Row>
				</Table.Body>
			</Table>
		</div>
	);
}

/////////////////////////////////////////////////////
const DataWidget = ({ data }) => {
	{
		/* <table >
            <tbody>
                <tr>
                    <td className="text-left font-bold">Open</td>
                    <td className="text-right font-bold">{data.open.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">High</td>
        
                    <td className="text-right font-bold">{data.high.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">Low</td>
                    <td className="text-right font-bold">{data.low.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">Previous Close</td>
                    <td className="text-right font-bold">{data.previous_close.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">All Time High</td>
                    <td className="text-right font-bold">{data.all_time_high.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">52 Week High</td>
                    <td className="text-right font-bold">{data.fiftytwo_week_high.toFixed(2).toLocaleString()}</td>
                </tr>
                <tr>
                    <td className="text-left font-bold">All Time Low</td>
                    <td className="text-right font-bold">{data.all_time_low.toFixed(2).toLocaleString()}</td>
                    <td className="text-left font-bold">52 Week Low</td>
                    <td className="text-right font-bold">{data.fiftytwo_week_low.toFixed(2).toLocaleString()}</td>
                </tr>
            </tbody>
        </table> */
	}
	return (
		<div className='overflow-x-auto'>
			<Table>
				{/* <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Color</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head> */}
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

