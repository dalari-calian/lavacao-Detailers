import styles from './BtPageNavigate.module.css'
import { ReactComponent as ArrowLeft } from "../../assets/icon/arrow-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/icon/arrow-right.svg";

export function BtPageNavigate({ onClick, label, stepType, disable }) {
    switch (stepType) {
        case 0:
            return (
                <button 
                    className={`${styles.btBack} ${disable ? styles.disabled : ''}`}
                    onClick={onClick}
                    type='button'
                >
                    <ArrowLeft/>
                    <p>{label}</p>
                </button>
            )
        case 1:
            return (
                <button 
                    className={`${styles.btNext} ${disable ? styles.disabled : ''}`}
                    onClick={onClick}
                    type='button'
                >
                    <p>{label}</p>
                    <ArrowRight/>
                </button>
            )
        default:
          return null;
    }
}