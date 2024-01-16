import styles from "./HomePage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { useNavigate } from "react-router-dom";
import { BtAdd } from "../components/Buttons/BtAdd";

export function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={ styles.containerPage }>
      <div className={ styles.containerNav }>
        <NavBar></NavBar>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerSide}>
          <SideBar></SideBar>
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.buttonContainer}>
            <BtAdd
              labelBtAdd="Adicionar Ordem de Serviço"
              onClick={() => navigate("/createorder")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
