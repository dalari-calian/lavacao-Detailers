import styles from "./BtAdd.module.css";
import { ReactComponent as PlusIcon } from "../../assets/icon/plusIcon.svg";

export function BtAdd({ onClick, labelBtAdd }) {
    return (
        <div 
            className={ styles.btAdd}
            onClick={onClick}
        >
            <PlusIcon/><p>{labelBtAdd}</p>
        </div>
    )
}