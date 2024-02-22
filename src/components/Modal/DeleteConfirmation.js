import style from './DeleteConfirmation.module.css'
import { ReactComponent as AlertDeleteIcon } from "../../assets/icon/alertDeleteIcon.svg";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function DeleteConfirmation({ selected, onClose, onDelete, disabled, errorMessage, titleError }) {
    const [isVisible, setIsVisible] = useState(false);

    const defaultMessage = "Esta ação não pode ser desfeita. Todos os\nvalores associados com este veículos serão\nperdidos."
    const defaultTittle = "Você tem certeza?"

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const handleCancelClick = () => {
        
        setIsVisible(false);
        setTimeout(() => {
          onClose();
        }, 500);
    };

    return (
        <div className={`${style.containerModal} ${isVisible ? style.fadeIn : style.fadeOut}`}>
            <div className={style.containerAlertIcon}>
                <AlertDeleteIcon
                    className={style.alertIcon}
                />
            </div>
            <p className={style.questionText}>
                {titleError ? titleError : defaultTittle}
            </p>
            <p className={style.alertMessage}>
                {errorMessage ? errorMessage : defaultMessage}
            </p>
            <p className={style.carDetails}>
                {selected.modelName ? `Veículo: ${selected.modelName} | Placa: ${selected.licensePlate}` : ''}
                {selected.firstName ? `Cliente: ${selected.firstName} ${selected.lastName} | CPF: ${selected.cpf}` : ''}
                {selected.name ? `Serviço: ${selected.name} | Valor: R$${selected.price}` : ''}
            </p>
            <div className={style.containerButtons}>
                <button className={style.deleteButton} onClick={onDelete}>
                    Deletar registro
                </button>
                <button className={style.cancelButton} onClick={handleCancelClick}>
                    Cancelar
                </button>
            </div>
        </div>
    )
}

DeleteConfirmation.propTypes = {
    selected: PropTypes.object,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};