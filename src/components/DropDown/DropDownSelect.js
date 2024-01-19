// CustomDropdown.js
import React from 'react';
import { styled, Select, MenuItem } from '@mui/material';

export function DropDownSelect({ options, onChange, value }) {
  return (
    <div>
      <CustomSelect
        value={value}
        onChange={onChange}
        sx={{ 
          outline: 0,
          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },

        }}
      >
        {options.map((option) => (
          <CustomMenuItem key={option.id} value={option.id}>
            {option.firstName} {option.lastName}
          </CustomMenuItem>
        ))}
      </CustomSelect>
    </div>
  );
}


const CustomSelect = styled(Select)(
  ({ theme }) => `
    background-color: var(--gray-100);
    border: 1.5px solid transparent;
    position: relative;
    font-size: 18px;
    width: 100%;
    height: 3rem;
    box-sizing: border-box;
    border-radius: 10px;
    font-size: 1.1rem;
    outline: none;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out, opacity 0.5s ease;
    margin-bottom: 25px;
    opacity: 1;

    &:focus {
      background-color: #f3a20049;
      border: 1.5px solid #f3a200c6;
    }
    
    &:hover {
      background-color: #f3a20049;
      border: 1.5px solid #f3a200c6;
      outline: none;
    }

    & .MuiSelect-icon {
      right: 30px;
    }
  `
);

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