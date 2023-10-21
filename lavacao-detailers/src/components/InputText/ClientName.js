import styles from "./ClientName.module.css"

export function ClientName({ id, detail }) {
    return (
        <div>
            <p>{detail}</p>
            <input
                type="text"
                id={id}
                maxLength={15}
                className={ styles.inputClientName }
            />
        </div>
    );
}