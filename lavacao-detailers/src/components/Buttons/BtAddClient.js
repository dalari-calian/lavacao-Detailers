import styles from "./BtAddClient.module.css";
import { ReactComponent as PlusIcon } from "../../assets/icon/plusIcon.svg";

export function BtAddClient({ onClick }) {
    return (
        <div 
            className={ styles.btAddClient}
            onClick={onClick}
        >
            <PlusIcon/><p>Adicionar Cliente</p>
        </div>
    )
}