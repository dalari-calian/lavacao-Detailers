import styles from "./CreateClientPage.module.css"
import { ClientInput } from "../components/InputText/ClientInput";
import { BtCreate } from "../components/Buttons/BtCreate";

export function CreateClientPage() {
    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerInput}>
                    <ClientInput 
                        id="idName"
                        detail="Nome"
                        maxLength={15}
                        placeholder="Cliente Nome"
                    />
                    <ClientInput 
                        id="idLastName"
                        detail="Sobrenome"
                        maxLength={15}
                        placeholder="Cliente Sobrenome"
                    />
                    <ClientInput 
                        id="cpf"
                        detail="Cpf"
                        placeholder="000.000.000-01"
                        maxLength={14}
                    />
                    <ClientInput 
                        id="idEmail"
                        detail="Email"
                        placeholder="cliente@gmail.com"
                        maxLength={25}
                    />
                    <ClientInput 
                        id="idCelular"
                        detail="Celular"
                        placeholder="47 91111 2222"
                        maxLength={13}
                    />
                    <BtCreate
                        label="Criar"
                    />
                </div>
            </form>
        </div>
    );
}