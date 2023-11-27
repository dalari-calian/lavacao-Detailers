import styles from "./CreateServicePage.module.css"
import { FormInput } from "../../components/InputText/FormInput";
import { BtCreate } from "../../components/Buttons/BtCreate";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { SuccessMessage } from "../../components/Popup/SuccessMessage";
import { ErrorMessage } from "../../components/Popup/ErrorMessage";

export function CreateServicePage() {
    const [name, setName] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");

    const [nameError, setNameError] = useState(false);
    const [timeError, setTimeError] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const navigate = useNavigate();

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

    const handleCreateCarClick = async (e) => {
        e.preventDefault();

        if (success === true) return;

        if (!name || !time || !price) {
            setNameError(!name);
            setTimeError(!time);
            setPriceError(!price);
        }

        const numericTime = parseFloat(time);

        if (numericTime === 0) {
            setTimeError(true);
            return
        }

        if (nameError || timeError || priceError) return;

        try {
            const response = await axios.post("http://localhost:3333/service", {
                name,
                time,
                price,
            });

            if (response.status === 201) {
                setNameError(false);
                setTimeError(false);
                setPriceError(false);

                setError(false);
                setErrorMessage("");
                setSuccessMessage("Serviço adicionado com sucesso!");
                setSuccess(true);

                setTimeout(() => {
                    setSuccessMessage(null);
                    setSuccess(false);
                    navigate('/toolspage');
                }, 3000);

            } else {
                setSuccessMessage(null);
                setSuccess(false);
            }
        } catch (error) {
            if (error.response.status === 409) {
                setNameError(true);
            }
            
            setError(true);
            setErrorMessage(error.response.data.message);
            setSuccessMessage(null);
            setSuccess(false);
        }

    }

    const handleEnterKeyLastInput = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleCreateServiceClick(e);
        }
    }

    const handleCreateServiceClick = async (e) => {
        e.preventDefault();
    }

    const handleNumericFormatChange = (props, setValue, setError) => {
        console.log(props.value);
        setValue(props.value);

        setError(false);
    };

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
                        disable={success}
                        onKeyDown={(e) => handleEnterKey(e, "idTime")}
                    />
                    <FormInput 
                        id="idTime"
                        detail="Tempo Gasto"
                        maxLength={6}
                        placeholder="Digite a Média de Tempo Gasto"
                        value={time}
                        onChange={(e) => handleInputChange(e.target.value, setTime, setTimeError)}
                        showError={timeError}
                        disable={success}
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
                        disable={success}
                        onKeyDown={(e) => handleEnterKeyLastInput(e)}
                        onValueChange={(e) => handleNumericFormatChange(e, setPrice, setPriceError)}
                    />
                    <BtCreate
                        id="idCreateButton"
                        label="Criar"
                        onClick={(e) => handleCreateCarClick(e)}
                    />
                </div>
            </form>
            {success && (
                <SuccessMessage 
                    message={successMessage}
                />
            )}
            {error && (
                <ErrorMessage
                    message={errorMessage}
                    onClick={(e) => setError(false)}
                />
            )}
        </div>
    );
}