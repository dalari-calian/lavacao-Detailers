import style from './DeleteConfirmation.module.css'

export function DeleteConfirmation() {
    return (
        <div className={style.containerModal}>
            <p>ALERT IMAGE</p>
            <p>Are you sure?</p>
            <p>This action cannot be undone. All values</p>
            <p>associated with this field will be lost.</p>
            <p>Delete</p>
            <p>Cancel</p>
        </div>
    )
}