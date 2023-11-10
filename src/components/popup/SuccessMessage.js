import style from './SuccessMessage.module.css'

export function SuccessMessage({ message }) {
    return (
        <div className={style.successMessage}>
            <p>{message}</p>
        </div>
    )
}