import React from 'react';
import DataTable from 'react-data-table-component';

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

const MyComponent: React.FC<any> = (props) => {
  console.log(props);
  return (
    <DataTable
      noContextMenu
      customStyles={customStyles}
      pagination
      selectableRows
      dense
      striped
      highlightOnHover
      {...props}
    />
  );
};

export default MyComponent;
