import React, { useState } from 'react';
import "./styles/UserPassStyle.css";

function UserPassword() {
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className='containerInputSenha'>
            <input
                type={showPassword ? 'text' : 'password'}
                id="idPassword"
                name="idPassword"
                placeholder="Senha"
                value={password}
                onChange={handlePasswordChange}
                className="inputSenha"
            />
            <button className="btMostrarSenha" onClick={toggleShowPassword}>
                {showPassword ? "Esconder Senha" : "Mostrar Senha"}
            </button>
        </div>
    );
}

export default UserPassword;
