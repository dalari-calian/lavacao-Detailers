import { useState, useEffect } from 'react';
import styles from "./ClientPage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { BtAdd } from "../components/Buttons/BtAdd";
import { useNavigate } from "react-router-dom";
import { CarGrid } from "../components/DataGrid/CarGrid";
import axios from 'axios';

export function CarPage() {
  const [carData, setCarData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/car");
        if (response.status === 200) {
          setCarData(response.data.result);
        }
      } catch (error) {
        console.error('Erro ao buscar dados do backend:', error);
      }
    };

    fetchData();
  }, []);

  const handleCarDataChange = (updatedCarData) => {
    setCarData(updatedCarData);
  };

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
          <CarGrid 
            items={carData}
            onItemsChange={handleCarDataChange}
          />
        </div>
      </div>
    </div>
  );
}
