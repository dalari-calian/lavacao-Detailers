import styles from "./CreateClientPage.module.css"
import { FormInput } from "../../components/InputText/FormInput";
import { BtCreate } from "../../components/Buttons/BtCreate";
import { SuccessMessage } from "../../components/Popup/SuccessMessage";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { ErrorMessage } from "../../components/Popup/ErrorMessage";

export function CreateClientPage() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const [firstNameError, setFirstNameError] = useState(false);
    const [lastNameError, setLastNameError] = useState(false);
    const [cpfError, setCpfError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [phoneError, setPhoneError] = useState(false);

    const [successMessage, setSuccessMessage] = useState(""); // Novo estado
    const [success, setSuccess] = useState(false); // Novo estado

    const [errorMessage, setErrorMessage] = useState("");
    const [error, setError] = useState(false);

    const [isEditClient, setIsEditClient] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();

    const handleCreateClientClick = async (e) => {
        e.preventDefault();

        if (success === true) return;

        if (!firstName || !lastName || !cpf || !email || !phone) {
            setFirstNameError(!firstName);
            setLastNameError(!lastName);
            setCpfError(!cpf);
            setEmailError(!email);
            setPhoneError(!phone);
            return;
        }

        if(isEditClient) {
            try {
                const response = await axios.put(`http://localhost:3333/client/${id}`, {
                    firstName,
                    lastName,
                    cpf,
                    email,
                    phone,
                });
    
                if (response.status === 200) {
                    setFirstNameError(false);
                    setLastNameError(false);
                    setCpfError(false);
                    setEmailError(false);
                    setEmailError(false);
    
                    setError(false);
                    setErrorMessage("");
                    setSuccessMessage("Cliente atualizado com sucesso!");
                    setSuccess(true);
    
                    setTimeout(() => {
                        setSuccessMessage(null);
                        setSuccess(false);
                        navigate('/clientpage');
                    }, 3000);
                } else {
                    setSuccessMessage(null);
                    setSuccess(false);
                }
            } catch (error) {

                setError(true);
                setErrorMessage(error.response.data.message);
                setSuccessMessage(null);
                setSuccess(false);
            }

            return 
        }

        try {
            const response = await axios.post("http://localhost:3333/client", {
                firstName,
                lastName,
                cpf,
                email,
                phone,
            });
            
            if (response.status === 201) {

                setFirstNameError(false);
                setLastNameError(false);
                setCpfError(false);
                setEmailError(false);
                setPhoneError(false);

                setSuccessMessage("Cliente criado com sucesso!");
                setSuccess(true)

                setTimeout(() => {
                    setSuccessMessage(null);
                    setSuccess(false)
                    navigate('/clientpage');
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

    useEffect(() => {
        if (location.state && location.state.clientData) {
            const { id, firstName, lastName, cpf, email, phone } = location.state.clientData;
            setId(id);
            setFirstName(firstName);
            setLastName(lastName);
            setCpf(cpf);
            setEmail(email);
            setPhone(phone);

            setIsEditClient(true);
        }

        return () => {
            setSuccessMessage(null);
            setSuccess(false)
        };
    }, [location.state]);

    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerInput}>
                    <FormInput 
                        id="idName"
                        detail="Nome"
                        maxLength={15}
                        placeholder="Digite o Nome"
                        value={firstName}
                        onChange={(e) => handleInputChange(e.target.value, setFirstName, setFirstNameError)}
                        showError={firstNameError}
                        disable={success}
                    />
                    <FormInput 
                        id="idLastName"
                        detail="Sobrenome"
                        maxLength={15}
                        placeholder="Digite o Sobrenome"
                        value={lastName}
                        onChange={(e) => handleInputChange(e.target.value, setLastName, setLastNameError)}
                        showError={lastNameError}
                        disable={success}
                    />
                    <FormInput 
                        id="idCpf"
                        detail="Cpf"
                        placeholder="Digite o CPF"
                        maxLength={14}
                        value={cpf}
                        onChange={(e) => handleInputChange(e.target.value, setCpf, setCpfError)}
                        showError={cpfError}
                        disable={success}
                    />
                    <FormInput 
                        id="idEmail"
                        detail="Email"
                        placeholder="Digite o email"
                        maxLength={25}
                        value={email}
                        onChange={(e) => handleInputChange(e.target.value, setEmail, setEmailError)}
                        showError={emailError}
                        disable={success}
                    />
                    <FormInput 
                        id="idPhone"
                        detail="Celular"
                        placeholder="Digite o número de celular"
                        maxLength={13}
                        value={phone}
                        onChange={(e) => handleInputChange(e.target.value, setPhone, setPhoneError)}
                        showError={phoneError}
                        disable={success}
                    />
                    <BtCreate
                        label="Criar"
                        onClick={(e) => handleCreateClientClick(e)}
                        disable={success}
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