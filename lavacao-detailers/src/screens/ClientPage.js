import styles from "./ClientPage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { BtAddClient } from "../components/Buttons/BtAddClient";
import { useNavigate } from "react-router-dom";

export function ClientPage() {
  
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
            <BtAddClient
              onClick={() => navigate("/createclient")}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
