import styles from './BtCreate.module.css'

export function BtCreate({ onClick, label, disable }) {
    return (
        <div
            className={`${styles.btCreate} ${disable ? styles.disabled : ''}`}
            onClick={onClick}
        >
            <p>{label}</p>
        </div>
    )
}