import styles from './BtCreate.module.css'

export function BtCreate({ onClick, label }) {
    return (
        <div 
            className={styles.btCreate}
            onClick={onClick}
        >
            <p>{label}</p>
        </div>
    )
}