import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './CarGrid.module.css';
import { DeleteConfirmation } from '../Modal/DeleteConfirmation';
import { DataGrid, ptBR } from '@mui/x-data-grid';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
  deleteIcon: {
    color: '#d44e4c',
  },
  editIcon: {
    color: '#dba539',
  }
}));

export function CarGrid({ items, onItemsChange, onEditClick }) {
  const classes = useStyles();
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  const handleDeleteClick = async (id) => {
    const carToDelete = items.find((item) => item.id === id);
    setSelectedCar(carToDelete);
    setShowDeleteConfirmation(true);
  };

  const handleDeleteConfirmationClose = () => {
    setShowDeleteConfirmation(false);
  };

  const handleDeleteConfirmationDelete = async () => {
    if (selectedCar) {
      try {
        await axios.delete(`http://localhost:3333/car/${selectedCar.id}`);

        const updatedItems = items.filter((item) => item.id !== selectedCar.id);
        onItemsChange(updatedItems);
      } catch (error) {
        console.error('Erro ao excluir o registro:', error);
      } finally {
        // Limpar o estado após a exclusão
        setSelectedCar(null);
        setShowDeleteConfirmation(false);
      }
    }
  };

  const handleEditClick = (id) => {
    onEditClick(id);
  };
  
  const columns = [
    {
      field: 'editAction',
      headerName: '',
      width: 62,
      sortable: false,
      headerClassName: style.headerStyle,
      renderCell: (params) => (
        <IconButton
          aria-label="edit"
          className={classes.margin}
          onClick={() => handleEditClick(params.row.id)}
        >
          <EditIcon 
            fontSize="small"
            sx={{ color: '#dba539' }}
          />
        </IconButton>
      ),
    },
    {
      field: 'deleteAction',
      headerName: '',
      width: 100,
      sortable: false,
      headerClassName: style.headerStyle,
      renderCell: (params) => (
        <IconButton 
          aria-label="delete"
          className={classes.margin}
          onClick={() => handleDeleteClick(params.row.id)}
        >
          <DeleteIcon 
            fontSize="small" 
            className={classes.deleteIcon} 
          />
        </IconButton>
      ),
    },
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
    deleteAction: '',
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
      {showDeleteConfirmation && (
        <DeleteConfirmation
          selected={selectedCar}
          onClose={handleDeleteConfirmationClose}
          onDelete={handleDeleteConfirmationDelete}
        />
      )}
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
