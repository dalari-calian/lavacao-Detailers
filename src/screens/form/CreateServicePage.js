import styles from "./CreateServicePage.module.css"
import { FormInput } from "../../components/InputText/FormInput";
import { BtCreate } from "../../components/Buttons/BtCreate";
import { useState } from "react";

export function CreateServicePage() {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const [nameError, setNameError] = useState(false);
    const [timeError, setTimedError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const handleInputChange = (value, setValue, setError) => {
        setValue(value);

        setError(false);
    }

    const handleEnterKey = (e, nextInputId) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            const nextInput = document.getElementById(nextInputId);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };

    const handleEnterKeyLastInput = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCreateServiceClick(e);
        }
    }

    const handleCreateServiceClick = async (e) => {
        e.preventDefault();
    }

    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerInput }>
                    <FormInput 
                        id="idService"
                        detail="Serviço"
                        maxLength={15}
                        placeholder="Digite o Nome do Serviço"
                        value={name}
                        onChange={(e) => handleInputChange(e.target.value, setName, setNameError)}
                        showError={nameError}
                        onKeyDown={(e) => handleEnterKey(e, "idTime")}
                    />
                    <FormInput 
                        id="idTime"
                        detail="Tempo Gasto"
                        maxLength={15}
                        placeholder="Digite a Média de Tempo Gasto"
                        value={time}
                        onChange={(e) => handleInputChange(e.target.value, setTime, setTimedError)}
                        showError={timeError}
                        onKeyDown={(e) => handleEnterKey(e, "idPrice")}
                    />
                    <FormInput 
                        id="idPrice"
                        detail="Valor"
                        maxLength={15}
                        placeholder="Digite o Valor Cobrado"
                        value={price}
                        onChange={(e) => handleInputChange(e.target.value, setPrice, setPriceError)}
                        showError={priceError}
                        onKeyDown={(e) => handleEnterKeyLastInput(e)}
                    />
                    <BtCreate
                        id="idCreateButton"
                        label="Criar"
                    />
                </div>
            </form>
        </div>
    );
}