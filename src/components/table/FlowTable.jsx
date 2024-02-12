import React from 'react';
import { Table } from "flowbite-react";

const FlowTable = ({ columns, data, format }) => {
  // Function to format date from "Tue, 06 Feb 2024 05:00:00 GMT" to 'dd/mm/yyyy'

  columns = format?columns.filter(item => item.label !== "Dividends" && item.label !== "Stock Splits"):columns;
  const DataFormatter = (Col, data) => {
    if(Col=='Date')
    {
      const date = new Date(data);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    }
    else
    return format?data.toFixed(2).toLocaleString():data;
  };

  return (
    <Table>
      <Table.Head>
        {columns.map((column, index) => (
          <Table.HeadCell key={index}>{column.label}</Table.HeadCell>
        ))}
      </Table.Head>
      <Table.Body>
        {data.map((row, rowIndex) => (
          <Table.Row key={rowIndex}>
            {columns.map((column, colIndex) => (
              <Table.Cell key={colIndex}>{DataFormatter(column.name,row[column.name])}</Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default FlowTable;
