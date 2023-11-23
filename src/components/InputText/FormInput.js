import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown }) {

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
    
    const handleOnChange = (e) => {
        if (type === "number" && ((parseFloat(e.target.value) < 0) || (parseFloat(e.target.value) > 999.9))) {
            return;
        }
        onChange(e);
    }

    return (
        <div className={styles.inputContainer}>
            <p>{detail}</p>
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
                onChange={handleOnChange}
                onFocus={(e) => handleOnFocusInput(id)}
                disabled={disable}
                onKeyDown={onKeyDown}
            />
            {showError && <AlertIcon className={styles.alertIcon} />}
        </div>
    );
}
