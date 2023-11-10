  import styles from "./LoginPage.module.css";
  import { BtLogin } from "../components/Buttons/BtLogin";
  import { UserLogin } from "../components/InputText/UserLogin";
  import { UserPassword } from "../components/InputText/UserPassword";
  import { useState } from "react";
  import LogoDetailer from "../assets/icon/detailer-logo-1-removebg-preview.png"
  import { LoginError } from "../components/Error/LoginError";
  import { useNavigate } from 'react-router-dom';
  import axios from "axios";

  export function LoginPage() {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleLoginClick = async (e) => {
      e.preventDefault();

      try {
        const response = await axios.post("http://localhost:3333/login/validate", {
          login,
          password,
        });
      
        if (response.status === 200) {
          setError("");
          navigate('/homepage');
        } else {
          setError("Login ou Senha Inválido!");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setError("Login ou Senha Inválido!");
        } else {
          setError("Erro durante o login. Tente novamente!");
        }
      }
      
      
      /*
      try {
        const response = await fetch("http://localhost:3333/login/validate", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ login, password }),
        });
        
        if (response.ok) {
          const data = await response.json();
          console.log("Login successful:", data);
          setError(""); // Limpa qualquer erro anterior
          // Redirecione ou execute a ação desejada aqui
          navigate('/homepage');
        } else {
          const data = await response.json();
          console.error("Login failed:", data.message);
          setError("Login ou Senha Inválido!"); // Define uma mensagem de erro
        }

      } catch (error) {
        console.error("Error during login:", error);
        setError("Erro durante o login. Tente novamente mais tarde.");
      }
      */
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
