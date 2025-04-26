import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";
import { DropDownSelect } from '../DropDown/DropDownSelect';

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange, carOwnersOptions, idCarOwner }) {

    const [mask,setMask] = useState("")
    const [selectedOwner, setSelectedOwner] = useState(null)

    useEffect(() => {
        // Define o estado `selectedOwner` com base em `idCarOwner`
        setSelectedOwner(idCarOwner !== "" ? idCarOwner : 0);
    }, [idCarOwner]);

    const handleOnFocusInput = (id) => {
        setMask(
            id === "idCpf" ? "999.999.999-99" :
            id === "idPhone" ? "99 99999-9999" :
            (id === "idLicensePlate" && plateFormat === false) ? "AAA-9999" :
            (id === "idLicensePlate" && plateFormat === true) ? "AAA9A99" :
            ""
        );
    }

    const handleSelectChange = (event) => {
      const idCarOwner = event.target.value
      setSelectedOwner(idCarOwner)
      onChange(idCarOwner)
    };

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
            <DropDownSelect
                id='carOwner'
                placeholder={placeholder}
                options={carOwnersOptions.result || []}
                onChange={handleSelectChange}
                value={selectedOwner}
                disabled={disable}
            />
          )
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