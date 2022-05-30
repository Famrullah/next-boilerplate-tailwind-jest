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

const MyComponent: React.FC<any> = (props) => (
  <>
    <div className="grid grid-cols-2 gap-6 mb-2 py-2">
      <div>
        {/*  */}
      </div>
      <div className="text-right">
        {/*  */}
      </div>
    </div>

    <div className="shadow-md relative">
      <DataTable
        noContextMenu
        customStyles={customStyles}
        pagination
        dense
        paginationServer
        striped
        highlightOnHover
        noDataComponent
        {...props}
      />
    </div>
  </>
);

export default MyComponent;
