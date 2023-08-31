import styles from "./UserLogin.module.css";

export function UserLogin() {
    return (
        <div className={styles.containerInputLogin}>
            <input 
                type="text"
                id="idLogin"
                name="idLogin"
                className={ styles.inputLogin }
                placeholder="Login"
                maxLength={19}
            ></input>
        </div>
    );
}