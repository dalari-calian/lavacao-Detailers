import styles from "./CreateClientPage.module.css"
import { ClientName } from "../components/InputText/ClientName";

export function CreateClientPage() {
    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerName}>
                    <ClientName 
                        placeholder="Nome"
                        id="idName"
                    />
                    <ClientName 
                        placeholder="Sobrenome"
                        id="idLastName"
                    />
                </div>
            </form>
        </div>
    );
}