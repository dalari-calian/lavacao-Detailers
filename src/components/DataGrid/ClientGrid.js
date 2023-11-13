import React from 'react';
import PropTypes from 'prop-types';
import style from './ClientGrid.module.css';
import { DataGrid } from '@mui/x-data-grid';

export function ClientGrid({ items }) {
  const columns = [
    { 
      field: 'firstName',
      headerName: 'Nome',
      width: 250,
      headerClassName: style.headerCell
    },
    { 
      field: 'lastName',
      headerName: 'Sobrenome',
      width: 250
    },
    { 
      field: 'cpf',
      headerName: 'CPF',
      width: 220
    },
    { 
      field: 'email',
      headerName: 'Email',
      width: 300
    },
    { 
      field: 'phone',
      headerName: 'Celular',
      width: 250 
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
    // Substitua o texto padrão "Rows per page:" por sua tradução desejada
    pagination: {
      rowsPerPage: 'Linhas por página:',
    },
    // Adicione mais traduções conforme necessário
  };
  
  return (
    <div className={style.gridContainer}>
      <div style={{ height: 550, width: '85vw' }}>
        <DataGrid
          className={style.gridStyle}
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5, 10, 20]}
          pagination
          localeText={localizedTexts}
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
