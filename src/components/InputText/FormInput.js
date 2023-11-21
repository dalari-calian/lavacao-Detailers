import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat }) {

    const [mask,setMask] = useState("")

    const handleOnFocusInput = (id) => {
        if (id === "idCpf") {
            setMask("999.999.999-99");
        } else if (id === "idPhone") {
            setMask("99 99999-9999");
        } else if (id === "idLicensePlate" && plateFormat === false) {
            setMask("AAA-9999");
        } else if (id === "idLicensePlate" && plateFormat === true) {
            setMask("AAA9A99");
        } else {
            setMask("");
        }
    }

    return (
        <div className={styles.inputContainer}>
            <p>{detail}</p>
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
            />
            {showError && <AlertIcon className={styles.alertIcon} />}
        </div>
    );
}
