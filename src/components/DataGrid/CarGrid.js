import React from 'react';
import PropTypes from 'prop-types';
import style from './CarGrid.module.css';
import { DataGrid, ptBR } from '@mui/x-data-grid';

export function CarGrid({ items }) {
  const columns = [
    { 
      field: 'modelName',
      headerName: 'Modelo',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'carBrand',
      headerName: 'Marca',
      width: 250,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'licensePlate',
      headerName: 'Placa',
      width: 230,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'carColor',
      headerName: 'Cor',
      width: 300,
      headerClassName: style.headerStyle,
    },
    { 
      field: 'carOwner',
      headerName: 'Proprietário',
      width: 230,
      headerClassName: style.headerStyle,
    },
  ];
  
  const rows = items.map((car) => ({
    id: car.id,
    modelName: car.modelName,
    carBrand: car.carBrand,
    licensePlate: car.licensePlate,
    carColor: car.carColor,
    carOwner: car.carOwner,
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

CarGrid.propTypes = {
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
