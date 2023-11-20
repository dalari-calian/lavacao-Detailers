import styles from "./CreateCarPage.module.css"
import { FormInput } from "../../components/InputText/FormInput";
import { BtCreate } from "../../components/Buttons/BtCreate";
import { SuccessMessage } from "../../components/Popup/SuccessMessage";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { SwitchIOS } from "../../components/Check/SwitchIOS";

export function CreateCarPage() {
    const [modelName, setModelName] = useState("");
    const [carBrand, setCarBrand] = useState("");
    const [licensePlate, setLicensePlate] = useState("");
    const [carColor, setCarColor] = useState("");
    const [carOwner, setCarOwner] = useState("");

    const [modelNameError, setModelNameError] = useState(false);
    const [carBrandError, setCarBrandError] = useState(false);
    const [licensePlateError, setLicensePlateError] = useState(false);
    const [carColorError, setCarColorError] = useState(false);
    const [carOwnerError, setCarOwnerError] = useState(false);

    const [successMessage, setSuccessMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [isMercosul, setIsMercosul] = useState(false);

    const navigate = useNavigate();

    const handleCreateCarClick = async (e) => {
        e.preventDefault();

        if (success === true) return;

        if (!modelName || !carBrand || !licensePlate || !carColor || !carOwner) {
            setModelNameError(!modelName);
            setCarBrandError(!carBrand);
            setLicensePlateError(!licensePlate);
            setCarColorError(!carColor);
            setCarOwnerError(!carOwner);
            return;
        }

        try {
            const response = await axios.post("http://localhost:3333/client", {
                modelName,
                carBrand,
                licensePlate,
                carColor,
                carOwner,
            });
            
            if (response.status === 201) {

                setModelNameError(false);
                setCarBrandError(false);
                setLicensePlateError(false);
                setCarBrandError(false);
                setCarOwnerError(false);

                setSuccessMessage("Carro adicionado com sucesso!");
                setSuccess(true)

                setTimeout(() => {
                    setSuccessMessage(null);
                    setSuccess(false)
                    navigate('/carpage');
                }, 3000);
                
            } else {
                setSuccessMessage(null);
                setSuccess(false)
            }
        } catch (error) {
            setSuccessMessage(null);
            setSuccess(false)
        }
    }

    const handleInputChange = (value, setValue, setError) => {
        setValue(value);

        setError(false);
    }

    const handleSwitchChange = (event) => {
        setIsMercosul(event.target.checked);
        if (event.target.checked) {
            console.log("Ativado")
        } else {
            console.log("Desativado")
        }
    };
    
    useEffect(() => {
        return () => {
            setSuccessMessage(null);
            setSuccess(false)
        };
    }, []);

    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerInput }>
                    <FormInput 
                        id="idModel"
                        detail="Modelo"
                        maxLength={15}
                        placeholder="Digite o Modelo do Carro"
                        value={modelName}
                        onChange={(e) => handleInputChange(e.target.value, setModelName, setModelNameError)}
                        showError={modelNameError}
                        disable={success}
                    />
                    <FormInput 
                        id="idCarBrand"
                        detail="Marca"
                        maxLength={15}
                        placeholder="Digite a Marca do Carro"
                        value={carBrand}
                        onChange={(e) => handleInputChange(e.target.value, setCarBrand, setCarBrandError)}
                        showError={carBrandError}
                        disable={success}
                    />
                    <div className={styles.containerLicensePlate}>
                        <div className={styles.licensePlateInput}>
                            <FormInput
                                id="idLicensePlate"
                                detail="Placa"
                                placeholder="Digite a Placa do Carro"
                                maxLength={14}
                                value={licensePlate}
                                onChange={(e) => handleInputChange(e.target.value, setLicensePlate, setLicensePlateError)}
                                showError={licensePlateError}
                                disable={success}
                            />
                        </div>
                        <div className={styles.switchContainer}>
                            <p>Mercosul</p>
                            <SwitchIOS
                                checked={isMercosul}
                                onChange={handleSwitchChange}
                            />
                        </div>
                    </div>
                    <FormInput 
                        id="idCarColor"
                        detail="Cor"
                        placeholder="Digite a Cor do Carro"
                        maxLength={25}
                        value={carColor}
                        onChange={(e) => handleInputChange(e.target.value, setCarColor, setCarColorError)}
                        showError={carColorError}
                        disable={success}
                    />
                    <FormInput 
                        id="idCarOwner"
                        detail="Proprietário"
                        placeholder="Digite o Proprietário do Carro"
                        maxLength={13}
                        value={carOwner}
                        onChange={(e) => handleInputChange(e.target.value, setCarOwner, setCarOwnerError)}
                        showError={carOwnerError}
                        disable={success}
                    />
                    <BtCreate
                        label="Criar"
                        onClick={(e) => handleCreateCarClick(e)}
                        disable={success}
                    />
                </div>
            </form>
            {success && (
                <SuccessMessage 
                    message={successMessage}
                />
            )}
        </div>
    );
}