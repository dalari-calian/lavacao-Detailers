import styles from "./LoginPage.module.css";
import BtLogin from "../components/Buttons/BtLogin";
import { UserLogin } from "../components/InputText/UserLogin";
import { UserPassword } from "../components/InputText/UserPassword";

export function LoginPage() {
  return (
    <div className={ styles.containerPage }>
        <div className={ styles.containerLogin }>
            <UserLogin className={ styles.inputLogin }/>
            <UserPassword className={ styles.inputSenha }/>
            <BtLogin className={ styles.btLogin }/>
        </div>
    </div>
  );
}
