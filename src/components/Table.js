import React from 'react'
import DataTable, { createTheme } from 'react-data-table-component'

const Table = ({columns,data}) => {

  createTheme('solarized', {
    text: {
      primary: '#268bd2',
      secondary: '#2aa198',
    },
    background: {
      default: '#002b36',
    },
    context: {
      background: '#cb4b16',
      text: '#FFFFFF',
    },
    divider: {
      default: '#073642',
    },
    action: {
      button: 'rgba(0,0,0,.54)',
      hover: 'rgba(0,0,0,.08)',
      disabled: 'rgba(0,0,0,.12)',
    },
  }, 'dark');

  const customStyles = {
    rows: {
        style: {
            minHeight: '35px', // override the row height
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            background:"lightGray",
        },
    },
    cells: {
        style: {
            paddingLeft: '8px', // override the cell padding for data cells
            paddingRight: '8px',
            padding:"5px"
        },
    },
};


  return (
    <>
    <DataTable
        columns={columns}
        data={data}
        customStyles={customStyles}
    />
    </>
  )
}

export default Table