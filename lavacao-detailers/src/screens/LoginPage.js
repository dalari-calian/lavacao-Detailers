import styles from "./LoginPage.module.css";
import { BtLogin } from "../components/Buttons/BtLogin";
import { UserLogin } from "../components/InputText/UserLogin";
import { UserPassword } from "../components/InputText/UserPassword";
import { useState } from "react";

export function LoginPage() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    // Validação de login e senha

    console.log("Login: "+ login)
    console.log("Senha: "+ password)

    if (login === "seu_usuario" && password === "sua_senha") {
      // Lógica de autenticação bem-sucedida
      setError(""); // Limpa qualquer erro anterior
      // Redirecione ou execute a ação desejada aqui
    } else {
      setError("Login ou senha inválidos"); // Define uma mensagem de erro
    }
  };
  
  return (
    <div className={ styles.containerPage }>
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
    </div>
  );
}
