import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";
import PropTypes from 'prop-types';
import { Select as BaseSelect, selectClasses } from '@mui/base/Select';
import { Option as BaseOption, optionClasses } from '@mui/base/Option';
import { Popper as BasePopper } from '@mui/base/Popper';
import { styled } from '@mui/system';
import UnfoldMoreRoundedIcon from '@mui/icons-material/UnfoldMoreRounded';

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange, carOwnersOptions }) {

    const [mask,setMask] = useState("")

    const handleOnFocusInput = (id) => {
        setMask(
            id === "idCpf" ? "999.999.999-99" :
            id === "idPhone" ? "99 99999-9999" :
            (id === "idLicensePlate" && plateFormat === false) ? "AAA-9999" :
            (id === "idLicensePlate" && plateFormat === true) ? "AAA9A99" :
            ""
        );
    }

    const renderInput = () => {
        if (id === "idPrice") {
            return (
            <NumericFormat
                value={value}
                thousandSeparator="."
                decimalSeparator=","
                prefix="R$ "
                decimalScale={2}
                onValueChange={onValueChange}
                onChange={onChange}
                className={`${styles.inputFormName} ${showError ? styles.error : ''}`}
                placeholder={placeholder}
                onFocus={(e) => handleOnFocusInput(id)}
                onKeyDown={onKeyDown}
                disabled={disable}
                isAllowed={(values) => {
                    const { floatValue } = values;
                    return floatValue < 100000 && floatValue >= 0;
                }}
            />
            );
        } else if (id === "idCarOwner")  {
            return (
                <Select placeholder={placeholder}>
                    {carOwnersOptions.result && carOwnersOptions.result.map((owner) => (
                        <Option key={owner.id} value={owner.id}>
                            {owner.firstName} {owner.lastName}
                        </Option>
                    ))}
                </Select>
            );
        } else if (id === "idTime") {
            return (
                <NumericFormat
                    value={value}
                    thousandSeparator="."
                    decimalSeparator=","
                    placeholder={placeholder}
                    onValueChange={onValueChange}
                    onChange={onChange}
                    className={`${styles.inputFormName} ${showError ? styles.error : ''}`}
                    onFocus={(e) => handleOnFocusInput(id)}
                    onKeyDown={onKeyDown}
                    decimalScale={1}
                    disabled={disable}
                    isAllowed={(values) => {
                        const { floatValue } = values;
                        return floatValue < 1000 && floatValue >= 0;
                    }}
                />
            );
        } else {
            return (
                <InputMask
                    type="text"
                    id={id}
                    mask={mask}
                    maskChar={null}
                    maxLength={maxLength}
                    formatChars={{
                    'A': '[A-Za-z]',
                    '9': '[0-9]',
                    }}
                    className={`${styles.inputFormName} ${showError ? styles.error : ''}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={(e) => handleOnFocusInput(id)}
                    disabled={disable}
                    onKeyDown={onKeyDown}
                />
            );
        }
    };

    return (
        <div className={styles.inputContainer}>
          <p>{detail}</p>
          {renderInput()}
          {showError && <AlertIcon className={styles.alertIcon} />}
        </div>
      );
}


const Select = React.forwardRef(function CustomSelect(props, ref) {
    const slots = {
      root: StyledButton,
      listbox: Listbox,
      popper: Popper,
      ...props.slots,
    };
  
    return <BaseSelect {...props} ref={ref} slots={slots} />;
});

Select.propTypes = {
    /**
     * The components used for each slot inside the Select.
     * Either a string to use a HTML element or a component.
     * @default {}
     */
    slots: PropTypes.shape({
      listbox: PropTypes.elementType,
      popper: PropTypes.func,
      root: PropTypes.elementType,
    }),
};

const blue = {
    100: '#DAECFF',
    200: '#99CCF3',
    400: '#3399FF',
    500: '#007FFF',
    600: '#0072E5',
    700: '#0059B2',
    900: '#003A75',
};
  
const grey = {
    50: '#F3F6F9',
    100: '#E5EAF2',
    200: '#DAE2ED',
    300: '#C7D0DD',
    400: '#B0B8C4',
    500: '#9DA8B7',
    600: '#6B7A90',
    700: '#434D5B',
    800: '#303740',
    900: '#1C2025',
};
  
const Button = React.forwardRef(function Button(props, ref) {
    const { ownerState, ...other } = props;
    return (
      <button type="button" {...other} ref={ref}>
        {other.children}
        <UnfoldMoreRoundedIcon />
      </button>
    );
});
  
Button.propTypes = {
    children: PropTypes.node,
    ownerState: PropTypes.object.isRequired,
};
  
const StyledButton = styled(Button, { shouldForwardProp: () => true })(
    ({ theme }) => `
    width: 84%;
    font-family: 'Roboto', sans-serif;
    font-size: 18px;
    box-sizing: border-box;
    min-width: 320px;
    padding: 8px 12px;
    border-radius: 8px;
    margin-bottom: 25px;
    text-align: left;
    line-height: 1.5;
    background: #eeeeee;
    border: 1.5px solid transparent;
    color: #424242;
    position: relative;
    transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out, opacity 0.5s ease;
  
    &:hover {
        background-color: #f3a20049;
        border: 1.5px solid #f3a200c6;
    }

    &:focus {
        background-color: #f3a20049;
        border: 1.5px solid #f3a200c6;
    }
  
    &.${selectClasses.focusVisible} {
      outline: 0;
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
    }
  
    & > svg {
      font-size: 1rem;
      position: absolute;
      height: 100%;
      top: 0;
      right: 10px;
    }
    `,
);
  
const Listbox = styled('ul')(
    ({ theme }) => `
    font-family: 'Roboto', sans-serif;
    font-size: 0.875rem;
    box-sizing: border-box;
    padding: 6px;
    margin: 12px 0;
    min-width: 320px;
    max-height: 200px;
    border-radius: 12px;
    overflow: auto;
    outline: 0px;
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    box-shadow: 0px 2px 4px ${
      theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
    };
    `,
);
  
const Option = styled(BaseOption)(
    ({ theme }) => `
    list-style: none;
    padding: 8px;
    border-radius: 8px;
    cursor: default;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  
    &:last-of-type {
      border-bottom: none;
    }
  
    &.${optionClasses.selected} {
      background-color: ${theme.palette.mode === 'dark' ? blue[900] : blue[100]};
      color: ${theme.palette.mode === 'dark' ? blue[100] : blue[900]};
    }
  
    &.${optionClasses.highlighted} {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
  
    &:focus-visible {
      outline: 3px solid ${theme.palette.mode === 'dark' ? blue[600] : blue[200]};
    }
    
    &.${optionClasses.highlighted}.${optionClasses.selected} {
      background-color: #f3a20025;
      color: #ffaa00;
    }
  
    &.${optionClasses.disabled} {
      color: ${theme.palette.mode === 'dark' ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionClasses.disabled}) {
      background-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[100]};
      color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    }
    `,
);
  
const Popper = styled(BasePopper)`
    z-index: 1;
`;