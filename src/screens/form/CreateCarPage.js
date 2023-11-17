import styles from "./CreateCarPage.module.css"
import { FormInput } from "../../components/InputText/FormInput";
import { BtCreate } from "../../components/Buttons/BtCreate";
import { SuccessMessage } from "../../components/Popup/SuccessMessage";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import { styled } from '@mui/material/styles';
import Switch, { SwitchProps } from '@mui/material/Switch';

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

    const handleMercosulSwitchChange = (event) => {
        setIsMercosul(event.target.checked);
    }

    useEffect(() => {
        return () => {
            setSuccessMessage(null);
            setSuccess(false)
        };
    }, []);


    const IOSSwitch = styled((props: SwitchProps) => (
        <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
    ))(({ theme }) => ({
        width: 42,
        height: 26,
        padding: 0,
        '& .MuiSwitch-switchBase': {
            padding: 0,
            margin: 2,
            transitionDuration: '300ms',
            '&.Mui-checked': {
            transform: 'translateX(16px)',
            color: '#fff',
            '& + .MuiSwitch-track': {
                backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#ffb623',
                opacity: 1,
                border: 0,
            },
            '&.Mui-disabled + .MuiSwitch-track': {
                opacity: 0.5,
            },
            },
            '&.Mui-focusVisible .MuiSwitch-thumb': {
            color: '#33cf4d',
            border: '6px solid #fff',
            },
            '&.Mui-disabled .MuiSwitch-thumb': {
            color:
                theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[600],
            },
            '&.Mui-disabled + .MuiSwitch-track': {
            opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
            },
        },
        '& .MuiSwitch-thumb': {
            boxSizing: 'border-box',
            width: 22,
            height: 22,
        },
        '& .MuiSwitch-track': {
            borderRadius: 26 / 2,
            backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
            opacity: 1,
            transition: theme.transitions.create(['background-color'], {
            duration: 500,
            }),
        },
    }));


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
                            <FormControlLabel
                                control={<IOSSwitch sx={{ m: 1 }}
                                defaultChecked={false} />}
                                onChange={handleMercosulSwitchChange}
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