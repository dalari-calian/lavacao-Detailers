import { DropDownSelect } from "../DropDown/DropDownSelect"
import styles from "./InputOrderTab1.module.css"
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function InputOrderTab1({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange, carOwnersOptions, idCarOwner }) {
    
    const renderInput = () => {
        if (id === "idCar") {
            return (
                <DropDownSelect/>
            );
        }
    }
    
    return (
        <div className={styles.inputContainer}>
            <p>{detail}</p>
            {renderInput()}
            {showError && <AlertIcon className={styles.alertIcon} />}
        </div>
    );
}