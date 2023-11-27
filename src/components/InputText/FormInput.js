import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange }) {

    const [mask,setMask] = useState("")
    const [type,setType] = useState("text")

    const handleOnFocusInput = (id) => {
        setMask(
            id === "idCpf" ? "999.999.999-99" :
            id === "idPhone" ? "99 99999-9999" :
            (id === "idLicensePlate" && plateFormat === false) ? "AAA-9999" :
            (id === "idLicensePlate" && plateFormat === true) ? "AAA9A99" :
            ""
        );

        setType(
            id === "idTime" ? "number" : "text"
        )

    }

    return (
        <div className={styles.inputContainer}>
            <p>{detail}</p>
            {id === "idPrice" ? (
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
                        return floatValue < 100000;
                    }}
                />
            ) : (
                <InputMask
                    type={type}
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
            )}
            {showError && <AlertIcon className={styles.alertIcon} />}
        </div>
    );
}
