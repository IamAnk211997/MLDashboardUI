import React, { useState } from 'react';
import { Pagination, Table } from 'flowbite-react';

const FlowTable = ({ columns, data, format }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  columns = format?columns.filter(item => item.label !== "Dividends" && item.label !== "Stock Splits"):columns;
  // Function to format date from "Tue, 06 Feb 2024 05:00:00 GMT" to 'dd/mm/yyyy'
  const DataFormatter = (col, rowData) => {
    if (col === 'Date') {
      const date = new Date(rowData);
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear();
      return `${day}/${month}/${year}`;
    } else {
      return format ? rowData.toFixed(2).toLocaleString() : rowData;
    }
  };

  // Pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Table>
        <Table.Head>
          {columns.map((column, index) => (
            <Table.HeadCell key={index}>{column.label}</Table.HeadCell>
          ))}
        </Table.Head>
        <Table.Body>
          {currentItems.map((row, rowIndex) => (
            <Table.Row key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Table.Cell key={colIndex}>{DataFormatter(column.name, row[column.name])}</Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      {data.length > itemsPerPage && (
        <div className="flex overflow-x-auto sm:justify-center">
          <Pagination
            totalPages={Math.ceil(data.length / itemsPerPage)}
            currentPage={currentPage}
            onPageChange={paginate}
          />
        </div>
      )}
    </>
  );
};

export default FlowTable;
