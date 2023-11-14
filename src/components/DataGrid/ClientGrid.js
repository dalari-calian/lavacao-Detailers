import React from 'react';
import PropTypes from 'prop-types';
import style from './ClientGrid.module.css';
import { DataGrid } from '@mui/x-data-grid';

export function ClientGrid({ items }) {
  const columns = [
    { 
      field: 'firstName',
      headerName: 'Nome',
      width: 300,
      align: 'center',
    },
    { 
      field: 'lastName',
      headerName: 'Sobrenome',
      width: 300,
      align: 'center',
    },
    { 
      field: 'cpf',
      headerName: 'CPF',
      width: 280,
      align: 'center',
    },
    { 
      field: 'email',
      headerName: 'Email',
      width: 350,
      align: 'center',
    },
    { 
      field: 'phone',
      headerName: 'Celular',
      width: 280,
      align: 'center',
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
  
  const localizedTexts = {
    
    toolbarFilters: 'Filtros',
    toolbarFiltersLabel: 'Mostrar filtros',
    toolbarFiltersTooltipHide: 'Esconder filtros',
    toolbarFiltersTooltipShow: 'Mostrar filtros',
    
  };
  
  return (
    <div className={style.gridContainer}>
      <div style={{ height: 650, width: '85vw' }}>
        <DataGrid
          className={style.gridStyle}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          localeText={localizedTexts}
          disableRowSelectionOnClick={true}
          sx={{
            '.MuiDataGrid-columnSeparator': {
              display: 'none',
            },
            '&.MuiDataGrid-root': {
              border: 'none',
            },
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
