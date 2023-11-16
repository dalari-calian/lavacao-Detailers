import React from 'react';
import PropTypes from 'prop-types';
import style from './ClientGrid.module.css';
import { DataGrid, ptBR } from '@mui/x-data-grid';

export function ClientGrid({ items }) {
  const columns = [
    { 
      field: 'firstName',
      headerName: 'Nome',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'lastName',
      headerName: 'Sobrenome',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'cpf',
      headerName: 'CPF',
      width: 230,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'email',
      headerName: 'Email',
      width: 300,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'phone',
      headerName: 'Celular',
      width: 230,
      headerClassName: style.headerStyle,
    },
  ];

  const rows = items.map((client) => ({
    id: client.id,
    firstName: client.firstName,
    lastName: client.lastName,
    cpf: client.cpf,
    email: client.email,
    phone: client.phone,
  }));
  
  return (
    <div className={style.gridContainer}>
      <div style={{ height: 600, width: '85vw' }}>
        <DataGrid
          className={style.gridStyle}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
          disableRowSelectionOnClick={true}
          sx={
            {
            'borderRadius': '20px',
            'backgroundColor': '#F4F4F4',
            'boxShadow': '4px 4px 40px 2px #00000040',
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '& .MuiDataGrid-columnHeaders': {
              backgroundColor: "#C8C8C8",
              borderRadius: "20px 20px 0px 0px",
              paddingLeft: "1rem"
            },
            '.MuiDataGrid-row': {
              paddingLeft: "1rem"
            },
            '.MuiDataGrid-selectedRowCount': {
              backgroundColor: "red"
            }
          }}
        />
      </div>
    </div>
  );
}

ClientGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      createdAt: PropTypes.string.isRequired,
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      cpf: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    })
  ).isRequired,
};
