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

    const brands = [
        "Aston Martin",
        "Audi",
        "Bentley",
        "BMW",
        "BMW Motorrad",
        "BYD",
        "Caoa Chery",
        "Chevrolet",
        "Chrysler",
        "Citroën",
        "Citroen",
        "Dodge",
        "Ferrari",
        "Fiat",
        "Ford",
        "Great Wall",
        "GWM",
        "Honda",
        "Husqvarna",
        "Hyundai",
        "JAC",
        "Jaguar",
        "Jeep",
        "Kia",
        "Lamborghini",
        "Land Rover",
        "Lexus",
        "Lifan",
        "Maserati",
        "McLaren",
        "Mercedes-Benz",
        "Mercedes Benz",
        "Mini",
        "Mitsubishi",
        "Nissan",
        "Peugeot",
        "Porsche",
        "Ram",
        "Renault",
        "Rolls Royce",
        "Royal Enfield",
        "Seres",
        "Smart",
        "Subaru",
        "Suzuki",
        "Toyota",
        "Triumph",
        "Troller",
        "Volkswagen",
        "Volvo",
        "Yamaha"
    ]

    const handleCreateCarClick = async (e) => {
        e.preventDefault();

        if (success === true) return;

        if(!brands.includes(carBrand)) {
            setCarBrandError(true);
        }

        if (!modelName || !carBrand || !licensePlate || !carColor || !carOwner) {
            setModelNameError(!modelName);
            setCarBrandError(!carBrand);
            setLicensePlateError(!licensePlate);
            setCarColorError(!carColor);
            setCarOwnerError(!carOwner);
        }
        
        if (modelNameError || carBrandError || licensePlateError || carColorError || carOwnerError) return

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

    const handleInputChange = (id, value, setValue, setError) => {
        value = id === "idLicensePlate" ? value.toUpperCase() : value;
        
        setValue(value);

        setError(false);
    }

    const handleSwitchChange = (event) => {
        setIsMercosul(event.target.checked);
        setLicensePlate("")
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
                        onChange={(e) => handleInputChange("idModel", e.target.value, setModelName, setModelNameError)}
                        showError={modelNameError}
                        disable={success}
                    />
                    <FormInput 
                        id="idCarBrand"
                        detail="Marca"
                        maxLength={15}
                        placeholder="Digite a Marca do Carro"
                        value={carBrand}
                        onChange={(e) => handleInputChange("idCarBrand", e.target.value, setCarBrand, setCarBrandError)}
                        showError={carBrandError}
                        disable={success}
                    />                
                    <div className={styles.containerLicensePlate}>
                        <FormInput
                            className={styles.licensePlateInput}
                            id="idLicensePlate"
                            detail="Placa"
                            placeholder="Digite a Placa do Carro"
                            maxLength={7}
                            value={licensePlate}
                            onChange={(e) => handleInputChange("idLicensePlate", e.target.value, setLicensePlate, setLicensePlateError)}
                            showError={licensePlateError}
                            disable={success}
                            plateFormat={isMercosul}
                        />
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
                        onChange={(e) => handleInputChange("idCarColor", e.target.value, setCarColor, setCarColorError)}
                        showError={carColorError}
                        disable={success}
                    />
                    <FormInput 
                        id="idCarOwner"
                        detail="Proprietário"
                        placeholder="Digite o Proprietário do Carro"
                        maxLength={13}
                        value={carOwner}
                        onChange={(e) => handleInputChange("idCarOwner", e.target.value, setCarOwner, setCarOwnerError)}
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