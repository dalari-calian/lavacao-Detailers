import React, { useState } from 'react';
import styles from "./UserPassword.module.css";

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
        <div className={ styles.containerInputSenha }>
            <input
                type={showPassword ? 'text' : 'password'}
                id="idPassword"
                name="idPassword"
                value={password}
                onChange={handlePasswordChange}
                className={ styles.inputSenha }
            />
            <button className={ styles.btMostrarSenha } onClick={toggleShowPassword}>
                {showPassword ? "Esconder Senha" : "Mostrar Senha"}
            </button>
        </div>
    );
}
