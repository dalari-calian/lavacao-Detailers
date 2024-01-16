import style from './DeleteConfirmation.module.css'
import { ReactComponent as AlertDeleteIcon } from "../../assets/icon/alertDeleteIcon.svg";
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export function DeleteConfirmation({ selected, onClose, onDelete }) {
    const [isVisible, setIsVisible] = useState(false);

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
                Você tem certeza?
            </p>
            <p className={style.alertMessage}>
                Esta ação não pode ser desfeita. Todos os
                valores associados com este veículos serão
                perdidos.
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