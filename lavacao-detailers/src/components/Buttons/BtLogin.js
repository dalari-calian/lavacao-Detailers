import styles from "./styles/BtStyles.module.css";

export function BtLogin( { onClick }) {
    return (
        <div>
            <button
            className={styles.btLogin}
            onClick={onClick}
            type="submit"
            >
                ENTRAR
            </button>
        </div>
    );
}
  