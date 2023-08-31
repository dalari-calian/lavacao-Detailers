import styles from "./LoginPage.module.css";
import BtLogin from "../components/Buttons/BtLogin";
import { UserLogin } from "../components/InputText/UserLogin";
import { UserPassword } from "../components/InputText/UserPassword";

export function LoginPage() {
  return (
    <div className={ styles.containerPage }>
      <div className={ styles.containerLogin }>
          <UserLogin 
            className={ styles.inputLogin }
            name="idLogin"
          />
          <UserPassword 
            className={ styles.inputSenha }
            name="idPassword"
          />
        </div>
          <BtLogin className={ styles.btLogin }/>
    </div>
  );
}
