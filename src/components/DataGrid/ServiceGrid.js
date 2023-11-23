import React from 'react';
import PropTypes from 'prop-types';
import style from './ServiceGrid.module.css';
import { DataGrid, ptBR } from '@mui/x-data-grid';

export function ServiceGrid({ items }) {
  const columns = [
    { 
      field: 'name',
      headerName: 'Serviço',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'time',
      headerName: 'Tempo Gasto',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'price',
      headerName: 'Valor',
      width: 230,
      headerClassName: style.headerStyle,
    },
  ];
  
  const rows = items.map((service) => ({
    id: service.id,
    name: service.name,
    time: `${service.time} horas`,
    price: `R$ ${service.price}`,
  }));
  
  return (
    <div className={style.gridContainer}>
      <div style={{ height: 600, width: '43vw' }}>
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
            '.MuiDataGrid-columnHeaders': {
              backgroundColor: "#C8C8C8",
              borderRadius: "20px 20px 0px 0px",
              paddingLeft: "1rem",
            },
            '.MuiDataGrid-row': {
              paddingLeft: "1rem",
            },
            '.MuiDataGrid-cell:focus': {
              outline: 0,
            },
          }}
        />
      </div>
    </div>
  );
}

ServiceGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
    })
  ).isRequired,
};
