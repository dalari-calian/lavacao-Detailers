import React, { useState, useEffect } from 'react';
import styles from "./ClientPage.module.css";
import { NavBar } from "../components/Bar/NavBar";
import { SideBar } from "../components/Bar/SideBar";
import { BtAdd } from "../components/Buttons/BtAdd";
import { useNavigate } from "react-router-dom";
import { ClientGrid } from "../components/DataGrid/ClientGrid";
import axios from 'axios';

export function ClientPage() {
  const navigate = useNavigate();
  const [clientData, setClientData] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os dados do backend
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3333/client");
        // Se a resposta estiver correta, atualiza o estado com os dados
        if (response.status === 200) {
          setClientData(response.data.result);
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
          <div className={styles.buttonContainer}>
            <BtAdd
              labelBtAdd="Adicionar Cliente"
              onClick={() => navigate("/createclient")}
            />
            <ClientGrid items={clientData} />
          </div>
        </div>
      </div>
    </div>
  );
}
