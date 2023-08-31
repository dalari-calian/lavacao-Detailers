import React, { useState } from 'react';
import styles from "./UserPassword.module.css";
import { ReactComponent as HideIcon } from "../../assets/img/form-view-hide.svg";
import { ReactComponent as ShowIcon } from "../../assets/img/show.svg";

export function UserPassword() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className={styles.containerInputSenha}>
            <input
                type={showPassword ? 'text' : 'password'}
                id="idPassword"
                name="idPassword"
                value={password}
                onChange={handlePasswordChange}
                className={styles.inputSenha}
                placeholder='Senha'
                maxLength={19}
            />
            <button className={styles.btMostrarSenha} onClick={toggleShowPassword}>
                {showPassword ? <HideIcon /> : <ShowIcon />}
            </button>
        </div>
    );
}
