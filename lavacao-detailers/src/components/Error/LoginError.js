import styles from "./LoginError.module.css";
import { ReactComponent as Close } from "../../assets/img/close-bold.svg";

export function LoginError({ error, onClick }) {
    return (
        <div className={styles.containerErro}>            
            <p>{error}</p>
            <button
                className={styles.btClose}
                onClick={onClick}
            ><Close className={styles.button} /></button>
        </div>
    );
}