import { useState, useEffect } from 'react';
import styles from "./ToolsPage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { BtAdd } from "../components/Buttons/BtAdd";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { ServiceGrid } from '../components/DataGrid/ServiceGrid';

export function ToolsPage() {
  
  const [serviceData, setServiceData] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/service");
        if (response.status === 200) {
          setServiceData(response.data.result);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    fetchData();
  }, []);

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
          <div>
            <div className={styles.buttonContainer}>
              <BtAdd
                labelBtAdd="Adicionar Serviço"
                onClick={() => navigate("/createservice")}
              />
            </div>
            <ServiceGrid items={serviceData}/>
          </div>
          <ServiceGrid items={serviceData}/>
          <div className={styles.containerGrids}>
          </div>
        </div>
      </div>
    </div>
  );
}
