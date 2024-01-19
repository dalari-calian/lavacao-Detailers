import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";
import { DropDownSelect } from '../DropDown/DropDownSelect';

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange, carOwnersOptions }) {

    const [mask,setMask] = useState("")
    const [selectedOwner, setSelectedOwner] = useState(null)

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
      const carOwner = event.target.value
      setSelectedOwner(carOwner)
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
              placeholder={placeholder}
              options={carOwnersOptions.result || []}
              onChange={handleSelectChange}
              value={selectedOwner}
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