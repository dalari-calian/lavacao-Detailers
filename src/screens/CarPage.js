import styles from "./ClientPage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { BtAdd } from "../components/Buttons/BtAdd";
import { useNavigate } from "react-router-dom";
import { CarGrid } from "../components/DataGrid/CarGrid";

export function CarPage() {
  
  const navigate = useNavigate();

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerNav}>
        <NavBar></NavBar>
      </div>
      <div className={styles.containerContent}>
        <div className={styles.containerSide}>
          <SideBar></SideBar>
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.buttonContainer}>
            <BtAdd
              labelBtAdd="Adicionar Carro"
              onClick={() => navigate("/createcar")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
