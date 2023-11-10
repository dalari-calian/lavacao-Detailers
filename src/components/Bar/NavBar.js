import styles from "./NavBar.module.css"
import LogoDetailer from "../../assets/icon/detailer-logo-1-removebg-preview.png"

export function NavBar() {
    return (
        <div className={ styles.containerNav }>
            <img 
              src={ LogoDetailer }
              alt="Logo Detailer"
            />
        </div>
    )
}