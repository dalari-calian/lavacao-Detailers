import styles from "./CreateClientPage.module.css"
import { ClientName } from "../components/InputText/ClientName";

export function CreateClientPage() {
    return (
        <div className={ styles.containerPage }>
            <form className={ styles.containerForm }>
                <div className={ styles.containerName}>
                    <ClientName 
                        id="idName"
                        detail="Nome"
                    />
                    <ClientName 
                        id="idLastName"
                        detail="Sobrenome"
                    />

                </div>
            </form>
        </div>
    );
}