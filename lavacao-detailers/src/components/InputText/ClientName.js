import styles from "./ClientName.module.css"

export function ClientName({ placeholder, id }) {
    return (
        <div>
            <input
                type="text"
                id={id}
                placeholder={placeholder}
                maxLength={15}
                className={ styles.inputClientName }
            />
        </div>
    );
}