import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import styles from "./FormInput.module.css";
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function FormInput({ id, detail, placeholder, maxLength, value, onChange, showError, disable }) {

    const [mask,setMask] = useState("")

    const handleOnFocusInput = (id) => {
        if (id === "idCpf") {
            setMask("999.999.999-99");
        } else if (id === "idPhone") {
            setMask("99 99999-9999");
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
