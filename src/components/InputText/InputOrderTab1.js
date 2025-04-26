import { DropDownSelect } from "../DropDown/DropDownSelect"
import styles from "./InputOrderTab1.module.css"
import { ReactComponent as AlertIcon } from "../../assets/icon/alertIcon.svg";

export function InputOrderTab1({ id, detail, placeholder, maxLength, value, onChange, showError, disable, plateFormat, onKeyDown, onValueChange, options, idCarOwner }) {
    
    if(id === 'carOrder' || id === 'colorOrder' || id === 'licensePlateOrder') {
        return (
            <div className={styles.inputContainer}>
                <p>{detail}</p>
                <DropDownSelect
                    id={id}
                    options={options || []}
                    value={value}
                    onChange={onChange}
                />
                {showError && <AlertIcon className={styles.alertIcon} />}
            </div>
        );
    } else {
        return (
            <div className={styles.inputContainer}>
                <p>{detail}</p>
                <div className={styles.containerValue}>
                    <p>{value}</p>
                </div>
            </div>
        );
    }
}