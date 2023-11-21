import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat }) {

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
