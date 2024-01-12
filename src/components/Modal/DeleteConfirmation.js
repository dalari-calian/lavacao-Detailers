import style from './DeleteConfirmation.module.css'
import { ReactComponent as AlertDeleteIcon } from "../../assets/icon/alertDeleteIcon.svg";
import PropTypes from 'prop-types';

export function DeleteConfirmation({ selectedCar, onClose, onDelete }) {
    return (
        <div className={style.containerModal}>
            <div className={style.containerAlertIcon}>
                <AlertDeleteIcon
                    className={style.alertIcon}
                />
            </div>
            <p className={style.questionText}>
                Você tem certeza?
            </p>
            <p className={style.alertMessage}>
                Esta ação não pode ser desfeita. Todos os
                valores associados com este veículos serão
                perdidos.
            </p>
            <p className={style.carDetails}>
                {selectedCar ? `Veículo: ${selectedCar.modelName} | Placa: ${selectedCar.licensePlate}` : ''}
            </p>
            <div className={style.containerButtons}>
                <button className={style.deleteButton} onClick={onDelete}>
                    Deletar registro
                </button>
                <button className={style.cancelButton} onClick={onClose}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

DeleteConfirmation.propTypes = {
    selectedCar: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};