import styles from "./UserLogin.module.css";

export function UserLogin() {
    return (
        <div>
            <p>Login</p>
            <input 
                type="text"
                id="idLogin"
                name="idLogin"
                className={ styles.inputLogin } 
            ></input>
        </div>
    );
}