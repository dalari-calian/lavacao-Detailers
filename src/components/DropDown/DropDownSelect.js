// CustomDropdown.js
import React from 'react';
import { styled, Select, MenuItem } from '@mui/material';

export function DropDownSelect({ id, options, onChange, value, disabled}) {
  
  const placeholders = {
    carOwner: { id: 0, firstName: 'Selecione', lastName: 'um proprietário' },
    carOrder: { id: 0, brand: 'Selecione', model: 'um veículo' },
    colorOrder: { id: 0, name: 'Selecione uma cor' },
    licensePlateOrder: { id: 0, license: 'Selecione uma placa' },
    default: { id: 0, label: 'Selecione uma opção' }
  };

  const getPlaceholderOption = (id) => {
    return placeholders[id] || placeholders.default;
  };

  const placeholderOption = getPlaceholderOption(id);
  const allOptions = [placeholderOption, ...options];
  
  const renderOption = (option) => {
    if (id === 'carOwner') { return `${option.firstName} ${option.lastName}`}
    if (id === 'carOrder') { return `${option.brand} ${option.model}`}
    if (id === 'colorOrder') { return `${option.name}`}
    if (id === 'licensePlateOrder') { return `${option.license}`}
  };

  return (
    <div>
      <CustomSelect
        value={value}
        onChange={onChange}
        disabled={disabled}
        isplaceholderselected={value === 0}
        sx={{ 
          outline: 0,
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },

        }}
      >
        {allOptions.map((option) => (
          <CustomMenuItem key={option.id} value={option.id}>
            {renderOption(option)}
          </CustomMenuItem>
        ))}
      </CustomSelect>
    </div>
  );
}


const CustomSelect = styled(Select, {
  shouldForwardProp: (prop) => prop !== 'isplaceholderselected'
})(({ isplaceholderselected }) => `
  background-color: var(--gray-100);
  border: 1.5px solid transparent;
  position: relative;
  width: 100%;
  height: 3rem;
  box-sizing: border-box;
  border-radius: 10px;
  font-size: 1.1rem;
  margin-bottom: 25px;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out, opacity 0.5s ease;

  .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  .Mui-focused .MuiOutlinedInput-notchedOutline {
    border: none !important;
  }

  .MuiSelect-select {
    padding: 0 32px 0 12px;
    display: flex;
    align-items: center;
    height: 100%;
    color: ${isplaceholderselected ? 'rgba(0, 0, 0, 0.6)' : 'black'};
  }

  &:hover {
    background-color: #f3a20049;
    border: 1.5px solid #f3a200c6;
  }

  &.Mui-focused {
    background-color: #f3a20049;
    border: 1.5px solid #f3a200c6;
  }

  & .MuiSelect-icon {
    right: 30px;
  }
`);


const CustomMenuItem = styled(MenuItem)(
  ({ theme }) => `
    color: black;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: var(--gray-100);
      color: black;
    }

    &.Mui-selected {
      background-color: #f3a20025;
      color: #754e00;
    }

    &.Mui-selected:hover {
      background-color: #aa710094;
      color: #754e00;
    }
  `
);