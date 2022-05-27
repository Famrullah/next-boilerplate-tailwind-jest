import React from 'react';
import DataTable, { TableProps } from 'react-data-table-component';
import { AiOutlineArrowDown } from 'react-icons/ai';

const sortIcon = <AiOutlineArrowDown />;

const customStyles = {
  rows: {
    style: {
      minHeight: '72px', // override the row height
    },
  },
  headCells: {
    style: {
      padding: '15px 8px',
      background: '#e7e5e4',
      color: '#535353',
    },
  },
  cells: {
    style: {
      padding: '10px 8px',
    },
  },
};

const MyComponent: React.FC<any> = (props: TableProps<any>) => (
  <DataTable
    noContextMenu
    customStyles={customStyles}
    pagination
    selectableRows
    sortIcon={sortIcon}
    dense
    striped
    highlightOnHover
    {...props}
  />
);

export default MyComponent;
