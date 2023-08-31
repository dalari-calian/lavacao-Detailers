import styles from "./UserLogin.module.css";

export function UserLogin({ value, onChange }) {
    return (
        <div className={styles.containerInputLogin}>
            <input 
                type="text"
                id="idLogin"
                name="idLogin"
                className={ styles.inputLogin }
                placeholder="Login"
                maxLength={17}
                value={value}
                onChange={onChange}
            ></input>
        </div>
    );
}