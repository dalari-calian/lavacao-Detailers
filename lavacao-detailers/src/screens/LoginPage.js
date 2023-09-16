import styles from "./LoginPage.module.css";
import { BtLogin } from "../components/Buttons/BtLogin";
import { UserLogin } from "../components/InputText/UserLogin";
import { UserPassword } from "../components/InputText/UserPassword";
import { useState } from "react";
import LogoDetailer from "../assets/icon/detailer-logo-1-removebg-preview.png"
import { LoginError } from "../components/Error/LoginError";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = (e) => {
    // Validação de login e senha

    console.log("Login: "+ login)
    console.log("Senha: "+ password)

    if (login === "calian" && password === "123") {
      // Lógica de autenticação bem-sucedida
      setError(""); // Limpa qualquer erro anterior
      // Redirecione ou execute a ação desejada aqui
    } else {
      e.preventDefault();

      setError("Login ou Senha Inválido!"); // Define uma mensagem de erro
    }
  };
  
  return (
    <form className={ styles.containerPage }>
      <div className={ styles.containerBg }>
        <div className={ styles.containerImg}>
          <img 
            src={ LogoDetailer }
            alt="Logo Detailer"
            className={ styles.logoDetailer}
          />
        </div>
        <div className={ styles.containerLogin }>
            <UserLogin 
              className={ styles.inputLogin }
              name="idLogin"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <UserPassword 
              className={ styles.inputSenha }
              name="idPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <BtLogin 
          className={ styles.btLogin }
          onClick={(e) => handleLoginClick(e)}
        />
        <div className={ styles.containerErro }>
          {error && <LoginError error={error} onClick={(e) => setError("")}/>}
        </div>
      </div>
    </form>
  );
}
