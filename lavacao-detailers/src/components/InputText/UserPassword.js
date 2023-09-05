import React, { useState } from 'react';
import styles from "./UserPassword.module.css";
import { ReactComponent as HideIcon } from "../../assets/img/form-view-hide.svg";
import { ReactComponent as ShowIcon } from "../../assets/img/show.svg";

export function UserPassword({ value, onChange }) {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.containerInputSenha}>
            <input
                type={showPassword ? 'text' : 'password'}
                id="idPassword"
                name="idPassword"
                value={value}
                onChange={onChange}
                className={styles.inputSenha}
                placeholder='Senha'
                maxLength={20}
            />
            <button 
            className={styles.btMostrarSenha} 
            onClick={toggleShowPassword}
            type="button"
            >
                {showPassword ? <HideIcon /> : <ShowIcon />}
            </button>
        </div>
    );
}
