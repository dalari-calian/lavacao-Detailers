import styles from "./ClientInput.module.css"

export function ClientInput({ id, detail, placeholder, maxLength }) {
    return (
        <div>
            <p>{detail}</p>
            <input
                type="text"
                id={id}
                maxLength={maxLength}
                className={styles.inputClientName}
                placeholder={placeholder}
            />
        </div>
    );
}